import { PRODUCT_API } from '@/utilities'
import { axiosClient } from './axiosClient'

export const productApi = {
  postSearchProductById: (payload) => {
    const { id } = payload
    const url = PRODUCT_API.POST_SEARCH_PRODUCT_BY_ID
    return axiosClient.post(url, { id })
  },
  postSearchProduct: (payload) => {
    const { slug, location, limit, page } = payload
    const url = PRODUCT_API.POST_SEARCH_PRODUCT
    if (slug) return axiosClient.post(url, { slug, limit, page })
    if (location) return axiosClient.post(url, { location, limit, page })
  },
  getCategories: () => {
    const url = PRODUCT_API.GET_CATEGORIES
    return axiosClient.get(url)
  },
  createProduct: (payload) => {
    const { title, description, location, picture, price, categories_id } = payload
    const url = PRODUCT_API.CREATE_PRODUCT
    return axiosClient.post(url, { title, description, location, picture, price: +price, categories_id })
  },
}
