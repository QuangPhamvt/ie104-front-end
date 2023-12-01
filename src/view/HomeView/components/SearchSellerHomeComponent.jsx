import { useTranslation } from 'react-i18next'
import { ImShare2 } from 'react-icons/im'

export const SearchSellerHomeComponent = () => {
  const { t } = useTranslation()
  return (
    <article className='bg-orange-500 h-36 '>
      <section className='container mx-auto px-4 flex space-x-6 justify-center items-center h-full'>
        <h2 className='text-white font-normal'>{t('HOME_VIEW.SEARCH_SELLER')}</h2>
        <ImShare2 color='white' />
        <input
          className='w-2/5 px-4 py-2 border-1 border-solid border-white bg-transparent rounded-lg text-white'
          type='text'
          placeholder={t('HOME_VIEW.ENTER_ITEM_OR_USERNAME_YOU_ARE_LOOKING_FOR')}
          name=''
          id=''
        />
        <button className='font-bold text-base px-4 py-2 bg-black text-white rounded-lg'>
          {t('HOME_VIEW.SEARCH_NOW')}
        </button>
      </section>
    </article>
  )
}
