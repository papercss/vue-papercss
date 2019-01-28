import { registerComponent, vueUse } from '../../utils';
import progress from './progress.vue';

const ProgressPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PProgress', progress);
  }
};

vueUse(ProgressPlugin);

export default ProgressPlugin;
