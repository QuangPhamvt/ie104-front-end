import { useRecoilValue } from 'recoil'
import '../styles.scss'
import { useTranslation } from 'react-i18next'
import { authAtom } from '@/view/AuthView/store'
import SellerViewHook from '@/view/SellerView/store/hook'
import { profileSellerState } from '@/view/SellerView/store'
import { ACQ_ID, STATE } from '@/utilities'
const HeaderDetailProfileManageAccountComponent = () => {
  const auth = useRecoilValue(authAtom)
  const { t } = useTranslation()
  return (
    <section className='w-full p-4 flex flex-col space-y-4 bg-white rounded-xl '>
      <p
        style={{ fontFamily: 'monospace' }}
        className='font-bold text-xl pb-2 pr-4 border-b-1 border-solid border-gray-400 w-fit'
      >
        {t('SELLER_VIEW.SELLER_PAGE.SELLER_PROFILE')}
      </p>
      <div className='flex flex-row space-x-4 px-2 pb-4 border-b-1 border-solid border-gray-200'>
        <div className='h-24 w-24 rounded-full bg-gray-50 border-4 border-solid border-gray-400' />
        <div className='flex flex-col h-full justify-center'>
          <p className='text-xl font-bold'>{auth.data.username}</p>
          <p className='text-xl font-light italic'>
            {t('SELLER_VIEW.SELLER_PAGE.ROLE')} {auth.data.role}
          </p>
          <p className='text font-thin'>{t('SELLER_VIEW.SELLER_PAGE.PROVINCE_SELLER')}</p>
        </div>
      </div>
    </section>
  )
}
const ContentDetailProfileManageAccountComponent = () => {
  const { t } = useTranslation()
  SellerViewHook.useGetSellerProfile()
  const getProfileUser = useRecoilValue(profileSellerState)
  console.log(getProfileUser)
  if (getProfileUser.state === STATE.IDLE || getProfileUser.state === STATE.LOADING) return null
  return (
    <section className='w-full p-6 flex flex-row space-x-4 '>
      <div className='grow bg-white rounded-xl p-4'>
        <p
          className='font-bold text-xl pr-4 w-fit'
          style={{ fontFamily: 'monospace' }}
        >
          {t('SELLER_VIEW.SELLER_PAGE.ADDRESS')}
        </p>
        <div className='flex flex-col pl-4'>
          <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
            <p className='font-semibold text-base '> {t('SELLER_VIEW.SELLER_PAGE.PROVINCE')} </p>
            <p>{getProfileUser.data.address.province}</p>
          </div>
          <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
            <p className='font-semibold text-base'> {t('SELLER_VIEW.SELLER_PAGE.DISTRICT')} </p>
            <p>{getProfileUser.data.address.district}</p>
          </div>
          <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
            <p className='font-semibold text-base'>{t('SELLER_VIEW.SELLER_PAGE.WARD')} </p>
            <p>{getProfileUser.data.address.ward}</p>
          </div>
        </div>
      </div>

      <div className='grow p-4 flex flex-col rounded-xl bg-white'>
        <p
          className='font-bold text-xl pr-4 w-fit'
          style={{ fontFamily: 'monospace' }}
        >
          {t('SELLER_VIEW.SELLER_PAGE.BANKING')}
        </p>
        <div className='flex flex-col pl-4'>
          <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
            <p className='font-semibold text-base '> {t('SELLER_VIEW.SELLER_PAGE.NUMBER_ACCOUNT')} </p>
            <p>{getProfileUser.data.bank.account_no}</p>
          </div>
          <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
            <p className='font-semibold text-base'> {t('SELLER_VIEW.SELLER_PAGE.BANK_NAME')} </p>
            <p>
              {ACQ_ID.map((item) => {
                if (item.bin === getProfileUser.data.bank.arqId) return item.shortName
              })}
            </p>
          </div>
          <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
            <p className='font-semibold text-base'> {t('SELLER_VIEW.SELLER_PAGE.HAVING')} </p>
            <p>1.110.000</p>
          </div>
        </div>
      </div>
    </section>
  )
}
const DetailProfileManageAccountComponent = () => {
  return (
    <article className='profile w-full h-full flex flex-col shadow-xl rounded-xl overflow-hidden '>
      <div className='px-6 pt-6 overflow-hidden'>
        <HeaderDetailProfileManageAccountComponent />
      </div>
      <ContentDetailProfileManageAccountComponent />
    </article>
  )
}
export default DetailProfileManageAccountComponent
