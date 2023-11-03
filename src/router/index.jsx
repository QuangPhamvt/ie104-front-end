import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([{ path: '/', Component }])
export const Router = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading....</p>}
    />
  )
}
