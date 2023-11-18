import { PRODUCT_API } from '@/utilities'
import { axiosClient } from './axiosClient'

export const productApi = {
  getCategories: () => {
    const url = PRODUCT_API.GET_CATEGORIES
    return axiosClient.get(url)
  },
  createProduct: (payload) => {
    const { title, description, location, picture, price, categories_id } = payload
    const url = PRODUCT_API.CREATE_PRODUCT
    return axiosClient.post(url, { title, description, location, picture, price, categories_id })
  },
}
