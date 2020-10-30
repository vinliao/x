import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'public/index.js',
  output: {
    file: 'public/rollup.js',
    format: 'iife',
    globals: {
      'lodash': '_'
    },
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};