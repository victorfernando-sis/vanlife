import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { requireAuth } from "../utils";

export async function loader({request}) {
  console.log('here')
  await requireAuth(request);
  return null
}

function HostLayout() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  
  return (
    <div className="host-layout-container">
      <div className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="vans"
        >
          Vans
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default HostLayout;
