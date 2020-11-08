import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";

const CartList = ({ cart }) => {
    const cartCards = cart.items.map(item => (
        <CartCard key={item.id} item={item} />
    ));

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mt-2 mb-2">
            {
                cart.items.length? (
                    <div>
                        <h3> cartCards</h3>
                        <div className="row">
                            {cartCards}
                        </div>
                        <p>Total</p>
                        <p>subtotal: {cart.subtotal}</p>
                        <p>tax: {cart.tax}</p>
                        <p>total: {cart.total}</p>
                        <button className="btn btn-success">Proceed to checkout</button>
                    </div>    
                ):(
                    <p>Cart is empty</p>
                )
            }
            </div>
        </div>
    );
}
const mapStateToProps = ({ cart }) => ({
    cart
});

export default connect(mapStateToProps)(CartList);