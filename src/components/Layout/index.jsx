import { Outlet } from 'react-router-dom'
import { HeaderLayout, NotificationComponent } from '..'
import { FooterLayout } from './FooterLayout'
import React from 'react'
import { updateLastMousePosition, handleOnMove, originPosition } from '@/config/mouseAnimation'
export { default as HeaderLayout } from './HeaderLayout'
import '../../config/mouseAnimation/styles.scss'

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
  return (
    <div className='flex flex-col w-screen h-fit'>
      <NotificationComponent />
      <HeaderLayout />
      <main
        id='body'
        className='h-screen overflow-y-auto'
      >
        <Outlet />
        <FooterLayout />
      </main>
    </div>
  )
}
export default Layout
