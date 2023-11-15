import { GiMoneyStack } from 'react-icons/gi'

export const TotalCartMainDetailPostComponent = () => {
  return (
    <section>
      <div className='flex flex-row justify-between '>
        <h4 className='text-2xl font-medium'>Subtotal</h4>
        <h4 className='inline-flex text-2xl items-center font-medium'>
          <GiMoneyStack />
          799
        </h4>
      </div>
    </section>
  )
}
export const ItemListCartMainDetailPostComponent = () => {
  return (
    <section className='flex flex-col space-y-4 '>
      <h4 className='inline-flex font-medium'>
        from <p className='text-orange-500 ml-2'> Lunch box</p>
      </h4>
      <div className='flex flex-row justify-between '>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-medium'>Brunch for 2 - Veg</h4>
          <div className='inline-flex'>
            <GiMoneyStack /> <p className='text-gray-400'>599</p>
          </div>
        </div>
        <div className='inline-flex items-center bg-white w-24 justify-between'>
          <button className='px-4 bg-white'> - </button>
          <p>2</p>
          <button className='px-4 bg-white'> + </button>
        </div>
      </div>
    </section>
  )
}
export const ListCartMainDetailPostComponent = () => {
  return (
    <section className='flex flex-col space-y-6'>
      <ItemListCartMainDetailPostComponent />
      <ItemListCartMainDetailPostComponent />
    </section>
  )
}
export const CartMainDetailPostComponent = () => {
  return (
    <article className='flex flex-col space-y-10'>
      <div className='w-full flex flex-row justify-between items-center'>
        <h2 className='text-2xl'>Cart</h2>
        <p>2 items</p>
      </div>
      <ListCartMainDetailPostComponent />
      <TotalCartMainDetailPostComponent />
      <button className='px-8 py-4 bg-orange-500 text-xl font-bold text-white rounded-xl'>Checkout</button>
    </article>
  )
}
