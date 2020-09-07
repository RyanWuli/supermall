
export default {
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
  }