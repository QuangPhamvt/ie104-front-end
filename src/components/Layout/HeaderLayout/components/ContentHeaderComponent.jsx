import { SearchHeaderComponent } from './SearchHeaderComponent'
import { NotificationHeaderComponent } from './NotificationHeaderComponent'
import { UserDetailHeaderComponent } from './UserDetailHeaderComponent'

export const ContentHeaderComponent = () => {
  return (
    <section className='w-4/5 flex flex-row justify-end items-center space-x-3'>
      <SearchHeaderComponent />
      <NotificationHeaderComponent />
      <UserDetailHeaderComponent />
    </section>
  )
}
