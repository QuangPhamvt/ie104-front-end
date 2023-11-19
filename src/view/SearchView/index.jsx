import { useRecoilValue } from 'recoil'
import { OptionSearchComponent, ResultSearchComponent } from './components'
import { RiArrowRightSLine } from 'react-icons/ri'
import { searchProductFormAtom, searchProductionAtom } from '@/components/Layout/HeaderLayout/store'
import { STATUS_API_POST } from '@/utilities'

const SearchView = () => {
  const {
    data: { slug },
  } = useRecoilValue(searchProductFormAtom)
  const { status } = useRecoilValue(searchProductionAtom)
  return (
    <article className='mt-28 container mx-auto space-y-12 pt-12'>
      {status === STATUS_API_POST.HAS_VALUE ? (
        <>
          <h2>Search result for &quot; {slug} &quot;</h2>
          <OptionSearchComponent />
          <ResultSearchComponent />
          <section className='w-full inline-flex justify-end items-center'>
            <p className='text-orange-400 '>View More</p>{' '}
            <RiArrowRightSLine
              color='orange'
              size={24}
            />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  )
}
export default SearchView
