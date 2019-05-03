import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/signUpModal";
import "./styles.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <a className="navbar-brand main" href="/">
        Fake Autotrader
      </a>
      <ul className="nav nav-tabs">
        <li className="nav-link">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/articles"
            className={
              window.location.pathname === "/articles"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Articles
          </Link>
        </li>
        {/* <li className="nav-link">
          <Link
            to="/admin"
            className={
              window.location.pathname === "/admin"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Admin
          </Link>
        </li> */}
        {/* <li className="nav-link">
          <Link
            to="/account"
            className={
              window.location.pathname === "/account"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Account
          </Link>
        </li> */}
        <li className="nav-item sign">
          <Link
            to="/account"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <SignUp setUser={props.setUser} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
