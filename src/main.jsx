import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './User.jsx'
import SingleUser from './SingleUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/users',
    element: <User></User>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/users/:id',
    element: <SingleUser></SingleUser>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
