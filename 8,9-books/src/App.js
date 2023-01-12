import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
import useBooksContext from "./hooks/use-books-context";


function App (){

    const {fetchBooks} = useBooksContext();

    // react func that makes a func run onetime when we open the app or in an specific time 
    useEffect( () => {
        fetchBooks();
    }, [fetchBooks]);

    return(
    <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
    );
}

export default App;