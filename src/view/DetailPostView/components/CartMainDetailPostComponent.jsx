/* eslint-disable react/prop-types */
import { GiMoneyStack } from 'react-icons/gi'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { DetailProduct, createCartDetailProductAtom, openDialogCreateCartDetailProductAtom } from '../store'
import { DialogCreateCartComponent } from './DialogCreateCartComponent'
import { useTranslation } from 'react-i18next'

export const TotalCartMainDetailPostComponent = () => {
  const { t } = useTranslation()
  const {
    data: { price },
  } = useRecoilValue(createCartDetailProductAtom)
  return (
    <section>
      <div className='flex flex-row justify-between '>
        <h4 className='text-2xl font-medium'>{t('CART_POST_VIEW.SUB_TOTAL')}</h4>
        <h4 className='inline-flex text-2xl items-center font-medium'>
          <GiMoneyStack />
          {price}
        </h4>
      </div>
    </section>
  )
}
export const ItemListCartMainDetailPostComponent = (props) => {
  const { product_id, title, price, quantity } = props
  const { handleAddDetailProductToCart } = DetailProduct.useAddDetailProductToCart()
  const { handleSubDetailProductToCart } = DetailProduct.useSubDetailProductToCart()
  return (
    <section className='flex flex-col space-y-4 hover-box border-b-1 border-solid border-gray-400 pb-6 px-4 rounded'>
      {/* <h4 className='inline-flex font-medium'>
        from <p className='text-orange-500 ml-2'> Lunch box</p>
      </h4> */}
      <div className='flex flex-row justify-between '>
        <div className='flex flex-col space-y-2'>
          <h4 className='font-medium'>{title}</h4>
          <div className='inline-flex'>
            <GiMoneyStack /> <p className='text-gray-400'>{price}</p>
          </div>
        </div>
        <div className='inline-flex items-end w-24 justify-between'>
          <button
            onClick={() => {
              handleSubDetailProductToCart({ product_id, priceProduct: price })
            }}
            className='px-4 '
          >
            <p>-</p>
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              handleAddDetailProductToCart({ product_id, title, priceProduct: price })
            }}
            className='px-4 '
          >
            <p>+</p>
          </button>
        </div>
      </div>
    </section>
  )
}
export const ListCartMainDetailPostComponent = () => {
  const {
    data: { cart_items },
  } = useRecoilValue(createCartDetailProductAtom)
  return (
    <section className='flex flex-col space-y-6'>
      {!!cart_items[0]?.title &&
        cart_items.map((item) => {
          return (
            <ItemListCartMainDetailPostComponent
              key={item.product_id}
              title={item.title}
              product_id={item.product_id}
              quantity={item.quantity}
              price={item.price}
            />
          )
        })}
    </section>
  )
}
export const CartMainDetailPostComponent = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useRecoilState(openDialogCreateCartDetailProductAtom)
  const { handleCreateCartProduct } = DetailProduct.useCreateCartProduct()
  const resetCreateCartProduct = useResetRecoilState(createCartDetailProductAtom)
  return (
    <>
      <DialogCreateCartComponent open={open} />
      <article className='flex flex-col space-y-10 '>
        <div className='w-full flex flex-row justify-between items-center'>
          <h2 className='text-2xl'>{t('CART_POST_VIEW.CART')}</h2>
          <p>2 {t('CART_POST_VIEW.ITEM')}</p>
        </div>
        <ListCartMainDetailPostComponent />
        <TotalCartMainDetailPostComponent />
        <button
          className='px-8 py-4 bg-orange-500 text-xl font-bold text-white rounded-xl hover-box'
          onClick={(event) => {
            event.preventDefault()
            setOpen(true)
            handleCreateCartProduct()
            resetCreateCartProduct()
          }}
        >
          {t('CART_POST_VIEW.CHECKOUT')}
        </button>
      </article>
    </>
  )
}
