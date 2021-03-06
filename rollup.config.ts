import typescript from '@rollup/plugin-typescript';
import sourceMaps from 'rollup-plugin-sourcemaps';

const pkg = require('./package.json');
const libraryName = 'validatedChangeset';

export default {
  input: 'dist/es/index.js',
  output: [
    { file: pkg.main, name: libraryName, format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  plugins: [typescript(), sourceMaps()]
};
