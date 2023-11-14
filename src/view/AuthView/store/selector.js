import { selector } from 'recoil'
import { authModalAtom } from './atom'
import { ROLE } from '@/utilities'

export const signUpModalFormSelector = selector({
  key: 'signUpFormSelector',
  get: ({ get }) => {
    const {
      data: { email, username, password, role, arqId, accountNo },
    } = get(authModalAtom)
    if (role === ROLE.SELLER) return { username, email, password, role, arqId, accountNo }
    if (role === ROLE.BUYER) return { username, email, password }
  },
})
export const signInModalFormSelector = selector({
  key: 'signInModalFormSelector',
  get: ({ get }) => {
    const { email, password } = get(authModalAtom)
    return { email, password }
  },
})
