import { CART_API } from '@/utilities'
import { axiosClient } from './axiosClient'

export const cartApi = {
  getCart: () => {
    const url = CART_API.GET_CART
    return axiosClient.get(url)
  },
  createCart: (payload) => {
    const { price, cart_items } = payload
    const url = CART_API.CREATE_CART
    return axiosClient.post(url, { price, cart_items })
  },
}
