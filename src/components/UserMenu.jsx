import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { UserContext } from "../context/Context";

function handleLogout(){
    localStorage.removeItem('user')
    return window.location.href = "/login"
}

function UserMenu() {
  const currentUser = useContext(UserContext);

  const loggedMenu = (
    <div className="user-nav-icon">
      <div className="user-menu">
        <BiUserCircle className="circle" style={{ fontSize: "20px" }} />
        <span>{currentUser?.user.email}</span>
      </div>
      <div className="dropdown">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
  return currentUser ? (
    loggedMenu
  ) : (
    <Link className="user-icon" to="/login"><BiUserCircle className="circle" style={{ fontSize: "20px" }} /></Link>
  );
}

export default UserMenu;
