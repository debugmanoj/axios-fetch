import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  
  const Navigator=createBrowserRouter(AppRoutes)
  return <RouterProvider router={Navigator} />
}

export default App