import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routers/Routers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
