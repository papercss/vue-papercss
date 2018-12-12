import { registerComponent, vueUse } from '../../utils';
import tabs from './tabs.vue';
import tab from './tab.vue';

const TabsPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PTabs', tabs);
  }
};

const TabPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PTab', tab);
  }
};

vueUse(TabsPlugin);
vueUse(TabPlugin);

export { TabsPlugin as PTabs, TabPlugin as PTab };
