import { axiosClient } from './axiosClient'
import { AUTH_API } from '@/utilities'

export const authApi = {
  postSignIn: (payload) => {
    const { email = '', password = '' } = payload
    const url = AUTH_API.SIGN_IN
    return axiosClient.post(url, { email, password })
  },
  postSignUp: (payload) => {
    const {
      email = '',
      username = '',
      role = '',
      province = '',
      district = '',
      ward = '',
      password = '',
      acqId = '',
      accountNo = '',
      accountName = '',
    } = payload
    const url = AUTH_API.SIGN_UP
    return axiosClient.post(url, {
      email,
      username,
      password,
      role,
      province,
      district,
      ward,
      acqId,
      accountNo,
      accountName,
    })
  },
  postRefreshToken: (payload) => {
    const { refresh_token = '' } = payload
    const url = AUTH_API.REFRESH_TOKEN
    return axiosClient.post(url, { refresh_token })
  },
  postCheckAccount: (payload) => {
    const { acqId = '', accountNo = '' } = payload
    const url = AUTH_API.CHECK_ACCOUNT
    return axiosClient.post(url, { acqId, accountNo })
  },
  getProfile: () => {
    const url = AUTH_API.PROFILE
    return axiosClient.get(url)
  },
}
