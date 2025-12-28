import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
interface MyInterceptors<T = AxiosResponse> {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyInterceptors<T>
}

class MyRequest {
  instance: AxiosInstance
  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        return Promise.reject(error)
      },
    )
    this.instance.interceptors.response.use(
      response => {
        return response.data
      },
      error => {
        return Promise.reject(error)
      },
    )
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestInterceptor,
        config.interceptors.requestInterceptorCatch,
      )
      this.instance.interceptors.response.use(
        config.interceptors.responseInterceptor,
        config.interceptors.responseInterceptorCatch,
      )
    }
  }

  request<T = any>(config: MyRequestConfig<T>): Promise<T> {
    const { requestInterceptor, responseInterceptor } = config.interceptors || {}

    const requestConfig: InternalAxiosRequestConfig = config as InternalAxiosRequestConfig

    // 统一处理请求拦截器（同步或异步）
    const processRequest = requestInterceptor
      ? Promise.resolve(requestInterceptor(requestConfig))
      : Promise.resolve(requestConfig)

    // 发送请求并处理响应拦截器
    // 注意：由于全局拦截器已经返回 response.data，所以 this.instance.request 实际返回的是 T 类型
    return processRequest
      .then(resolvedConfig => this.instance.request<T>(resolvedConfig))
      .then((response: any) => {
        // 由于全局拦截器已经提取了 data，response 实际上是 T 类型
        const data = response as T
        // 处理响应拦截器
        if (responseInterceptor) {
          // 将 T 类型包装成 AxiosResponse 传递给拦截器
          // const mockResponse = { data } as AxiosResponse<T>
          const result = responseInterceptor(data)
          // 如果拦截器返回了完整的 response，提取 data；否则 直接返回
          return (result as AxiosResponse<T>).data ?? (result as T)
        }
        return data
      }) as Promise<T>
  }
  get<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  put<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'PUT' })
  }
  delete<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default MyRequest
