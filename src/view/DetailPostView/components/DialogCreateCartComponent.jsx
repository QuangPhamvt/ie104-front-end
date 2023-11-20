import React from 'react'
import { RiLoader4Fill } from 'react-icons/ri'
import { GoCheckCircle } from 'react-icons/go'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {} from '..'
import { STATUS_API_POST } from '@/utilities'
import { createCartDetailProductAtom, openDialogCreateCartDetailProductAtom } from '../store'

export const DialogCreateCartComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { open = false } = props
  const dialogRef = React.useRef(null)
  const { status, message } = useRecoilValue(createCartDetailProductAtom)
  const setOpen = useSetRecoilState(openDialogCreateCartDetailProductAtom)
  React.useLayoutEffect(() => {
    if (open && !dialogRef.current?.open) {
      dialogRef.current.showModal()
    } else if (!open && dialogRef.current?.open) {
      dialogRef.current.close()
    }
  }, [open])
  return (
    <dialog
      ref={dialogRef}
      className={`absolute bg-white overflow-hidden rounded-2xl `}
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <article className='w-116 h-64 flex flex-col justify-between items-center p-4'>
        <section className='grow w-full flex justify-center items-center'>
          {status === STATUS_API_POST.LOADING && (
            <RiLoader4Fill
              size={60}
              className='animate-spin'
              color='orange'
            />
          )}
          {status === STATUS_API_POST.HAS_VALUE && (
            <GoCheckCircle
              size={60}
              color='#557C55'
            />
          )}
          {status === STATUS_API_POST.HAS_ERROR && <p style={{ color: 'red' }}>{message}</p>}
        </section>
        <section className='px-4 py-2 flex justify-center items-center w-full'>
          <button
            onClick={() => setOpen(false)}
            className='bg-orange-400 w-full py-2'
          >
            OK
          </button>
        </section>
      </article>
    </dialog>
  )
}
