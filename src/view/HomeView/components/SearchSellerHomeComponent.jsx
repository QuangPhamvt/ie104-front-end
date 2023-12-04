import { useTranslation } from 'react-i18next'
import { ImShare2 } from 'react-icons/im'

export const SearchSellerHomeComponent = () => {
  const { t } = useTranslation()
  return (
    <article className='menu--bg h-36 '>
      <section className='container mx-auto px-4 flex space-x-6 justify-center items-center h-full'>
        <h2 className='text-gray-100 text-3xl font-normal'>{t('HOME_VIEW.SEARCH_SELLER')}</h2>
        <ImShare2 color='white' />
        <input
          className='w-2/5 px-4 py-3 border-1 border-solid border-gray-100 bg-gray-100  rounded-lg text-white'
          type='text'
          placeholder={t('HOME_VIEW.ENTER_ITEM_OR_USERNAME_YOU_ARE_LOOKING_FOR')}
          name=''
          id=''
        />
        <button className='font-bold text-base px-3 py-2 bg-transparent border-1 border-solid border-gray-100 text-gray-100 rounded-lg'>
          {t('HOME_VIEW.SEARCH_NOW')}
        </button>
      </section>
    </article>
  )
}
