import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// 另一种写法
// axios.get({
//   url: ''
// })

// get 带参数
// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// 另一钟写法 get 带参数
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   method: 'get',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 并发 axios
// https://wxtwoandthree.chuniaoedu.com:8443/cnjy-user-web/content/cateId.do?categoryId=2&area=重庆市
// axios.all([axios({
//   url: 'https://wxtwoandthree.chuniaoedu.com:8443/cnjy-user-web/content/cateId.do',
//   method: 'get',
//   params: {
//     categoryId: 2,
//     area: '重庆市'
//   }
// }), axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// })]).then(res => {
//   console.log(res);
// })

// 使用全局配置,所有的axios 请求
// axios.defaults.timeout = 7000
// axios.defaults.baseURL = 'https://47.107.139.152:8080'

// 把数组结果分离
// axios.all([axios({
//   url: 'https://wxtwoandthree.chuniaoedu.com:8443/cnjy-user-web/content/cateId.do',
//   method: 'get',
//   params: {
//     categoryId: 2,
//     area: '重庆市'
//   }
// }), axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// })]).then(axios.spread((res, res2) => {
//   console.log(res);
//   console.log(res2);
// }))


// // 数组的解构
// const arr = ['James', 'Davis', 'Curry', 'Harden', 'Iverson']
// const [name1, name2, name3, name4, name5] = arr

// // 对象的解构
// const info= {name: '迪丽热巴', age: 32, height: 1.68}
// const {name, age, height} = info

// const instence = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instence({
//   url: '/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

import {request} from './network/request.js'
// 普通方法封装使用
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err)
// })

// 更简单的封装方法使用
request({
  url: '/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
