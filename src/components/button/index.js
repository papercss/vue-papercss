import { registerComponent, vueUse } from '../../utils';
import button from './button.vue';

const ButtonPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PButton', button);
  }
};

vueUse(ButtonPlugin);

export default ButtonPlugin;
