import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";






const ProductDetail = ({ products }) => {
    console.log("detail page")
  const { productID } = useParams();
  console.log(productID)
  const product = products.find((product) => product.id === +productID);
  if (!product) return <Redirect to="/list/" />;
  console.log(product)

  return (
    <div className="container mt-5">
      <div className="card">
      <div className="card-header">
        Product Detail
      </div>
         <div className="image">
        <img src={product.img} alt={product.name} />
        </div> 
        <div className="card-body">

          <h5 className="card-title">
            {product.name}
          </h5>
          <h6></h6>
          <p>description: {product.description}</p>
          <p>stock : {product.stock}</p>
          <p>Price : {product.price} SAR</p>
         
          
        </div>
    </div>   
    </div>
  );
};
const mapStateToProps = ({ products }) => ({
    products
});

export default connect(mapStateToProps)(ProductDetail);