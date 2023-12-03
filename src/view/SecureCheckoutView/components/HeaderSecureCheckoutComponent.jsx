import { useTranslation } from 'react-i18next'

export const HeaderSecureCheckoutComponent = () => {
  const { t } = useTranslation()
  return (
    <article className='mt-4 p-4 border-b-1 border-solid border-gray-600'>
      <h2 className='font-semibold'>{t('HEADER_SECURE_CHECKOUT.TITLE')}</h2>
    </article>
  )
}
