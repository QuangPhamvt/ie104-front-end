import NotFoundImage from '../../../assets/images/not-found.png'
import '../styles.scss'

const NotFoundTitle = () => {
  return (
    <section className='flex justifi-center items-center w-fit'>
      <h1 className='not-found-title cursor-default'>Oops...</h1>
      <img
        className='max-w-xl'
        src={NotFoundImage}
        alt='No food here...'
      />
    </section>
  )
}

export { NotFoundTitle }
