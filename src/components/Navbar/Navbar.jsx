import "./Navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import navbar_ico from "../../assets/images/navbar_ico.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav role="navigation">
      <div id="clickNav">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="nav-data">
          <li className="mb-3"><img src={navbar_ico} alt="icon" /></li>
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className={location.pathname === "/users" ? "active" : ""}>
            <Link to="/users" className="nav-link">
              Users Table
            </Link>
          </li>
          <li className={location.pathname === "/workouts" ? "active" : ""}>
            <Link to="/workouts" className="nav-link">
              Workouts
            </Link>
          </li>
          <li className="separator"></li>
          <li>
            <p>
              <strong> © ReactJs Dashboard</strong>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
