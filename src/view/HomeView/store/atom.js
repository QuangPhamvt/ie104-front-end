import { STATE } from '@/utilities'
import { atom } from 'recoil'
export const foodCardHomeAtom = atom({
  key: 'foodCardHomeAtom',
  default: {
    id: undefined,
    image: undefined,
    title: undefined,
    start: undefined,
    address: undefined,
    price: undefined,
  },
})

export const foodListRecommendHomeAtom = atom({
  key: 'foodListRecommendHomeAtom',
  default: {
    state: STATE.IDLE,
    data: [],
  },
})
