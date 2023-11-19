import { productApi } from '@/api/productApi'
import { selectorFamily } from 'recoil'

export const searchDetailProductByIdSelectorFamily = selectorFamily({
  key: 'searchDetailProductByIdSelectorFamily',
  get: (postId) => async () => {
    try {
      const response = await productApi.postSearchProductById({ id: postId })
      return {
        message: response.data.message,
        data: response.data.data[0],
      }
    } catch (error) {
      console.log(error)
      return {
        message: error.data.message,
      }
    }
  },
})
