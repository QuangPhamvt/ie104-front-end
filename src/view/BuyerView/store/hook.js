import React from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { postUpdateBuyerAtom, statusBuyerViewAtom, uploadBuyerFormState } from './atom'
import { authAtom } from '@/view/AuthView/store'
import { STATE, TYPE, getProfileLocalStorage, setProfileLocalStorage } from '@/utilities'
import { userApi } from '@/api/userApi'
import NotificationAction from '@/components/Notification/store/hook'

const useChangeStatusContentBuyerView = () => {
  const setStatusContentBuyerView = useSetRecoilState(statusBuyerViewAtom)
  const handleChangeStatusContentBuyerView = React.useCallback(
    (status) => {
      setStatusContentBuyerView(status)
      console.log(status)
    },
    [setStatusContentBuyerView],
  )
  return { handleChangeStatusContentBuyerView }
}
const usePostUpdateBuyer = () => {
  const setPostUpdateBuyer = useSetRecoilState(postUpdateBuyerAtom)
  const {
    data: { username, province, district, ward },
  } = useRecoilValue(authAtom)
  const getUploadBuyerForm = useRecoilValue(uploadBuyerFormState)
  const setAuth = useSetRecoilState(authAtom)
  const resetUploadBuyerForm = useResetRecoilState(uploadBuyerFormState)
  const { handlePushNotificationItem } = NotificationAction.usePushNotificationItem()
  const handlePostUpdateBuyer = async () => {
    try {
      setPostUpdateBuyer({ state: STATE.LOADING, message: null })
      const data = {
        username: getUploadBuyerForm.username || username,
        address: {
          province: getUploadBuyerForm.address.province || province,
          district: getUploadBuyerForm.address.district || district,
          ward: getUploadBuyerForm.address.ward || ward,
        },
      }
      const {
        data: { message },
      } = await userApi.postUpdateUser(data)
      setPostUpdateBuyer({ state: STATE.HAS_VALUE, message })
      handlePushNotificationItem(TYPE.SUCCESS, message)
      const oldAuth = await getProfileLocalStorage()
      setProfileLocalStorage(
        JSON.stringify({
          ...oldAuth,
          username: data.username,
          province: data.address.province,
          district: data.address.district,
          ward: data.address.ward,
        }),
      )
      setAuth((preState) => ({
        ...preState,
        data: {
          ...preState.data,
          username: data.username,
          province: data.address.province,
          district: data.address.district,
          ward: data.address.ward,
        },
      }))
      resetUploadBuyerForm()
    } catch (error) {
      console.log(error.data)
      setPostUpdateBuyer({ state: STATE.HAS_ERROR, message: 'SomeThing WRONG when update' })
      handlePushNotificationItem(TYPE.ERROR, 'Something wrong when update')
    }
  }
  return { handlePostUpdateBuyer }
}
const BuyerViewHook = {
  useChangeStatusContentBuyerView,
  usePostUpdateBuyer,
}
export default BuyerViewHook
