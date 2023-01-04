import { useState } from "react";

function BookEdit (){
    const [title, setTitle] = useState('');
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // onEdit(title);
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