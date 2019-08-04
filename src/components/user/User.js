// External
import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// CSS
import "./User.css";

const User = (props) => {
  const { user } = props;
  return (
    <div className="user-infos-card user-infos-center">
      <img className="user-picture-round" src={user.avatar_url} alt="Github Developer" />
      <h1 className="user-infos-title">{user.login}</h1>
      <div className="user-infos-link">
        <button type="button">
          <a href={user.html_url}>Github Profile</a>
        </button>
        <button type="button">
          <Link to={`/user/${user.login}`}> Click Me</Link>
        </button>
      </div>
    </div>
  )
}













export default User;
