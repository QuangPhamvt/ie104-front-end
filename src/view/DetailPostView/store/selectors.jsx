import { productApi } from '@/api/productApi'
import { selector, selectorFamily } from 'recoil'

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
export const getCategoriesSelector = selector({
  key: 'getCategoriesSelector',
  get: async () => {
    try {
      const response = await productApi.getCategories()
      return {
        message: response.data.message,
        data: response.data.data,
      }
    } catch (error) {
      return {
        message: error.data.message,
        data: [],
      }
    }
  },
})
