import { useSetRecoilState, useRecoilValue } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, authModalAtom, authSignUpStepModalAtom, useAuth } from '../store'

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
  const { handleChangeForm } = useAuth()
  return (
    <>
      <section className='flex flex-col w-3/5 space-y-2 '>
        <label className=' text-xl text-gray-400'>Choose Bank:</label>
        <select
          onChange={handleChangeForm}
          className='p-2 rounded-md'
          name='arqId'
        >
          <option>Please choose one option</option>
          {ACQ_ID.map((item, code) => {
            return (
              <option
                key={code}
                onChange={handleChangeForm}
                style={{ backgroundImage: `url(${item.logo})` }}
                value={item.bin}
              >
                {item.name}
              </option>
            )
          })}
        </select>
      </section>
      <label className='w-3/5'>
        <p className='text-xl text-gray-400'>ID banks</p>
        <input
          type='text'
          name='accountNo'
          value={authModal.data.accountNo}
          onChange={handleChangeForm}
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
          className='p-4 w-2/5 border-1 border-solid border-black'
        >
          PREVIOUS
        </button>
        <button className='p-4 w-2/5 bg-orange-600'>OK</button>
      </section>
    </>
  )
}
