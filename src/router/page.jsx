import { useRecoilValue } from 'recoil'
import { STATE } from '@/utilities'
import { AuthView, HomeView } from '@/view'
import { authAtom } from '@/view/AuthView/store'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <>
      <>{auth.state === STATE.IDLE && <AuthView />}</>
      <>{auth.state === STATE.HAS_VALUE && <HomeView />}</>
      <Outlet />
    </>
  )
}
