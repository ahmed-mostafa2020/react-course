import { createContext, useState, useCallback} from "react";
import axios from "axios";


const BooksContext = createContext();

function Provider ({children}){

    const[books, setBooks] = useState([]);

    //make a request to get our books
    // wrap the func by usecallback to prevent the func to br redefined
    const fetchBooks = useCallback( async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
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
            await axios.put(`http://localhost:3001/books/${id}` , {
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
            await axios.delete(`http://localhost:3001/books/${id}`);
    
            const updatedBooks = books.filter((book) => {
                return book.id !== id;
            });
    
            setBooks(updatedBooks);
        };

        const valueToShare = {
            books,
            handleCreate,
            handleEdit,
            handleDelete,
            fetchBooks
        };

    return (
        <BooksContext.Provider value={valueToShare} >
            {children}
        </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;
