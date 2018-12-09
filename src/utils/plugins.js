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
