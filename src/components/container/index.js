import { registerComponent, vueUse } from '../../utils';
import container from './container.vue';

const ContainerPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PContainer', container);
  }
};

vueUse(ContainerPlugin);

export default ContainerPlugin;
