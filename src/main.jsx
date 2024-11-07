import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import ListBook from './components/ListBook/ListBook.jsx'
import PageToRead from './components/PageToRead/PageToRead.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path : "/listBook",
        element: <ListBook></ListBook>,
      },
      {
        path : "/pageToRead",
        element : <PageToRead></PageToRead>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
