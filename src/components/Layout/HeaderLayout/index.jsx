import { BrandImageComponent, ContentHeaderComponent } from './components'
import { useRecoilValue } from 'recoil'
import { authAtom } from '@/view/AuthView/store'
import { STATE } from '@/utilities'
import { useGetProfile } from '@/view/AuthView/store'
import './styles/index.scss'
import React from 'react'

const HeaderLayout = () => {
  useGetProfile()
  const auth = useRecoilValue(authAtom)
  const clientHeight = React.useRef(document.documentElement.clientHeight)
  const scrollTop = React.useRef(document.documentElement.scrollTop)
  const scrollHeight = React.useRef(document.documentElement.scrollHeight)
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    const getPercentHeight = () => {
      clientHeight.current = document.documentElement.clientHeight
      scrollTop.current = document.documentElement.scrollTop
      scrollHeight.current = document.documentElement.scrollHeight
      setWidth((scrollTop.current / (scrollHeight.current - clientHeight.current)) * 100)
    }
    window.addEventListener('scroll', getPercentHeight)
  }, [])

  return (
    <>
      {auth.state === STATE.HAS_VALUE && (
        <header
          style={{ top: 0, left: 0, zIndex: 9999 }}
          className='animate-fadeIn fixed z-50 flex flex-col items-center justify-center w-screen bg-amber-500 border-b-1 border-gray-200 border-solid h-24 flex-wrap'
        >
          <section className='container flex flex-row justify-between mx-auto w-screen'>
            <BrandImageComponent />
            <ContentHeaderComponent />
          </section>
          <section className='h-2 w-full top-24 absolute '>
            <div
              className='h-1 rounded'
              style={{
                width: `${width}%`,
                backgroundColor: '#4158D0',
                backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
              }}
            ></div>
          </section>
        </header>
      )}
    </>
  )
}
export default HeaderLayout
