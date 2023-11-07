import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PATH } from './path'
import { Home } from '@/view/Home'
import { NotFoundView } from '@/view'
import { HeaderLayout } from '@/components/Layout'

const route = [
  {
    path: PATH.HOME,
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.DASHBOARD,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
]
export const router = createBrowserRouter(route)
export const Router = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading....</p>}
    />
  )
}
