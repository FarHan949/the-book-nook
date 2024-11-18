import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBook, removeBook, saveBook } from '../utility/LocalStorage';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {

   const books = useLoaderData()
   const {id} = useParams()

   const book = books.find( book => book.bookId === id) 
   
   const {
    author, 
    image, 
    review, 
    totalPages, 
    publisher, 
    yearOfPublishing, 
    rating, 
    bookName,
    category, 
    tags } = book



    const handler = () => {
      const storedBooks = getStoredBook();
  
      if (storedBooks.includes(id)) {
          removeBook(id);
          toast.success('Book Reading');
      } else {
          toast.error('Already Reading'); // Optional error toast for clarity
      }
  };
  
  const handler2 = () => {
      const storedBooks = getStoredBook();
  
      if (!storedBooks.includes(id)) {
          saveBook(id);
          toast.success('Added to Read Later');
      } else {
          toast.error('Book is already in Read Later'); // Optional error toast for clarity
      }
  };


    return (
        <div className='w-9/12 p-12 ml-32 flex' style={{fontFamily: "Markazi Text, serif"}}>
          <Helmet>
            <title>The Book Nook | {bookName}</title>
          </Helmet>
            <img src={image} className='rounded-xl' width={"300px"} alt="" />

                <div className='ml-10'>

                  <div className='border-b-2 border-indigo-100'>
                    <h1 className='text-3xl font-bold text-nowrap'>{publisher}</h1>
                    <p className='text-xl text-slate-600 border-b-2 pb-1'>By : {author}</p>
                    <p className='text-slate-600 mb-1 mt-1 text-xl'>{category}</p>
                  </div>

                  <div className='mt-2 border-b-2 border-indigo-100'>
                    <p className='mb-2'><span className='font-bold'>Review </span>: {review}</p>
                    <p className='mb-2'>
                        <span className='font-bold text-xl'>Tag</span>
                        <span className='text-indigo-700 bg-indigo-50 p-1 rounded-xl ml-5'>#{tags[0]}</span>
                        <span className='text-indigo-700 bg-indigo-50 p-1 rounded-xl ml-5'>#{tags[1]}</span>
                        <span className='text-indigo-700 bg-indigo-50 p-1 rounded-xl ml-5'>#{tags[2]}</span>
                    </p>
                  </div>

                  <div className="mt-3">
                      <table className="w-3/5">
                        <tbody>
                          <tr>
                           <td>Number of pages :</td>
                           <td className="font-bold">{totalPages}</td>
                          </tr>
                         <tr>
                          <td>Publisher :</td>
                          <td className="font-bold">{publisher}</td>
                          </tr>
                         <tr>
                         <td>Year of publishing :</td>
                         <td className="font-bold">{yearOfPublishing}</td>
                         </tr>
                         <tr>
                          <td>Rating :</td>
                               <td className="font-bold">{rating}</td>
                             </tr>
                      </tbody>
                   </table>

                   <div className='flex gap-3 mt-5'>
                     <button  
                     onClick={handler}
                      className='bg-white font-bold text-indigo-700 border border-indigo-700  hover:bg-indigo-100 px-4 py-2 rounded-xl'>Read</button>
                     <button  
                     onClick={handler2}
                      className='bg-black text-white hover:bg-slate-500 px-4 py-2 rounded-xl'>WatchList</button>
                   </div>
                </div>

                </div>
                  <ToastContainer />
        </div>
    );
};

export default BookDetails;