import { useRecoilValue } from 'recoil'
import { authModalAtom } from './store'
import { AUTH_MODAL_STATE } from '@/utilities'
import { AuthLoginModalComponent, AuthSignUpModalComponent } from './components'

export const AuthView = () => {
  const authModal = useRecoilValue(authModalAtom)
  return (
    <main className='w-screen h-screen flex flex-row'>
      <article className='w-1/2 bg-gray-200'>background</article>
      <article className='w-1/2 h-full flex justify-center items-center'>
        <section
          className='bg-gray-200 p-2 space-y-6 flex flex-col items-center justify-center'
          style={{ width: '75%', height: '640px' }}
        >
          <h2 className='text-5xl'>FoodShop</h2>
          {authModal.state === AUTH_MODAL_STATE.LOG_IN && <AuthLoginModalComponent />}
          {authModal.state === AUTH_MODAL_STATE.SIGN_UP && <AuthSignUpModalComponent />}
        </section>
      </article>
    </main>
  )
}
