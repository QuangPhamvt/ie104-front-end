import { productApi } from '@/api/productApi'
import { selector, selectorFamily } from 'recoil'
import { createProductFormAtom } from '..'

export const getCategoriesSelector = selector({
  key: 'getCategoriesSelector',
  get: async () => {
    const response = await productApi.getCategories()
    return response.data
  },
})

export const createProductFormSelector = selectorFamily({
  key: 'createProductFormSelector',
  get:
    (field) =>
    ({ get }) => {
      return get(createProductFormAtom).data[field]
    },
  set:
    (field) =>
    ({ set }, newValue) => {
      set(createProductFormAtom, (preState) => ({ ...preState, data: { ...preState, [field]: newValue } }))
    },
})
