import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1>Sorry, an error occured. Try again later.</h1>
      <Link to={`..`} className={' btn btn_secondary'}>Return to home</Link>
    </div>
  );
}

export default Error;
