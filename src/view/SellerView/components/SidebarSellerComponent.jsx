import { useRecoilValue } from 'recoil'
import SellerViewHook from '../store/hook'
import { statusSellerViewAtom } from '../store'

/* eslint-disable react/prop-types */
const LIST_SIDEBAR_SELLER = [
  { title: 'Manage My Account', items: ['My Profile', 'Change Profile'] },
  { title: 'Manage Product List', items: ['Create Product', 'List Product'] },
  { title: 'Detail Order', items: ['Delivered', 'Processing', 'Notification'] },
]
export const ItemsListSidebarSellerComponent = (props) => {
  const { items = [] } = props
  const { handleChangeStatusContentSellerView } = SellerViewHook.useChangeStatusContentSellerView()
  const statusSellerView = useRecoilValue(statusSellerViewAtom)
  return (
    <ul className='px-8 space-y-2'>
      {items.map((item) => {
        return (
          <p
            key={item}
            className={`${statusSellerView === item ? 'text-orange-400' : 'text-gray-400'} cursor-pointer`}
            onClick={() => handleChangeStatusContentSellerView(item)}
          >
            {item}
          </p>
        )
      })}
    </ul>
  )
}
export const ListSidebarSellerComponent = (props) => {
  const { items = [] } = props
  return (
    <>
      {items.map((items) => (
        <section
          key={items.title}
          className='flex flex-col space-y-4 mb-6'
        >
          <p className='text-black text-xl'>{items.title}</p>
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
    <section className='w-full col-span-2 px-4'>
      <article className=''>
        <ListSidebarSellerComponent items={LIST_SIDEBAR_SELLER} />
      </article>
    </section>
  )
}
