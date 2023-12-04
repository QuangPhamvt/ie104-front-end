import { atom } from 'recoil'
import { STATUS_CONTENT_SELLER_VIEW } from '../constant'
import { STATE } from '@/utilities'

export const statusSellerViewAtom = atom({
  key: 'statusSellerViewAtom',
  default: STATUS_CONTENT_SELLER_VIEW.DETAIL_PROFILE,
})
export const profileSellerState = atom({
  key: 'profileSellerStateAtom',
  default: {
    state: STATE.IDLE,
    message: null,
    data: {
      user: {
        username: null,
        role: null,
      },
      address: {
        province: null,
        district: null,
        ward: null,
      },
      bank: {
        arqId: null,
        account_name: null,
        account_no: null,
      },
    },
  },
})
