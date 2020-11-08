import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem } from "../redux/actions";

const CartCard = ({ item, removeItem }) => {
    const handleClick = () => {
        removeItem(item)
    }
    return (
        <div className="col-lg-4 col-md-6">
            <Link to={`/products/${item.product.id}/`} className="card m-3" style={{ color: "black", }}>
            <div className="image">
                {item.product.image ? (
                <img src={item.product.image} alt={item.product.name} />
                ) : null}
            </div>
                <div className="card-body">
                    <h5 className="card-title">
                        name: {item.product.name}
                    </h5>
                    <small className="card-text">qty: {item.qty} </small>
                    <small className="card-text">price: {item.product.price * item.qty} SAR</small>
                </div>
            </Link>
            <button className="btn btn-primary" onClick={handleClick}>Delete</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      removeItem: (item) =>
        dispatch(removeItem(item)),
    };
  };

export default connect(null,mapDispatchToProps)(CartCard);