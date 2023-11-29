import { FoodCardHomeComponent } from './FoodCardHomeComponent'

export const RecommendedFoodHomeComponent = () => {
  return (
    <article className='container mx-auto space-y-8'>
      <h2 className='font-medium home--content-hidden'>Recommended Food Items</h2>
      <div className='grid content-center recommended--food gap-y-8 gap-x-24 justify-items-center '>
        <FoodCardHomeComponent
          url='https://blog.shift4shop.com/hubfs/ThinkstockPhotos-502255976.png'
          name='Onion'
          star={4.3}
          money='240'
        />
        <FoodCardHomeComponent
          url='https://exhibitors.figlobal.com/47/pdcnewsitem/11/07/60/Food-and-beverage-e-commerce.jpeg'
          name='Bread'
          star={3.5}
          money='220'
        />
        <FoodCardHomeComponent
          url='https://onextdigital.com/wp-content/uploads/2022/12/food-e-commerce.jpg'
          name='Oli'
          star={4.5}
          money='220'
        />
        <FoodCardHomeComponent
          name='Milk'
          star={2.5}
          money='220'
        />
      </div>
    </article>
  )
}
