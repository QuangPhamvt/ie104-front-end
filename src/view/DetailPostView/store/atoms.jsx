import { atom } from 'recoil'
import { STATUS_API_POST } from '@/utilities'
export const openDialogCreateCartDetailProductAtom = atom({
  key: 'openDialogCreateCartDetailProductAtom',
  default: false,
})
export const chooseCategoryAtom = atom({
  key: 'chooseCategoryAtom',
  default: {
    contents: null,
  },
})
export const createCartDetailProductAtom = atom({
  key: 'createCartDetailProductAtom',
  default: {
    status: STATUS_API_POST.IDLE,
    message: undefined,
    data: {
      price: undefined,
      cart_items: [
        {
          product_id: undefined,
          title: undefined,
          price: undefined,
          quantity: undefined,
        },
      ],
    },
  },
})
export const searchDetailProductionAtom = atom({
  key: 'searchDetailProductionAtom',
  default: {
    status: STATUS_API_POST.IDLE,
    message: undefined,
    data: [
      {
        id: undefined,
        title: undefined,
        picture: undefined,
        description: undefined,
        price: 0,
        location: undefined,
        create_at: undefined,
        author: {
          author_id: undefined,
          username: undefined,
        },
        categories: {
          categories_id: undefined,
          categories_name: undefined,
        },
      },
    ],
  },
})

export const findProductByCategoryAtom = atom({
  key: 'findProductByCategoryAtom',
  default: {
    status: STATUS_API_POST.IDLE,
    message: undefined,
    data: [
      {
        product_id: undefined,
        title: undefined,
        picture: undefined,
        description: undefined,
        price: 0,
      },
    ],
  },
})
export const selectCategoriesAtom = atom({
  key: 'selectCategoriesAtom',
  default: undefined,
})
