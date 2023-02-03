import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App(){
    const [images, setImages]=useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term); //run this component to get terms i search for
        // it will take sometime so we will use await

        setImages(result);//we need to rerender component to appear images so state!
    };

    return (
        <div>
            <SearchBar onEvent={handleSubmit} />
            <ImageList images={images}/>
        </div>
    );
}

export default App;