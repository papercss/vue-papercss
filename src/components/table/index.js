import { registerComponent, vueUse } from '../../utils';
import table from './table.vue';

const TablePlugin = {
  install(Vue) {
    registerComponent(Vue, 'PTable', table);
  }
};

vueUse(TablePlugin);

export default TablePlugin;
