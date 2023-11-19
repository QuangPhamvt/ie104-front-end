/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import withSuspense from '@/HOC/withSuspense'
import { HomePage } from './page'
import { PATH } from './path'
const Layout = withSuspense(React.lazy(() => import('@/components/Layout')))
const SearchView = withSuspense(React.lazy(() => import('@/view/SearchView')))
const SellerView = withSuspense(React.lazy(() => import('@/view/SellerView')))
const NotFoundView = withSuspense(React.lazy(() => import('@/view/NotFound')))
const DetailPostView = withSuspense(React.lazy(() => import('@/view/DetailPostView')))
const SecureCheckoutView = withSuspense(React.lazy(() => import('@/view/SecureCheckoutView')))

export const PrivateRoute = [
  {
    path: PATH.SELLER,
    element: <SellerView />,
  },
]
export const routes = [
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: PATH.SEARCH,
        element: <SearchView />,
      },
      {
        path: PATH.DASHBOARD,
        element: <HomePage />,
      },
      {
        path: PATH.DETAIL_POST,
        element: <DetailPostView />,
      },
      {
        path: PATH.SECURE_CHECKOUT,
        element: <SecureCheckoutView />,
      },
      ...PrivateRoute,
      {
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
]
