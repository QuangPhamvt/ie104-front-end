import React from 'react'
import { STATUS_CONTENT_SELLER_VIEW } from '../constant'
import withSuspense from '@/HOC/withSuspense'
import { useRecoilValue } from 'recoil'
import { statusSellerViewAtom } from '../store'
import { LoadingSellerViewComponent } from './LoadingSellerViewComponent'
const DetailProfileManageAccountComponent = withSuspense(
  React.lazy(() => import('./ManageAccountComponent/components/DetailProfileManageAccountComponent')),
  <LoadingSellerViewComponent />,
)
const ChangeProfileManageAccountComponent = withSuspense(
  React.lazy(() => import('./ManageAccountComponent/components/ChangeProfileManageAccountComponent')),
  <LoadingSellerViewComponent />,
)
const CreateProductManageProductionListComponent = withSuspense(
  React.lazy(() => import('./ManageProductListComponent/components/CreateProductManageProductListComponent')),
  <LoadingSellerViewComponent />,
)
const ListProductManageProductListComponent = withSuspense(
  React.lazy(() => import('./ManageProductListComponent/components/ListProductManageProductListComponent')),
  <LoadingSellerViewComponent />,
)
const DeliveredDetailOrderComponent = withSuspense(
  React.lazy(() => import('./DetailOrderComponent/components/DeliveredDetailOrderComponent')),
  <LoadingSellerViewComponent />,
)
const ProcessingDetailOrderComponent = withSuspense(
  React.lazy(() => import('./DetailOrderComponent/components/ProcessingDetailOrderComponent')),
  <LoadingSellerViewComponent />,
)
const NotificationDetailOrderComponent = withSuspense(
  React.lazy(() => import('./DetailOrderComponent/components/NotificationDetailOrderComponent')),
  <LoadingSellerViewComponent />,
)
const ContentSellerComponentFactories = {
  [STATUS_CONTENT_SELLER_VIEW.DETAIL_PROFILE]: () => <DetailProfileManageAccountComponent />,
  [STATUS_CONTENT_SELLER_VIEW.CHANGE_PROFILE]: () => <ChangeProfileManageAccountComponent />,
  [STATUS_CONTENT_SELLER_VIEW.CREATE_PRODUCT]: () => <CreateProductManageProductionListComponent />,
  [STATUS_CONTENT_SELLER_VIEW.LIST_PRODUCT]: () => <ListProductManageProductListComponent />,
  [STATUS_CONTENT_SELLER_VIEW.DELIVERED_DETAIL]: () => <DeliveredDetailOrderComponent />,
  [STATUS_CONTENT_SELLER_VIEW.PROCESSING_DETAIL]: () => <ProcessingDetailOrderComponent />,
  [STATUS_CONTENT_SELLER_VIEW.NOTIFICATION_DETAIL]: () => <NotificationDetailOrderComponent />,
}
export const ContentSellerComponent = () => {
  const statusSellerView = useRecoilValue(statusSellerViewAtom)
  return <article className='w-full col-span-5'>{ContentSellerComponentFactories[statusSellerView]()}</article>
}
