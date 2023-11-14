import React from 'react'
import { useRecoilState } from 'recoil'
import { authModalAtom } from './atom'
import { AUTH_MODAL_STATE } from '@/utilities'
export const useAuth = () => {
  const [authModal, setAuthModal] = useRecoilState(authModalAtom)

  // Handle Change Form
  const handleChangeForm = React.useCallback((e) => {
    const name = e.target.name
    const value = e.target.value
    setAuthModal((preState) => ({ ...preState, data: { ...preState.data, [name]: value } }))
  }, [])

  // Handle Change Flow Form
  const handleChangeFlowForm = React.useCallback(() => {
    if (authModal.state === AUTH_MODAL_STATE.LOG_IN)
      setAuthModal({
        state: AUTH_MODAL_STATE.SIGN_UP,
        data: {
          email: undefined,
          username: undefined,
          password: undefined,
          role: undefined,
        },
      })
    if (authModal.state === AUTH_MODAL_STATE.SIGN_UP)
      setAuthModal({
        state: AUTH_MODAL_STATE.LOG_IN,
        data: {
          email: undefined,
          username: undefined,
          password: undefined,
          role: undefined,
        },
      })
  }, [])
  return { handleChangeForm, handleChangeFlowForm }
}
