import { useTranslation } from 'react-i18next'

export const SearchLocationHomeComponent = () => {
  const { t } = useTranslation()
  return (
    <article className='flex flex-col space-y-10'>
      <section className='flex flex-row w-full space-x-4'>
        <label
          htmlFor=''
          className='w-4/5'
        >
          <input
            placeholder='Enter your delivery location'
            type='text'
            className='px-4 py-3 grow border-1 border-solid border-gray-400 w-full rounded-lg'
          />
        </label>
        <button className='px-3 py-2 rounded-lg bg-black text-white'>Get Started</button>
      </section>
      <section className='flex flex-col space-y-8'>
        <h3 className='font-normal'>{t('HOME_VIEW.POPULAR_CITES_IN_VIETNAM')}</h3>
        <ul className='flex flex-row space-x-12'>
          <li>
            <p className=' text-gray-300'>{t('HOME_VIEW.HCM')}</p>
          </li>
          <li>
            <p className='text-orange-300'>{t('HOME_VIEW.HN')}</p>
          </li>
          <li>
            <p className=' text-gray-300'>{t('HOME_VIEW.DN')}</p>
          </li>
          <li>
            <p className='text-orange-300'>{t('HOME_VIEW.CT')}</p>
          </li>
          <li>
            <p className=' text-gray-300'>{t('HOME_VIEW.HUE')}</p>
          </li>
        </ul>
      </section>
    </article>
  )
}
