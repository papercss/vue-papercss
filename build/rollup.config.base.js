import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

// @ts-ignore
import pkg from '../package.json';

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),

    cjs({
      include: 'node_modules/**',
    }),

    vue({
      css: true,
    }),

    babel({
      exclude: 'node_modules/**',
    }),

    replace({
      VERSION: JSON.stringify(pkg.version),
    }),
  ],
  watch: {
    include: 'src/**',
  },
};
