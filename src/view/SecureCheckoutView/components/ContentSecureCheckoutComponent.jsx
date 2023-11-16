import { DetailContentSecureCheckoutComponent } from './DetailContentSecureCheckoutComponent'
import { PaymentContentSecureCheckoutComponent } from './PaymentContentSecureCheckoutComponent'

export const ContentSecureCheckoutComponent = () => {
  return (
    <article className='grid grid-cols-3 gap-x-12'>
      <DetailContentSecureCheckoutComponent />
      <PaymentContentSecureCheckoutComponent />
    </article>
  )
}
