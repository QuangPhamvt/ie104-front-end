import { HeaderDetailPostComponent, MainDetailPostComponent } from './components'

export const DetailPostView = () => {
  return (
    <main className='mt-28 flex flex-col'>
      <HeaderDetailPostComponent />
      <MainDetailPostComponent />
    </main>
  )
}
