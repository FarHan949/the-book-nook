import { useEffect, useState } from "react";
import { getStoredBook } from "../utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import ListBook from "../ListBook/ListBook";
import { Helmet } from "react-helmet-async";

const ListBooks = () => {
  const books = useLoaderData();

  const [listOfBooks, setListOfBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([])

  const handlerBookFilter = (filter) =>{
       if(filter === 'rating'){
         const sortedBooks = listOfBooks.sort((a, b) => a.rating - b.rating)
         setDisplayBooks(sortedBooks)
       }
       else if(filter === 'totalPage'){
        const sortedBooks = listOfBooks.sort((a, b) => a.totalPage - b.totalPage)
        setDisplayBooks(sortedBooks)
       }
       else if(filter === 'publishYear'){
        const sortedBooks = listOfBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
        setDisplayBooks(sortedBooks)
       }
  }

  useEffect(() => {
    const storageBooks = getStoredBook();
    const BooksListed = books.filter((book) =>
    storageBooks.includes(book.bookId)
    );
    setListOfBooks(BooksListed);
    setDisplayBooks(BooksListed)
  }, [books]);


  return (
    <div style={{ fontFamily: "Markazi Text, serif" }}>
      <Helmet>
        <title>The Book Nook | your Listed books</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center mb-4">Books</h1>
            <div className="flex justify-end mb-4">
              
              <details className="dropdown">
                 <summary className="btn m-1 bg-indigo-400 text-xl text-white">Filter</summary>
                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handlerBookFilter('rating')}><a>Rating</a></li>
                    <li onClick={()=> handlerBookFilter('totalPage')}><a>Number of Pages</a></li>
                    <li onClick={()=> handlerBookFilter('publishYear')}><a>Publish Year</a></li>
                 </ul>
             </details>
              
            </div>

            <div className="flex mb-4 text-xl">
              <button className="px-4 py-2 border-b-2 border-green-500">
                Read Books
              </button>

              <button className="px-4 py-2 border-b-2 border-transparent">
                Wishlist Books
              </button>
            </div>
            <div className="space-y-4">
              {displayBooks.map((book) => (
                <ListBook key={book.bookId} book={book}></ListBook>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
