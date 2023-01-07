import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App (){

    const[books, setBooks] = useState([]);

    //make a req to get our books
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    // react func that makes a func run onetime when we open the app or in an specific time 
    useEffect( () => {
        fetchBooks();
    }, []);

    // to create a new book into the list
    const handleCreate = async (title) => {
        // to add an element to Array created by state system

        const response = await axios.post('http://localhost:3001/books',{
            title,
        });

        //we don’t need to create a new obj or new id , req will make that
        // const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }]; 

        const updatedBooks = [...books, response.data]; 

        setBooks(updatedBooks);
    };

    //to edit title book
    const handleEdit = async (id,title)=> {
        const response = await axios.put(`http://localhost:3001/books/${id}` , {
            title,
        });
        
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...books ,title}; //title = title: title
            }

            return book;
        });
    
        setBooks(updatedBooks);
    };

    //to delete a book from list
    const handleDelete = async (id)=> {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
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