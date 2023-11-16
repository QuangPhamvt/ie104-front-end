import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, Auth, authModalAtom, authSignUpStepModalAtom } from '../store'
export const AuthSignUpStepOneModalComponent = () => {
  const authModal = useRecoilValue(authModalAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { handleChangeAuthForm } = Auth.useChangeAuthForm()
  return (
    <>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Email Address</p>
        <input
          placeholder='email@example.com'
          type='text'
          name='email'
          value={authModal.data.email || ''}
          onChange={handleChangeAuthForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Password</p>
        <input
          type='password'
          placeholder='*********'
          name='password'
          value={authModal.data.password || ''}
          onChange={handleChangeAuthForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Confirm Password</p>
        <input
          placeholder='Confirm password'
          type='password'
          name='password'
          value={authModal.data.password}
          onChange={handleChangeAuthForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <button
        onClick={() => setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.TWO })}
        className='px-4 py-2 w-3/5 bg-orange-500 text-xl font-bold text-white rounded'
      >
        NEXT
      </button>
    </>
  )
}
