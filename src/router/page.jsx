import { useRecoilValue } from 'recoil'
import { STATE } from '@/utilities'
import { HomeView } from '@/view'
import { authAtom, useGetProfile } from '@/view/AuthView/store'

export const HomePage = () => {
  useGetProfile()
  const auth = useRecoilValue(authAtom)
  return (
    <>
      <>{auth.state === STATE.HAS_VALUE && <HomeView />}</>
    </>
  )
}
