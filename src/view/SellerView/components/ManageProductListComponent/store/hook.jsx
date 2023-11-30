import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  categoriesAtom,
  createProductFormAtom,
  openModalStatusOrderAtom,
  statusCreateProductAtom,
  statusUpdateOrderAtom,
} from '..'
import { getCategoriesSelector } from './selector'
import React from 'react'
import { STATUS_API_POST, TYPE } from '@/utilities'
import { productApi } from '@/api/productApi'
import { orderApi } from '@/api'
import NotificationAction from '@/components/Notification/store/hook'

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
const useDenyOrder = () => {
  const setStatusUpdateOrder = useSetRecoilState(statusUpdateOrderAtom)
  const resetModalStatusOrder = useResetRecoilState(openModalStatusOrderAtom)
  const { handlePushNotificationItem } = NotificationAction.usePushNotificationItem()
  const handleDenyOrder = async (order_id) => {
    try {
      setStatusUpdateOrder({ status: STATUS_API_POST.LOADING, message: undefined })
      const response = await orderApi.updateOriginOrder({ order_id, status: 'deny' })
      setStatusUpdateOrder({ status: STATUS_API_POST.HAS_VALUE, message: response.data.message })
      resetModalStatusOrder()
      handlePushNotificationItem(TYPE.SUCCESS, response.data.message)
    } catch (error) {
      console.error(error.response.data.message)
      setStatusUpdateOrder({ status: STATUS_API_POST.HAS_ERROR, message: error.response.data.message })
    }
  }
  return { handleDenyOrder }
}
const useAcceptOrder = () => {
  const setStatusUpdateOrder = useSetRecoilState(statusUpdateOrderAtom)
  const resetModalStatusOrder = useResetRecoilState(openModalStatusOrderAtom)
  const { handlePushNotificationItem } = NotificationAction.usePushNotificationItem()
  const handleAcceptOrder = async (order_id) => {
    try {
      setStatusUpdateOrder({ status: STATUS_API_POST.LOADING, message: undefined })
      const response = await orderApi.updateOriginOrder({ order_id, status: 'ordered' })
      setStatusUpdateOrder({ status: STATUS_API_POST.HAS_VALUE, message: response.data.message })
      resetModalStatusOrder()
      handlePushNotificationItem(TYPE.SUCCESS, response.data.message)
    } catch (error) {
      console.error(error.response.data.message)
      setStatusUpdateOrder({ status: STATUS_API_POST.HAS_ERROR, message: error.response.data.message })
    }
  }
  return { handleAcceptOrder }
}
const ManageProductList = {
  useGetCategories,
  useCreateProduct,
  useDenyOrder,
  useAcceptOrder,
}
export default ManageProductList
