import { useRecoilValue } from 'recoil'
import { HeaderDetailPostComponent, MainDetailPostComponent } from './components'
import './styles.scss'
import { createCartDetailProductAtom } from './store'
import { Helmet } from 'react-helmet'

const DetailPostView = () => {
  const { status, data } = useRecoilValue(createCartDetailProductAtom)
  console.log(data)
  console.log(status)
  return (
    <main
      style={{ height: '1280px' }}
      className='mt-28 flex flex-col'
    >
      <Helmet>
        <meta charSet='urf-8' />
        <title>IE104 FRONT END | DETAIL POST</title>
      </Helmet>
      <HeaderDetailPostComponent />
      <MainDetailPostComponent />
    </main>
  )
}

export default DetailPostView
