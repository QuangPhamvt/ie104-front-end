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
import { useTranslation } from 'react-i18next'
export const FooterLayout = () => {
  const auth = useRecoilValue(authAtom)
  const { t } = useTranslation()
  return (
    <>
      {auth.state === STATE.HAS_VALUE && (
        <footer className=' grid w-screen grid-cols-4 bg-gray-800 h-100 mt-28 '>
          <article className='flex flex-col p-10 '>
            <div className='flex flex-row space-y-6 text-white'>
              <img
                src={PUBLIC_IMAGE.BRAND}
                width={70}
                height={70}
                className='ml-0'
              />
              <h1 className='text-3xl'>BunShop</h1>
            </div>
            <p className='text-xl mt-5 text-white'>{t('FOOTER_LAYOUT.SLOGAN_BRAND')}</p>
          </article>
          <article className='flex flex-col  px-10 p-20 space-y-2'>
            <p className='text-xl text-white'>{t('FOOTER_LAYOUT.YOU_NEED_SUPPORT')}</p>
            <p className='text-2xl text-white'>086051898</p>
            <ul className='flex flex-col items-start justify-center space-y-2 text-white'>
              <li>
                <strong>{t('FOOTER_LAYOUT.ADDRESS_CONTACT')}</strong>138 Topaz Home, Ward Tan Phu, District 9, Ho Chi
                Minh City.
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
                size={25}
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
            <p className='text-xl  text-white'>{t('FOOTER_LAYOUT.ABOUT_US')}</p>
            <ul className='flex flex-col items-start justify-center w-4/5 space-y-2  text-white'>
              <li>{t('FOOTER_LAYOUT.HOME_PAGE')}</li>
              <li>{t('FOOTER_LAYOUT.INTRODUCE')}</li>
              <li>{t('FOOTER_LAYOUT.CATEGORIES')}</li>
              <li>{t('FOOTER_LAYOUT.MEMBERS')}</li>
              <li>{t('FOOTER_LAYOUT.CAREERS')}</li>
            </ul>
          </article>
          <article className='flex flex-col space-y-4 py-20'>
            <p className='text-xl text-white'>{t('FOOTER_LAYOUT.POLICY_BRAND')}</p>
            <ul className='flex flex-col items-start justify-center space-y-2 text-white '>
              <li>{t('FOOTER_LAYOUT.DELIVERY_POLICY')}</li>
              <li>{t('FOOTER_LAYOUT.PAYMENT_POLICY')}</li>
              <li>{t('FOOTER_LAYOUT.RETURN_POLICY')}</li>
              <li>{t('FOOTER_LAYOUT.QUALITY_CHECK_POLICY')}</li>
              <li>{t('FOOTER_LAYOUT.PRIVACY_POLICY')}</li>
            </ul>
          </article>
        </footer>
      )}
    </>
  )
}
