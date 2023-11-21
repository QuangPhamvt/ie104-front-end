import { ORDER_API } from '@/utilities'
import { axiosClient } from './axiosClient'

export const orderApi = {
  postFindByCartId: (payload) => {
    const { cart_id } = payload
    const url = ORDER_API.FIND_BY_CART_ID
    return axiosClient.post(url, { cart_id })
  },
  postCreateOrder: (payload) => {
    const { seller_id = '', cart_id = '', price = 0, products = [] } = payload
    const url = ORDER_API.CREATE_ORDER
    return axiosClient.post(url, { seller_id, cart_id, price, products })
  },
}
