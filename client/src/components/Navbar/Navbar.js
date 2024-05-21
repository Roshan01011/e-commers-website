import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_data">
        <div className="left_data">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            aria-label="All"
          >
            <p className="p">All</p>
          </NavLink>
          <NavLink
            to="/electronic"
            className={({ isActive }) => (isActive ? "active" : "")}
            aria-label="Electronic"
          >
            <p className="p">Electronic</p>
          </NavLink>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? "active" : "")}
            aria-label="Clothing"
          >
            <p className="p">Clothing</p>
          </NavLink>
        </div>
        <div className="right_data">
          <img
            src="https://propellerads.com/wp-content/uploads/2023/04/e-commerce-propellerads-hero-1.svg"
            alt="E-commerce illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
