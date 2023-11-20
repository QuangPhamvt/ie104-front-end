import { cartApi } from '@/api/cartApi'
import { selector } from 'recoil'

export const cartListSelector = selector({
  key: 'cartListSelector',
  get: async () => {
    try {
      const response = await cartApi.getCart()
      return {
        message: response.data.message,
        data: response.data.data,
      }
    } catch (error) {
      return {
        message: error.data,
        data: [],
      }
    }
  },
})
