import { useRecoilValue, useSetRecoilState } from 'recoil'
import { categoriesAtom } from '..'
import { getCategoriesSelector } from './selector'

const useGetCategories = () => {
  const setCategoriesAtom = useSetRecoilState(categoriesAtom)
  const data = useRecoilValue(getCategoriesSelector())
  setCategoriesAtom((preState) => ({ ...preState, message: data.message, data: data.data }))
}

const ManageProductList = {
  useGetCategories,
}
export default ManageProductList
