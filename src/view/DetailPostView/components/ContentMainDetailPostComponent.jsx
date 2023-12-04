import { GiMoneyStack } from 'react-icons/gi'
import { useRecoilValue } from 'recoil'
import { DetailProduct, findProductByCategoryAtom } from '../store'
import { ThreeCircles } from 'react-loader-spinner'
import { useTranslation } from 'react-i18next'
export const ItemContentMainDetailPostComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { product_id, title, picture, description, price } = props
  const { handleAddDetailProductToCart } = DetailProduct.useAddDetailProductToCart()
  const { t } = useTranslation()
  return (
    <article className='flex flex-row space-x-6 justify-between items-center w-full h-full p-4 shadow border-1 border-solid border-gray-200 rounded-xl'>
      <section className='flex flex-col space-y-2 h-full justify-center '>
        <h2 className='font-light'>{title}</h2>
        <p className='inline-flex'>
          <GiMoneyStack />
          {price}
        </p>
        <p className='text-gray-400 text-base'>{description}</p>
      </section>
      <section className=' relative w-40 '>
        <img
          className='h-32 w-32 aspect-square rounded-2xl border-1 border-solid border-gray-100'
          src={picture || ''}
          alt=''
          loading='Loading...'
        />
        <button
          style={{ top: '100px', left: 18 }}
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
            {t('CONTENT_POST_VIEW.ADD')}
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
      {status === 'loading' ? (
        <div className='w-full flex justify-center items-center py-4 '>
          <ThreeCircles
            color='#FFA33C'
            height={50}
            width={50}
          />
        </div>
      ) : (
        <div className='flex-col flex space-y-4'>
          {data.map((item) => (
            <ItemContentMainDetailPostComponent
              key={item.product_id}
              product_id={item.product_id}
              title={item.title}
              price={item.price}
              picture={item.picture}
              description={item.description}
            />
          ))}
        </div>
      )}
    </article>
  )
}
