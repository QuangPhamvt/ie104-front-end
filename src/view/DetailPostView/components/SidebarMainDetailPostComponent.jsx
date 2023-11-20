/* eslint-disable react/prop-types */
import { useRecoilValueLoadable } from 'recoil'
import { DetailProduct, getCategoriesSelector } from '../store'

export const ItemSidebarMainDetailPostComponent = (props) => {
  const { name, id } = props
  const { handleFindProductByCategory } = DetailProduct.useFindProductByCategory()
  return (
    <p
      onClick={(event) => {
        event.preventDefault()
        handleFindProductByCategory(id)
      }}
      className='text-gray-500 sidebar-item hover-cursor'
    >
      {name}
    </p>
  )
}
export const SidebarMainDetailPostComponent = () => {
  const {
    state,
    contents: { data },
  } = useRecoilValueLoadable(getCategoriesSelector)
  return (
    <aside className='flex flex-col space-y-2 items-end pr-12 pt-4 text-base'>
      {state === 'loading' ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          {data.map((items) => (
            <ItemSidebarMainDetailPostComponent
              key={items.id}
              id={items.id}
              name={items.name}
            />
          ))}
        </>
      )}
    </aside>
  )
}
