import { registerComponent, vueUse } from '../../utils';
import alert from './alert.vue';

const AlertPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PAlert', alert);
  }
};

vueUse(AlertPlugin);

export default AlertPlugin;
