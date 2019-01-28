import rollupBase from './rollup.config.base';

const config = Object.assign({}, rollupBase, {
  output: {
    file: 'dist/vue-papercss.esm.js',
    format: 'es',
  },
});

export default config;
