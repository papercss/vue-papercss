import { registerComponent, vueUse } from '../../utils';
import pre from './pre.vue';

const PrePlugin = {
  install(Vue) {
    registerComponent(Vue, 'PPre', pre);
  }
};

vueUse(PrePlugin);

export default PrePlugin;
