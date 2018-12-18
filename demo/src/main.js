import Vue from 'vue';
import VuePaperCSS from '../../src';

import App from './App.vue';
import router from './router';

Vue.use(VuePaperCSS);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
