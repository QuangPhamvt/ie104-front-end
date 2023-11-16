import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  AUTH_SIGN_UP_STEP_MODEL,
  Auth,
  authSignUpModalAtom,
  authSignUpStatusFormSubmitAtom,
  authSignUpStepModalAtom,
} from '../store'
import { ModalCheckAccountSellerComponent } from './ModalCheckAccountSellerComponent'
import { ACQ_ID, STATUS_API_POST } from '@/utilities'

export const AuthSignUpStepThreeModalComponent = () => {
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { message, status } = useRecoilValue(authSignUpStatusFormSubmitAtom)
  const { handleSignUpSubmitAuthForm } = Auth.useSignUpSubmitAuthForm()
  const { handleChangeAuthSignUpForm } = Auth.useChangeAuthSignUpForm()
  const { handleOpenCheckAccountModal } = Auth.useCheckoutAccountBank()
  console.log(authSignUpModal.data)
  return (
    <>
      <ModalCheckAccountSellerComponent
        acqId={authSignUpModal.data.acqId}
        accountNo={authSignUpModal.data.accountNo}
      />
      <section className='flex flex-col w-3/5 space-y-2 '>
        <label className=' text-xl text-gray-500'>Choose Bank:</label>
        <select
          className='p-2 rounded-md'
          name='acqId'
          onChange={handleChangeAuthSignUpForm}
        >
          <option>Please choose one option</option>
          {ACQ_ID.map((item, code) => {
            return (
              <option
                key={code}
                value={item.bin || ''}
              >
                <div>
                  {item.shortName} -- {item.name}
                </div>
              </option>
            )
          })}
        </select>
      </section>
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>ID banks</p>
        <input
          type='text'
          name='accountNo'
          onBlur={handleOpenCheckAccountModal}
          value={authSignUpModal.data.accountNo || ''}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-2 border-1 border-solid rounded-md'
          placeholder='enter your id banks'
          style={{ borderColor: 'black' }}
        />
      </label>
      {status === STATUS_API_POST.HAS_ERROR && <p style={{ color: 'red' }}>{message}</p>}
      <section className='w-3/5 flex flex-row justify-center space-x-6'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.TWO })
          }}
          className='px-4 py-1 text-lg text-gray-500 font-bold w-full border-1 border-solid border-black rounded'
        >
          PREVIOUS
        </button>
        <button
          onClick={handleSignUpSubmitAuthForm}
          className='px-4 py-1 text-lg font-bold text-white w-full bg-orange-500 rounded'
        >
          OK
        </button>
      </section>
    </>
  )
}
