
export default {
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