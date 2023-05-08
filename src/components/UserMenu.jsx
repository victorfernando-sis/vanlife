import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { logout } from "../api";
import { onAuthStateChanged,getAuth } from "firebase/auth";

function handleLogout() {
  try {
    logout();
    return (window.location.href = `/login`);
  } catch (error) {
    return (window.location.href = `?message=${error.message}`);
  }
}

function UserMenu() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
  }, []);

  const loggedMenu = (
    <div className="user-nav-icon">
      <div className="user-menu">
        <BiUserCircle className="circle" style={{ fontSize: "20px" }} />
        <span>{currentUser?.email}</span>
      </div>
      <div className="dropdown">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
  return currentUser ? (
    loggedMenu
  ) : (
    <Link className="user-icon" to="/login">
      <BiUserCircle className="circle" style={{ fontSize: "20px" }} />
    </Link>
  );
}

export default UserMenu;
