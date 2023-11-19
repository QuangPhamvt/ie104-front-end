import { useRecoilValue } from 'recoil'
import CardSearchComponent from './CardSearchComponent'
import { searchProductionAtom } from '@/components/Layout/HeaderLayout/store'

export const ResultSearchComponent = () => {
  const { data } = useRecoilValue(searchProductionAtom)
  return (
    <article className='grid grid-cols-3 gap-x-16 gap-y-24'>
      {data.map((items) => (
        <CardSearchComponent
          key={items.id}
          title={items.title}
          price={items.price}
          author={items.author.username}
          picture={items.picture}
          location={items.location}
        />
      ))}
    </article>
  )
}
