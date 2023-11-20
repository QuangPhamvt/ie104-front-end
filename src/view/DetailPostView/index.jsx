import { useRecoilValue } from 'recoil'
import { HeaderDetailPostComponent, MainDetailPostComponent } from './components'
import './styles.scss'
import { createCartDetailProductAtom } from './store'

const DetailPostView = () => {
  const { status, data } = useRecoilValue(createCartDetailProductAtom)
  console.log(data)
  console.log(status)
  return (
    <main className='mt-28 flex flex-col '>
      <HeaderDetailPostComponent />
      <MainDetailPostComponent />
    </main>
  )
}

export default DetailPostView
