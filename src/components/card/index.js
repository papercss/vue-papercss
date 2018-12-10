import { registerComponent, vueUse } from '../../utils';
import card from './card.vue';

const CardPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PCard', card);
  }
};

vueUse(CardPlugin);

export default CardPlugin;
