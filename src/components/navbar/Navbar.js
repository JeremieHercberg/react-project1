// External
import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// CSS
import "./Navbar.css";



const Navbar = () => {
  return (
    <nav className="navbar-container" >
      <i className="fab fa-github" />
      <h1>NAVBAR</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
