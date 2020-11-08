import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddressCard from "./AddressCard";
import { Redirect } from "react-router-dom"
import { checkout, resetErrors } from "../redux/actions"

const CheckoutPage = ({ addresses, user, orderCheckout, errorMsg, resetErrors }) => {
    // remaining access cart and set items
    const items = [ {product:1, qty:4}, {product:2, qty:4}, {product:3, qty:5} ]
    useEffect(() => {
        return () => {
          if (errorMsg.length) resetErrors();
        };
      }, []);
    
    const [order, setOrder] = useState({
        total: 0,
        tax: 0,
        address: "",
        items: items
    })
    const [selectedAddress, setSelectedAddress] = useState("")
    // send one item from list to display in card 
    const addressCard = addresses.map(address => (
        <AddressCard key={address.id} address={address} 
        setSelectedAddress={setSelectedAddress} checkout={true}/>
    ));

    const placeOrder = () => {
        const newOrder = {...order, address:selectedAddress.id}
        setOrder(newOrder)
        console.log(newOrder)
        orderCheckout(newOrder)

    }
    console.log(errorMsg[0])

    if(!user) return <Redirect to="login/"/>

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mt-2 mb-2 row">
                <div className="col-lg-10">
                <h3> Choose your delivery address</h3>
                <div className="row">
                    {addressCard}
                </div>
                <div>
                    <h5>Selected Address</h5>
                    <AddressCard key={selectedAddress.id} address={selectedAddress} checkout={false}/>
                </div>
                </div>
                <div className="col-lg-2">
                    <div className="card-body">
                        <h5 className="card-title">
                            Total
                        </h5>
                        <p className="card-text">Subtotal :{order.total}</p>
                        <p className="card-text">Tax:{order.tax} </p>
                        <p className="card-text">Total:{order.total + order.tax} </p>  
                    </div>
                </div>
            </div>
            {selectedAddress? (
            <button className="btn btn-primary deactivate" onClick={placeOrder}>Place order</button>
            ): 
            null} 
            
        </div>
    );
}
const mapStateToProps = ({ addresses, user, errorMsg }) => ({
    addresses,
    user,
    errorMsg
});

const mapDispatchToProps = (dispatch) => {
    return {
        orderCheckout: (newOrder) => dispatch(checkout(newOrder)),
        resetErrors: () => dispatch(resetErrors()),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);