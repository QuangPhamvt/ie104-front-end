import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { searchProductFormAtom, searchProductionAtom } from './atom'
import { productApi } from '@/api/productApi'
import { STATUS_API_POST, toSlug } from '@/utilities'
import { useNavigate } from 'react-router-dom'

const useSearchProduct = () => {
  const searchProductForm = useRecoilValue(searchProductFormAtom)
  const setSearchProduct = useSetRecoilState(searchProductionAtom)
  const searchProduct = useRecoilValue(searchProductionAtom)
  const navigate = useNavigate()
  const handleSearchProduct = React.useCallback(async () => {
    const {
      data: { limit, page, location, slug },
    } = searchProductForm
    try {
      setSearchProduct((preState) => ({ ...preState, status: STATUS_API_POST.LOADING }))
      const response = await productApi.postSearchProduct({ limit, page, location, slug: toSlug(slug) })
      setSearchProduct((preState) => ({
        ...preState,
        status: STATUS_API_POST.HAS_VALUE,
        message: response.data.message,
        data: [...response.data.data],
      }))
      navigate('/search')
    } catch (error) {
      console.log(error)
    }
  }, [navigate, searchProductForm, setSearchProduct])
  console.log(searchProduct.data)
  return { handleSearchProduct }
}

const HeaderLayout = {
  useSearchProduct,
}
export default HeaderLayout
