import { Layout } from '@/components'
import { HomePage } from './page'
import { NotFoundView, SearchView } from '@/view'
import { PATH } from './path'
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
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
]
