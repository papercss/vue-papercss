import * as components from './components';
import { vueUse } from './utils';

const VuePaperCSSPlugin = {
  install(Vue) {
    if (Vue._papercss_vue_installed) {
      return;
    }

    Vue._papercss_vue_installed = true;

    /**
     * Register all components into the Vue instance.
     */
    for (const plugin in components) {
      Vue.use(components[plugin]);
    }
  },
};

/**
 * Automatically install the plugin if there is `window.Vue` property.
 */
vueUse(VuePaperCSSPlugin);

export default VuePaperCSSPlugin;
