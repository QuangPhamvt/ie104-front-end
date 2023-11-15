import { atom } from 'recoil'

export const OPTION_SEARCH = {
  DISHES: 'dishes',
  RESTAURANT: 'restaurants',
}
export const optionSearchAtom = atom({
  key: 'optionSearchAtom',
  default: OPTION_SEARCH.DISHES,
})
