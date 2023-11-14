import { useRecoilValue } from 'recoil'
import { Auth, authModalAtom, authSignInStatusFormSubmitAtom } from '../store'
import { LoadingView } from '@/view/LoadingView'
import { STATUS_API_POST } from '@/utilities'

export const AuthLoginModalComponent = () => {
  const authModal = useRecoilValue(authModalAtom)
  const { handleChangeFlowAuthForm } = Auth.useChangeFlowAuthForm()
  const { handleChangeAuthForm } = Auth.useChangeAuthForm()
  const { handleSignInSubmitAuthForm } = Auth.useSignInSubmitAuthForm()
  const authSignInStatusFormSubmit = useRecoilValue(authSignInStatusFormSubmitAtom)
  return (
    <form className='flex flex-col space-y-5 p-4 w-full items-center'>
      <LoadingView isLoading={authSignInStatusFormSubmit.state === STATUS_API_POST.LOADING} />
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Email Address</p>
        <input
          type='text'
          name='email'
          placeholder='email@example.com'
          value={authModal.data.email}
          onChange={handleChangeAuthForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Password</p>
        <input
          placeholder='Password'
          type='password'
          name='password'
          value={authModal.data.password}
          onChange={handleChangeAuthForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <button
        onClick={handleSignInSubmitAuthForm}
        className='p-4 w-3/5 bg-orange-600'
      >
        Sign In
      </button>
      <p className='font-sans'>
        Don&rsquo;t have An Account? <b onClick={handleChangeFlowAuthForm}>SignUp</b>
      </p>
    </form>
  )
}
