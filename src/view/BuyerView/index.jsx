import { useRecoilValue } from 'recoil'
import { authAtom } from '../AuthView/store'
import { ROLE } from '@/utilities'
import { Navigate } from 'react-router-dom'
import './styles/index.scss'
import { Helmet } from 'react-helmet'
import { SidebarBuyerComponent } from './components'
import { ContentBuyerComponent } from './components/ContentBuyerComponent'

const BuyerView = () => {
  const {
    data: { isLoggedIn, role },
  } = useRecoilValue(authAtom)
  return (
    <>
      {isLoggedIn && role === ROLE.BUYER ? (
        <main className='container mx-auto mt-32 grid grid-cols-7 justify-items-center'>
          <Helmet>
            <meta charSet='urf-8' />
            <title>IE104 FRONT END | PROFILE</title>
          </Helmet>
          <SidebarBuyerComponent />
          <ContentBuyerComponent />
        </main>
      ) : (
        <Navigate to='/' />
      )}
    </>
  )
}
export default BuyerView
