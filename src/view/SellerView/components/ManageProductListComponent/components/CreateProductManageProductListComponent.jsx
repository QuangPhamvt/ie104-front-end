import React from 'react'
import { FaUpload } from 'react-icons/fa'
import { LOCATION_CITY_ARRAY } from '@/utilities/location_city'
import { useRecoilValue } from 'recoil'
import { getCategoriesSelector } from '../store/selector'

const CreateProductManageProductionListComponent = () => {
  const [file, setFile] = React.useState(null)
  const data = useRecoilValue(getCategoriesSelector)
  const handleUploadImage = (event) => {
    const fileUpload = new FileReader()
    fileUpload.readAsDataURL(event.target.files[0])
    fileUpload.onload = () => {
      setFile(() => fileUpload.result)
    }
  }
  console.log(data())
  return (
    <article className='w-full p-8 flex flex-col space-y-6 shadow-lg mt-8'>
      <section className=''>
        <h3 className='font-base text-orange-400 border-b-1 py-2 border-solid border-gray-300 mb-4'>
          Create Your Product
        </h3>
      </section>

      <section className='w-full flex flex-col space-y-2'>
        <h4 className='text-lg font-light ml-2'>Title of Production</h4>
        <input
          type='text'
          placeholder='Enter to title of production'
          className='w-3/5 py-2 bg-gray-50 border-1 border-solid border-gray-300 rounded-xl px-4'
        />
      </section>

      <section className='w-full flex flex-col space-y-2'>
        <h4 className='text-lg font-light ml-2'>Description</h4>
        <textarea
          type='text'
          rows={8}
          placeholder='Enter to description of production'
          className='w-4/5 py-2 bg-white border-1 border-solid border-gray-400 rounded-xl px-4 font-mono'
        />
      </section>

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
            src={file}
            alt='Not have file'
          />
        </div>
      </section>

      <section className='flex flex-row w-full space-x-12 justify-between'>
        <section className='flex flex-wrap flex-row space-x-2 items-center w-2/5 '>
          <h4 className='text-lg font-light'>Location Shop</h4>
          <select className='w-1/5 p-2 border-2 border-solid border-gray-300 rounded-xl grow'>
            <option value=''>choose city</option>
            {LOCATION_CITY_ARRAY.map((item) => {
              return <option key={item}>{item}</option>
            })}
          </select>
        </section>
        <section className='flex flex-wrap flex-row space-x-2 items-center w-2/5 mx-12'>
          <h4 className='text-lg font-light'>Money</h4>
          <input
            placeholder='Spend'
            type='text'
            className='grow px-4 py-2 border-solid border-1 border-gray-300 rounded-2xl bg-gray-50'
          />
        </section>
      </section>

      <section className='flex flex-row space-x-8 pt-4'>
        <button className='grow py-2 text-lg font-bold bg-white border-1 border-solid border-gray-300'>Cancel</button>
        <button className='grow py-2 text-lg text-white bg-orange-400 font-bold'>Save Production</button>
      </section>
    </article>
  )
}
export default CreateProductManageProductionListComponent
