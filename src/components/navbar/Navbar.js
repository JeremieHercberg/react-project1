// External
import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// CSS
import "./Navbar.css";



const Navbar = () => {
  return (
    <nav className="navbar-container" >
      <i className="fab fa-github"></i>
      <h1>NAVBAR</h1>
      <ul>
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
