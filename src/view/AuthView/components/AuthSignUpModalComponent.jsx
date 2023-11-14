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
export const AuthSignUpModalComponent = () => {
  const [authSignUpStepModal] = useRecoilState(authSignUpStepModalAtom)
  const { handleChangeFlowAuthForm } = Auth.useChangeFlowAuthForm()
  return (
    <form className='flex flex-col space-y-5 p-4 w-full items-center'>
      {AuthSignUpStepModalComponent[authSignUpStepModal.step]()}
      <p className='font-sans'>
        Already Have An Account? <b onClick={handleChangeFlowAuthForm}>Sign In</b>
      </p>
    </form>
  )
}
