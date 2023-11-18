import { useRecoilValue, useSetRecoilState } from 'recoil'
import { categoriesAtom } from '..'
import { createProductFormSelectorFamily } from '../store/selector'

export const CategoriesFieldCreateProductFormComponent = () => {
  const { data } = useRecoilValue(categoriesAtom)
  const setCategoriesFieldForm = useSetRecoilState(createProductFormSelectorFamily('categories_id'))
  return (
    <section className='flex flex-col w-1/2 mt-0 space-x-4 justify-start  items-start space-y-2'>
      <h4 className='text-lg font-light ml-6'>Categories</h4>
      <select
        onChange={(event) => setCategoriesFieldForm(event.target.value)}
        className=' p-2 border-1 w-3/5 border-solid border-gray-300 rounded-xl '
      >
        <option value=''>choose categories</option>
        {data.map((item) => {
          return (
            <option
              value={item.id}
              key={item}
            >
              {item.name}
            </option>
          )
        })}
      </select>
    </section>
  )
}
