import { productApi } from '@/api/productApi'
import { selector, selectorFamily } from 'recoil'
import { createProductFormAtom } from '..'
import { STATE } from '@/utilities'

export const getCategoriesSelector = selector({
  key: 'getCategoriesSelector',
  get: async () => {
    const response = await productApi.getCategories()
    console.log(response.data)
    return response.data
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
