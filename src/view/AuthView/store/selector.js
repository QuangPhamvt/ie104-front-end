// import { selector } from 'recoil'
// import { authModalAtom } from './atom'
// import { ROLE } from '@/utilities'

import { selector } from 'recoil'
import { authSignUpModalAtom } from './atom'

export const authCheckAccountBankSelector = selector({
  key: 'authCheckAccountBankSelector',
  get: ({ get }) => {
    const { data } = get(authSignUpModalAtom)
    return { acqId: data.acqId, accountNo: data.accountNo }
  },
})
