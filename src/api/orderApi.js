import { ORDER_API } from '@/utilities'
import { axiosClient } from './axiosClient'

export const orderApi = {
  postFindByCartId: (payload) => {
    const { cart_id } = payload
    const url = ORDER_API.FIND_BY_CART_ID
    return axiosClient.post(url, { cart_id })
  },
}
