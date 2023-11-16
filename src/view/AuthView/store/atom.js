import { AUTH_MODAL_STATE, AUTH_SIGN_UP_MODAL_STATE, STATE, STATUS_API_POST } from '@/utilities'
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
export const authModalStateAtom = atom({
  key: 'authModalAtom',
  default: AUTH_MODAL_STATE.LOG_IN,
})
export const authSignInModalAtom = atom({
  key: 'authSignInModalAtom',
  default: {
    state: STATE.IDLE,
    data: {
      email: '',
      password: '',
    },
  },
})
export const authSignUpModalAtom = atom({
  key: 'authSignUpModalAtom',
  default: {
    state: AUTH_SIGN_UP_MODAL_STATE.IDLE,
    data: {
      email: '',
      password: '',
      username: '',
      role: '',
      acqId: undefined,
      accountNo: undefined,
      accountName: undefined,
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
    status: STATUS_API_POST.IDLE,
    message: undefined,
    data: undefined,
  },
})
export const authSignUpStatusFormSubmitAtom = atom({
  key: 'authSignUpFormSubmit',
  default: {
    status: STATUS_API_POST.IDLE,
    message: undefined,
    data: undefined,
  },
})
export const authCheckAccountBankModalAtom = atom({
  key: 'authCheckAccountBankModalAtom',
  default: {
    status: STATUS_API_POST.IDLE,
    open: false,
    message: undefined,
    data: {
      accountName: undefined,
      name: undefined,
      shortName: undefined,
      logo: undefined,
    },
  },
})
