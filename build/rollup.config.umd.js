import rollupBase from './rollup.config.base';

const config = Object.assign({}, rollupBase, {
  output: {
    file: 'dist/vue-papercss.umd.js',
    format: 'umd',
    name: 'VuePaperCSS',
  },
});

export default config;
