import dayjs from 'dayjs'
import React from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { openModalStatusOrderAtom } from '..'

const HeaderListProductListComponent = () => {
  return (
    <section className='flex flex-row pb-2 border-b-1 border-solid border-gray-500'>
      <div className='text-2xl'>List Product</div>
    </section>
  )
}
const ContentListProductListComponent = () => {
  return (
    <section>
      <div className='flex flex-row w-full font-bold'>
        <div className='w-2/5 flex justify-center item-center'>Order Id</div>
        <div className='w-2/5 flex justify-center item-center'>Create At</div>
        <div className='w-1/6 flex justify-center item-center'>Buyer</div>
        <div className='w-1/6 flex justify-center item-center'>Status</div>
      </div>
      <ItemListProductListComponent />
      <ItemListProductListComponent />
      <ItemListProductListComponent />
      <ItemListProductListComponent />
    </section>
  )
}
const ItemListProductListComponent = () => {
  const setOpenModal = useSetRecoilState(openModalStatusOrderAtom)
  const handleOpen = () => {
    setOpenModal((preState) => ({ ...preState, open: true }))
  }
  return (
    <div
      onClick={(event) => {
        event.preventDefault()
        handleOpen()
      }}
      className='flex flex-row w-full  py-6 border-solid border-1 rounded border-black mt-4 shadow-2xl'
    >
      <div className='w-2/5 flex justify-center item-center'>8b4ebefe-dbbe-4330-8cf3-5f728595</div>

      <div className='w-2/5 flex justify-center item-center'>
        {dayjs(`2023-11-21T15:12:15.000Z`).format('HH:mm:ss - DD/MM/YYYY')}
      </div>
      <div className='w-1/6 flex justify-center item-center'>Buyer</div>
      <div className='w-1/6 flex justify-center item-center'>Status</div>
    </div>
  )
}
const ModalStatusOrderComponent = () => {
  const dialogRef = React.useRef(null)
  const openModalStatusOrder = useRecoilValue(openModalStatusOrderAtom)
  const resetOpenModal = useResetRecoilState(openModalStatusOrderAtom)
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
          e.clientX > dialogDimensions.bottom
        ) {
          handleCloseOpen()
        }
      }}
    >
      <section className='w-116 h-72  p-4 flex flex-col justify-between'>
        <div className='text-2xl flex justify-center items-center border-b-1 border-gray-200 pb-2'>DETAIL</div>
        <section className='h-full flex flex-col space-y-2 pt-4 border-b-1 border-solid border-gray-300 px-4'>
          <div>Buyer</div>
          <div>Address</div>
          <div>Product</div>
        </section>
        <div className='flex flex-row justify-around space-x-2 mt-4'>
          <button
            onClick={() => handleCloseOpen()}
            className='grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base'
            style={{ color: '#A9A9A9', backgroundColor: 'white' }}
          >
            Close
          </button>
          <button
            onClick={() => handleCloseOpen()}
            className='grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base'
            style={{ color: '#D83F31', backgroundColor: 'white' }}
          >
            Deny
          </button>
          <button
            onClick={() => handleCloseOpen()}
            className='grow p-2 border-1 border-solid border-gray-400 rounded font-bold text-base'
            style={{ color: '#9ADE7B', backgroundColor: 'white' }}
          >
            Accept
          </button>
        </div>
      </section>
    </dialog>
  )
}
const ListProductManageProductListComponent = () => {
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
export default ListProductManageProductListComponent
