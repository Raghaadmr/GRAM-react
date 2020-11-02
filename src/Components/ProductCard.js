import React from "react";
import { Link } from "react-router-dom";

const ProductCard = props => {
  const product = props.product;
 console.log(product.id)

  return (
    <div className="col-lg-4 col-md-6">
      <Link to={`/detail/${product.id}`} className="card m-3" style={{color: "black",}}>
      <div className="image">
        <img src={product.img} alt={product.name} />
        </div> 
        <div className="card-body">
          <h5 className="card-title">
          {product.name}
          </h5>
         
          <small className="card-text">Price :{product.price} </small>
          <small className="card-text">id:{product.id} </small>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;