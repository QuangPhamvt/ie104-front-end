import { GiMoneyStack } from 'react-icons/gi'
export const CardSearchComponent = () => {
  return (
    <section
      style={{ borderRadius: 8 }}
      className='p-4 flex flex-row bg-gray-100 space-x-6'
    >
      <img
        className='h-24 aspect-square object-fit rounded-lg'
        src='https://cdn.tgdd.vn/Files/2017/03/24/964495/cach-nau-bun-bo-hue-gio-heo-ngon-cong-thuc-chuan-vi-202208251617593627.jpg'
        alt='Not have image'
      />
      <div className='flex flex-col justify-around'>
        <h3 className='text-base font-normal'>Paneer Tikka Rice Bowl</h3>
        <h4 className='text-xs font-normal text-gray-400'>The Good Bowl</h4>
        <div className='flex flex-row space-x-2'>
          <GiMoneyStack color='orange' />
          <h5>200</h5>
        </div>
      </div>
    </section>
  )
}
