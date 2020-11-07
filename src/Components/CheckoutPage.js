import React, { useState } from "react";
import { connect } from "react-redux";
import AddressCard from "./AddressCard";
import { Redirect } from "react-router-dom"

const CheckoutPage = ({ addresses, user }) => {
    // remaining placeorder button and send the data to server
    const [order, setOrder] = useState({
        total: 0,
        tax: 0,
        address: "",
        items: []
    })
    const [selectedAddress, setSelectedAddress] = useState({})
    // send one item from list to display in card 
    const addressCard = addresses.map(address => (
        <AddressCard key={address.id} address={address} 
        setSelectedAddress={setSelectedAddress} checkout={true}/>
    ));

    if(!user) return <Redirect to="login/"/>

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mt-2 mb-2">
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
        </div>
    );
}
const mapStateToProps = ({ addresses, user }) => ({
    addresses,
    user
});

export default connect(mapStateToProps)(CheckoutPage);