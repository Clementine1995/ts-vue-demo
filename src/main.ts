import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons/index'
import './registerServiceWorker'

import './assets/svg/iconfont.js'
import IconSvg from './components/svgIcon2.vue'

// 全局注册icon-svg
Vue.component('icon-svg2', IconSvg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
