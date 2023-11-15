/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { IoPeopleOutline } from 'react-icons/io5'
import { Home } from '../store'
export const FoodCardHomeComponent = (props) => {
  const {
    start = 0,
    uri = 'https://cdn.tgdd.vn/Files/2017/03/24/964495/cach-nau-bun-bo-hue-gio-heo-ngon-cong-thuc-chuan-vi-202208251617593627.jpg',
  } = props
  const { color } = Home.useSetStart(start)
  return (
    <article
      style={{ borderRadius: 24 }}
      className='w-full h-100 bg-gray-100 p-4 space-y-6'
    >
      <section className='w-full aspect-square bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={uri}
          alt='Something wrong with image'
        />
      </section>
      <h2 className='font-normal'>Ramachanadara Parlour</h2>
      <section className='flex flex-row justify-between'>
        <address className='not-italic text-gray-400'>Ho Chi Minh city</address>
        <div className='inline-flex space-x-2'>
          <FaStar color={color} />
          <p className=''>{start}</p>
        </div>
      </section>
      <section className='flex flex-row justify-between'>
        <div className='flex flex-row space-x-1'>
          <GiMoneyStack color='green' />
          <p>420</p>
        </div>
        <div className='flex flex-row space-x-1'>
          <IoPeopleOutline color='#F87315' />
          <p>{420} orders</p>
        </div>
      </section>
    </article>
  )
}
