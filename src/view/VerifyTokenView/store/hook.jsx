import { useSetRecoilState } from 'recoil'
import { postCreateAccountState } from '.'
import { STATE, setAccessTokenLocalStorage, setProfileLocalStorage, setRefreshTokenLocalStorage } from '@/utilities'
import { authApi } from '@/api'
import { jwtDecode } from 'jwt-decode'
import { authAtom } from '@/view/AuthView/store'
import { useNavigate } from 'react-router-dom'

const useCreateAccountUseToken = () => {
  const setPostCreateAccountState = useSetRecoilState(postCreateAccountState)
  const setAuth = useSetRecoilState(authAtom)
  const navigate = useNavigate()
  const handleCreateAccountUseToken = async (token) => {
    try {
      if (!token) throw { data: { message: 'Not have token' } }
      setPostCreateAccountState({ state: STATE.LOADING, message: null })
      const { data } = await authApi.postSignUpVerify({ token })
      setPostCreateAccountState({ state: STATE.HAS_VALUE, message: data.message })
      setAccessTokenLocalStorage(data.data.access_token)
      setRefreshTokenLocalStorage(data.data.refresh_token)
      const profile = jwtDecode(data.data.access_token)
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
      navigate('/dashboard')
    } catch (error) {
      console.error(error.data)
      setPostCreateAccountState({ state: STATE.HAS_ERROR, message: null })
    }
  }
  return { handleCreateAccountUseToken }
}
const VerifyTokenAction = {
  useCreateAccountUseToken,
}
export default VerifyTokenAction
