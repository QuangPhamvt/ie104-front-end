import { LOCATION_CITY_ARRAY } from '@/utilities'
import { createProductFormSelectorFamily } from '../store/selector'
import { useSetRecoilState } from 'recoil'

export const LocationFieldCreateProductionFormComponent = () => {
  const setLocationFieldForm = useSetRecoilState(createProductFormSelectorFamily('location'))
  return (
    <section className='flex flex-wrap flex-row space-x-2 items-center w-2/5 '>
      <h4 className='text-lg font-light'>Location Shop</h4>
      <select
        className='w-1/5 p-2 border-2 border-solid border-gray-300 rounded-xl grow'
        onChange={(event) => setLocationFieldForm(event.target.value)}
      >
        <option value=''>choose city</option>
        {LOCATION_CITY_ARRAY.map((item) => {
          return (
            <option
              value={item}
              key={item}
            >
              {item}
            </option>
          )
        })}
      </select>
    </section>
  )
}
