import { useRecoilValue } from 'recoil'
import { ContentSellerComponent, SidebarSellerComponent } from './components'
import { authAtom } from '../AuthView/store'
import { ROLE } from '@/utilities'
import { Navigate } from 'react-router-dom'
import './styles/index.scss'

const SellerView = () => {
  const {
    data: { isLoggedIn, role },
  } = useRecoilValue(authAtom)
  return (
    <>
      {isLoggedIn && role === ROLE.SELLER ? (
        <main className='container mx-auto mt-32 grid grid-cols-7 justify-items-center'>
          <SidebarSellerComponent />
          <ContentSellerComponent />
        </main>
      ) : (
        <Navigate to='/' />
      )}
    </>
  )
}
export default SellerView
