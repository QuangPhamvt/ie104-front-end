import { useRecoilValue, useResetRecoilState } from 'recoil'
import { Auth, authSignInModalAtom, authSignInStatusFormSubmitAtom } from '../store'
import { LoadingView } from '@/view/LoadingView'
import { STATUS_API_POST } from '@/utilities'

export const AuthLoginModalComponent = () => {
  const authSignInModal = useRecoilValue(authSignInModalAtom)
  const { handleChangeFlowAuthForm } = Auth.useChangeFlowAuthForm()
  const resetAuthSignInForm = useResetRecoilState(authSignInModalAtom)
  const { handleChangeAuthSignInForm } = Auth.useChangeAuthSignInForm()
  const { handleSignInSubmitAuthForm } = Auth.useSignInSubmitAuthForm()
  const authSignInStatusFormSubmit = useRecoilValue(authSignInStatusFormSubmitAtom)
  return (
    <form className='flex flex-col items-center w-full p-4 space-y-5'>
      <LoadingView isLoading={authSignInStatusFormSubmit.state === STATUS_API_POST.LOADING} />
      <label className='w-3/5'>
        <input
          type='text'
          name='email'
          placeholder='Email Address'
          value={authSignInModal.data.email}
          onChange={handleChangeAuthSignInForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <input
          placeholder='Password'
          type='password'
          name='password'
          value={authSignInModal.data.password}
          onChange={handleChangeAuthSignInForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
      </label>
      <button
        onClick={(event) => {
          event.preventDefault()
          handleSignInSubmitAuthForm()
          resetAuthSignInForm()
        }}
        className='w-3/5 p-2 text-xl font-bold text-white bg-orange-500 btn-sign'
      >
        Sign In
      </button>
      <p className='font-sans'>
        Don&rsquo;t have An Account?{' '}
        <b onClick={handleChangeFlowAuthForm}>
          <a href='#'>Sign Up</a>
        </b>
      </p>
    </form>
  )
}
