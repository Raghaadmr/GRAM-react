import React from "react";
import { deleteAddress } from "../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"

const AddressCard = ({ address, deleteAddress }) => {
    const history = useHistory()
    return (
        <div className="col-lg-4 col-md-6">
            {/* I will need link to edit or delete address */}
            <div className="card-body">
                <h5 className="card-title">
                    {address.address_type}
                </h5>
                <p className="card-text">Nama :{address.first_name} {address.last_name} </p>
                <p className="card-text">phone:{address.phone} </p>
                <p className="card-text">country:{address.country} </p>
                <p className="card-text">city:{address.city} </p>
                <p className="card-text">address_line_1:{address.address_line_1} </p>
                <p className="card-text">address_line_2:{address.address_line_2} </p>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-danger" onClick={() => deleteAddress(address.id, history)}>Delete</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      deleteAddress: (AddressID, history) =>
        dispatch(deleteAddress(AddressID, history)),
    };
  };

export default connect(null,mapDispatchToProps)(AddressCard);