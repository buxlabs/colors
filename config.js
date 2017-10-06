import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'build/colors.js',
    format: 'umd'
  },
  name: 'colors',
  plugins: [resolve(), commonjs()]
}
