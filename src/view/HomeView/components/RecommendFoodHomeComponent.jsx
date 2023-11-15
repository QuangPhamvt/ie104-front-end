import { FoodCardHomeComponent } from './FoodCardHomeComponent'

export const RecommendedFoodHomeComponent = () => {
  return (
    <article className='container mx-auto space-y-8'>
      <h2 className='font-medium'>Recommended Food Items</h2>
      <div className='grid content-center grid-cols-4 gap-y-8 gap-x-24 justify-items-center'>
        <FoodCardHomeComponent />
        <FoodCardHomeComponent />
        <FoodCardHomeComponent />
        <FoodCardHomeComponent />
        <FoodCardHomeComponent />
      </div>
    </article>
  )
}
