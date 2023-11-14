import { BrandImageComponent, ContentHeaderComponent } from './components'
import { useRecoilValue } from 'recoil'
import { authAtom } from '@/view/AuthView/store'
import { STATE } from '@/utilities'

const HeaderLayout = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <>
      {auth.state === STATE.HAS_VALUE && (
        <>
          <header className='w-screen h-28 flex items-center border-b-2 border-solid border-gray-200'>
            <section className='container mx-auto flex flex-row justify-between'>
              <BrandImageComponent />
              <ContentHeaderComponent />
            </section>
          </header>
        </>
      )}
    </>
  )
}
export default HeaderLayout
