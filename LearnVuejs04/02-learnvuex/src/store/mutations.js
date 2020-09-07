import {
  INCREMENT
} from './mutations-types.js'
export default { // 更改状态 最好经过 mutations vue tools 能够监控得到
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
  }