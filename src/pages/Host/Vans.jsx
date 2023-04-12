import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils.js";
import { getHostVans } from "../../api.js";

export function loader() {
  requireAuth();
  return getHostVans();
}

function Vans() {
  const hostVans = useLoaderData()
  
  const vansElement = hostVans.map((item) => (
    <Link to={`/host/vans/${item.id}`} key={item.id}>
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
