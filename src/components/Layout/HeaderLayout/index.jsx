import { BrandImageComponent, ContentHeaderComponent } from './components'
import { useRecoilValue } from 'recoil'
import { authAtom } from '@/view/AuthView/store'
import { STATE } from '@/utilities'
import { useGetProfile } from '@/view/AuthView/store'

const HeaderLayout = () => {
  useGetProfile()
  const auth = useRecoilValue(authAtom)
  return (
    <>
      {auth.state === STATE.HAS_VALUE && (
        <header
          style={{ top: 0, left: 0, zIndex: 9999 }}
          className='fixed z-50 flex items-center w-screen bg-white border-b-2 border-gray-200 border-solid h-28'
        >
          <section className='container flex flex-row justify-between mx-auto'>
            <BrandImageComponent />
            <ContentHeaderComponent />
          </section>
        </header>
      )}
    </>
  )
}
export default HeaderLayout
