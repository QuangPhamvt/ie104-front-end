import { OptionSearchComponent, ResultSearchComponent } from './components'
import { RiArrowRightSLine } from 'react-icons/ri'

export const SearchView = () => {
  return (
    <article className='mt-28 container mx-auto space-y-12 pt-12'>
      <h2>Search result for &quot;Rice Bowls&quot;</h2>
      <OptionSearchComponent />
      <ResultSearchComponent />
      <section className='w-full inline-flex justify-end items-center'>
        <p className='text-orange-400 '>View More</p>{' '}
        <RiArrowRightSLine
          color='orange'
          size={24}
        />
      </section>
    </article>
  )
}
