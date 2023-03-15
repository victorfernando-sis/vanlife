import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { bkgColor } from "../../utils";

import { BsArrowLeft } from "react-icons/bs";

function VanInfo() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const prevPath = location.state.prevPath;
  const type = location.state.type;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/vans/${id}`);
        const data = await response.json();
        setData(data.vans);
      } catch (err) {
        console.log("An error occurred", err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="van-info-container">
        <Link to={`${prevPath}`} relative="path" className="vans-info-backlink">
          <BsArrowLeft />
          Back to {type ? type : "all"} vans
        </Link>
        {data ? (
          <section className="van-info-section">
            <img
              alt="Van for rent"
              className="card-image"
              src={data.imageUrl}
            />
            <div className="van-info-section-content">
              <div
                className={`card-tag primary-tag selected ${bkgColor(
                  data.type
                )}`}
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
        ) : (
          <h2 className="loading"> Loading...</h2>
        )}
      </div>
    </>
  );
}

export default VanInfo;
