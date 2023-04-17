import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { bkgColor, requireAuth } from "../../utils";
import { getHostVans } from "../../api";

export async function loader({ params, request }) {
  await requireAuth(request);
  return await getHostVans(params.id);
}

function HostVansDetails() {
  const { id } = useParams();

  const van = useLoaderData();

  const vansElement = (
    <div className="host-vans-details-box">
      <img
        src={`${van?.imageUrl}`}
        alt={`${van?.name} van`}
        className="host-vans-details-img"
      />
      <div>
        <div className={`card-tag primary-tag selected ${bkgColor(van?.type)}`}>
          {van?.type}
        </div>
        <h3>{van?.name}</h3>
        <p>
          <strong>{`$${van?.price}`}</strong>/day
        </p>
      </div>
    </div>
  );

  const linksElement = (
    <div className="host-vans-details-links">
      <NavLink
        end
        to={`/host/vans/${id}`}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Details
      </NavLink>
      <NavLink
        to={`pricing`}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Pricing
      </NavLink>
      <NavLink
        to={`gallery`}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Photos
      </NavLink>
    </div>
  );

  return (
    <section>
      <Link to=".." relative="path" className="vans-info-backlink">
        <BsArrowLeft />
        Back to all vans
      </Link>
      <div className="host-vans-details-container">
        {vansElement}
        {linksElement}
        <Outlet context={[van]} />
      </div>
    </section>
  );
}

export default HostVansDetails;
