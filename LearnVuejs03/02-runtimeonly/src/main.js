import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) // h 其实是 createElement([标签名'h2'], [标签属性], [内容]) ------- createElement('h2', {clsaa: box}, ['hello vue'])
})
