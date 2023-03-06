import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { bkgColor } from "../utils";

import { BsArrowLeft } from "react-icons/bs";
import Footer from "../components/Footer";

function VanInfo() {
  const [data, setData] = useState(null);
  const { id } = useParams();

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
      <Navbar />
      <div className="van-info-container">
        <Link to="/vans" className="vans-info-backlink">
          <BsArrowLeft />
          Back to all vans
        </Link>
        {data ? (
          <>
            <img
              alt="Van for rent"
              className="card-image"
              src={data.imageUrl}
            />
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
          </>
        ) : (
          <h2 className="loading"> Loading...</h2>
        )}
      </div>
      <Footer />
    </>
  );
}

export default VanInfo;
