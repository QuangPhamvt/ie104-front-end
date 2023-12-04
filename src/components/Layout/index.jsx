import { Outlet } from 'react-router-dom'
import { HeaderLayout, NotificationComponent } from '..'
import { FooterLayout } from './FooterLayout'
import React from 'react'
import { updateLastMousePosition, handleOnMove, originPosition } from '@/config/mouseAnimation'
export { default as HeaderLayout } from './HeaderLayout'
import SimpleBar from 'simplebar-react'
import '../../config/mouseAnimation/styles.scss'
import 'simplebar-react/dist/simplebar.min.css'
import { authAtom, useGetProfile } from '@/view/AuthView/store'
import { useRecoilValue } from 'recoil'
import { STATE } from '@/utilities'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () => {
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      handleOnMove(e)
    }
    const handleTouchMove = (e) => {
      handleOnMove(e.touches[0])
    }
    const handleBodyMouseLeave = () => {
      updateLastMousePosition(originPosition)
    }
    window.document.body.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    document.body.addEventListener('mouseleave', handleBodyMouseLeave)
  }, [])
  useGetProfile()
  const auth = useRecoilValue(authAtom)
  return (
    <>
      <>{auth.state === STATE.IDLE && <Navigate to='/login' />}</>
      <div className='flex flex-col w-screen h-fit '>
        <NotificationComponent />
        <HeaderLayout />
        <main
          id='body'
          className='h-screen '
        >
          <SimpleBar
            style={{ height: '100vh', marginTop: '112px' }}
            color=''
          >
            <Outlet />
            <FooterLayout />
          </SimpleBar>
        </main>
      </div>
    </>
  )
}
export default Layout
