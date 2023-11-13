import { axiosClient } from './axiosClient'
import { AUTH_API } from '@/utilities'

export const authApi = {
  postSignIn: (payload) => {
    const { email = '', password = '' } = payload
    const url = AUTH_API.SIGN_IN
    return axiosClient.post(url, { email, password })
  },
  postSignUp: (payload) => {
    const { email = '', username = '', role = '', password = '' } = payload
    const url = AUTH_API.SIGN_UP
    return axiosClient.post(url, { email, username, password, role })
  },
  postRefreshToken: (payload) => {
    const { refresh_token = '' } = payload
    const url = AUTH_API.REFRESH_TOKEN
    return axiosClient.post(url, { refresh_token })
  },
  getProfile: () => {
    const url = AUTH_API.PROFILE
    return axiosClient.get(url)
  },
}
