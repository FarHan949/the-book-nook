import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Main/Root.jsx'
import ListBooks from './components/ListBooks/ListBooks.jsx'
import PageToRead from './components/PageToRead/PageToRead.jsx'
import Home from './components/Home/Home.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import Error from './components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
          path: '/',
          element: <Home></Home>,
      },
      {
        path: '/Book/:id',
        loader: ()=> fetch ('book.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path : "/listBook",
        loader: ()=> fetch('book.json'),
        element: <ListBooks></ListBooks>,
      },
      {
        path : "/pageToRead",
        loader: ()=> fetch('book.json'),
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
