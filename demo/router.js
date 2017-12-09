import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home'
import Download from './page/Download'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    }
  ]
})
