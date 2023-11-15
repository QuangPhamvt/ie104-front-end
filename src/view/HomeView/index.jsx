import { IntroductionHomeComponent, RecommendHomeComponent, SearchSellerHomeComponent } from './components'
import { RecommendedFoodHomeComponent } from './components/RecommendFoodHomeComponent'

export const HomeView = () => {
  return (
    <main className='flex flex-col mt-28 space-y-28'>
      <IntroductionHomeComponent />
      <RecommendedFoodHomeComponent />
      <SearchSellerHomeComponent />
      <RecommendHomeComponent />
    </main>
  )
}
