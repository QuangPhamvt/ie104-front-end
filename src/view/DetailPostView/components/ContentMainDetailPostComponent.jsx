import { GiMoneyStack } from 'react-icons/gi'
import { useRecoilValue } from 'recoil'
import { DetailProduct, findProductByCategoryAtom } from '../store'
export const ItemContentMainDetailPostComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { product_id, title, picture, description, price } = props
  const { handleAddDetailProductToCart } = DetailProduct.useAddDetailProductToCart()
  return (
    <article className='flex flex-row space-x-6 justify-between w-full h-full'>
      <section className='flex flex-col space-y-6'>
        <h2 className='font-light'>{title}</h2>
        <p className='inline-flex'>
          <GiMoneyStack />
          {price}
        </p>
        <p className='text-gray-400 text-base'>{description}</p>
      </section>
      <section className=' relative w-40 '>
        <img
          className='h-40 w-40 aspect-square rounded-2xl'
          src={picture || ''}
          alt=''
          loading='Loading...'
        />
        <button
          style={{ top: '140px', left: 32 }}
          className='absolute px-6 py-3 shadow-md rounded-xl bg-white'
          onClick={(event) => {
            event.preventDefault()
            handleAddDetailProductToCart({ product_id, title, priceProduct: price })
          }}
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

export const ContentMainDetailPostComponent = () => {
  const { data, status } = useRecoilValue(findProductByCategoryAtom)
  console.log(status)
  return (
    <article>
      {data.map((item) => (
        <>
          <ItemContentMainDetailPostComponent
            product_id={item.product_id}
            title={item.title}
            price={item.price}
            picture={item.picture}
            description={item.description}
          />
        </>
      ))}
    </article>
  )
}
