import { STATE, STATUS_API_POST } from '@/utilities'
import { atom } from 'recoil'

export const dropDownUserDetailHeaderAtom = atom({
  key: 'dropDownUserDetailHeaderAtom',
  default: {
    open: false,
  },
})

export const searchProductFormAtom = atom({
  key: 'statusSearchProductAtom',
  default: {
    state: STATE.IDLE,
    data: {
      slug: undefined,
      location: undefined,
      limit: 6,
      page: 1,
    },
  },
})

export const searchProductionAtom = atom({
  key: 'searchProductionAtom',
  default: {
    status: STATUS_API_POST.IDLE,
    message: undefined,
    data: [
      {
        id: undefined,
        title: undefined,
        picture: undefined,
        location: undefined,
        price: undefined,
        author: {
          author_id: undefined,
          username: undefined,
        },
      },
    ],
  },
})
