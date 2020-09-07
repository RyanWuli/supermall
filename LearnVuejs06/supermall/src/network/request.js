import axios from 'axios'

// 更简单的方法
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios 的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}

// 解决跨域的转发请求
export function request_mgj(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data.result
  }, err => {
    console.log(err);
  })

  return instance(config)
}

export function request_detail(config) {
  const instance = axios.create({
    baseURL: '/local',
    timeout: 5000
  })
  instance.interceptors.response.use(res => {
    return res.data.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}