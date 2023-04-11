import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

function Navbar() {
  const navigate = useNavigate();
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <div className="navbar">
      <span className="logo_nav" onClick={() => navigate("/")}>
        #VANLIFE
      </span>
      <ul className="menu_nav">
        <li>
          <NavLink
            className="item_menu"
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="/host"
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item_menu"
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item_menu"
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="/vans"
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item_menu"
            style={({ isActive }) => (isActive ? activeLink : null)}
            to="/login"
          >
            <BiUserCircle style={{fontSize:"20px"}} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
