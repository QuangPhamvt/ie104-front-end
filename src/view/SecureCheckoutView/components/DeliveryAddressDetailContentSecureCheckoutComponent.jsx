import { IoLocationSharp } from 'react-icons/io5'

export const DeliveryAddressDetailContentSecureCheckoutComponent = () => {
  return (
    <section className='flex flex-col space-y-8'>
      <h2 className='inline-flex space-x-2'>
        <IoLocationSharp
          size={28}
          color='orange'
        />
        <p className='font-semibold'>Delivery Address</p>
      </h2>
      <section className='p-8 h-32 bg-orange-500 opacity-95 w-2/5 border-1 border-solid rounded-2xl flex flex-col justify-between'>
        <IoLocationSharp
          size={28}
          color='white'
        />
        <p className='text-white font-normal'>Ho Chi Minh city, phuong 10, thu duc</p>
      </section>
    </section>
  )
}
