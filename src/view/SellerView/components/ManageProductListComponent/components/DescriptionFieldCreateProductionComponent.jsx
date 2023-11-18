import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createProductFormSelectorFamily } from '../store/selector'
import { createProductFormAtom } from '..'

export const DescriptionFieldCreateProductFormComponent = () => {
  const setDescriptionFieldForm = useSetRecoilState(createProductFormSelectorFamily('description'))
  const {
    data: { description },
  } = useRecoilValue(createProductFormAtom)
  return (
    <section className='w-full flex flex-col space-y-2'>
      <h4 className='text-lg font-light ml-2'>Description</h4>
      <textarea
        type='text'
        rows={8}
        value={description || ''}
        onChange={(event) => setDescriptionFieldForm(event.target.value)}
        placeholder='Enter to description of production'
        className='w-4/5 py-2 bg-white border-1 border-solid border-gray-400 rounded-xl px-4 font-mono'
      />
    </section>
  )
}
