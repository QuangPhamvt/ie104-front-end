/* eslint-disable react/prop-types */
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { MdError } from 'react-icons/md'
import { IoIosWarning } from 'react-icons/io'
import { TYPE } from '@/utilities'

export const ItemNotificationComponent = (props) => {
  const { type = '', message = '' } = props
  const [visible, setVisible] = React.useState(true)
  const notificationItemStyle =
    type === TYPE.SUCCESS
      ? 'notification--item-success'
      : type === TYPE.ERROR
        ? 'notification--item-error'
        : 'notification--item-warning'
  React.useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [])
  return (
    <>
      {visible && (
        <section
          style={{ zIndex: 10000 }}
          className='shadow-xl bg-white h-16 w-68 relative rounded overflow-hidden border-1 border-solid border-gray-200 wrap--notification--item'
        >
          <section className={`p-4 ${notificationItemStyle} flex flex-row justify-start items-center h-full space-x-4`}>
            {type === TYPE.SUCCESS && (
              <>
                <FaCheckCircle
                  color='#A6CF98'
                  size={36}
                />
                <p className='text-sm font-medium'>{message}</p>
              </>
            )}
            {type === TYPE.ERROR && (
              <>
                <MdError
                  color='#ff355b'
                  size={36}
                />
                <p className='text-sm font-medium'>{message}</p>
              </>
            )}
            {type === TYPE.WARNING && (
              <>
                <IoIosWarning
                  color='#FFC021'
                  size={36}
                />
                <p className='text-sm font-medium'>{message}</p>
              </>
            )}
          </section>
        </section>
      )}
    </>
  )
}
