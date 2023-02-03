import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Product.css'

function Product({product, showButton}) {

  return (
    <>

        <div className='col-lg-3 col-md-6 col-sm-6'>
          <Card className='text-left'>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{`${product.title}`}</Card.Title>
              <Card.Text>
              {`${product.description}`}
              </Card.Text>
              {showButton && (
                <Link variant="primary" to={`/product/${product.id}`}>
                  Details
                </Link>
                )}
              
            </Card.Body>
            <div> price: {product.price} $</div>
          </Card>
        </div>

    </>
  );
}

export default Product;