import { BASE_URL, TIMEOUT } from './config'
import MyRequest from './request'
const request = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: config => {
      console.log('请求成功拦截')

      return config
    },
    requestInterceptorCatch: err => err,
    responseInterceptor: res => res,
    responseInterceptorCatch: err => err,
  },
})
export default request
