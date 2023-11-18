import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createProductFormSelectorFamily } from '../store/selector'
import { createProductFormAtom } from '..'

export const PriceFieldCreateProductionFormComponent = () => {
  const setPriceFieldForm = useSetRecoilState(createProductFormSelectorFamily('price'))
  const {
    data: { price },
  } = useRecoilValue(createProductFormAtom)
  return (
    <section className='flex flex-wrap flex-row space-x-2 items-center w-2/5 mx-12'>
      <h4 className='text-lg font-light'>Money</h4>
      <input
        placeholder='Spend'
        type='text'
        value={price || ''}
        onChange={(event) => setPriceFieldForm(event.target.value)}
        className='grow px-4 py-2 border-solid border-1 border-gray-300 rounded-2xl bg-gray-50'
      />
    </section>
  )
}
