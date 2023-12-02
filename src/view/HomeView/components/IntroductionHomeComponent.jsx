import { ContentIntroductionHomeComponent } from './ContentIntroductionHomeComponent'
import { ImageIntroductionHomeComponent } from './ImageIntroductionHomeComponent'

export const IntroductionHomeComponent = () => {
  return (
    <article className='w-screen flex flex-row border-1 select-none'>
      <div className='container mx-auto flex flex-row py-5'>
        <ContentIntroductionHomeComponent />
        <ImageIntroductionHomeComponent />
      </div>
    </article>
  )
}
