const pkg = require('./package.json');
const babel = require('rollup-plugin-babel');

export default {
  entry: 'src/index.js',
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' },
  ],
  plugins: [
    babel({}),
  ],
};
