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
    <form className='flex flex-col space-y-5 p-4 w-full items-center'>
      <LoadingView isLoading={authSignInStatusFormSubmit.state === STATUS_API_POST.LOADING} />
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Email Address</p>
        <input
          type='text'
          name='email'
          placeholder='email@example.com'
          value={authSignInModal.data.email}
          onChange={handleChangeAuthSignInForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Password</p>
        <input
          placeholder='Password'
          type='password'
          name='password'
          value={authSignInModal.data.password}
          onChange={handleChangeAuthSignInForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      {authSignInStatusFormSubmit.status === STATUS_API_POST.HAS_ERROR && (
        <p style={{ color: 'red' }}>{authSignInStatusFormSubmit.message}</p>
      )}
      <button
        onClick={(event) => {
          event.preventDefault()
          handleSignInSubmitAuthForm()
          resetAuthSignInForm()
        }}
        className='p-2 w-3/5 bg-orange-500 text-white font-bold text-xl'
      >
        Sign In
      </button>
      <p className='font-sans'>
        Don&rsquo;t have An Account? <b onClick={handleChangeFlowAuthForm}>SignUp</b>
      </p>
    </form>
  )
}
