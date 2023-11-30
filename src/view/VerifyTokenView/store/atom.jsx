import { STATE } from '@/utilities'
import { atom } from 'recoil'

export const tokenSignUpVerifyState = atom({
  key: 'tokenSignUpVerifyState',
  default: {
    state: STATE.IDLE,
    token: null,
  },
})
export const postCreateAccountState = atom({
  key: 'postCreateAccountState',
  default: {
    state: STATE.IDLE,
    message: null,
  },
})
