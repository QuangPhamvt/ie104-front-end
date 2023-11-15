import { FaStar } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { CiDiscount1 } from 'react-icons/ci'
export const ContentHeaderDetailPostComponent = () => {
  return (
    <section className='flex pl-4 flex-row space-x-8 h-full w-3/5 justify-between'>
      <div className='w-2/5 flex justify-center items-center h-full rounded-xl'>
        <img
          className='w-full h-full object-cover rounded-xl'
          src='https://cdn.tgdd.vn/Files/2017/03/24/964495/cach-nau-bun-bo-hue-gio-heo-ngon-cong-thuc-chuan-vi-202208251617593627.jpg'
          alt=''
        />
      </div>
      <section className='w-3/5 text-white flex flex-col space-y-8 justify-end py-8'>
        <h2>LunchBox - Meals and Thalis</h2>
        <p>north india</p>
        <div className='grid grid-cols-3'>
          <div className='flex flex-col justify-between justify-center'>
            <p className='text-sm'>
              <FaStar /> 4.5 rating
            </p>
            <p className='text-sm'>100+ rating</p>
          </div>
          <div className='flex flex-col border-x-2 border-solid border-white text-center px-6'>
            <p className='text-sm'>30 Mins</p>
            <p className='text-sm'>Delivery Time</p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-sm'>
              <GiMoneyStack /> 200
            </p>
            <p className='text-sm'>Cost for two</p>
          </div>
        </div>
      </section>
    </section>
  )
}
export const DiscountHeaderDetailComponent = () => {
  return (
    <section className='text-white w-2/5 pt-12 pl-12'>
      <div className='border-dashed border-2 border-orange-400 h-full rounded-2xl px-8 flex flex-col justify-center space-y-4'>
        <h2>Offers</h2>
        <ul className='flex flex-col space-y-4'>
          <li className='inline-flex items-center space-x-2'>
            <CiDiscount1
              size={24}
              color='orange'
            />
            <p>50% off up to</p>
            <GiMoneyStack />
            100 | Use code TRYNEW
          </li>
          <li className='inline-flex items-center space-x-2'>
            <CiDiscount1
              size={24}
              color='orange'
            />
            <p>20% off| Use code PARTY</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
export const HeaderDetailPostComponent = () => {
  return (
    <article className='bg-black h-64 opacity-90'>
      <section className='container flex flex-row mx-auto py-4 h-full'>
        <ContentHeaderDetailPostComponent />
        <DiscountHeaderDetailComponent />
      </section>
    </article>
  )
}
