import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte'

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    svelte()
  ]
};