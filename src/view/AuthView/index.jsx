import { useRecoilValue } from 'recoil'
import {
  authAtom,
  authModalStateAtom,
  authSignInStatusFormSubmitAtom,
  authSignUpStatusFormSubmitAtom,
  useGetProfile,
} from './store'
import { AUTH_MODAL_STATE, STATE, STATUS_API_POST } from '@/utilities'
import { AuthLoginModalComponent, AuthSignUpModalComponent } from './components'
import { LoadingView } from '../LoadingView'
import './style/index.scss'
import { Helmet } from 'react-helmet'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationComponent } from '@/components'

const AuthView = () => {
  useGetProfile()
  const authModalState = useRecoilValue(authModalStateAtom)
  const authSignUpStatusFormSubmit = useRecoilValue(authSignUpStatusFormSubmitAtom)
  const authSignInStatusFormSubmit = useRecoilValue(authSignInStatusFormSubmitAtom)
  const auth = useRecoilValue(authAtom)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (auth.state === STATE.HAS_VALUE) navigate('/')
  }, [auth.state])
  return (
    <main className='w-screen h-screen flex flex-row'>
      <NotificationComponent />
      <Helmet>
        <meta charSet='urf-8' />
        <title>IE104 FRONT END | LOGIN</title>
      </Helmet>
      <article className='layout--left'>
        {/* <section className='w-full h-full bg-gray-300 background--layout-left'></section> */}
        <img
          src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE104/frontend/bg-auth.png'
          alt=''
          className='w-full h-full background--layout-left'
        />
      </article>
      <article className='layout--right h-full flex justify-center items-center background--layout-right'>
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
