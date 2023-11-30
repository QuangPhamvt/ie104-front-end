import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, Auth, authSignUpModalAtom, authSignUpStepModalAtom } from '../store'
import React from 'react'
export const AuthSignUpStepOneModalComponent = () => {
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { handleChangeAuthSignUpForm } = Auth.useChangeAuthSignUpForm()
  const [confirmPass, setConfirmPass] = React.useState('')
  const [isComparePass, setIsComparePass] = React.useState('idle')
  console.log(authSignUpModal.data)
  return (
    <>
      <label className='w-3/5'>
        <input
          placeholder='Email Address'
          type='text'
          name='email'
          value={authSignUpModal.data.email || ''}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={authSignUpModal.data.password || ''}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <input
          placeholder='Confirm password'
          type='password'
          name='password'
          value={confirmPass}
          onChange={(event) => {
            setConfirmPass(event.target.value)
          }}
          onBlur={() => {
            if (confirmPass === authSignUpModal.data.password) {
              setIsComparePass('hasTrue')
            }
            if (confirmPass !== authSignUpModal.data.password) {
              setIsComparePass('hasFalse')
            }
          }}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
        {isComparePass === 'hasTrue' && <p style={{ color: 'green' }}>Passwords match</p>}
        {isComparePass === 'hasFalse' && <p style={{ color: 'red' }}>Passwords must match</p>}
      </label>
      <button
        onClick={() => setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.TWO })}
        className='w-3/5 px-4 py-2 text-xl font-bold text-white bg-orange-500 rounded btn-sign'
      >
        NEXT
      </button>
    </>
  )
}
