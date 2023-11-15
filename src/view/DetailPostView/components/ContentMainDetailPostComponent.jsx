import { GiMoneyStack } from 'react-icons/gi'

export const ContentMainDetailPostComponent = () => {
  return (
    <article className='flex flex-row space-x-6 justify-between h-full'>
      <section className='flex flex-col space-y-6'>
        <h2 className='font-light'>Brunch for 2 - Veg (Save upto Rs.45)</h2>
        <p className='inline-flex'>
          <GiMoneyStack />
          599
        </p>
        <p className='text-gray-400 text-base'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste impedit dignissimos tempora quam enim facere,
          optio fugit totam voluptates aspernatur nesciunt officiis hic magnam voluptas saepe, laborum obcaecati dicta
          beatae?
        </p>
      </section>
      <section className=' relative grow w-full '>
        <img
          className='h-40 w-40 aspect-square rounded-2xl'
          src='https://cdn.tgdd.vn/Files/2017/03/24/964495/cach-nau-bun-bo-hue-gio-heo-ngon-cong-thuc-chuan-vi-202208251617593627.jpg'
          alt=''
        />
        <button
          style={{ top: '140px', left: 32 }}
          className='absolute px-6 py-3 shadow-md rounded-xl bg-white'
        >
          <p
            className='text-lg '
            style={{ color: 'green' }}
          >
            Add +
          </p>
        </button>
      </section>
    </article>
  )
}
