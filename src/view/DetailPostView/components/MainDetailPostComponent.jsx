import { CartMainDetailPostComponent } from './CartMainDetailPostComponent'
import { ContentMainDetailPostComponent } from './ContentMainDetailPostComponent'
import { SidebarMainDetailPostComponent } from './SidebarMainDetailPostComponent'

export const MainDetailPostComponent = () => {
  return (
    <article className='container mx-auto py-16'>
      <div className='grid grid-cols-6 gap-x-12'>
        <section className='col-span-1 border-r-1 h-full border-solid border-gray-300'>
          <SidebarMainDetailPostComponent />
        </section>
        <section className='col-span-3 h-92'>
          <ContentMainDetailPostComponent />
        </section>
        <section className='col-span-2 px-8'>
          <CartMainDetailPostComponent />
        </section>
      </div>
    </article>
  )
}
