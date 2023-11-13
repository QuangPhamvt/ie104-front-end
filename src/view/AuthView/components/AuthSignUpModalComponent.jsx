import { useRecoilValue } from 'recoil'
import { authModalAtom, useAuth } from '../store'

export const AuthSignUpModalComponent = () => {
  const authModal = useRecoilValue(authModalAtom)
  const { handleChangeForm, handleChangeFlowForm } = useAuth()
  return (
    <form className='flex flex-col space-y-5 p-4 w-full items-center'>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Email Address</p>
        <input
          type='text'
          name='email'
          value={authModal.data.email}
          onChange={handleChangeForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Password</p>
        <input
          type='password'
          name='password'
          value={authModal.data.password}
          onChange={handleChangeForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <button className='p-4 w-3/5 bg-orange-600'>Sign Up</button>
      <p className='font-sans'>
        Already Have An Account? <b onClick={handleChangeFlowForm}>Sign In</b>
      </p>
    </form>
  )
}
