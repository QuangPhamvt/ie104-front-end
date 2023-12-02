import { useRecoilValue, useResetRecoilState } from 'recoil'
import { Auth, authSignInModalAtom, authSignInStatusFormSubmitAtom } from '../store'
import { LoadingView } from '@/view/LoadingView'
import { STATUS_API_POST } from '@/utilities'
import { useTranslation } from 'react-i18next'

export const AuthLoginModalComponent = () => {
  const { t } = useTranslation()
  const authSignInModal = useRecoilValue(authSignInModalAtom)
  const { handleChangeFlowAuthForm } = Auth.useChangeFlowAuthForm()
  const resetAuthSignInForm = useResetRecoilState(authSignInModalAtom)
  const { handleChangeAuthSignInForm } = Auth.useChangeAuthSignInForm()
  const { handleSignInSubmitAuthForm } = Auth.useSignInSubmitAuthForm()
  const authSignInStatusFormSubmit = useRecoilValue(authSignInStatusFormSubmitAtom)
  return (
    <form className='flex flex-col items-center w-full p-4 space-y-5'>
      <LoadingView isLoading={authSignInStatusFormSubmit.state === STATUS_API_POST.LOADING} />
      <label className='w-3/5'>
        <input
          type='text'
          name='email'
          placeholder={t('AUTH_VIEW.EMAIL_ADDRESS')}
          value={authSignInModal.data.email}
          onChange={handleChangeAuthSignInForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
      </label>
      <label className='w-3/5'>
        <input
          placeholder={t('AUTH_VIEW.PASSWORD')}
          type='password'
          name='password'
          value={authSignInModal.data.password}
          onChange={handleChangeAuthSignInForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1'
          style={{ borderColor: 'black' }}
        />
      </label>
      <button
        onClick={(event) => {
          event.preventDefault()
          handleSignInSubmitAuthForm()
          resetAuthSignInForm()
        }}
        className='w-3/5 p-2 text-xl font-bold text-white bg-orange-500 btn-sign'
      >
        {t('AUTH_VIEW.SIGN_IN')}
      </button>
      <p className='font-sans'>
        {t('AUTH_VIEW.DON_HAVE_ACCOUNT')}{' '}
        <b
          className='cursor-pointer'
          onClick={handleChangeFlowAuthForm}
        >
          {t('AUTH_VIEW.SIGN_UP')}
        </b>
      </p>
    </form>
  )
}
