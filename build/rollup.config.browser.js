import rollupBase from './rollup.config.base';

const config = Object.assign({}, rollupBase, {
  output: {
    exports: 'named',
		file: 'dist/vue-papercss.min.js',
		format: 'iife',
    name: 'VuePaperCSS',
  },
});

export default config;
