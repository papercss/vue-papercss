/**
 * Install the plugin if `window.Vue` is available.
 *
 * @param {object} VuePlugin Vue-plugin object.
 */
export function vueUse (VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin)
  }
}

/**
 * Register a component as a plugin being loaded, return true if the component
 * is already registered.
 *
 * @param {object} Vue Vue constructor
 * @param {string} name name of the component
 * @param {object} definition component definition
 */
export function registerComponent(Vue, name, definition) {
  Vue._papercss_vue_components = Vue._papercss_vue_components || {};

  const loaded = Vue._papercss_vue_components[name];

  if (!loaded && name && definition) {
    Vue._papercss_vue_components[name] = true;
    Vue.component(name, definition);
  }

  return loaded;
}
