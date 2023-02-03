import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/image-1.jpeg';
import image2 from '../assets/image-2.jpeg';
import image3 from '../assets/image-3.jpeg';
import './Slider.css'


function Slider() {

  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;