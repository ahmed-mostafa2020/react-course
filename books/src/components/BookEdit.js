import { useState } from "react";

function BookEdit ({book, onSubmit}){
    const [title, setTitle] = useState(book.title);
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(book.id, title);
    };

    return(
    <div>
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" onChange={handleChange} value={title}/>
            <button className="button is-primary">Save</button>
        </form>
    </div>
    );
}

export default BookEdit;