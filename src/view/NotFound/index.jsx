import NotificationAction from '@/components/Notification/store/hook'
import { TYPE } from '@/utilities'

const NotFoundView = () => {
  const { handlePushNotificationItem } = NotificationAction.usePushNotificationItem()
  return (
    <>
      <div className='flex flex-row space-x-4'>
        <button
          onClick={(event) => {
            event.preventDefault()
            handlePushNotificationItem(TYPE.SUCCESS, 'nice')
          }}
        >
          Success
        </button>
        <button
          onClick={(event) => {
            event.preventDefault()
            handlePushNotificationItem(TYPE.ERROR, 'error')
          }}
        >
          Error
        </button>
        <button
          onClick={(event) => {
            event.preventDefault()
            handlePushNotificationItem(TYPE.WARNING, 'warn')
          }}
        >
          Warning
        </button>
      </div>
    </>
  )
}
export default NotFoundView
