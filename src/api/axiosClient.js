import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// Boot Instance
const axiosClient = axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: '',
})

// Setup Interceptors
// Interceptor Request
const onRequest = (config) => {
  return config
}
const onRequestError = (error) => {
  return Promise.reject(error)
}
const onResponse = (response) => {
  return response.data
}
const onResponseError = async (error) => {
  console.log(error.response?.headers)
  console.log(error.response?.status)
  console.log(error.response?.data)
  return Promise.reject(error)
}
const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
}

setupInterceptors(axiosClient)
export { axiosClient }
