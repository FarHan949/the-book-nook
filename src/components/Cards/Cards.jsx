import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {

    const [books , setBooks] = useState([])

    useEffect(()=>{
          fetch('book.json')
          .then(response => response.json())
          .then( books => setBooks(books))
    },[])

    return (
        <div className='mt-16 ml-24' style={{fontFamily: "Markazi Text, serif"}}>
            <h1 className='text-4xl text-center mr-24'>Books</h1>

           <div className='grid grid-cols-3 m-10'>
            {
                books.map(book => <Card 
                key={book.bookId}
                book={book}></Card>)
            }
           </div>
            
        </div>
    );
};

export default Cards;