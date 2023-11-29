import '../styles.scss'
const HeaderDetailProfileManageAccountComponent = () => {
  return (
    <section className='w-full p-4 flex flex-col space-y-4'>
      <p
        style={{ fontFamily: 'monospace' }}
        className='font-bold text-xl pb-2 pr-4 border-b-1 border-solid border-gray-400 w-fit'
      >
        Seller Profile
      </p>
      <div className='flex flex-row space-x-4 px-2 pb-4 border-b-1 border-solid border-gray-200'>
        <div className='h-24 w-24 rounded-full bg-gray-50 border-4 border-solid border-gray-400' />
        <div className='flex flex-col h-full justify-center'>
          <p className='text-xl font-bold'>PHAM MINH QUANG</p>
          <p className='text-xl font-base'>Seller role</p>
          <p className='text font-thin'>Binh Dinh Province</p>
        </div>
      </div>
    </section>
  )
}
const ContentDetailProfileManageAccountComponent = () => {
  return (
    <section className='w-full p-4 flex flex-col '>
      <p
        className='font-bold text-xl pr-4 w-fit'
        style={{ fontFamily: 'monospace' }}
      >
        Banking Account
      </p>
      <div className='flex flex-col pl-4'>
        <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
          <p className='font-semibold text-lg '>Number Account: </p>
          <p>1025871607</p>
        </div>
        <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
          <p className='font-semibold text-lg'>Bank Name: </p>
          <p>Vietcombank</p>
        </div>
        <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
          <p className='font-semibold text-lg'>Having: </p>
          <p>1.110.000</p>
        </div>
      </div>
    </section>
  )
}
const DetailProfileManageAccountComponent = () => {
  return (
    <article className='profile w-full h-full flex flex-col shadow-xl rounded-xl overflow-hidden '>
      <HeaderDetailProfileManageAccountComponent />
      <ContentDetailProfileManageAccountComponent />
    </article>
  )
}
export default DetailProfileManageAccountComponent
