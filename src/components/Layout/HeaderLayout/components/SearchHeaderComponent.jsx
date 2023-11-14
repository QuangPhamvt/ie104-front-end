import { IoIosSearch } from 'react-icons/io'
export const SearchHeaderComponent = () => {
  return (
    <article className='bg-white px-4 py-2 w-3/5 flex flex-row justify-between items-center rounded-lg border-1 border-solid border-gray-400'>
      <input
        placeholder='Enter item or restaurant you are looking for'
        className='w-full'
      />
      <IoIosSearch size={24} />
    </article>
  )
}
