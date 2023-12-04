import { useRecoilValue } from 'recoil'
import { useTranslation } from 'react-i18next'
import { statusBuyerViewAtom, BuyerViewHook } from '../store'

/* eslint-disable react/prop-types */
const LIST_SIDEBAR_SELLER = [{ title: 'MANAGE_MY_ACCOUNT', items: ['MY_PROFILE', 'CHANGE_PROFILE'] }]
export const ItemsListSidebarSellerComponent = (props) => {
  const { t } = useTranslation()
  const { items = [] } = props
  const { handleChangeStatusContentBuyerView } = BuyerViewHook.useChangeStatusContentBuyerView()
  const statusBuyerView = useRecoilValue(statusBuyerViewAtom)
  return (
    <ul className='px-8 space-y-2'>
      {items.map((item) => {
        return (
          <p
            key={item}
            className={`${
              statusBuyerView === item ? 'text-orange-400' : 'text-gray-400'
            } cursor-pointer  sidebar--item`}
            onClick={() => handleChangeStatusContentBuyerView(item)}
          >
            {t(`SELLER_VIEW.SIDEBAR.${item}`)}
          </p>
        )
      })}
    </ul>
  )
}
export const ListSidebarBuyerComponent = (props) => {
  const { t } = useTranslation()
  const { items = [] } = props
  return (
    <>
      {items.map((items) => (
        <section
          key={items.title}
          className='flex flex-col space-y-4 mb-6'
        >
          <p className='text-black text-xl'>{t(`BUYER_VIEW.SIDEBAR.${items.title}`)}</p>
          <ItemsListSidebarSellerComponent
            key={items.title}
            items={items.items}
          />
        </section>
      ))}
    </>
  )
}
export const SidebarBuyerComponent = () => {
  return (
    <section className='w-full col-span-2 pl-4 pr-12'>
      <article className='border-r-1 border-solid border-gray-300 py-4 h-full'>
        <ListSidebarBuyerComponent items={LIST_SIDEBAR_SELLER} />
      </article>
    </section>
  )
}
