// External
import React from "react";

// Components
import User from "../user/User";

// CSS
import "./Users.css";

const Users = (props) => {
  return (
    <div className="users-container">
      {props.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>

  )
}

export default Users;
