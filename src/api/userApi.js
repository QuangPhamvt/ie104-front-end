import { USER_API } from '@/utilities'
import { axiosClient } from './axiosClient'

export const userApi = {
  postUpdateUser: (payload) => {
    const { username = '', address = {} } = payload
    const url = USER_API.POST_UPDATE_USER
    return axiosClient.post(url, { username, address })
  },
  getProfileUser: () => {
    const url = USER_API.GET_PROFILE_USER
    return axiosClient.get(url)
  },
}
