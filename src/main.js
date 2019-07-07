import Vue from 'vue'
import App from './App.vue'

import router from './router' 

Vue.config.productionTip = false

new Vue({
  el: '#app',    //这里绑定的是index.html中的id为app的div元素
  router,
  render: h => h(App)
})