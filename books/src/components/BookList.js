import BookShow from "./BookShow";

function BookList ({books, onDelete}){
    const renderdBooks = books.map((book) => {
        return <BookShow book={book} key={book.id}  onDelete={onDelete} />;
    });
    
    return(
    <div className="book-list">
        {renderdBooks}
    </div>
    );
}

export default BookList;