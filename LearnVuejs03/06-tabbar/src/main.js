import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 全局样式可以在这里引用，但是为了减少文件杂乱，在 app 中引用
// require('./assets/css/base.css')