import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, authModalAtom, authSignUpStepModalAtom, useAuth } from '../store'
export const AuthSignUpStepOneModalComponent = () => {
  const authModal = useRecoilValue(authModalAtom)
  const { handleChangeForm } = useAuth()
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  return (
    <>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Email Address</p>
        <input
          placeholder='email@example.com'
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
          placeholder='*********'
          name='password'
          value={authModal.data.password}
          onChange={handleChangeForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Confirm Password</p>
        <input
          placeholder='Confirm password'
          type='password'
          name='password'
          value={authModal.data.password}
          onChange={handleChangeForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <button
        onClick={() => setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.TWO })}
        className='p-4 w-3/5 bg-orange-600'
      >
        NEXT
      </button>
    </>
  )
}
