import { terser } from 'rollup-plugin-terser';

import rollupBase from './rollup.config.base';

const config = Object.assign({}, rollupBase, {
  output: {
    exports: 'named',
    file: 'dist/vue-papercss.min.js',
    format: 'iife',
    name: 'VuePaperCSS',
  },
});

config.plugins.push(terser());

export default config;
