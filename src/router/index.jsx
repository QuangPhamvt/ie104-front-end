import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../view/Home'

export const router = createBrowserRouter([{ path: '', element: <Home /> }])
export const Router = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading....</p>}
    />
  )
}
