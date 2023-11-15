import { FoodCardHomeComponent } from './FoodCardHomeComponent'

export const RecommendToDayItemHomeComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      <img
        className='rounded-full h-32 w-32'
        src='https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/tiktok_breakfast_42301_16x9.jpg'
        alt=''
      />
      <p className='text-xl font-normal text-gray-600'>Sandwich</p>
    </div>
  )
}
export const RecommendHomeComponent = () => {
  return (
    <article className='container mx-auto flex flex-col space-y-28'>
      <section className='flex flex-col space-y-14'>
        <h2 className='font-medium'>What&rsquo; on your mind</h2>
        <div className='flex flex-row px-12 w-full justify-between items-center'>
          <RecommendToDayItemHomeComponent />
          <RecommendToDayItemHomeComponent />
          <RecommendToDayItemHomeComponent />
          <RecommendToDayItemHomeComponent />
          <RecommendToDayItemHomeComponent />
          <RecommendToDayItemHomeComponent />
        </div>
      </section>
      <section className='flex flex-col space-y-14'>
        <h2 className='font-medium'>Personalized recommendations</h2>
        <div className='grid grid-cols-4 gap-24'>
          <FoodCardHomeComponent />
          <FoodCardHomeComponent />
          <FoodCardHomeComponent />
          <FoodCardHomeComponent />
        </div>
      </section>
    </article>
  )
}
