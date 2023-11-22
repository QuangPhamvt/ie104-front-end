import { ThreeCircles } from 'react-loader-spinner'
export const LoadingSellerViewComponent = () => {
  return (
    <div className='w-full shadow-2xl flex justify-center items-center h-96 rounded-2xl'>
      <ThreeCircles
        color='#FFA33C'
        height={100}
        width={100}
      />
    </div>
  )
}
