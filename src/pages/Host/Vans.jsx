import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans))
      .catch((e) =>
        console.log("An error ocurred trying to retrive host vans.", e)
      );
  }, []);

  const vansElement = hostVans.map((item) => (
    <Link to={`/host/vans/${item.id}`}>
      <div className="host-vans-list">
        <img
          src={item.imageUrl}
          alt={`${item.name} van`}
          className={"host-van-list-img"}
        />
        <div className="host-vans-info">
          <h3>Modest Explorer</h3>
          <span>{`$${item.price}/day`}</span>
        </div>
      </div>
    </Link>
  ));
  return (
    <div>
      <h2>You listed vans</h2>
      {vansElement}
    </div>
  );
}

export default Vans;
