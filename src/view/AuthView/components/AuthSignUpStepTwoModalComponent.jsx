import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  authSignUpStepModalAtom,
  AUTH_SIGN_UP_STEP_MODEL,
  Auth,
  authSignUpModalAtom,
  authSignUpStatusFormSubmitAtom,
} from '../store'
import { STATUS_API_POST } from '@/utilities'

export const AuthSignUpStepTwoModalComponent = () => {
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { handleSignUpSubmitAuthForm } = Auth.useSignUpSubmitAuthForm()
  const { handleChangeAuthSignUpForm } = Auth.useChangeAuthSignUpForm()
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const authSignUpStatusFormSubmit = useRecoilValue(authSignUpStatusFormSubmitAtom)
  return (
    <>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Username</p>
        <input
          type='text'
          placeholder='username'
          name='username'
          value={authSignUpModal.data.username}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <section className='w-3/5 flex flex-row space-x-2'>
        <p className='text-xl text-gray-500 mr-2'>Role</p>
        <div className='flex flex-row justify-center items-center'>
          <input
            onChange={handleChangeAuthSignUpForm}
            id='BuyerSignUp'
            type='radio'
            name='role'
            value='buyer'
            style={{ borderColor: 'black' }}
          />
          <label
            htmlFor='BuyerSignUp'
            className='px-2'
          >
            Buyer
          </label>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <input
            onChange={handleChangeAuthSignUpForm}
            id='SellerSignUp'
            type='radio'
            name='role'
            value='seller'
            style={{ borderColor: 'black' }}
          />
          <label
            htmlFor='SellerSignUp'
            className='px-2'
          >
            Seller
          </label>
        </div>
      </section>
      {authSignUpStatusFormSubmit.status === STATUS_API_POST.HAS_ERROR && (
        <p style={{ color: 'red' }}>{authSignUpStatusFormSubmit.message}</p>
      )}
      <section className='w-3/5 flex flex-row justify-center space-x-2'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.ONE })
          }}
          className='px-4 py-1 text-lg text-gray-500 font-bold w-full border-1 border-solid border-black rounded'
        >
          PREVIOUS
        </button>
        {authSignUpModal.data.role === 'seller' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.THREE })
            }}
            className='px-4 py-1 text-lg font-bold text-white w-full bg-orange-500 rounded'
          >
            NEXT
          </button>
        ) : (
          <button
            onClick={handleSignUpSubmitAuthForm}
            className='px-4 py-1 text-lg font-bold text-white w-full bg-orange-500 rounded'
          >
            OK
          </button>
        )}
      </section>
    </>
  )
}
