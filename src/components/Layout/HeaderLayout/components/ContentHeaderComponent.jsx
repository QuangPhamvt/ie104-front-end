import { SearchHeaderComponent } from './SearchHeaderComponent'
import { NotificationHeaderComponent } from './NotificationHeaderComponent'
import { UserDetailHeaderComponent } from './UserDetailHeaderComponent'

export const ContentHeaderComponent = () => {
  return (
    <section className='w-5/12 flex flex-row justify-center items-center space-x-3'>
      <SearchHeaderComponent />
      <NotificationHeaderComponent />
      <UserDetailHeaderComponent />
    </section>
  )
}
