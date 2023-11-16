import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, Auth, authSignUpModalAtom, authSignUpStepModalAtom } from '../store'
export const AuthSignUpStepOneModalComponent = () => {
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { handleChangeAuthSignUpForm } = Auth.useChangeAuthSignUpForm()
  console.log(authSignUpModal.data)
  return (
    <>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Email Address</p>
        <input
          placeholder='email@example.com'
          type='text'
          name='email'
          value={authSignUpModal.data.email || ''}
          onChange={handleChangeAuthSignUpForm}
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
          value={authSignUpModal.data.password || ''}
          onChange={handleChangeAuthSignUpForm}
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
          value={authSignUpModal.data.password}
          onChange={handleChangeAuthSignUpForm}
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
