// const DeliveredDetailOrderComponent = () => {
//   return <div>Delivered Detail Order Component</div>
// }

// export default DeliveredDetailOrderComponent

/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import dayjs from 'dayjs'
import React from 'react'
import { useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil'
import { ManageProductList, openModalStatusOrderAtom } from '../../ManageProductListComponent'
// import { getOrderListSelector } from '../store/selector'
import { getOrderListSelector } from '../../ManageProductListComponent/store/selector'
import '../../ManageProductListComponent/styles.scss'
import { useTranslation } from 'react-i18next'

const HeaderListProductListComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-row pb-2 border-b-1 border-solid border-gray-500'>
      <div className='text-2xl font-bold'>{t('DETAIL_ORDERED.DELIVERED_DETAIL')}</div>
    </section>
  )
}
const ContentListProductListComponent = () => {
  const { t } = useTranslation()
  const { state, contents } = useRecoilValueLoadable(getOrderListSelector)
  console.log(state)
  console.log(contents)
  return (
    <section>
      <div className='flex flex-row w-full font-bold'>
        <div className='w-2/5 flex justify-center items-center'>{t('SELLER_VIEW.LIST_PRODUCT.ORDER_ID')}</div>
        <div className='w-2/5 flex justify-center items-center'>{t('SELLER_VIEW.LIST_PRODUCT.CREATE_AT')}</div>
        <div className='w-1/6 flex justify-center items-center'>{t('SELLER_VIEW.LIST_PRODUCT.BUYER')}</div>
        <div className='w-1/6 flex justify-center items-center'>{t('SELLER_VIEW.LIST_PRODUCT.STATUS')}</div>
      </div>
      {state === 'loading' && <p>Loading...</p>}
      {state === 'hasValue' && (
        <>
          {contents.data.map((item) => {
            if (item.status === 'ordered')
              return (
                <ItemListProductListComponent
                  key={item.order_id}
                  order_id={item.order_id}
                  order_items={item.order_items}
                  price={item.price}
                  status={item.status}
                  buyer={item.buyer}
                />
              )
            return null
          })}
        </>
      )}
    </section>
  )
}
const ItemListProductListComponent = (props) => {
  const { t } = useTranslation()
  const { order_id, price, status, buyer = '', order_items } = props
  const setOpenModal = useSetRecoilState(openModalStatusOrderAtom)
  const handleOpen = () => {
    let products = `${order_items[0].title}: ${order_items[0].quantity}`
    for (let item in order_items) {
      console.log(item)
      if (item != 0) {
        const product = order_items[item]
        products = products + `, ${product.title}: ${product.quantity}`
      }
    }
    setOpenModal((preState) => ({
      ...preState,
      open: true,
      data: {
        order_id,
        buyer: buyer.username,
        status: status,
        address: `${buyer.province}, ${buyer.district}, ${buyer.ward}`,
        products,
        price: price,
      },
    }))
  }
  return (
    <div
      onClick={(event) => {
        event.preventDefault()
        handleOpen()
      }}
      className='product--list--item flex flex-row w-full hover-cursor hover-box  py-6 border-solid border-1 rounded border-black mt-4 shadow '
    >
      <div className='w-2/5 flex justify-center items-center'>{order_id}</div>

      <div className='w-2/5 flex justify-center items-center'>
        {dayjs(`2023-11-21T15:12:15.000Z`).format('HH:mm:ss - DD/MM/YYYY')}
      </div>
      <div className='w-1/6 flex justify-center items-center'>{buyer.username}</div>
      <div className='w-1/6 flex justify-center items-center'>
        {status === 'ordered' && (
          <p
            style={{ color: '#9ADE7B' }}
            className='text-base font-bold'
          >
            {t('DETAIL_ORDERED.ORDERED')}
          </p>
        )}
        {status === 'deny' && (
          <p
            style={{ color: '#DF2E38' }}
            className='text-base font-bold'
          >
            {t('DETAIL_ORDERED.DENY')}
          </p>
        )}
        {status === 'processing' && (
          <p
            style={{ color: '#A9A9A9' }}
            className='text-base font-bold'
          >
            {t('DETAIL_ORDERED.PROCESSING')}
          </p>
        )}
      </div>
    </div>
  )
}
const ModalStatusOrderComponent = () => {
  const dialogRef = React.useRef(null)
  const openModalStatusOrder = useRecoilValue(openModalStatusOrderAtom)
  const resetOpenModal = useResetRecoilState(openModalStatusOrderAtom)
  const { handleDenyOrder } = ManageProductList.useDenyOrder()
  const { handleAcceptOrder } = ManageProductList.useAcceptOrder()
  React.useEffect(() => {
    if (openModalStatusOrder.open && !dialogRef.current?.open) {
      dialogRef.current.showModal()
    } else if (!openModalStatusOrder.open && dialogRef.current.open) {
      dialogRef.current.close()
    }
  }, [openModalStatusOrder.open])
  const handleCloseOpen = () => {
    resetOpenModal()
  }
  const { data } = openModalStatusOrder
  return (
    <dialog
      ref={dialogRef}
      className='overflow-hidden rounded-2xl '
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      onClick={(e) => {
        e.preventDefault()
        const dialogDimensions = e.currentTarget.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          handleCloseOpen()
        }
      }}
    >
      {!!data ? (
        <section className='w-116 h-72  p-4 flex flex-col justify-between'>
          <div className='text-2xl flex justify-center items-center border-b-1 border-gray-200 pb-2'>DETAIL</div>
          <section className='h-full flex flex-col space-y-2 pt-4 border-b-1 border-solid border-gray-300 px-4'>
            <div>Buyer: {data.buyer}</div>
            <div>Address: {data.address}</div>
            <div>Product: {data.products}</div>
            <div>Price: {data.price || ''}</div>
          </section>
          <div className='flex flex-row justify-around space-x-2 mt-4'>
            <button
              onClick={(event) => {
                event.preventDefault()
                handleCloseOpen()
              }}
              className='grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base bg-white'
            >
              Close
            </button>
            <button
              onClick={(event) => {
                event.preventDefault()
                handleDenyOrder(data.order_id)
              }}
              className='grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base'
              style={{
                color: `${data.status === 'deny' ? 'white' : '#DF2E38'}`,
                backgroundColor: `${data.status === 'deny' ? '#DF2E38' : 'white'}`,
              }}
            >
              Deny
            </button>
            <button
              onClick={(event) => {
                event.preventDefault()
                handleAcceptOrder(data.order_id)
              }}
              className='grow p-2 border-1 border-solid border-gray-400 rounded font-bold text-base'
              style={{
                color: `${data.status === 'ordered' ? 'white' : '#9ADE7B'}`,
                backgroundColor: `${data.status === 'ordered' ? '#54B435' : 'white'}`,
              }}
            >
              {data.status === 'ordered' ? 'Ordered' : 'Accept'}
            </button>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </dialog>
  )
}
const DeliveredDetailOrderComponent = () => {
  return (
    <>
      <ModalStatusOrderComponent />
      <article className='mt-12  space-y-6'>
        <HeaderListProductListComponent />
        <ContentListProductListComponent />
      </article>
    </>
  )
}
export default DeliveredDetailOrderComponent
