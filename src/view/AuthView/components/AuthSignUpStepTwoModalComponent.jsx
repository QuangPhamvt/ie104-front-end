import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authSignUpStepModalAtom, AUTH_SIGN_UP_STEP_MODEL, useAuth, authModalAtom } from '../store'

export const AuthSignUpStepTwoModalComponent = () => {
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const authModal = useRecoilValue(authModalAtom)
  const { handleChangeForm } = useAuth()
  console.log(authModal)
  return (
    <>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>Username</p>
        <input
          type='text'
          placeholder='username'
          name='password'
          value={authModal.data.username}
          onChange={handleChangeForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
      <section className='w-3/5 flex flex-row space-x-2'>
        <p className='text-xl text-gray-400 mr-2'>Role</p>
        <div className='flex flex-row justify-center items-center'>
          <input
            onChange={handleChangeForm}
            defaultChecked
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
            onChange={handleChangeForm}
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
      <section className='w-3/5 flex flex-row justify-center space-x-6'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.ONE })
          }}
          className='p-4 w-2/5 border-1 border-solid border-black'
        >
          PREVIOUS
        </button>
        {authModal.data.role === 'seller' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.THREE })
            }}
            className='p-4 w-2/5 bg-orange-600'
          >
            NEXT
          </button>
        ) : (
          <button className='p-4 w-2/5 bg-orange-600'>OK</button>
        )}
      </section>
    </>
  )
}
