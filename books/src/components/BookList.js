import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";


function BookList (){

    const {books} = useBooksContext();
    
    const renderdBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} />;
    });
    
    return(
    <div className="book-list">
        {renderdBooks}
    </div>
    );
}

export default BookList;