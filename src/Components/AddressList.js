import React from "react";
import { connect } from "react-redux";
import AddressCard from "./AddressCard";

const AddressList = ({ addresses }) => {
    // send one item from list to display in card 
    const addressCard = addresses.map(address => (
        <AddressCard key={address.id} address={address} />
    ));

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mt-2 mb-2">
                <h3> addressCard</h3>
                <div className="row">
                    {addressCard}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = ({ addresses }) => ({
    addresses
});

export default connect(mapStateToProps)(AddressList);