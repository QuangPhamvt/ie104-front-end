import { Outlet } from 'react-router-dom'
import { HeaderLayout } from '..'

// eslint-disable-next-line react-refresh/only-export-components
export { default as HeaderLayout } from './HeaderLayout'
export const Layout = () => {
  return (
    <div className='w-screen h-screen'>
      <HeaderLayout />
      <Outlet />
    </div>
  )
}
