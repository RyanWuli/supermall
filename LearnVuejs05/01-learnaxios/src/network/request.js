import axios from 'axios'

// export function request(config, success, fail) {
//   // // 创建 axios 实例
//   // const instance = axios.create({
//   //   baseURL: 'http://123.207.32.32:8000',
//   //   timeout: 5000
//   // })

//   // // 发送网络请求
//   // instance(config).then(res => {
//   //   success(res)
//   // }).catch(err => {
//   //   fail(err)
//   // })

//   // 更简单的方法

// }


// 更简单的方法
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios 的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  },err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}
