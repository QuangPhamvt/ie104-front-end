import { ContentSellerComponent, SidebarSellerComponent } from './components'

export const SellerView = () => {
  return (
    <main className='container mx-auto mt-28 grid grid-cols-7 justify-items-center'>
      <SidebarSellerComponent />
      <ContentSellerComponent />
    </main>
  )
}
