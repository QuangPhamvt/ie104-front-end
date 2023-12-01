import { useRecoilState } from 'recoil'
import { AUTH_SIGN_UP_STEP_MODEL, authSignUpStepModalAtom, Auth } from '../store'
import { AuthSignUpStepOneModalComponent } from './AuthSignUpStepOneModalComponent'
import { AuthSignUpStepTwoModalComponent } from './AuthSignUpStepTwoModalComponent'
import { AuthSignUpStepThreeModalComponent } from './AuthSignUpStepThreeModalComponent'
const AuthSignUpStepModalComponent = {
  [AUTH_SIGN_UP_STEP_MODEL.ONE]: () => <AuthSignUpStepOneModalComponent />,
  [AUTH_SIGN_UP_STEP_MODEL.TWO]: () => <AuthSignUpStepTwoModalComponent />,
  [AUTH_SIGN_UP_STEP_MODEL.THREE]: () => <AuthSignUpStepThreeModalComponent />,
}
import '../style/index.scss'
import { useTranslation } from 'react-i18next'
export const AuthSignUpModalComponent = () => {
  const { t } = useTranslation()
  const [authSignUpStepModal] = useRecoilState(authSignUpStepModalAtom)
  const { handleChangeFlowAuthForm } = Auth.useChangeFlowAuthForm()
  return (
    <form className='flex flex-col space-y-5 p-4 w-full items-center'>
      {AuthSignUpStepModalComponent[authSignUpStepModal.step]()}
      <p className='modal--auth__changeFlow font-sans'>
        {t('AUTH_VIEW.ALREADY_HAVE_ACCOUNT')} <b onClick={handleChangeFlowAuthForm}>{t('AUTH_VIEW.SIGN_IN')}</b>
      </p>
    </form>
  )
}
