import { useRecoilValue } from 'recoil'
import { authModalStateAtom, authSignInStatusFormSubmitAtom, authSignUpStatusFormSubmitAtom } from './store'
import { AUTH_MODAL_STATE, STATUS_API_POST } from '@/utilities'
import { AuthLoginModalComponent, AuthSignUpModalComponent } from './components'
import { LoadingView } from '../LoadingView'
import './style/index.scss'
import { Helmet } from 'react-helmet'

const AuthView = () => {
  const authModalState = useRecoilValue(authModalStateAtom)
  const authSignUpStatusFormSubmit = useRecoilValue(authSignUpStatusFormSubmitAtom)
  const authSignInStatusFormSubmit = useRecoilValue(authSignInStatusFormSubmitAtom)
  return (
    <main className='w-screen h-screen flex flex-row'>
      <Helmet>
        <meta charSet='urf-8' />
        <title>IE104 FRONT END | LOGIN</title>
      </Helmet>
      <article
        className='layout--left'
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <section className='w-full h-full bg-gray-300 background--layout-left'></section>
      </article>
      <article
        className='layout--right h-full flex justify-center items-center'
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <section
          className='p-2 layout--right--content space-y-6 flex flex-col items-center justify-center rounded-2xl modal--auth-layout shadow-xl'
          style={{ height: '540px', backgroundColor: '#EBE4D1' }}
        >
          <h2 className='text-5xl'>FoodShop</h2>
          {authModalState === AUTH_MODAL_STATE.LOG_IN && <AuthLoginModalComponent />}
          {authModalState === AUTH_MODAL_STATE.SIGN_UP && <AuthSignUpModalComponent />}
        </section>
      </article>
      <LoadingView
        isLoading={
          authSignUpStatusFormSubmit.status === STATUS_API_POST.LOADING ||
          authSignInStatusFormSubmit.status === STATUS_API_POST.LOADING
        }
      />
    </main>
  )
}

export default AuthView
