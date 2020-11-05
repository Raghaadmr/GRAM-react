import React from "react";
import { connect } from "react-redux";
import Logout from "../Logout";

const Profile = ({ user }) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">Profile</div>

          <div className="card-body">
            <p>username: {user.username}</p>
            <p>email : {user.email}</p>

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
