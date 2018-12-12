import { registerComponent, vueUse } from '../../utils';
import formGroup from './form-group.vue';

const FormGroupPlugin = {
  install(Vue) {
    registerComponent(Vue, 'PFormGroup', formGroup);
  }
};

vueUse(FormGroupPlugin);

export default FormGroupPlugin;
