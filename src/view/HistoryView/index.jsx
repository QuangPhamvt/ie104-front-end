import { useTranslation } from 'react-i18next'
import { CartListHistoryComponent, SidebarHistoryComponent } from './components'
import './styles.scss'
import { Helmet } from 'react-helmet'
const HistoryView = () => {
  const { t } = useTranslation()
  return (
    <article
      style={{ height: '480px' }}
      className='mt-28 container mx-auto flex flex-col space-y-4'
    >
      <Helmet>
        <meta charSet='urf-8' />
        <title>IE104 FRONT END | HISTORY</title>
      </Helmet>
      <section className='py-4'>
        <h2>{t('HISTORY_VIEW.HISTORY_VIEW')}</h2>
      </section>
      <article className='w-full grid grid-cols-4 gap-x-8'>
        <section className='col-span-1 flex flex-col justify-center items-center'>
          <SidebarHistoryComponent />
        </section>
        <section className='col-span-3 flex flex-col justify-center items-center'>
          <CartListHistoryComponent />
        </section>
      </article>
    </article>
  )
}
export default HistoryView
