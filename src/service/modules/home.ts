import request from '..'

// request
//   .request({
//     url: '/home/multidata',
//     method: 'GET',
//     interceptors: {
//       requestInterceptor: config => {
//         console.log('home请求成功拦截')
//         return config
//       },
//       responseInterceptor: res => {
//         console.log('home响应成功拦截')
//         return res
//       },
//     },
//   })
//   .then(res => {
//     console.log(res)
//   })
interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}
request
  .request<IHomeData>({
    url: '/home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: config => {
        console.log('home请求成功拦截')
        return config
      },
      responseInterceptor: res => {
        console.log('home响应成功拦截')
        return res
      },
    },
  })
  .then(res => {
    console.log(res)
  })
