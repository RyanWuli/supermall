import Vue from 'vue'
import Vuex from 'vuex'
// import {
//   INCREMENT
// } from './mutations-types.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/moduleA.js'

Vue.use(Vuex)

const state = { // 状态
    counter: 1000,
    students: [{
        id: '000001',
        name: '王祖蓝',
        age: 32
      },
      {
        id: '000002',
        name: '郑凯',
        age: 35
      },
      {
        id: '000003',
        name: '容祖儿',
        age: 26
      },
      {
        id: '000004',
        name: '王宝强',
        age: 24
      },
      {
        id: '000005',
        name: '鹿晗',
        age: 18
      }
    ],
    info: {
      name: '黄渤',
      age: 42,
      height: 1.62
    }
  }

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
