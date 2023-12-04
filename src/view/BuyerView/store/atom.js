import { atom } from 'recoil'
import { STATUS_CONTENT_BUYER_VIEW } from '../constant'
import { STATE } from '@/utilities'

export const statusBuyerViewAtom = atom({
  key: 'statusBuyerViewAtom',
  default: STATUS_CONTENT_BUYER_VIEW.DETAIL_PROFILE,
})
export const uploadBuyerFormState = atom({
  key: 'buyerFormStateAtom',
  default: {
    username: null,
    address: {
      province: null,
      district: null,
      ward: null,
    },
  },
})
export const postUpdateBuyerAtom = atom({
  key: 'postUpdateBuyerAtom',
  default: {
    state: STATE,
    message: null,
  },
})
