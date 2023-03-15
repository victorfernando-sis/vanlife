import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to={`..`} className={' btn btn_secondary'}>Return to home</Link>
    </div>
  );
}

export default NotFound;
