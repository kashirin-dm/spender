import Vue from 'vue'
import Router from 'vue-router'
import Spender from './views/Spender.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Spender',
      component: Spender
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('./views/Accounts.vue')
    }
  ]
})
