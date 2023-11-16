import { GiMoneyStack } from 'react-icons/gi'

export const ItemListPaymentContentSecureCheckoutComponent = () => {
  return (
    <section className='flex flex-col space-y-2 '>
      <h4 className='inline-flex font-light'>
        from <p className='text-orange-500 ml-2'> Lunch box</p>
      </h4>
      <div className='flex flex-row justify-between '>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-light'>Brunch for 2 - Veg</h4>
          <div className='inline-flex'>
            <GiMoneyStack /> <p className='text-gray-400'>599</p>
          </div>
        </div>
        <div className='inline-flex items-center bg-gray-50 w-24 justify-between'>
          <button className='px-4 bg-gray-50'> - </button>
          <p>2</p>
          <button className='px-4 bg-gray-50'> + </button>
        </div>
      </div>
    </section>
  )
}
export const ListPaymentContentSecureCheckoutComponent = () => {
  return (
    <section className='flex flex-col space-y-8'>
      <ItemListPaymentContentSecureCheckoutComponent />
      <ItemListPaymentContentSecureCheckoutComponent />
    </section>
  )
}
export const BillDetailPaymentContentSecureCheckoutComponent = () => {
  return (
    <section className='flex flex-col space-y-4 font-thin'>
      <h4 className='font-light text-gray-400'>Bill details</h4>
      <div className='inline-flex flex-row  w-full justify-between text-gray-400'>
        <p>Items Total</p>
        <p>$790.0</p>
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
export const PaymentContentSecureCheckoutComponent = () => {
  return (
    <section className='px-8'>
      <section className='bg-gray-50 col-span-1 p-4 rounded-xl space-y-10'>
        <section className='mt-4 inline-flex w-full flex-row justify-between items-center'>
          <h2 style={{ fontWeight: 400 }}>Cart</h2>
          <p>item</p>
        </section>
        <ListPaymentContentSecureCheckoutComponent />
        <BillDetailPaymentContentSecureCheckoutComponent />
        <section className='inline-flex w-full flex-row justify-between items-center'>
          <h2 className='font-normal'>Total</h2>
          <p className='text-2xl'>$749.00</p>
        </section>
        <button className='w-full py-4 bg-orange-500 rounded-2xl'>
          <p className='text-xl text-white'>Processed to payment</p>
        </button>
      </section>
    </section>
  )
}
