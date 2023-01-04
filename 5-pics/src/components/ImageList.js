import './ImageList.css'
import ImageShow from "./ImageShow";

function ImageList({images}){
    console.log(images);
    const renderedImages = images.map( (image) => { //loop on each image in images and pass it as a prop
        return <ImageShow image={image} key={image.id} />
    });

    return (
        <div>
            <div className='image-list'>{renderedImages}</div>
        </div>
    );
}

export default ImageList;