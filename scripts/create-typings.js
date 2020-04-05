const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');
const chalk = require('chalk');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

function normalizeFileName(file) {
  return { name: path.parse(file).name, dir: path.parse(file).dir };
}

// create [name].d.ts file for eveeery components
function createIconTyping(file) {
  const { name, dir } = normalizeFileName(file);
  const contents = `export { SvgComponent } from '../typings';`;
  return fse.writeFile(path.resolve(path.join(buildPath, dir), `${name}.d.ts`), contents, 'utf8');
}

// create index.d.ts for each folder
function createIndexTyping(files, savePath) {
  const contents = `
import { SvgComponent } from '../typings';

${files
  .map((file) => {
    const { name } = normalizeFileName(file);
    return `export const ${name}: SvgComponent;`;
  })
  .join('\n')}`;

  return fse.writeFile(path.resolve(savePath, 'index.d.ts'), contents, 'utf8');
}

// create global index.d.ts for each folder
function createGlobalIndexTyping(dirs, savePath) {
  const contents = `
${dirs
  .map((dir) => {
    const { name } = normalizeFileName(dir);
    return `export * from './${name}';`;
  })
  .join('\n')}`;

  return fse.writeFile(path.resolve(savePath, 'index.d.ts'), contents, 'utf8');
}

// Generate TypeScript.
async function run() {
  await fse.ensureDir(buildPath);
  console.log(`\u{1f52c}  Searching for modules inside "${chalk.dim(srcPath)}".`);
  const files = glob.sync('**/*.tsx', { cwd: srcPath, ignore: '**/index.stories.tsx' });

  const dirs = glob.sync('**/', { cwd: srcPath, ignore: ['SvgIcon/', 'typings/', 'utils/'] });
  const dirIndexTypes = dirs.map((dir) =>
    createIndexTyping(
      glob.sync('*.tsx', { cwd: path.join(srcPath, dir), ignore: '**/index.stories.tsx' }),
      path.join(buildPath, dir)
    )
  );

  const typings = files.map((file) => createIconTyping(file));
  await Promise.all([...typings, dirIndexTypes, createGlobalIndexTyping(dirs, buildPath)]);
  console.log(`\u{1F5C4}  Written typings to ${chalk.dim(buildPath)}.`);
}

run();
// const dirs = glob.sync('**/', { cwd: srcPath, ignore: ['SvgIcon/', 'typings/', 'utils/'] });
