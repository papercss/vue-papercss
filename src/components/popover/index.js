import { registerComponent, vueUse } from '../../utils';
import popover from './popover.vue';

const PopoverPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PPopover', popover);
  }
};

vueUse(PopoverPlugin);

export default PopoverPlugin;
