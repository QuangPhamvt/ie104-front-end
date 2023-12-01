import { useRecoilValue } from 'recoil'
import SellerViewHook from '../store/hook'
import { statusSellerViewAtom } from '../store'
import { useTranslation } from 'react-i18next'

/* eslint-disable react/prop-types */
const LIST_SIDEBAR_SELLER = [
  { title: 'MANAGE_MY_ACCOUNT', items: ['MY_PROFILE', 'CHANGE_PROFILE'] },
  { title: 'MANAGE_PRODUCT_LIST', items: ['CREATE_PRODUCT', 'LIST_PRODUCT'] },
  { title: 'DETAIL_ORDER', items: ['DELIVERED', 'PROCESSING', 'NOTIFICATION'] },
]
export const ItemsListSidebarSellerComponent = (props) => {
  const { t } = useTranslation()
  const { items = [] } = props
  const { handleChangeStatusContentSellerView } = SellerViewHook.useChangeStatusContentSellerView()
  const statusSellerView = useRecoilValue(statusSellerViewAtom)
  return (
    <ul className='px-8 space-y-2'>
      {items.map((item) => {
        return (
          <p
            key={item}
            className={`${
              statusSellerView === item ? 'text-orange-400' : 'text-gray-400'
            } cursor-pointer  sidebar--item`}
            onClick={() => handleChangeStatusContentSellerView(item)}
          >
            {t(`SELLER_VIEW.SIDEBAR.${item}`)}
          </p>
        )
      })}
    </ul>
  )
}
export const ListSidebarSellerComponent = (props) => {
  const { t } = useTranslation()
  const { items = [] } = props
  return (
    <>
      {items.map((items) => (
        <section
          key={items.title}
          className='flex flex-col space-y-4 mb-6'
        >
          <p className='text-black text-xl'>{t(`SELLER_VIEW.SIDEBAR.${items.title}`)}</p>
          <ItemsListSidebarSellerComponent
            key={items.title}
            items={items.items}
          />
        </section>
      ))}
    </>
  )
}
export const SidebarSellerComponent = () => {
  return (
    <section className='w-full col-span-2 pl-4 pr-12'>
      <article className='border-r-1 border-solid border-gray-300 py-4 h-full'>
        <ListSidebarSellerComponent items={LIST_SIDEBAR_SELLER} />
      </article>
    </section>
  )
}
