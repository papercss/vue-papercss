import { registerComponent, vueUse } from '../../utils';
import col from './col.vue';

const ColPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PCol', col);
  }
};

vueUse(ColPlugin);

export default ColPlugin;
