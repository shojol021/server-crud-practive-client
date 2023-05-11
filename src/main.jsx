import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/users',
    element: <User></User>,
    loader: () => fetch('http://localhost:5000/users')
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
