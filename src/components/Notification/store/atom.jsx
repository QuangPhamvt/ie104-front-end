import { atom } from 'recoil'

export const notificationListState = atom({
  key: 'notificationListState',
  default: {
    data: [],
  },
})
