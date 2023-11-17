import React from 'react'
import { STATUS_CONTENT_SELLER_VIEW } from '../constant'
import withSuspense from '@/HOC/withSuspense'
import { useRecoilValue } from 'recoil'
import { statusSellerViewAtom } from '../store'
const DetailProfileManageAccountComponent = withSuspense(
  React.lazy(() => import('./ManageAccountComponent/components/DetailProfileManageAccountComponent')),
)
const ChangeProfileManageAccountComponent = withSuspense(
  React.lazy(() => import('./ManageAccountComponent/components/ChangeProfileManageAccountComponent')),
)
const CreateProductManageProductionListComponent = withSuspense(
  React.lazy(() => import('./ManageProductListComponent/components/CreateProductManageProductListComponent')),
)
const ListProductManageProductListComponent = withSuspense(
  React.lazy(() => import('./ManageProductListComponent/components/ListProductManageProductListComponent')),
)
const DeliveredDetailOrderComponent = withSuspense(
  React.lazy(() => import('./DetailOrderComponent/components/DeliveredDetailOrderComponent')),
)
const ProcessingDetailOrderComponent = withSuspense(
  React.lazy(() => import('./DetailOrderComponent/components/ProcessingDetailOrderComponent')),
)
const NotificationDetailOrderComponent = withSuspense(
  React.lazy(() => import('./DetailOrderComponent/components/NotificationDetailOrderComponent')),
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
