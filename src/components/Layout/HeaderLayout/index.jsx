import { STATE } from '@/utilities'
import { authAtom } from '@/view/AuthView/store/atom'
import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const HeaderLayout = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <div>
      {auth.state === STATE.HAS_VALUE && <nav>Navigation</nav>}
      <Outlet />
    </div>
  )
}
export default HeaderLayout
