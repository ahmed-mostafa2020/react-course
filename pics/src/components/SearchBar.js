import './SearchBar.css';
import { useState } from "react";

function SearchBar({onEvent}){

    const[term, setTerm] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onEvent(term); //run this prop
    };

    const handleChange = (e) => { // any function controls an input type has an event.
        setTerm(e.target.value); // set term value = input value
    };


    return (
        //enforce value of input = term
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label> 
                <input value={term} onChange={handleChange} autoCorrect='true'/> 
            </form>
        </div>
    );
}

export default SearchBar;