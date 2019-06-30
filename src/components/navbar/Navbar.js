// External
import React from "react";
import PropTypes from "prop-types";

// CSS
import "./Navbar.css";



class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar-container" >
        <i className="fab fa-github"></i>
        <h1> NAVBAR </h1>
      </nav>
    )
  }
}

export default Navbar;