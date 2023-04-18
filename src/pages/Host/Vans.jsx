import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils.js";
import { getHostVans } from "../../api.js";

export async function loader({request}) {
  await requireAuth(request);
  return await getHostVans();
}

function Vans() {
  const hostVans = useLoaderData()
  console.log(hostVans)
  
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
      <h2>Your listed vans</h2>
      {vansElement}
    </div>
  );
}

export default Vans;
