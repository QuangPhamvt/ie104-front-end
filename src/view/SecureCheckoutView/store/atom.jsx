import { STATUS_API_POST } from '@/utilities'
import { atom } from 'recoil'

export const statusPostCreateOrderAtom = atom({
  key: 'statusPostCreateOrderAtom',
  default: {
    status: STATUS_API_POST.IDLE,
    message: undefined,
  },
})
