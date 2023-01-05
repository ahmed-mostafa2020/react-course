import './index.css'
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App (){

    const[books, setBooks] = useState([]);


    // to add a new book into the list
    const handleCreate = (title) => { // to add an element to Array created by state system
        const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }]; 
        // title: title = title (shorthand in js).
        // it should be an back in server to create an unique id for each book but it is temporary method

        setBooks(updatedBooks);
    };

    //to edit title book
    const handleEdit = (id,title)=> {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...books ,title}; //title = title: title
            }

            return book;
        });
    
        setBooks(updatedBooks);
    };

    //to delete a book from list
    const handleDelete = (id)=> {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    return(
    <div className='app'>
        <h1>Reading List</h1>
        <BookList books={books} onDelete={handleDelete} onEdit={handleEdit}/>
        <BookCreate onCreate={handleCreate}/>
    </div>
    );
}

export default App;