/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import withSuspense from '@/HOC/withSuspense'
import { HomePage } from './page'
import { PATH } from './path'
import { LoadingPage } from '@/components/LoadingPage'
const Layout = withSuspense(
  React.lazy(() => import('@/components/Layout')),
  <LoadingPage />,
)
const SearchView = withSuspense(React.lazy(() => import('@/view/SearchView')))
const SellerView = withSuspense(React.lazy(() => import('@/view/SellerView')))
const NotFoundView = withSuspense(React.lazy(() => import('@/view/NotFound')))
const HistoryView = withSuspense(React.lazy(() => import('@/view/HistoryView')))
const DetailPostView = withSuspense(React.lazy(() => import('@/view/DetailPostView')))
const SecureCheckoutView = withSuspense(React.lazy(() => import('@/view/SecureCheckoutView')))
const CheckEmailView = withSuspense(React.lazy(() => import('@/view/CheckEmailView')))
const VerifyTokenView = withSuspense(React.lazy(() => import('@/view/VerifyTokenView')))

export const PrivateRoute = []
export const routes = [
  {
    path: '/loading',
    element: <LoadingPage />,
  },
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
        path: PATH.HISTORY,
        element: <HistoryView />,
      },
      {
        path: PATH.SECURE_CHECKOUT,
        element: <SecureCheckoutView />,
      },
      {
        path: PATH.SELLER,
        element: <SellerView />,
      },
      {
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
  {
    path: PATH.CHECK_EMAIL_REDIRECT,
    element: <CheckEmailView />,
  },
  {
    path: PATH.CHECK_SIGNUP_VERIFY,
    element: <VerifyTokenView />,
  },
]
