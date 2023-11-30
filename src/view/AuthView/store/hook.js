import React from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  authAtom,
  authCheckAccountBankModalAtom,
  authModalStateAtom,
  authSignInModalAtom,
  authSignInStatusFormSubmitAtom,
  authSignUpModalAtom,
  authSignUpStatusFormSubmitAtom,
  districtAtom,
  wardAtom,
} from './atom'
import { AUTH_MODAL_STATE, AUTH_SIGN_UP_MODAL_STATE, ROLE, STATE, STATUS_API_POST, TYPE } from '@/utilities'
import { authApi } from '@/api'
import {
  getProfileLocalStorage,
  removeAccessTokenLocalStorage,
  removeProfileLocalStorage,
  removeRefreshTokenLocalStorage,
  setAccessTokenLocalStorage,
  setProfileLocalStorage,
  setRefreshTokenLocalStorage,
} from '@/utilities/localstorage'
import { jwtDecode } from 'jwt-decode'
import { checkIsMail, isExpired } from '@/utilities/fnc'
import { authCheckAccountBankSelector, getListProvinceSelector } from './selector'
import { dropDownUserDetailHeaderAtom } from '@/components/Layout/HeaderLayout/store'
import locationApi from '@/api/locationApi'
import { useNavigate } from 'react-router-dom'
import NotificationAction from '@/components/Notification/store/hook'

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
  React.useEffect(() => {
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
          province: data.province,
          district: data.district,
          ward: data.ward,
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
  const { handlePushNotificationItem } = NotificationAction.usePushNotificationItem()
  const handleSignInSubmitAuthForm = async () => {
    let response
    try {
      if (!checkIsMail(email) || !email || !password) throw { data: { message: 'Some thing wrong' } }
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
          province: profile.province,
          district: profile.district,
          ward: profile.ward,
        },
      })
      console.log(response.data)
      handlePushNotificationItem(TYPE.SUCCESS, 'Welcome to shop!')
    } catch (error) {
      console.log(error)
      setAuthSignInStatusFormSubmit({
        status: STATUS_API_POST.HAS_ERROR,
        message: 'Some thing wrong with password or email',
        data: undefined,
      })
      handlePushNotificationItem(TYPE.ERROR, 'Some thing wrong with password or email')
    }
  }
  return { handleSignInSubmitAuthForm }
}
export const useSignUpSubmitAuthForm = () => {
  const navigate = useNavigate()
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setAuthSignUpStatusFormSubmit = useSetRecoilState(authSignUpStatusFormSubmitAtom)
  const { handlePushNotificationItem } = NotificationAction.usePushNotificationItem()

  const handleSignUpSubmitAuthForm = async (event) => {
    event.preventDefault()
    try {
      let response
      setAuthSignUpStatusFormSubmit({ status: STATUS_API_POST.LOADING, data: undefined })
      if (authSignUpModal.data.role === ROLE.SELLER) {
        const { email, username, password, role, province, district, ward, acqId, accountNo, accountName } =
          authSignUpModal.data
        if (
          !email ||
          !username ||
          !password ||
          !role ||
          !province ||
          !district ||
          !ward ||
          !acqId ||
          !accountNo ||
          !accountName ||
          !checkIsMail(email)
        ) {
          throw { data: { message: 'Something not sign in form!' } }
        }

        response = await authApi.postSignUp({
          email,
          username,
          password,
          role,
          province,
          district,
          ward,
          acqId,
          accountNo,
          accountName,
        })
      }
      if (authSignUpModal.data.role === ROLE.BUYER) {
        const { email, username, password, role, province, district, ward } = authSignUpModal.data
        console.log(authSignUpModal.data)
        if (!email || !username || !password || !role || !province || !district || !ward || !checkIsMail(email)) {
          throw { data: { message: 'SomeThing not sign in form!' } }
        }
        response = await authApi.postSignUp({ email, username, password, role, province, district, ward })
      }
      if (!authSignUpModal.data.role) {
        throw { data: { message: 'Something not sign in form!' } }
      }
      setAuthSignUpStatusFormSubmit({
        status: STATUS_API_POST.HAS_VALUE,
        message: response.data.message,
      })
      navigate('/signup/redirect')
    } catch (error) {
      console.error(error)
      setAuthSignUpStatusFormSubmit({
        status: STATUS_API_POST.HAS_ERROR,
        message: error.data.message,
      })
      handlePushNotificationItem(TYPE.ERROR, error.data.message)
    }
  }
  return { handleSignUpSubmitAuthForm }
}

export const useLogOut = () => {
  const setAuth = useSetRecoilState(authAtom)
  const resetDropDownUserDetail = useResetRecoilState(dropDownUserDetailHeaderAtom)
  const logOut = () => {
    removeAccessTokenLocalStorage()
    removeRefreshTokenLocalStorage()
    removeProfileLocalStorage()
    setAuth({
      state: STATE.IDLE,
      data: {
        isLoggedIn: false,
        id: undefined,
        role: undefined,
        username: undefined,
      },
    })
    resetDropDownUserDetail()
    window.location.href = '/'
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
const useGetListDistrictSignUp = () => {
  const { state, contents } = useRecoilValueLoadable(getListProvinceSelector)
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setDistrict = useSetRecoilState(districtAtom)
  const handleGetListDistrictSignUp = async () => {
    // GET CODE PROVINCE
    let code_province
    if (state === 'hasValue') {
      for (let key in contents) {
        const province = contents[key]
        if (province.name === authSignUpModal.data.province) {
          code_province = province.code
        }
      }
      //LOADING
      setDistrict({ states: STATE.LOADING, data: [] })
      const response = await locationApi.getListDistrict({ code: code_province })
      console.log(response.data.districts)
      setDistrict({ states: STATE.HAS_VALUE, data: response.data.districts })
    }
  }
  return { handleGetListDistrictSignUp }
}

const useGetListWardSignUp = () => {
  const { states, data } = useRecoilValue(districtAtom)
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setWard = useSetRecoilState(wardAtom)
  const handleGetListWardSignUp = async () => {
    let code_district
    if (states === STATE.HAS_VALUE) {
      for (let key in data) {
        const district = data[key]
        if (district.name === authSignUpModal.data.district) {
          code_district = district.code
        }
      }
      //LOADING
      setWard({ state: STATE.LOADING, data: [] })
      const response = await locationApi.getListWard({ code: code_district })
      console.log(response.data)
      setWard({ state: STATE.HAS_VALUE, data: response.data.wards })
    }
  }
  return { handleGetListWardSignUp }
}

const Auth = {
  useChangeAuthSignInForm,
  useChangeAuthSignUpForm,
  useChangeFlowAuthForm,
  useSignInSubmitAuthForm,
  useSignUpSubmitAuthForm,
  useCheckoutAccountBank,
  useLogOut,
  useGetListDistrictSignUp,
  useGetListWardSignUp,
}
export default Auth
