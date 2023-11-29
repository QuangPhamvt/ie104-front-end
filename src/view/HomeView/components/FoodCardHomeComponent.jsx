/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa'
import { FaMoneyCheckAlt } from 'react-icons/fa'

import { Home } from '../store'
export const FoodCardHomeComponent = (props) => {
  const {
    star = 0,
    url = 'https://voyado.com/wp-content/uploads/2023/05/food-ecommerce-hero.jpg',
    name = '',
    money = '',
  } = props
  const { color } = Home.useSetStart(star)
  return (
    <article
      className='w-full space-y-4 cart--search rounded cart--recommend-default home--content-hidden'
      style={{
        borderRadius: 8,
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center center',
      }}
    >
      <section className='flex flex-col space-y-4 p-4 cart--detail opacity-0 h-92 justify-end pb-12'>
        <section className='flex flex-row items-center justify-center'>
          <h2 className='font-normal text-xl font-mono'>{name}</h2>
        </section>
        <section className='flex flex-row justify-between justify-center items-center w-full'>
          <div className='inline-flex space-x-2 justify-center items-center w-full'>
            <FaStar color={color} />
          </div>
        </section>
        <section className='flex flex-row justify-between'>
          <div className='flex flex-row w-full justify-center items-center space-x-1'>
            <p>{money}</p>
            <FaMoneyCheckAlt color='#617A55' />
          </div>
        </section>
      </section>
    </article>
  )
}
