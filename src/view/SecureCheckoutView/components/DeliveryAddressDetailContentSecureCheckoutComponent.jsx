import { authAtom } from '@/view/AuthView/store'
import { IoLocationSharp } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import { useTranslation } from 'react-i18next'

export const DeliveryAddressDetailContentSecureCheckoutComponent = () => {
  const auth = useRecoilValue(authAtom)
  const { t } = useTranslation()
  const {
    data: { province, district, ward },
  } = auth
  return (
    <section className='flex flex-col space-y-8'>
      <h2 className='inline-flex space-x-2'>
        <IoLocationSharp
          size={28}
          color='orange'
        />
        <p className='font-semibold'>{t('DELIVERY_SECURE_CHECKOUT.ADDRESS')}</p>
      </h2>
      <section className='p-4 h-32 bg-orange-500 opacity-95 w-2/5 border-1 border-solid rounded-2xl flex flex-col justify-around '>
        <IoLocationSharp
          size={28}
          color='white'
        />
        <p className='text-white font-normal'>{`${province}, ${district}, ${ward}`}</p>
      </section>
    </section>
  )
}
