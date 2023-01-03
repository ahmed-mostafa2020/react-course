import axios from 'axios';

const searchImages = async(term) => { //use async before func coz i will use await into this function 
    const response = await axios.get('https://api.unsplash.com/search/photos',{ 
        //use await to make sure that js will wait to get all response then run the next code line
    headers:{
        Authorization: 'Client-ID h574q0LyMjfXKlTeEA-JnjNkc4lrk1GIfIacvuyzA14', //access key
    },
    params: {
        query: term,
    },
    });

    return response.data.results ; //return images only without the rest 
};

export default searchImages ;
