import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const Profile = () => {
//let user =user.username
let user ="ghadeer"
//  {user.username} , <Logout /> in return 
    return (<div>
   {user}
    </div>
     
    );
  };
  

  export default Profile
 // const mapStateToProps = ({user}) => ({user});
  
 // export default connect(mapStateToProps)(Navbar)