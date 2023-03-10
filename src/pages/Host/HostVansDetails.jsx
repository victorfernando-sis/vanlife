import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { bkgColor } from "../../utils";

function HostVansDetails() {
  const [van, setVan] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      fetch(`/api/host/vans/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setVan(data.vans[0]);
        })
        .catch((e) => console.log("Fails to retrive host vans details.", e));
    }
    fetchData();
  }, [id]);

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
        {isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <>
            {vansElement}
            {linksElement}
            <Outlet context={[van]} />
          </>
        )}
      </div>
    </section>
  );
}

export default HostVansDetails;
