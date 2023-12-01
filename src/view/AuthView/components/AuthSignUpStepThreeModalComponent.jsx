import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, Auth, authSignUpModalAtom, authSignUpStepModalAtom } from '../store'
import { ModalCheckAccountSellerComponent } from './ModalCheckAccountSellerComponent'
import { ACQ_ID } from '@/utilities'
import { useTranslation } from 'react-i18next'

export const AuthSignUpStepThreeModalComponent = () => {
  const { t } = useTranslation()
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
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
        <label className=' text-xl text-gray-500'>{t('AUTH_VIEW.CHOOSE_BANK')}</label>
        <select
          className='p-2 rounded-md'
          name='acqId'
          onChange={handleChangeAuthSignUpForm}
        >
          <option>{t('AUTH_VIEW.PLEASE_CHOICE_ONE')}</option>
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
        <p className='text-xl text-gray-500'>{t('AUTH_VIEW.ID_BANK')}</p>
        <input
          type='text'
          name='accountNo'
          onBlur={handleOpenCheckAccountModal}
          value={authSignUpModal.data.accountNo || ''}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-2 border-1 border-solid rounded-md'
          placeholder={t('AUTH_VIEW.ENTER_YOUR_BANK')}
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
          {t('AUTH_VIEW.PREVIOUS')}
        </button>
        <button
          onClick={handleSignUpSubmitAuthForm}
          className='px-4 py-1 text-lg font-bold text-white w-full bg-orange-500 rounded'
        >
          {t('AUTH_VIEW.OK')}
        </button>
      </section>
    </>
  )
}
