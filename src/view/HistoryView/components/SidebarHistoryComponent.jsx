import { useTranslation } from 'react-i18next'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { sidebarHistoryState } from '../store/atom'

export const SidebarHistoryComponent = () => {
  const { t } = useTranslation()
  const { status } = useRecoilValue(sidebarHistoryState)
  const setSidebarHistory = useSetRecoilState(sidebarHistoryState)
  return (
    <article className='w-full px-4 py-8 h-full border-r-1 border-solid border-gray-200'>
      <section className='flex flex-col space-y-2'>
        <h4 className='text-xl'>{t('HISTORY_VIEW.MANAGE_CART_ORDER')}</h4>
        <ul className='pl-4 w-full flex flex-col space-y-2 text-gray-500'>
          <li>
            <p
              className={`${status === 'CART_LIST' ? 'text-orange-500' : ''} cursor-pointer`}
              onClick={() => {
                setSidebarHistory({ status: 'CART_LIST' })
              }}
            >
              {t('HISTORY_VIEW.CART_LIST')}
            </p>
          </li>
          <li>
            <p
              className={`${status === 'HAVE_ORDERED' ? 'text-orange-500' : ''} cursor-pointer`}
              onClick={() => {
                setSidebarHistory({ status: 'HAVE_ORDERED' })
              }}
            >
              {t('HISTORY_VIEW.HAVE_ORDERED')}
            </p>
          </li>
        </ul>
      </section>
    </article>
  )
}
