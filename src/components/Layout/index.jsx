import { Outlet } from 'react-router-dom'
import { HeaderLayout, NotificationComponent } from '..'
import { FooterLayout } from './FooterLayout'

// eslint-disable-next-line react-refresh/only-export-components
export { default as HeaderLayout } from './HeaderLayout'
const Layout = () => {
  return (
    <div className='flex flex-col w-full overflow-y-auto'>
      <NotificationComponent />
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  )
}
export default Layout
