import { atom } from 'recoil'

export const openDropDownState = atom({
  key: 'openDropDownStateAtom',
  default: {
    isOpen: false,
  },
})
export const languageState = atom({
  key: 'languageStateAtom',
  default: {
    language: 'VN',
  },
})
