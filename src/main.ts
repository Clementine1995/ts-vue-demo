/** @format */

import Vue from 'vue'
import VueIconFont from 'vue-icon-font-pro'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont'

Vue.use(VueIconFont)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
