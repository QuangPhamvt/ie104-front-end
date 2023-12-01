import { ImShare2 } from 'react-icons/im'

export const SearchSellerHomeComponent = () => {
  return (
    <article className='bg-yellow-300 h-36 '>
      <section className='container mx-auto px-4 flex space-x-6 justify-center items-center h-full'>
        <h2 className='text-2xl  font-normal'>Search Seller </h2>
        <ImShare2 color='black' />
        <input
          className='w-2/5 px-4 py-2 border-1 border-solid border-black bg-transparent rounded-lg text-black'
          type='text'
          placeholder='Enter item or username you are looking for'
          name=''
          id=''
        />
        <button className='font-bold text-base px-4 py-2 bg-yellow-100 text-black rounded-lg'>Search Now</button>
      </section>
    </article>
  )
}
