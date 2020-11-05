import React from "react";
import { connect } from "react-redux";
import Logout from "../Logout";
import { Redirect } from "react-router-dom";

const Profile = ({ user }) => {
  if (user) <Redirect to="/profile/" />;
  else return <Redirect to="/products/" />;

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">Profile</div>

          <div className="card-body">
            <p>username: {user.username}</p>
            <p>email : {user.email}</p>
            <p>First Name : {user.first_name}</p>
            <p>Last Name : {user.last_name}</p>

            <br />
            <div>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Profile);
