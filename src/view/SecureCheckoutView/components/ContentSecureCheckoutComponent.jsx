import { useRecoilValueLoadable } from 'recoil'
import { DetailContentSecureCheckoutComponent } from './DetailContentSecureCheckoutComponent'
import { PaymentContentSecureCheckoutComponent } from './PaymentContentSecureCheckoutComponent'
import { useParams } from 'react-router-dom'
import { findByCartIdSelector } from '../store'

export const ContentSecureCheckoutComponent = () => {
  const { cartId } = useParams()
  const { state, contents } = useRecoilValueLoadable(findByCartIdSelector(cartId))
  console.log(state)
  console.log(contents)
  return (
    <article className='grid grid-cols-3 gap-x-12'>
      {state === 'loading' && <p>Loading...</p>}
      {state === 'hasValue' && (
        <>
          <DetailContentSecureCheckoutComponent qr={contents.data[0].seller.qr} />
          <PaymentContentSecureCheckoutComponent
            price={contents.data[0].cart.price}
            cart_id={contents.data[0].cart.cart_id}
            cart_items={contents.data[0].cart.cart_items}
            status={contents.data[0].cart.status}
            seller_id={contents.data[0].seller.seller_id}
          />
        </>
      )}
    </article>
  )
}
