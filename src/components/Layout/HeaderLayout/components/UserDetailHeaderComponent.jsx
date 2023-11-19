import { authAtom } from '@/view/AuthView/store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { DropDownUserDetailHeaderComponent } from './DropDownUserDetailHeaderComponent'
import { dropDownUserDetailHeaderAtom } from '../store'
import React from 'react'

export const UserDetailHeaderComponent = () => {
  const auth = useRecoilValue(authAtom)
  const menuRef = React.useRef(null)
  const setOpenDropDown = useSetRecoilState(dropDownUserDetailHeaderAtom)
  const handelOpenDropDown = () => {
    setOpenDropDown((preState) => ({ ...preState, open: !preState.open }))
  }
  React.useLayoutEffect(() => {
    const handleDropDown = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenDropDown((preState) => ({ ...preState, open: false }))
      }
    }
    window.document.addEventListener('mousedown', handleDropDown)
    return () => window.document.removeEventListener('mousedown', handleDropDown)
  }, [setOpenDropDown])
  return (
    <section
      className='relative'
      ref={menuRef}
    >
      <button
        onClick={handelOpenDropDown}
        className='px-4 py-3 rounded-lg bg-black'
      >
        <p className='text-sm text-white font-bold'>{auth.data.username}</p>
      </button>
      <DropDownUserDetailHeaderComponent />
    </section>
  )
}
