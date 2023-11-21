import { orderApi } from '@/api'
import { selectorFamily } from 'recoil'

export const findByCartIdSelector = selectorFamily({
  key: 'findByCartIdSelector',
  get: (cart_id) => async () => {
    try {
      const response = await orderApi.postFindByCartId({ cart_id })
      return {
        message: response.data.message,
        data: response.data.data,
      }
    } catch (error) {
      console.log(error)
      return {
        message: error.data,
        data: [],
      }
    }
  },
})
