export const SearchLocationHomeComponent = () => {
  return (
    <article className='flex flex-col space-y-10'>
      <section className='flex flex-row w-full space-x-4'>
        <label
          htmlFor=''
          className='w-4/5'
        >
          <input
            placeholder='Enter your delivery location'
            type='text'
            className='px-4 py-3 grow border-1 border-solid border-gray-400 w-full rounded-lg'
          />
        </label>
        <button className='px-3 py-2 rounded-lg bg-black text-white'>Get Started</button>
      </section>
      <section className='flex flex-col space-y-8'>
        <h3 className='font-normal'>Popular cities in VietNam</h3>
        <ul className='flex flex-row space-x-12'>
          <li>
            <p className=' text-gray-300'>Ho Chi Minh</p>
          </li>
          <li>
            <p className='text-orange-300'>Ha Noi</p>
          </li>
          <li>
            <p className='text-gray-300'>Da Nang</p>
          </li>
          <li>
            <p className='text-orange-300'>Can Tho</p>
          </li>
          <li>
            <p className='text-gray-300'>Hue</p>
          </li>
        </ul>
      </section>
    </article>
  )
}
