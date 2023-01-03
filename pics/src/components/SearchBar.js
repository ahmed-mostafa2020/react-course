import { useState } from "react";

function SearchBar({onEvent}){

    const[term, setTerm] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onEvent('cars')
    };

    const handleChange = (e) => { // any function controls an input type has an event.
        setTerm(e.target.value); // set term value = input value
    };


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} autoCorrect='true'/>
            </form>
        </div>
    );
}

export default SearchBar;