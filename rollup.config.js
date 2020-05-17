// TODO: can be outputted as multiple files
// see output.format: https://rollupjs.org/guide/en/#core-functionality
// import svg from 'rollup-plugin-svg'
// import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

// https://github.com/rollup/plugins/tree/master/packages/typescript

export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.peerDependencies || {}),
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [typescript()]
}
