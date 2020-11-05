import React from "react";

const AddressCard = ({ address }) => {
    return (
        <div className="col-lg-4 col-md-6">
            {/* I will need link to edit or delete address */}
            <div className="card-body">
                <h5 className="card-title">
                    {address.address_type}
                </h5>
                <small className="card-text">Nama :{address.first_name} {address.last_name} </small>
                <small className="card-text">phone:{address.phone} </small>
                <small className="card-text">country:{address.country} </small>
                <small className="card-text">city:{address.city} </small>
                <small className="card-text">address_line_1:{address.address_line_1} </small>
                <small className="card-text">address_line_2:{address.address_line_2} </small>
            </div>
        </div>
    );
};

export default AddressCard;