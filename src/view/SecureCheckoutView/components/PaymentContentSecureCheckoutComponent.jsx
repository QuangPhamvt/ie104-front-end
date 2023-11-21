/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GiMoneyStack } from 'react-icons/gi'

export const ItemListPaymentContentSecureCheckoutComponent = (props) => {
  const { price, title, quantity } = props
  return (
    <section className='flex flex-col space-y-2 '>
      <h4 className='inline-flex font-light'>
        from <p className='text-orange-500 ml-2'> Lunch Box</p>
      </h4>
      <div className='flex flex-row justify-between items-end'>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-light'>{title}</h4>
          <div className='inline-flex'>
            <GiMoneyStack /> <p className='text-gray-400'>{price}</p>
          </div>
        </div>
        <div className='inline-flex items-center bg-gray-50 w-24 justify-between'>
          <button className='px-4 bg-gray-50'> - </button>
          <p>{quantity}</p>
          <button className='px-4 bg-gray-50'> + </button>
        </div>
      </div>
    </section>
  )
}
export const ListPaymentContentSecureCheckoutComponent = (props) => {
  const { cart_items } = props
  return (
    <section className='flex flex-col space-y-8'>
      {cart_items.map((item) => {
        return (
          <ItemListPaymentContentSecureCheckoutComponent
            key={item.product.product_id}
            price={item.product.price}
            title={item.product.title}
            quantity={item.quantity}
          />
        )
      })}
    </section>
  )
}
export const BillDetailPaymentContentSecureCheckoutComponent = (props) => {
  const { price } = props
  return (
    <section className='flex flex-col space-y-4 font-thin'>
      <h4 className='font-light text-gray-400'>Bill details</h4>
      <div className='inline-flex flex-row  w-full justify-between text-gray-400'>
        <p>Items Total</p>
        <p>${price}</p>
      </div>
      <div className='inline-flex flex-row  w-full justify-between text-gray-400'>
        <p>Delivery Fee</p>
        <p>0</p>
      </div>
      <div className='inline-flex w-full flex-row justify-between text-gray-400'>
        <p>Tax</p>
        <p>0</p>
      </div>
    </section>
  )
}
export const PaymentContentSecureCheckoutComponent = (props) => {
  const { cart_id = '', price = 0, cart_items = [] } = props
  return (
    <section className='px-8'>
      <section className='bg-gray-50 col-span-1 p-4 rounded-xl space-y-10'>
        <section className='mt-4 inline-flex w-full flex-row justify-between items-center'>
          <h2 style={{ fontWeight: 400 }}>Cart</h2>
          <p>item</p>
        </section>
        <ListPaymentContentSecureCheckoutComponent cart_items={cart_items} />
        <BillDetailPaymentContentSecureCheckoutComponent price={price} />
        <section className='inline-flex w-full flex-row justify-between items-center'>
          <h2 className='font-normal'>Total</h2>
          <p className='text-2xl'>${price}</p>
        </section>
        <button className='w-full py-4 bg-orange-500 rounded-2xl'>
          <p className='text-xl text-white'>Processed to payment</p>
        </button>
      </section>
    </section>
  )
}
