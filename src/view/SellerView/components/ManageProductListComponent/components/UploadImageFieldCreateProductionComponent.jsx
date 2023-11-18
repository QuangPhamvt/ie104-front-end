import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createProductFormSelectorFamily } from '../store/selector'
import { createProductFormAtom } from '..'
import { FaUpload } from 'react-icons/fa'

export const UploadImageFieldCreateProductionFormComponent = () => {
  const setPictureFieldForm = useSetRecoilState(createProductFormSelectorFamily('picture'))
  const {
    data: { picture },
  } = useRecoilValue(createProductFormAtom)
  const handleUploadImage = (event) => {
    const fileUpload = new FileReader()
    fileUpload.readAsDataURL(event.target.files[0])
    fileUpload.onload = () => {
      setPictureFieldForm(() => fileUpload.result)
    }
  }
  return (
    <section className='flex flex-wrap flex-row items-center space-x-4'>
      <h4 className='text-lg font-light ml-2'>Upload Image</h4>
      <label htmlFor='upLoadImageProduction'>
        <FaUpload />
      </label>
      <div className='hidden'>
        <input
          id='upLoadImageProduction'
          className='m-0 '
          type='file'
          name='upLoadImageProduction'
          onChange={handleUploadImage}
        />
      </div>
      <div className='w-full px-8 mt-4  max-h-100 bg-gray-400 flex justify-center items-center border-2 border-solid border-gray-500'>
        <img
          className='w-full h-100 object-cover'
          src={picture}
          alt='Not have file'
        />
      </div>
    </section>
  )
}
