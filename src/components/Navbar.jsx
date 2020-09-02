import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="nav-wrapper black darken-1"
 
    >
      <div className="container">
        <div className="logo-wrapper" style={{ float: "left" }}>
          <a href="/" style={{ float: "left", fontSize: 15 }}>
            React Router
          </a>
        </div>

        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
