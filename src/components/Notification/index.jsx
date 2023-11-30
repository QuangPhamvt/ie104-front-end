import { useRecoilValue } from 'recoil'
import { ItemNotificationComponent } from './components'
import './styles.scss'
import { notificationListState } from './store'

export const NotificationComponent = () => {
  const { data } = useRecoilValue(notificationListState)
  console.log(data)
  return (
    <article className='absolute right-2 top-2 z-50 text-black flex flex-col space-y-4'>
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <ItemNotificationComponent
              type={item.type}
              key={index}
              message={item.message}
            />
          )
        })}
    </article>
  )
}
