import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <p>Wishlist</p>
      <div className="nav-link">
        {["Home", "About", "Contact"].map((name, index) => (
          <NavLink
            key={index}
            to={name === "Home" ? "/" : `/${name}`}
            className={({isActive})=>(isActive ? "active-link" : "")}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <div className="nav-icons">
        <GrFavorite />
        <GrIntegration />
      </div>
    </div>
  );
}

export default Navbar;
