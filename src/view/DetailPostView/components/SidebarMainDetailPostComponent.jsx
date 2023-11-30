/* eslint-disable react/prop-types */
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { DetailProduct, chooseCategoryAtom, getCategoriesSelector } from '../store'

export const ItemSidebarMainDetailPostComponent = (props) => {
  const { name, id } = props
  const { handleFindProductByCategory } = DetailProduct.useFindProductByCategory()
  const [chooseCategory, setChooseCategory] = useRecoilState(chooseCategoryAtom)
  return (
    <p
      onClick={(event) => {
        event.preventDefault()
        handleFindProductByCategory(id)
        setChooseCategory(id)
      }}
      className='text-gray-500 sidebar-item hover-cursor'
      style={{ color: `${chooseCategory === id ? 'orange' : 'rgb(107, 114, 128)'}` }}
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
    <aside className='flex flex-col items-end pt-4 pr-12 space-y-2 text-base'>
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
