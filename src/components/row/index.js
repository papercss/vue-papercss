import { registerComponent, vueUse } from '../../utils';
import row from './row.vue';

const RowPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PRow', row);
  }
};

vueUse(RowPlugin);

export default RowPlugin;
