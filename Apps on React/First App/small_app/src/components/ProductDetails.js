import Product from "./Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Product.css'

function ProductDetails (){

  const [product, setProduct] = useState({});
  const param = useParams();
  const url_api = `https://fakestoreapi.com/products`;

  useEffect(() => {
    fetch(`${url_api}/${param.productId}`).then((res) => res.json()).then((data) => {
      setProduct(data);
    });
  },[]);

  return (
    <>
    <div className="container">

    
      <h2 className="p-3 text-center">product details: "{product.title}"</h2>
      <Product product={product} showButton={false} />
    </div>
    </>
  );
}
export default ProductDetails;