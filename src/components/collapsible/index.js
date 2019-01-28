import { registerComponent, vueUse } from '../../utils';
import collapsible from './collapsible.vue';

const CollabsiblePlugin = {
  install(Vue) {
    registerComponent(Vue, 'PCollapsible', collapsible);
  }
};

vueUse(CollabsiblePlugin);

export default CollabsiblePlugin;
