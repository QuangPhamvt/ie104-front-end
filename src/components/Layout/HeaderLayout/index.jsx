import { Outlet } from 'react-router-dom'

export const HeaderLayout = () => {
  return (
    <>
      <header>
        <nav>Navigation</nav>
      </header>
      <Outlet />
    </>
  )
}
