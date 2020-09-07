
export default { // 类似于计算属性
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

  }