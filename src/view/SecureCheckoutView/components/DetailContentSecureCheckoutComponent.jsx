import { DeliveryAddressDetailContentSecureCheckoutComponent } from './DeliveryAddressDetailContentSecureCheckoutComponent'
export const QRCodePaymentSecureCheckoutComponent = () => {
  return (
    <section className='flex flex-col space-y-8'>
      <h2 className='inline-flex space-x-2'>
        <p className='font-semibold'>QR Code to payment</p>
      </h2>
    </section>
  )
}
export const DetailContentSecureCheckoutComponent = () => {
  return (
    <section className='flex flex-col col-span-2 space-y-8'>
      <DeliveryAddressDetailContentSecureCheckoutComponent />
      <QRCodePaymentSecureCheckoutComponent />
    </section>
  )
}
