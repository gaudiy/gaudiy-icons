const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

// cop typings to dist
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

// copy package.json to dist for publishing from dist
function packageCopy({ to }) {
  fse.copy(path.resolve(packagePath, 'package.json'), path.resolve(to, 'package.json'));
}

async function run() {
  try {
    // TypeScript
    await typescriptCopy({ from: srcPath, to: buildPath });

    packageCopy({ to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
