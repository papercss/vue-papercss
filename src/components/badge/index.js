import { registerComponent, vueUse } from '../../utils';
import badge from './badge.vue';

const BadgePlugin = {
  install(Vue) {
    registerComponent(Vue, 'PBadge', badge);
  }
};

vueUse(BadgePlugin);

export default BadgePlugin;
