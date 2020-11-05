import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <div className="col-lg-4 col-md-6" key={product.id}>
      <Link
        to={`/products/${product.id}`}
        className="card m-3"
        style={{ color: "black" }}
      >
        <div className="image">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : null}
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>

          <small className="card-text">Price :{product.price} </small>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
