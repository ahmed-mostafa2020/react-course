import BookShow from "./BookShow";

function BookList ({books, onDelete, onEdit}){
    const renderdBooks = books.map((book) => {
        return <BookShow book={book} key={book.id}  onDelete={onDelete} onEdit={onEdit} />;
    });
    
    return(
    <div className="book-list">
        {renderdBooks}
    </div>
    );
}

export default BookList;