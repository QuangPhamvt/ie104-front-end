import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { categoriesAtom, createProductFormAtom, statusCreateProductAtom } from '..'
import { getCategoriesSelector } from './selector'
import React from 'react'
import { STATUS_API_POST } from '@/utilities'
import { productApi } from '@/api/productApi'

const useGetCategories = () => {
  const setCategoriesAtom = useSetRecoilState(categoriesAtom)
  const data = useRecoilValue(getCategoriesSelector)
  const handleSetCategories = () => {
    setCategoriesAtom((preState) => ({ ...preState, message: data.message, data: data.data }))
  }
  return { handleSetCategories }
}

const useCreateProduct = () => {
  const {
    data: { title, description, price, location, picture, categories_id },
  } = useRecoilValue(createProductFormAtom)
  const [statusCreateProduct, setStatusCreateProduct] = useRecoilState(statusCreateProductAtom)
  const resetCreateProductForm = useResetRecoilState(createProductFormAtom)
  const handleSubmitCreateProductForm = React.useCallback(async () => {
    if (!title || !description || !price || !location || !picture || !categories_id) {
      setStatusCreateProduct({ status: STATUS_API_POST.HAS_ERROR, message: 'SomeThing wrong in form' })
    } else {
      try {
        setStatusCreateProduct({ status: STATUS_API_POST.LOADING, message: undefined })
        const response = await productApi.createProduct({ title, description, price, location, picture, categories_id })
        setStatusCreateProduct({ status: STATUS_API_POST.HAS_VALUE, message: response.data.message })
        resetCreateProductForm()
      } catch (error) {
        console.log(error.data)
        setStatusCreateProduct({ status: STATUS_API_POST.HAS_ERROR, message: error.data.message })
      }
    }
  }, [categories_id, description, location, picture, price, setStatusCreateProduct, statusCreateProduct, title])
  return { handleSubmitCreateProductForm }
}
const ManageProductList = {
  useGetCategories,
  useCreateProduct,
}
export default ManageProductList
