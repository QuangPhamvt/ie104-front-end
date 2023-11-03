import { atom } from 'recoil'

export const authAtom = atom({
  key: 'Auth',
  default: {
    state: 'idle',
    data: {},
  },
})
