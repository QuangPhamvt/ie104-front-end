import { CartListHistoryComponent, SidebarHistoryComponent } from './components'
import './styles.scss'
const HistoryView = () => {
  return (
    <article className='mt-28 container mx-auto flex flex-col space-y-4'>
      <section className='py-4'>
        <h2>History View</h2>
      </section>
      <article className='w-full grid grid-cols-4 gap-x-8'>
        <section className='col-span-1 flex flex-col justify-center items-center'>
          <SidebarHistoryComponent />
        </section>
        <section className='col-span-3 flex flex-col justify-center items-center'>
          <CartListHistoryComponent />
        </section>
      </article>
    </article>
  )
}
export default HistoryView
