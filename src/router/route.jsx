import { HeaderLayout } from '@/components'
import { HomePage } from './page'
import { NotFoundView } from '@/view'
import { PATH } from './path'
export const routes = [
  {
    path: PATH.HOME,
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.DASHBOARD,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
]
