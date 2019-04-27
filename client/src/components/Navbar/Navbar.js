import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/signUpModal";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
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
        <li className="nav-link">
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
        </li>
        <li className="nav-link">
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
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <SignUp />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
