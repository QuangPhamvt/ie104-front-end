import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
export const FooterLayout = () => {
  return (
    <footer
      style={{ bottom: 0 }}
      className='sticky grid w-screen grid-cols-3 bg-orange-500 h-96 mt-28'
    >
      <article className='flex items-center justify-center'>
        <div>Logo</div>
      </article>
      <article className='flex flex-col items-center justify-center gap-4'>
        <section className='flex justify-center w-full'>
          <ul className='flex flex-row items-center justify-center w-4/5 space-x-8 text-white'>
            <li>About us</li>
            <li>Delivery</li>
            <li>Help & Support</li>
            <li>T & C</li>
          </ul>
        </section>
        <section className='flex flex-row justify-center w-full space-x-4 '>
          <FiFacebook
            size={24}
            color='white'
          />
          <FaInstagram
            size={24}
            color='white'
          />
          <CiTwitter
            size={24}
            color='white'
          />
        </section>
      </article>
      <article className='flex items-center justify-center pb-10 text-white'>
        <p>Contact: +8486051898</p>
      </article>
    </footer>
  )
}
