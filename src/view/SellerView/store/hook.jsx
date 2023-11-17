import React from 'react'
import { useSetRecoilState } from 'recoil'
import { statusSellerViewAtom } from './atom'
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
const SellerViewHook = {
  useChangeStatusContentSellerView,
}
export default SellerViewHook
