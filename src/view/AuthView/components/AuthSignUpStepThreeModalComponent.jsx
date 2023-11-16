import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, Auth, authModalAtom, authSignUpStepModalAtom } from '../store'

const ACQ_ID = [
  {
    code: 'ICB',
    name: 'Ngân hàng TMCP Công thương Việt Nam',
    bin: '970415',
    logo: 'https://api.vietqr.io/img/ICB.png',
  },
  {
    code: 'VCB',
    name: 'Ngân hàng TMCP Ngoại Thương Việt Nam',
    bin: '970436',
    logo: 'https://api.vietqr.io/img/VCB.png',
  },
  {
    code: 'BIDV',
    name: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam',
    bin: '970418',
    logo: 'https://api.vietqr.io/img/BIDV.png',
  },
  {
    code: 'MB',
    name: 'Ngân hàng TMCP Quân đội',
    bin: '970422',
    logo: 'https://api.vietqr.io/img/MB.png',
  },
  {
    code: 'TCB',
    name: 'Ngân hàng TMCP Kỹ thương Việt Nam',
    bin: '970407',
    logo: 'https://api.vietqr.io/img/TCB.png',
  },
]
export const AuthSignUpStepThreeModalComponent = () => {
  const authModal = useRecoilValue(authModalAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { handleSignUpSubmitAuthForm } = Auth.useSignUpSubmitAuthForm()
  const { handleChangeAuthForm } = Auth.useChangeAuthForm()
  console.log(authModal.data)
  return (
    <>
      <section className='flex flex-col w-3/5 space-y-2 '>
        <label className=' text-xl text-gray-500'>Choose Bank:</label>
        <select
          className='p-2 rounded-md'
          name='arqId'
          onChange={handleChangeAuthForm}
        >
          <option>Please choose one option</option>
          {ACQ_ID.map((item, code) => {
            return (
              <option
                key={code}
                value={item.bin || ''}
              >
                {item.name}
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
          value={authModal.data.accountNo || ''}
          onChange={handleChangeAuthForm}
          className='w-full px-4 py-2 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>
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
