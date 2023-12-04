/* eslint-disable react/prop-types */
import dayjs from 'dayjs'
import { useRecoilValueLoadable } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
import { cartListSelector } from '../store'
import { useTranslation } from 'react-i18next'
export const ItemCartListHistoryComponent = (props) => {
  const { id, status, price, create_at } = props
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleNavigateToSecureCheck = (event) => {
    event.preventDefault()
    return navigate(`/secure/${id}`)
  }
  return (
    <>
      <tr
        onClick={handleNavigateToSecureCheck}
        className='h-16 w-full bg-gray-50 table--body-row'
      >
        <td className=''>
          <p className='flex justify-center items-center w-full'>{id}</p>
        </td>
        <td>
          <p className='flex justify-center items-center w-full'>{dayjs(create_at).format('HH:mm:ss  DD-MMM-YYYY')}</p>
        </td>
        <td className='content-center '>
          <p className='w-full flex justify-center items-center'>{price}</p>
        </td>
        <td>
          <p className='w-full flex justify-center items-center'>
            {status === 'prepare' && <p style={{ color: '#A9A9A9' }}>{t('HISTORY_LABEL.PREPARE')}</p>}
            {status === 'processing' && <p style={{ color: '#FFA33C' }}>{t('HISTORY_LABEL.PROCESSING')}</p>}
            {status === 'deny' && <p style={{ color: '#DF2E38' }}>{t('HISTORY_LABEL.DENY')}</p>}
            {status === 'ordered' && <p style={{ color: '#54B435' }}>{t('HISTORY_LABEL.ORDERED')}</p>}
          </p>
        </td>
      </tr>
    </>
  )
}
export const CartListHistoryComponent = () => {
  const { t } = useTranslation()
  const { state, contents } = useRecoilValueLoadable(cartListSelector)
  return (
    <>
      {state === 'hasValue' && (
        <div
          className='overflow-y-scroll w-full rounded border-1 border-solid border-black'
          style={{ maxHeight: 480 }}
        >
          <table className='w-full h-28 border-0'>
            <thead
              className='w-full h-12 '
              style={{ tableLayout: 'fixed' }}
            >
              <tr className='bg-gray-200 border-b-1 border-solid border-gray-100'>
                <th className='  bg-gray-200'>
                  <p className='w-full border-x-1 border-solid border-gray-300 py-2'>ID</p>
                </th>
                <th className=' bg-gray-200 w-1/5'>
                  <p className='w-full border-x-1 border-solid border-gray-300 py-2'>{t('HISTORY_LABEL.DAYS')}</p>
                </th>
                <th className=' bg-gray-200 w-1/6'>
                  <p className='w-full border-x-1 border-solid border-gray-300 py-2'>{t('HISTORY_LABEL.PRICE')}</p>
                </th>
                <th className=' bg-gray-200 w-1/6'>
                  <p className='w-full border-x-1 border-solid border-gray-300 py-2'>{t('HISTORY_LABEL.STATUS')}</p>
                </th>
              </tr>
            </thead>
            <tbody className=' hover-cursor overflow-auto w-full'>
              {contents.data.map((item) => {
                return (
                  <ItemCartListHistoryComponent
                    key={item.id}
                    id={item.id}
                    status={item.status}
                    price={item.price}
                    create_at={item.create_at}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      {state === 'loading' && (
        <div className='w-full flex justify-center items-center'>
          <ThreeCircles
            color='#FFA33C'
            height={100}
            width={100}
          />
        </div>
      )}
    </>
  )
}
