import React, { useState } from "react";
import { connect } from "react-redux";
import { addAddress } from "../redux/actions";
import { Redirect } from "react-router-dom"

const AddAddressForm = (props) => {
  const [address, setAddress] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    city: "",
    address_line_1: "",
    address_line_2: "",
  });

  const submitAddress = (event) => {
    event.preventDefault();
    props.addAddress(address);
  };

  const textChangeHandler = (event) => {
    setAddress({...address, [event.target.name]:event.target.value})
  }

  if(!props.user) return <Redirect to="login/"/>

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitAddress}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input type="text" className="form-control" value={address.first_name} name="first_name" onChange={textChangeHandler}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input type="text" className="form-control" value={address.last_name} name="last_name" onChange={textChangeHandler}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Phone</span>
          </div>
          <input type="text" className="form-control" value={address.phone} name="phone"onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Country</span>
          </div>
          <input type="text" className="form-control" value={address.country} name="country"onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">City</span>
          </div>
          <input type="text" className="form-control" value={address.city} name="city"onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Address line 1</span>
          </div>
          <input type="text" className="form-control" value={address.address_line_1} name="address_line_1"onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Address line 2</span>
          </div>
          <input type="text" className="form-control" value={address.address_line_2} name="address_line_2"onChange={textChangeHandler} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Address type</span>
          </div>
          <input type="text" className="form-control" value={address.address_type} name="address_type"onChange={textChangeHandler} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (newAddress) =>
      dispatch(addAddress(newAddress)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddressForm);