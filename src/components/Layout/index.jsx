import { Outlet } from 'react-router-dom'
import { HeaderLayout } from '..'
import { FooterLayout } from './FooterLayout'

// eslint-disable-next-line react-refresh/only-export-components
export { default as HeaderLayout } from './HeaderLayout'
export const Layout = () => {
  return (
    <div className='flex flex-col w-full overflow-y-auto'>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  )
}
