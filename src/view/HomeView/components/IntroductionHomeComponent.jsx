import { ContentIntroductionHomeComponent } from './ContentIntroductionHomeComponent'
import { ImageIntroductionHomeComponent } from './ImageIntroductionHomeComponent'

export const IntroductionHomeComponent = () => {
  return (
    <article className='w-screen flex flex-row bg-gray-300'>
      <div className='container mx-auto flex flex-row'>
        <ContentIntroductionHomeComponent />
        <ImageIntroductionHomeComponent />
      </div>
    </article>
  )
}
