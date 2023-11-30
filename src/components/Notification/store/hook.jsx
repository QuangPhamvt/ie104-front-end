import { useSetRecoilState } from 'recoil'
import { notificationListState } from './atom'

const usePushNotificationItem = () => {
  const setNotificationList = useSetRecoilState(notificationListState)
  const handlePushNotificationItem = (type, message) => {
    setNotificationList((preState) => {
      if (preState.data.length == 0) {
        return { ...preState, data: [{ type, message }] }
      } else {
        return { ...preState, data: [...preState.data, { type, message }] }
      }
    })
  }
  return { handlePushNotificationItem }
}
const NotificationAction = {
  usePushNotificationItem,
}
export default NotificationAction
