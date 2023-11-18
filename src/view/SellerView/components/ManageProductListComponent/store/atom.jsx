import { STATE } from '@/utilities'
import { atom } from 'recoil'

export const createProductFormAtom = atom({
  key: 'createProductFormAtom',
  default: {
    state: STATE.IDLE,
    data: {
      title: undefined,
      description: undefined,
      location: undefined,
      price: undefined,
      picture: undefined,
      categories_id: undefined,
    },
  },
})
export const categoriesAtom = atom({
  key: 'categoriesAtom',
  default: {
    state: STATE.IDLE,
    message: undefined,
    data: [],
  },
})
