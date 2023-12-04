import React from 'react'
import { LoadingSellerViewComponent } from '@/view/SellerView/components/LoadingSellerViewComponent'
import { STATUS_CONTENT_BUYER_VIEW } from '../constant'
import { useRecoilValue } from 'recoil'
import { statusBuyerViewAtom } from '../store'
import withSuspense from '@/HOC/withSuspense'

const DetailProfileManageAccountComponent = withSuspense(
  React.lazy(() => import('./DetailProfileManageAccountComponent')),
  <LoadingSellerViewComponent />,
)
const ChangeProfileManageAccountComponent = withSuspense(
  React.lazy(() => import('./ChangeProfileManageAccountComponent')),
  <LoadingSellerViewComponent />,
)
const ContentBuyerComponentFactories = {
  [STATUS_CONTENT_BUYER_VIEW.DETAIL_PROFILE]: () => <DetailProfileManageAccountComponent />,
  [STATUS_CONTENT_BUYER_VIEW.CHANGE_PROFILE]: () => <ChangeProfileManageAccountComponent />,
}

export const ContentBuyerComponent = () => {
  const statusBuyerView = useRecoilValue(statusBuyerViewAtom)
  return <article className='w-full col-span-5'>{ContentBuyerComponentFactories[statusBuyerView]()}</article>
}
