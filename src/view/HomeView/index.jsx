import React from 'react'
import { IntroductionHomeComponent, RecommendHomeComponent, SearchSellerHomeComponent } from './components'
import { RecommendedFoodHomeComponent } from './components/RecommendFoodHomeComponent'
import './styles/index.scss'

const HomeView = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('home--content-show')
        } else {
          entry.target.classList.remove('home--content-show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.home--content-hidden')
    const hiddenElementsRight = document.querySelectorAll('.home--content-hidden-right')
    hiddenElements.forEach((el) => observer.observe(el))
    hiddenElementsRight.forEach((el) => observer.observe(el))
  }, [])
  return (
    <main
      className='flex flex-col mt-28 space-y-28 '
      style={{ backgroundColor: '#F7FAFC' }}
    >
      <IntroductionHomeComponent />
      <RecommendedFoodHomeComponent />
      <SearchSellerHomeComponent />
      <RecommendHomeComponent />
    </main>
  )
}
export default HomeView
