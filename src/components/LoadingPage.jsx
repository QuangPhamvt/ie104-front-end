import { ThreeCircles } from 'react-loader-spinner'
export const LoadingPage = () => {
  return (
    <div className='w-screen h-screen flex-row flex justify-center items-center'>
      <div className='w-full flex justify-center items-center'>
        <ThreeCircles
          color='#FFA33C'
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}
