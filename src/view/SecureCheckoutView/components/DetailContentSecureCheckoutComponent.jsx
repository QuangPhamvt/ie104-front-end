/* eslint-disable react/prop-types */
import { DeliveryAddressDetailContentSecureCheckoutComponent } from './DeliveryAddressDetailContentSecureCheckoutComponent'
import { useTranslation } from 'react-i18next'
export const QRCodePaymentSecureCheckoutComponent = (props) => {
  const { qr } = props
  const { t } = useTranslation()
  if (!qr) return null
  return (
    <section className='flex flex-col space-y-8'>
      <h2 className='inline-flex space-y-4 flex-col'>
        <p className='font-semibold'>{t('DETAIL_SECURE_CHECKOUT.QR_CODE')}</p>
        <div className='w-64 aspect-square border-1 border-solid border-black rounded overflow-hidden'>
          <img
            className='w-full aspect-square '
            src={qr.qrDataURL}
            alt=''
          />
        </div>
      </h2>
    </section>
  )
}
export const DetailContentSecureCheckoutComponent = (props) => {
  const { qr } = props
  return (
    <section className='flex flex-col col-span-2 space-y-8'>
      <DeliveryAddressDetailContentSecureCheckoutComponent />
      <QRCodePaymentSecureCheckoutComponent qr={qr} />
    </section>
  )
}
