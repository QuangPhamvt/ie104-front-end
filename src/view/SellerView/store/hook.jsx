import React from 'react'
import { useSetRecoilState } from 'recoil'
import { profileSellerState, statusSellerViewAtom } from './atom'
import { STATE } from '@/utilities'
import { userApi } from '@/api/userApi'
const useChangeStatusContentSellerView = () => {
  const setStatusContentSellerView = useSetRecoilState(statusSellerViewAtom)
  const handleChangeStatusContentSellerView = React.useCallback(
    (status) => {
      setStatusContentSellerView(status)
      console.log(status)
    },
    [setStatusContentSellerView],
  )
  return { handleChangeStatusContentSellerView }
}
const useGetSellerProfile = () => {
  const setProfileSeller = useSetRecoilState(profileSellerState)
  React.useEffect(() => {
    handleGetSellerProfile()
  }, [])
  const handleGetSellerProfile = async () => {
    try {
      setProfileSeller((preState) => ({ ...preState, state: STATE.LOADING }))
      const { data } = await userApi.getProfileUser()
      setProfileSeller({
        state: STATE.HAS_VALUE,
        message: data.message,
        data: data.data[0],
      })
    } catch (error) {
      setProfileSeller((preState) => ({ ...preState, state: STATE.HAS_ERROR }))
    }
  }
}

const SellerViewHook = {
  useChangeStatusContentSellerView,
  useGetSellerProfile,
}
export default SellerViewHook
