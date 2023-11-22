import { productApi } from '@/api/productApi'
import { selector, selectorFamily } from 'recoil'
import { createProductFormAtom } from '..'
import { STATE } from '@/utilities'
import { orderApi } from '@/api'

export const getCategoriesSelector = selector({
  key: 'getCategoriesSellerViewSelector',
  get: async () => {
    const response = await productApi.getCategories()
    console.log(response.data)
    return response.data
  },
})
export const getOrderListSelector = selector({
  key: 'getOrderListSelector',
  get: async () => {
    try {
      const response = await orderApi.getOrderList()
      return {
        message: response.data.message,
        data: response.data.data,
      }
    } catch (error) {
      return {
        message: error.response.data.message,
        data: [],
      }
    }
  },
})

export const createProductFormSelectorFamily = selectorFamily({
  key: 'createProductFormSelector',
  get:
    (field) =>
    ({ get }) => {
      return get(createProductFormAtom).data[field]
    },
  set:
    (field) =>
    ({ set }, newValue) => {
      set(createProductFormAtom, (preState) => ({
        ...preState,
        state: STATE.HAS_VALUE,
        data: { ...preState.data, [field]: newValue },
      }))
    },
})
