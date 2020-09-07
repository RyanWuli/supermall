import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types.js'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'Eson'
  },
  getters: {
    fullName(state) {
      return state.name + ' Chen'
    },
    fullName2(state, getters) {
      return getters.fullName + ' 歌手'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // context 这个上下文指的是模块不是 store
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', '王力宏')
      }, 5000)
    }
  }
}

const store = new Vuex.Store({
  state: { // 状态
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
  },
  mutations: { // 更改状态 最好经过 mutations vue tools 能够监控得到
    [INCREMENT](state) { // ['increment'] 或者是变量都行
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementNum(state, num) {
      console.log(num);
      // state.counter += num // 普通传参方式
      state.counter += num.num // type 方式传参
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = '徐峥'

      // 模拟异步，不能在这里进行异步操作，vuetools 不能监控到
      // setTimeout(() => {
      //   state.info.name = '徐峥'
      // }, 5000)

      // state.info['address'] = '洛杉矶' // 这种不会响应式，对象添加属性
      // Vue.set(state.info, 'address', '洛杉矶') // 响应式添加
      // delete state.info.age // 非响应式删除对象属性
      // Vue.delete(state.info, 'age') // 响应式删除对象属性

    }
  },
  actions: {
    // context 上下文，这里相当于 store
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   }, 5000)
    // }

    // 优雅的异步完成之后回调
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('success')
        }, 5000)
      })
    }
  },
  getters: { // 类似于计算属性
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 22)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age >= age)
      // }

      // 箭头函数
      return age => {
        return state.students.filter(s => s.age >= age)
      }
    }

  },
  modules: {
    a: moduleA
  }
})

export default store
