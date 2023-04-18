import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { bkgColor } from "../../utils";
import { getVan } from "../../api";

import { BsArrowLeft } from "react-icons/bs";

export async function loader({ params }) {
  return await getVan(params.id);
}
function VanInfo() {
  const location = useLocation();
  const prevPath = location.state.prevPath;
  const type = location.state.type;
  const data = useLoaderData();

  return (
    <>
      <div className="van-info-container">
        <Link to={`${prevPath}`} relative="path" className="vans-info-backlink">
          <BsArrowLeft />
          Back to {type ? type : "all"} vans
        </Link>
        <section className="van-info-section">
          <img alt="Van for rent" className="card-image" src={data.imageUrl} />
          <div className="van-info-section-content">
            <div
              className={`card-tag primary-tag selected ${bkgColor(data.type)}`}
            >
              {data.type}
            </div>
            <h2 className="card-info-title">{data.name}</h2>
            <h3 className="card-info-price">
              <strong>${data.price}</strong>
              <span className="small-font">/day</span>
            </h3>
            <p>{data.description}</p>
            <button type="submit" className="btn btn_primary">
              Rent this van
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default VanInfo;
