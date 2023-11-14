import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { authAtom, authModalAtom, authSignInStatusFormSubmitAtom, authSignUpStatusFormSubmitAtom } from './atom'
import { AUTH_MODAL_STATE, ROLE, STATE, STATUS_API_POST } from '@/utilities'
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

export const useChangeAuthForm = () => {
  const setAuthModal = useSetRecoilState(authModalAtom)
  const handleChangeAuthForm = React.useCallback((e) => {
    const name = e.target.name
    const value = e.target.value
    setAuthModal((preState) => ({ ...preState, data: { ...preState.data, [name]: value } }))
  }, [])
  return { handleChangeAuthForm }
}

export const useChangeFlowAuthForm = () => {
  const [authModal, setAuthModal] = useRecoilState(authModalAtom)
  const handleChangeFlowAuthForm = React.useCallback(() => {
    if (authModal.state === AUTH_MODAL_STATE.LOG_IN)
      setAuthModal({
        state: AUTH_MODAL_STATE.SIGN_UP,
        data: {
          email: '',
          username: '',
          password: '',
          role: '',
          arqId: '',
          accountNo: '',
        },
      })
    if (authModal.state === AUTH_MODAL_STATE.SIGN_UP)
      setAuthModal({
        state: AUTH_MODAL_STATE.LOG_IN,
        data: {
          email: '',
          password: '',
        },
      })
  }, [authModal.state, setAuthModal])
  return { handleChangeFlowAuthForm }
}
export const useGetProfile = () => {
  const setAuth = useSetRecoilState(authAtom)
  React.useEffect(() => {
    const data = getProfileLocalStorage()
    if (!data) return
    if (isExpired(data.exp))
      setAuth({
        state: STATE.HAS_VALUE,
        data: {
          isLogged: true,
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
  } = useRecoilValue(authModalAtom)
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
        setAccessTokenLocalStorage(response.data.access_token)
        setRefreshTokenLocalStorage(response.data.refresh_token)
        const profile = jwtDecode(response.data.access_token)
        setProfileLocalStorage(JSON.stringify({ ...profile, isLoggedIn: true }))
        setAuth({
          state: STATE.HAS_VALUE,
          data: {
            isLogged: true,
            id: response.data.id,
            role: response.data.role,
            username: response.data.username,
          },
        })
        console.log(response.data)
      } catch (error) {
        setAuthSignInStatusFormSubmit({ status: STATUS_API_POST.HAS_ERROR, message: error.data })
        console.log(error)
      }
    },
    [email, password, setAuth, setAuthSignInStatusFormSubmit],
  )
  return { handleSignInSubmitAuthForm }
}
export const useSignUpSubmitAuthForm = () => {
  const authModal = useRecoilValue(authModalAtom)
  const setAuth = useSetRecoilState(authAtom)
  const setAuthSignUpStatusFormSubmit = useSetRecoilState(authSignUpStatusFormSubmitAtom)

  const handleSignUpSubmitAuthForm = React.useCallback(
    async (event) => {
      event.preventDefault()
      try {
        let response
        setAuthSignUpStatusFormSubmit({ status: STATUS_API_POST.LOADING, data: undefined })
        if (authModal.data.role === ROLE.SELLER) {
          const { email, username, password, role, arqId, accountNo } = authModal.data
          response = await authApi.postSignUp({ email, username, password, role, arqId, accountNo })
        }
        if (authModal.data.role === ROLE.BUYER) {
          const { email, username, password, role } = authModal.data
          response = await authApi.postSignUp({ email, username, password, role })
        }

        setAuthSignUpStatusFormSubmit({ status: STATUS_API_POST.HAS_VALUE, data: { message: response.data.message } })
        setAccessTokenLocalStorage(response.data.access_token)
        setRefreshTokenLocalStorage(response.data.refresh_token)
        const profile = jwtDecode(response.data.access_token)
        setProfileLocalStorage(JSON.stringify({ ...profile, isLoggedIn: true }))
        setAuth({
          state: STATE.HAS_VALUE,
          data: {
            isLogged: true,
            id: response.data.id,
            role: response.data.role,
            username: response.data.username,
          },
        })
      } catch (error) {
        setAuthSignUpStatusFormSubmit({ status: STATUS_API_POST.HAS_ERROR, message: error.data })
      }
    },
    [authModal.data, setAuth, setAuthSignUpStatusFormSubmit],
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
const Auth = {
  useChangeAuthForm,
  useChangeFlowAuthForm,
  useSignInSubmitAuthForm,
  useSignUpSubmitAuthForm,
  useLogOut,
}
export default Auth
