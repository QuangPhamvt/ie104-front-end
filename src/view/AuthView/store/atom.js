import { AUTH_MODAL_STATE } from '@/utilities'
import { atom } from 'recoil'

export const authAtom = atom({
  key: 'authAtom',
  default: {
    state: 'idle',
    data: {
      isLoggedIn: false,
      id: undefined,
      email: undefined,
      username: undefined,
      role: undefined,
    },
  },
})
export const authModalAtom = atom({
  key: 'authModalAtom',
  default: {
    state: AUTH_MODAL_STATE.LOG_IN,
    data: {
      email: undefined,
      username: undefined,
      password: undefined,
      role: undefined,
    },
  },
})
