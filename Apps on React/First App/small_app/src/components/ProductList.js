import Product from "./Product";
import { useState, useEffect } from "react";
import Button from "./Buttons";
import './Button.css';

function ProductsList() {
  
  // state is a store for data
  const [products, setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  const url_api = 'https://fakestoreapi.com/products';

  //api requests
  const getProducts = async () => {
    await fetch(url_api).then((res) => res.json()).then((data) => {
      setProducts(data);
    });
  }

  const getCategories = async () => {
    await fetch(`${url_api}/categories`).then((res) => res.json()).then((data) => {
      setCategories(data);
    });
  }

  const getProductInCategory = async (categoryName) => {
    await fetch(`${url_api}/category/${categoryName}`).then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });
  }

  // get categories and products once render
  useEffect(( ) => {
    getProducts();
    getCategories();
  },[]);

  const renderedProducts = products.map((product) => {
    return( 
      <Product product={product} key={product.id} showButton={true} />
  );
  });

  const renderedCategories = categories.map((category) => {
    return(
      <Button category={category} key={category}
      onFilter={() => getProductInCategory(category)}
      />

  );
  });


  return (
    <>
    <div className="p-5">
      <h2 className="text-center p-3"> Our Products </h2> 

      <div className='container'>
        <div className="box">
          <button onClick={()=> getProducts()}>All</button>
          {renderedCategories}
        </div>

        <div className='row'>
          {renderedProducts}
        </div>

      </div>
    </div>
    </>
  );
}

export default ProductsList;