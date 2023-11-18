import { getAccessTokenLocalStorage } from '@/utilities/localstorage'
import axios from 'axios'

// Boot Instance
const axiosClient = axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'htp://ie104.customafk.com/api/v1/',
  // baseURL: 'http://localhost:3000/api/v1',
  headers: {},
  withCredentials: false,
})

// Setup Interceptors
// Interceptor Request
const onRequest = (config) => {
  const access_token = getAccessTokenLocalStorage()
  if (access_token && config.url !== 'auth/sign-up') {
    config.headers['Authorization'] = access_token
  }
  return config
}
const onRequestError = (error) => {
  return Promise.reject(error)
}
const onResponse = (response) => {
  return response
}
const onResponseError = async (error) => {
  return Promise.reject(error.response)
}
const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
}

setupInterceptors(axiosClient)
export { axiosClient }
