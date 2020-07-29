const path = require('path');
const fse = require('fs-extra');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');

// copy package.json to dist for publishing from dist
function packageCopy({ to }) {
  fse.copy(path.resolve(packagePath, 'package.json'), path.resolve(to, 'package.json'));
  fse.copy(path.resolve(packagePath, '.npmignore'), path.resolve(to, '.npmignore'));
}

async function run() {
  try {
    packageCopy({ to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
