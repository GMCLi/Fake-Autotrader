import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Fake Autotrader</a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/articles"
            className={window.location.pathname === "/articles" ? "nav-link active" : "nav-link"}
          >
            Articles
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/signup"
            className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
          >
            Sign Up
        </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;