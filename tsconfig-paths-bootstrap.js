const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

const paths = tsConfig.compilerOptions.paths;

Object.keys(tsConfig.compilerOptions.paths).forEach((key) => {
  paths[key] = paths[key].map((v) => v.replace('src/', ''));
});

tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.outDir,
  paths: paths,
});
