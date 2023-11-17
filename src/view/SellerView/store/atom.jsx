import { atom } from 'recoil'
import { STATUS_CONTENT_SELLER_VIEW } from '../constant'

export const statusSellerViewAtom = atom({
  key: 'statusSellerViewAtom',
  default: STATUS_CONTENT_SELLER_VIEW.DETAIL_PROFILE,
})
