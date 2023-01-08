import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";


function BookShow ({book}){
    const[showEdit, setShowEdit] = useState(false);

    const { handleDelete} = useBooksContext();

    const handleEditClick = () => {
        setShowEdit (!showEdit);
    };

    const handleDeleteClick = () => {
        handleDelete(book.id);
    };

    // 2 prop in one handle
    const handleSubmit = () => {
        setShowEdit (false);
    };

    let content = <h3>{book.title}</h3> ;

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

    return( //to get image website docs after seed put any unique thing for each book
    <div className="book-show">
        
        <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        
        <div> {content}</div>
        
        <div className="actions">
            <button className="edit" onClick={handleEditClick}></button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>

    </div>
    );
}

export default BookShow;