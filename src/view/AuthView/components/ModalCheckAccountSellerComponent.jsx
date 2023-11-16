/* eslint-disable react/prop-types */
import React from 'react'
import { authCheckAccountBankModalAtom, useCheckoutAccountBank } from '../store'
import { useRecoilValue } from 'recoil'
import { STATUS_API_POST } from '@/utilities'
import { AiOutlineLoading } from 'react-icons/ai'

export const ModalCheckAccountSellerComponent = (props) => {
  const { acqId } = props
  const dialogRef = React.useRef(null)
  const { open, handleCloseCheckAccountModal } = useCheckoutAccountBank()
  const { status, data, message } = useRecoilValue(authCheckAccountBankModalAtom)
  React.useLayoutEffect(() => {
    if (!open && dialogRef.current?.open) dialogRef.current.close()
    else if (open && !dialogRef.current?.open) dialogRef.current.showModal()
  }, [open])
  return (
    <dialog
      ref={dialogRef}
      className='absolute bg-white overflow-hidden rounded-2xl'
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientX > dialogDimensions.bottom
        ) {
          handleCloseCheckAccountModal()
        }
      }}
    >
      <article className='w-116 h-64 px-4 flex flex-col justify-center items-center space-y-4'>
        {status === STATUS_API_POST.LOADING && (
          <AiOutlineLoading
            size={32}
            className='animate-spin'
            color='black'
          />
        )}
        {status === STATUS_API_POST.HAS_VALUE && (
          <>
            <section className='w-full pl-12 flex flex-col justify-center space-y-2'>
              <p>
                Your account name:
                <b> &#32; &#32; {data.accountName}</b>
              </p>
              <p>
                Name: <b>&#32; &#32; {acqId}</b>
              </p>
              <p>
                ShoreName:
                <b>&#32; &#32; {data.shortName}</b>
              </p>
              <img
                className='border-1 border-solid border-black'
                src={data.logo}
                alt='something wrong'
                width={124}
                height={48}
              />
            </section>
            <section className='w-full px-12'>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleCloseCheckAccountModal()
                }}
                className='w-full px-4 py-2 bg-orange-500'
              >
                <p className='text-xl font-bold text-white'>OK</p>
              </button>
            </section>
          </>
        )}
        {status === STATUS_API_POST.HAS_ERROR && <p style={{ color: 'red' }}>{message}</p>}
      </article>
    </dialog>
  )
}
