import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home'
import Download from './page/Download'
import Card from './page/component/Card'
import Button from './page/component/Button'
import Badge from './page/component/Badge'

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
    },
    {
      path: '/component/card',
      name: 'card',
      component: Card
    },
    {
      path: '/component/button',
      name: 'button',
      component: Button
    },
    {
      path: '/component/badge',
      name: 'badge',
      component: Badge
    }
  ]
})
