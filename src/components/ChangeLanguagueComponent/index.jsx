import React from 'react'
import { FaEarthAmericas } from 'react-icons/fa6'
import './styles.scss'
import { useSetRecoilState } from 'recoil'
import { openDropDownState } from './store'
import { DropDownChangeLanguageComponent } from './components'

export const ChangeLanguageComponent = () => {
  const divRef = React.useRef(null)
  const [mouseDown, setMouseDown] = React.useState(false)
  const [clientX, setClientX] = React.useState(4)
  const [clientY, setClientY] = React.useState(4)
  const [padding, setPadding] = React.useState(0)
  const setOpenDropDown = useSetRecoilState(openDropDownState)
  React.useEffect(() => {
    const handleMouseDown = (event) => {
      const el = document.getElementById('ChangLanguageIcon')
      el.classList.remove('change--language--icon--go--back')
      setMouseDown(true)
      setPadding(128)
      setOpenDropDown({ isOpen: false })
      setClientX(event.clientX - 136)
      setClientY(event.clientY - 136)
    }
    const handleMouseUp = () => {
      setMouseDown(false)
      const el = document.getElementById('ChangLanguageIcon')
      el.classList.add('change--language--icon--go--back')
      setClientY((preState) => preState + 142)
      setClientX(8)
      setPadding(0)
    }
    const handleMouseMove = (event) => {
      if (mouseDown) {
        setClientX(event.clientX - 136)
        setClientY(event.clientY - 136)
      }
    }
    const el = divRef.current
    el.addEventListener('mousedown', handleMouseDown)
    el.addEventListener('mouseup', handleMouseUp)
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', () => {})
    return () => {
      el.removeEventListener('mousedown', handleMouseDown)
      el.removeEventListener('mouseup', handleMouseUp)
      el.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown])
  return (
    <>
      <div
        id='ChangLanguageIcon'
        style={{
          zIndex: 10005,
          top: clientY,
          left: clientX,
        }}
        className='fixed change--language--icon flex space-x-2 items-start justify-center'
        onMouseEnter={() => setOpenDropDown({ isOpen: true })}
        onMouseLeave={() => setOpenDropDown({ isOpen: false })}
      >
        <div
          style={{
            padding,
          }}
          ref={divRef}
          className='rounded-full overflow-hidden h-8 w-8'
        >
          <FaEarthAmericas size={32} />
        </div>
        <DropDownChangeLanguageComponent />
      </div>
    </>
  )
}
