import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/actions";

const ProductDetail = ({ products, addItem, cart }) => {
  const { productID } = useParams();

  const product = products.find((product) => product.id === +productID);
  let cartProduct = cart.items.find(item => item.product.id === product?.id)
  const [item, setItem] = useState({
    product: product,
    qty: 1
  })
  console.log(!cartProduct)
  if(!cartProduct) cartProduct = {qty:0}
  if (!product) return <Redirect to="/products/" />;

  //display list of images product
  const productImage = product.images.map((image) => (
    <div className="image">
      <img src={image} />
    </div>
  ));

  const textChangeHandler = (event) => {
    setItem({...item, qty: +event.target.value})
  }

  const handleClick = () => {
    addItem(item)
  }

  return (
    <div className="container mt-5" key={productID}>
      <div className="card">
        <div className="card-header">Product Detail</div>
        <div className="image">
          <img src={product.image} alt={product.name} />
        </div>
        {productImage}
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6></h6>
          <p>description: {product.description}</p>
          <p>stock : {product.stock}</p>
          <p>Price : {product.price} SAR</p>

          <input type="text" className="" value={item.qty} name="qty" onChange={textChangeHandler} />
          {
            item.qty <= product.stock && item.qty > 0 && cartProduct.qty + item.qty <= product.stock? (
            <button className="btn btn-primary" onClick={handleClick}>Add to cart</button>
            ):
            null
          }
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ products, cart }) => ({
  products,
  cart
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) =>
      dispatch(addItem(item)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
