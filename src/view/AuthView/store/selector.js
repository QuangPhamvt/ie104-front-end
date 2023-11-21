import { selector } from 'recoil'
import { authSignUpModalAtom } from './atom'
import locationApi from '@/api/locationApi'

export const authCheckAccountBankSelector = selector({
  key: 'authCheckAccountBankSelector',
  get: ({ get }) => {
    const { data } = get(authSignUpModalAtom)
    return { acqId: data.acqId, accountNo: data.accountNo }
  },
})
export const getListProvinceSelector = selector({
  key: 'getListProvinceSelector',
  get: async () => {
    const response = await locationApi.getListProvince()
    return response.data
  },
})
