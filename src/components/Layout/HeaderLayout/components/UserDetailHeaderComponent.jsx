import { Auth, authAtom } from '@/view/AuthView/store'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const UserDetailHeaderComponent = () => {
  const auth = useRecoilValue(authAtom)
  const [openDropDown, setOpenDropDown] = React.useState(false)
  const { logOut } = Auth.useLogOut()
  const handelOpenDropDown = () => {
    setOpenDropDown((preState) => !preState)
  }
  return (
    <section className='relative'>
      <button
        onClick={handelOpenDropDown}
        className='px-4 py-3 rounded-lg bg-black'
      >
        <p className='text-sm text-white font-bold'>{auth.data.username}</p>
      </button>

      <section
        hidden={openDropDown === false}
        style={{
          top: 54,
          right: 0,
        }}
        className='absolute z-50 w-40 p-2 rounded border-1 border-solid border-gray-400 bg-white'
      >
        <div className='flex flex-col'>
          <button
            className='p-2 font-semibold'
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
      </section>
    </section>
  )
}
