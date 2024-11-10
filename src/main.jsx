import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Main/Root.jsx'
import ListBook from './components/ListBook/ListBook.jsx'
import PageToRead from './components/PageToRead/PageToRead.jsx'
import Home from './components/Home/Home.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
          path: '/',
          element: <Home></Home>,
      },
      {
        path : "/listBook",
        element: <ListBook></ListBook>,
      },
      {
        path: '/Book/:id',
        loader: ()=> fetch ('book.json'),
        element: <BookDetails></BookDetails>
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
