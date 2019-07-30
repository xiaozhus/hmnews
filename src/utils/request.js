// 配置axios
// 如baseURL  请求拦截器,响应浏览器
// 引入axios
import axios from 'axios'
// 配置 baseURL  并且返回axios实例对象->request
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response.data.data || response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
