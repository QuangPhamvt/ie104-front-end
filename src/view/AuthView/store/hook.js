import React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  authAtom,
  authCheckAccountBankModalAtom,
  authModalStateAtom,
  authSignInModalAtom,
  authSignInStatusFormSubmitAtom,
  authSignUpModalAtom,
  authSignUpStatusFormSubmitAtom,
} from './atom'
import { AUTH_MODAL_STATE, AUTH_SIGN_UP_MODAL_STATE, ROLE, STATE, STATUS_API_POST } from '@/utilities'
import { authApi } from '@/api'
import {
  getProfileLocalStorage,
  removeAccessTokenLocalStorage,
  removeRefreshTokenLocalStorage,
  setAccessTokenLocalStorage,
  setProfileLocalStorage,
  setRefreshTokenLocalStorage,
} from '@/utilities/localstorage'
import { jwtDecode } from 'jwt-decode'
import { isExpired } from '@/utilities/fnc'
import { authCheckAccountBankSelector } from './selector'

// export const useChangeAuthForm = () => {
//   const setAuthModal = useSetRecoilState(authModalAtom)
//   const handleChangeAuthForm = React.useCallback((e) => {
//     const name = e.target.name
//     const value = e.target.value
//     setAuthModal((preState) => ({ ...preState, data: { ...preState.data, [name]: value } }))
//   }, [])
//   return { handleChangeAuthForm }
// }
export const useChangeAuthSignInForm = () => {
  const setAuthSignInModal = useSetRecoilState(authSignInModalAtom)
  const handleChangeAuthSignInForm = React.useCallback(
    (e) => {
      const name = e.target.name
      const value = e.target.value
      setAuthSignInModal((preState) => ({
        state: AUTH_SIGN_UP_MODAL_STATE.HAS_VALUE,
        data: { ...preState.data, [name]: value },
      }))
    },
    [setAuthSignInModal],
  )
  return { handleChangeAuthSignInForm }
}

export const useChangeAuthSignUpForm = () => {
  const setAuthSignUpModal = useSetRecoilState(authSignUpModalAtom)
  const handleChangeAuthSignUpForm = React.useCallback((e) => {
    const name = e.target.name
    const value = e.target.value
    setAuthSignUpModal((preState) => ({
      state: AUTH_SIGN_UP_MODAL_STATE.HAS_VALUE,
      data: { ...preState.data, [name]: value },
    }))
  }, [])
  return { handleChangeAuthSignUpForm }
}

export const useChangeFlowAuthForm = () => {
  const [authModalState, setAuthModalState] = useRecoilState(authModalStateAtom)
  const handleChangeFlowAuthForm = React.useCallback(() => {
    if (authModalState === AUTH_MODAL_STATE.LOG_IN) setAuthModalState(AUTH_MODAL_STATE.SIGN_UP)
    if (authModalState === AUTH_MODAL_STATE.SIGN_UP) setAuthModalState(AUTH_MODAL_STATE.LOG_IN)
  }, [authModalState, setAuthModalState])
  return { handleChangeFlowAuthForm }
}
export const useGetProfile = () => {
  const setAuth = useSetRecoilState(authAtom)
  React.useLayoutEffect(() => {
    const data = getProfileLocalStorage()
    if (!data) return
    if (isExpired(data.exp))
      setAuth({
        state: STATE.HAS_VALUE,
        data: {
          isLoggedIn: true,
          id: data.id,
          role: data.role,
          username: data.username,
        },
      })
  }, [setAuth])
}
export const useSignInSubmitAuthForm = () => {
  const {
    data: { email, password },
  } = useRecoilValue(authSignInModalAtom)
  const setAuth = useSetRecoilState(authAtom)
  const setAuthSignInStatusFormSubmit = useSetRecoilState(authSignInStatusFormSubmitAtom)
  const handleSignInSubmitAuthForm = React.useCallback(
    async (event) => {
      event.preventDefault()
      let response
      try {
        setAuthSignInStatusFormSubmit({ status: STATUS_API_POST.LOADING, data: undefined })
        response = await authApi.postSignIn({ email, password })
        setAuthSignInStatusFormSubmit({ status: STATUS_API_POST.HAS_VALUE, data: { message: response.data.message } })
        setAccessTokenLocalStorage(response.data.data.access_token)
        setRefreshTokenLocalStorage(response.data.data.refresh_token)
        const profile = jwtDecode(response.data.data.access_token)
        setProfileLocalStorage(JSON.stringify({ ...profile, isLoggedIn: true }))
        setAuth({
          state: STATE.HAS_VALUE,
          data: {
            isLoggedIn: true,
            id: profile.id,
            role: profile.role,
            username: profile.username,
          },
        })

        console.log(response.data)
      } catch (error) {
        console.log(error.data)
        setAuthSignInStatusFormSubmit({
          status: STATUS_API_POST.HAS_ERROR,
          message: error.data.message,
          data: undefined,
        })
      }
    },
    [email, password, setAuth, setAuthSignInStatusFormSubmit],
  )
  return { handleSignInSubmitAuthForm }
}
export const useSignUpSubmitAuthForm = () => {
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setAuth = useSetRecoilState(authAtom)
  const setAuthSignUpStatusFormSubmit = useSetRecoilState(authSignUpStatusFormSubmitAtom)

  const handleSignUpSubmitAuthForm = React.useCallback(
    async (event) => {
      event.preventDefault()
      try {
        let response
        setAuthSignUpStatusFormSubmit({ status: STATUS_API_POST.LOADING, data: undefined })
        if (authSignUpModal.data.role === ROLE.SELLER) {
          const { email, username, password, role, acqId, accountNo, accountName } = authSignUpModal.data
          response = await authApi.postSignUp({ email, username, password, role, acqId, accountNo, accountName })
        }
        if (authSignUpModal.data.role === ROLE.BUYER) {
          const { email, username, password, role } = authSignUpModal.data
          response = await authApi.postSignUp({ email, username, password, role })
        }

        setAuthSignUpStatusFormSubmit({
          status: STATUS_API_POST.HAS_VALUE,
          message: response.data.data.message,
          data: { ...response.data.data },
        })
        setAccessTokenLocalStorage(response.data.data.access_token)
        setRefreshTokenLocalStorage(response.data.data.refresh_token)
        const profile = jwtDecode(response.data.data.access_token)
        setProfileLocalStorage(JSON.stringify({ ...profile, isLoggedIn: true }))
        setAuth({
          state: STATE.HAS_VALUE,
          data: {
            isLoggedIn: true,
            id: profile.id,
            role: profile.role,
            username: profile.username,
          },
        })
      } catch (error) {
        console.log(error.data)
        setAuthSignUpStatusFormSubmit({
          status: STATUS_API_POST.HAS_ERROR,
          message: error.data.message,
          data: undefined,
        })
      }
    },
    [authSignUpModal.data, setAuth, setAuthSignUpStatusFormSubmit],
  )
  return { handleSignUpSubmitAuthForm }
}

