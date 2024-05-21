import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navLeft">
          <div className="logo">
            <NavLink to="/">
              <img
                src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="searchBar">
            <input type="text" />
            <div className="searchIcon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="navRight">
          <div className="navBtn">
            <NavLink to="/signup">Signup</NavLink>
          </div>

          <div className="cartBtn">
            <Badge badgeContent={4} color="primary">
              <NavLink to="/cart">
                <LocalMallIcon id="cartIcon" />
              </NavLink>
            </Badge>
          </div>

          <Avatar id="avatar" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
