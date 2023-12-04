import { NotFoundTitle } from './components/NotFoundTitle'
import { BackToDashBoardButton } from './components/BackToDashBoardButton'
import './styles.scss'

const NotFoundView = () => {
  return (
    <section className='not-found h-screen'>
      <article className='absolute right-32'>
        <NotFoundTitle />
        <BackToDashBoardButton />
      </article>
    </section>
  )
}
export default NotFoundView
