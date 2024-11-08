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
        <div className='mt-16' style={{fontFamily: "Markazi Text, serif"}}>
            <h1 className='text-4xl text-center'>Books {books.length}</h1>
           
           <div>
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