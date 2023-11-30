import './styles.scss'
const CheckEmailView = () => {
  const handleRedirectToEmail = () => {
    window.location.href = 'http://gmail.com'
  }
  return (
    <article className='w-screen container mx-auto flex items-start justify-center h-screen '>
      <section className='w-116 h-68 bg-white mt-12 rounded-2xl border-1 border-solid border-gray-200 shadow flex flex-col justify-start items-center p-4 space-y-4 redirect--modal'>
        <h2 className='text-orange-400 font-extrabold text-2xl '>Check Email</h2>
        <div className='flex flex-col justify-center items-center text-lg italic space-x-1'>
          <p>Please check your email</p>
          <p>We had to to send email for you</p>
          <p>Thanks for use our application</p>
        </div>
        <button
          className='py-2 px-8 bg-orange-400 rounded-xl redirect--btn border-2'
          onClick={handleRedirectToEmail}
        >
          <p className='text-lg font-extrabold text-white'>Redirect to gmail</p>
        </button>
      </section>
    </article>
  )
}
export default CheckEmailView
