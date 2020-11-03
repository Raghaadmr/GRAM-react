import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// Components
import Login from "./LoginForm";
import Logout from './Logout';

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/products/" className="navbar-brand">
      products
      </Link>
      
      <Link to="/profile/" className="navbar-brand">
      profile
      </Link>
      
      
      

      <div>
      <Link to="/login" className="btn btn-info m-2 float-left">
        Login
      </Link>
      <Link to="/signup" className="btn btn-success m-2 float-left">
        Signup
      </Link></div>
      


    </nav>
  );
};

const mapStateToProps = ({user}) => ({user});

export default connect(mapStateToProps)(Navbar)