import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
// eslint-disable-next-line react/prop-types
export const LoadingView = ({ isLoading }) => {
  const dialogRef = React.useRef(null)
  React.useLayoutEffect(() => {
    if (dialogRef.current?.open && !isLoading) {
      dialogRef.current?.close()
    } else if (!dialogRef.current?.open && isLoading) {
      dialogRef.current?.showModal()
    }
  }, [isLoading])
  return (
    <>
      <dialog
        ref={dialogRef}
        className='h-screen w-screen opacity-90 bg-gray-400 m-0 p-0'
      >
        <div className='flex w-full min-h-full justify-center items-center'>
          <AiOutlineLoading
            size={56}
            className='animate-spin'
            color='black'
          />
        </div>
      </dialog>
    </>
  )
}