export const useLogOut = () => {
  const setAuth = useSetRecoilState(authAtom)
  const logOut = () => {
    removeAccessTokenLocalStorage()
    removeRefreshTokenLocalStorage()
    setAuth({
      state: STATE.IDLE,
      data: {
        isLoggedIn: false,
        id: undefined,
        role: undefined,
        username: undefined,
      },
    })
  }
  return { logOut }
}
export const useCheckoutAccountBank = () => {
  const [authCheckAccountBankModal, setAuthCheckAccountBankModal] = useRecoilState(authCheckAccountBankModalAtom)
  const { acqId, accountNo } = useRecoilValue(authCheckAccountBankSelector)
  const { open } = authCheckAccountBankModal
  const setAuthSignUpModal = useSetRecoilState(authSignUpModalAtom)
  const reset = useResetRecoilState(authCheckAccountBankModalAtom)

  const handleCloseCheckAccountModal = () => {
    reset()
  }
  const handleOpenCheckAccountModal = React.useCallback(async () => {
    setAuthCheckAccountBankModal((preState) => ({ ...preState, open: true, status: STATUS_API_POST.LOADING }))
    try {
      const response = await authApi.postCheckAccount({ acqId, accountNo })
      console.log(response.data)
      setAuthCheckAccountBankModal(() => ({
        status: STATUS_API_POST.HAS_VALUE,
        open: true,
        data: {
          accountName: response.data.data.accountName,
          name: response.data.data.name,
          shortName: response.data.data.shortName,
          logo: response.data.data.logo,
        },
      }))
      setAuthSignUpModal((preState) => ({
        ...preState,
        data: {
          ...preState.data,
          acqId: acqId,
          accountNo: accountNo,
          accountName: response.data.data.accountName,
        },
      }))
    } catch (error) {
      console.log(error.data)
      setAuthCheckAccountBankModal((preState) => ({
        ...preState,
        status: STATUS_API_POST.HAS_ERROR,
        message: error.data.message,
      }))
    }
  }, [accountNo, acqId, setAuthCheckAccountBankModal, setAuthSignUpModal])
  return { open, handleCloseCheckAccountModal, handleOpenCheckAccountModal }
}
const Auth = {
  useChangeAuthSignInForm,
  useChangeAuthSignUpForm,
  useChangeFlowAuthForm,
  useSignInSubmitAuthForm,
  useSignUpSubmitAuthForm,
  useCheckoutAccountBank,
  useLogOut,
}
export default Auth
