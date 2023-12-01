import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { FaYoutube } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcPaypal } from 'react-icons/fa'
import { FaCcApplePay } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { authAtom } from '@/view/AuthView/store'
import { STATE } from '@/utilities'
import { PUBLIC_IMAGE } from '@/utilities'
export const FooterLayout = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <>
      {auth.state === STATE.HAS_VALUE && (
        <footer className=' grid w-screen grid-cols-4 bg-gray-800 mt-28 '>
          <article className='flex flex-col '>
            <div className='flex flex-row space-y-6 text-white'>
              <img
                src={PUBLIC_IMAGE.BRAND}
                width={70}
                height={70}
                className='ml-0'
              />
              <h1 className='text-3xl'>BunShop</h1>
            </div>
            <p className='text-xl mt-5 text-white'>BunShop - Thưởng thức ẩm thực nhanh chóng - tận nhà!</p>
          </article>
          <article className='flex flex-col  px-10 py-20 space-y-2'>
            <p className='text-xl text-white'>Bạn cần hỗ trợ</p>
            <p className='text-2xl text-white'>086051898</p>
            <ul className='flex flex-col items-start justify-center space-y-2 text-white'>
              <li>
                <strong>Địa chỉ: </strong>138 Topaz Home, Ward Tan Phu, District 9, Ho Chi Minh City.
              </li>
              <li>
                <strong>Email: </strong>BunShopFood@gmail.com
              </li>
            </ul>
            <section className='flex flex-row space-x-4 '>
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
              <FaYoutube
                size={24}
                color='white'
              />
            </section>
            <section className='flex flex-row space-x-4 '>
              <FaCcMastercard
                size={40}
                color='white'
              />
              <FaCcPaypal
                size={40}
                color='white'
              />
              <FaCcApplePay
                size={40}
                color='white'
              />
              <FaCcVisa
                size={40}
                color='white'
              />
            </section>
          </article>
          <article className='flex flex-col space-y-4  pl-py-20'>
            <p className='text-xl  text-white'>Về chúng tôi</p>
            <ul className='flex flex-col items-start justify-center w-4/5 space-y-2  text-white'>
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Danh mục</li>
              <li>Thành viên</li>
              <li>Blog</li>
            </ul>
          </article>
          <article className='flex flex-col space-y-4 py-20'>
            <p className='text-xl text-white'>Chính sách</p>
            <ul className='flex flex-col items-start justify-center space-y-2 text-white '>
              <li>Chính sách giao hàng</li>
              <li>Chính sách thanh toán</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách kiểm hàng</li>
              <li>Chính sách bảo mật thông tin</li>
            </ul>
          </article>
        </footer>
      )}
    </>
  )
}
