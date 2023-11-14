import { AUTH_MODAL_STATE, STATE, STATUS_API_POST } from '@/utilities'
import { atom } from 'recoil'

export const authAtom = atom({
  key: 'authAtom',
  default: {
    state: STATE.IDLE,
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
      email: '',
      password: '',
    },
  },
})
export const AUTH_SIGN_UP_STEP_MODEL = {
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
}
export const authSignUpStepModalAtom = atom({
  key: 'authSignUpStepModal',
  default: {
    step: AUTH_SIGN_UP_STEP_MODEL.ONE,
  },
})
export const authSignInStatusFormSubmitAtom = atom({
  key: 'authSignInStatusFormSubmitAtom',
  default: {
    state: STATUS_API_POST.IDLE,
    data: undefined,
  },
})
export const authSignUpStatusFormSubmitAtom = atom({
  key: 'authSignUpFormSubmit',
  default: {
    status: STATUS_API_POST.IDLE,
    data: undefined,
  },
})
