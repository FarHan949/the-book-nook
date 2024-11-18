const getStoredBook = () =>{
    const stored = localStorage.getItem('book')
    if(stored){
        return JSON.parse(stored)
    }
    return []
}


const removeBook = (id) => {
    const book = getStoredBook();
    const updatedBookList = book.filter(BookId => BookId !== id);

    localStorage.setItem('book', JSON.stringify(updatedBookList));
    return updatedBookList;
}



const saveBook = (id) =>{
    const book = getStoredBook()
    const exist = book.find(BookId => BookId === id)

    if(!exist){
        book.push(id)
        localStorage.setItem('book', JSON.stringify(book))
    }

}

export {getStoredBook, saveBook, removeBook}