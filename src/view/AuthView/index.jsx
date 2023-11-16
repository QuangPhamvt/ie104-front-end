import { useRecoilValue } from 'recoil'
import { authModalAtom, authSignInStatusFormSubmitAtom, authSignUpStatusFormSubmitAtom } from './store'
import { AUTH_MODAL_STATE, STATUS_API_POST } from '@/utilities'
import { AuthLoginModalComponent, AuthSignUpModalComponent } from './components'
import { LoadingView } from '../LoadingView'

export const AuthView = () => {
  const authModal = useRecoilValue(authModalAtom)
  const authSignUpStatusFormSubmit = useRecoilValue(authSignUpStatusFormSubmitAtom)
  const authSignInStatusFormSubmit = useRecoilValue(authSignInStatusFormSubmitAtom)
  return (
    <main className='w-screen h-screen flex flex-row'>
      <article
        className='w-1/2'
        style={{ backgroundColor: '#F99417' }}
      >
        <img
          className='object-cover w-full h-full'
          // src='https://revx.io/storage/2021/08/fast-delivery-scooter-rides-out-smartphone-delivery-concept-online-ordering-food-delivery-last-mile-template-banner-3d-illustration-3d-render-scaled.jpg'
          alt=''
        />
      </article>
      <article
        className='w-1/2 h-full flex justify-center items-center'
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <section
          className='p-2 space-y-6 flex flex-col items-center justify-center rounded-2xl'
          style={{ width: '60%', height: '540px', backgroundColor: '#EBE4D1' }}
        >
          <h2 className='text-5xl'>FoodShop</h2>
          {authModal.state === AUTH_MODAL_STATE.LOG_IN && <AuthLoginModalComponent />}
          {authModal.state === AUTH_MODAL_STATE.SIGN_UP && <AuthSignUpModalComponent />}
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
