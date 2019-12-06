import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { routes } from '@/routes'

import '../node_modules/minimalist-grid/css/minimal-grid.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
