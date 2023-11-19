import { atom } from 'recoil'
import { STATUS_API_POST } from '@/utilities'

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
