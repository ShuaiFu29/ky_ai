import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5173/api"
// 拦截器
axios.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  // if (token) {
  let token = localStorage.getItem('token') || ''
  config.headers.Authorization = token
  console.log('////////////////')
  // config.headers.Authorization = token
  // }
  return config
})
axios.interceptors.response.use(res => {
  console.log('111111')
  return res
})

export default axios