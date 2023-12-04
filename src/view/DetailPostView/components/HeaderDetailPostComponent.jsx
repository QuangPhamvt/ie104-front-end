import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { CiDiscount1 } from 'react-icons/ci'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { searchDetailProductByIdSelectorFamily } from '../store/selectors'
import { STATUS_API_POST } from '@/utilities'
import { searchDetailProductionAtom } from '../store'
import React from 'react'
import { useTranslation } from 'react-i18next'
export const ContentHeaderDetailPostComponent = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { state, contents } = useRecoilValueLoadable(searchDetailProductByIdSelectorFamily(id))
  const setSearchDetailProduction = useSetRecoilState(searchDetailProductionAtom)
  React.useEffect(() => {
    setSearchDetailProduction({
      status: STATUS_API_POST.HAS_VALUE,
      message: contents.message,
      data: contents.data,
    })
  }, [state])
  return (
    <section
      className={`flex pl-4 flex-row space-x-8 h-full w-3/5 justify-between ${
        state === STATUS_API_POST.LOADING && 'animate-pulse'
      }`}
    >
      <div className='w-2/5 flex justify-center items-center h-full rounded-xl'>
        <img
          className='w-full h-full object-cover rounded-xl text-white'
          src={state === STATUS_API_POST.LOADING ? '' : contents.data?.picture || 'asdads'}
          alt='Something wrong with url'
        />
      </div>
      <section className='w-3/5 text-white flex flex-col space-y-8 justify-end py-8'>
        <h2>{contents.data?.title || ''}</h2>
        <p>{contents.data?.author?.username || ''}</p>
        <div className='grid grid-cols-3'>
          <div className='flex flex-col justify-between justify-center'>
            <p className='text-sm'>
              <FaStar /> 4.5 {t('DETAIL_POST_VIEW.RATING')}
            </p>
            <p className='text-sm'>100+ {t('DETAIL_POST_VIEW.RATING')}</p>
          </div>
          <div className='flex flex-col border-x-2 border-solid border-white text-center px-6'>
            <p className='text-sm'>30 {t('DETAIL_POST_VIEW.MIN')}</p>
            <p className='text-sm'>{t('DETAIL_POST_VIEW.DELIVERY_TIME')}</p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-sm'>
              <GiMoneyStack /> {contents.data?.price || ''}
            </p>
            <p className='text-sm'>{t('DETAIL_POST_VIEW.COST_FOR_TWO')}</p>
          </div>
        </div>
      </section>
    </section>
  )
}
export const DiscountHeaderDetailComponent = () => {
  const { t } = useTranslation()
  return (
    <section className='text-white w-2/5 pt-12 pl-12'>
      <div className='border-dashed border-2 border-orange-400 h-full rounded-2xl px-8 flex flex-col justify-center space-y-4'>
        <h2>{t('DETAIL_POST_VIEW.OFFERS')}</h2>
        <ul className='flex flex-col space-y-4'>
          <li className='inline-flex items-center space-x-2'>
            <CiDiscount1
              size={24}
              color='orange'
            />
            <p>{t('DETAIL_POST_VIEW.50_OFF')}</p>
            <GiMoneyStack />
            100 | {t('DETAIL_POST_VIEW.USE_CODE_TRYNEW')}
          </li>
          <li className='inline-flex items-center space-x-2'>
            <CiDiscount1
              size={24}
              color='orange'
            />
            <p>
              {t('DETAIL_POST_VIEW.20_OFF')} | {t('DETAIL_POST_VIEW.USE_CODE_PARTY')}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
export const HeaderDetailPostComponent = () => {
  return (
    <article className='bg-black h-64 opacity-90'>
      <section className='container flex flex-row mx-auto py-4 h-full'>
        <ContentHeaderDetailPostComponent />
        <DiscountHeaderDetailComponent />
      </section>
    </article>
  )
}
