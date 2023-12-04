import { atom } from 'recoil'

export const cartListAtom = atom({
  key: 'cartListAtom',
  default: {},
})
export const sidebarHistoryState = atom({
  key: 'sidebarHistoryStateAtom',
  default: {
    status: 'CART_LIST',
  },
})
