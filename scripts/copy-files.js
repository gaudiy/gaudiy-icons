/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Typography from '@material-ui/core/Typography' are tree-shakeable.
 *
 * It also tests that an this import can be used in typescript by checking
 * if an index.d.ts is present at that path.
 *
 * @param {string} rootDir
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.js', { cwd: from }).map(path.dirname);

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        sideEffects: false,
        module: path.join('../esm', directoryPackage, 'index.js'),
        typings: './index.d.ts',
      };
      const packageJsonPath = path.join(to, directoryPackage, 'package.json');

      const [typingsExist] = await Promise.all([
        fse.exists(path.join(to, directoryPackage, 'index.d.ts')),
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]);

      if (!typingsExist) {
        throw new Error(`index.d.ts for ${directoryPackage} is missing`);
      }

      return packageJsonPath;
    })
  );
}

async function typescriptCopy({ from, to }) {
  if (!(await fse.exists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = glob.sync('**/*.d.ts', { cwd: from });
  const cmds = files.map((file) => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  const esms = files.map((file) => fse.copy(path.resolve(from, file), path.resolve(path.join(to, 'esm'), file)));
  return Promise.all([...cmds, ...esms]);
}

async function cssCopy({ from, to }) {
  if (!(await fse.exists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = glob.sync('**/*.css', { cwd: from });
  const cmds = files.map((file) => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  const esms = files.map((file) => fse.copy(path.resolve(from, file), path.resolve(path.join(to, 'esm'), file)));
  return Promise.all([...cmds, ...esms]);
}

async function run() {
  try {
    // TypeScript
    await typescriptCopy({ from: srcPath, to: buildPath });
    // CSS
    await cssCopy({ from: srcPath, to: buildPath });

    await createModulePackages({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();