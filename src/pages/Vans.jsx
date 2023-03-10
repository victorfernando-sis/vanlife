import React, { useEffect, useState } from "react";
import VanFilter from "../components/VanFilter";
import VanCard from "../components/VanCard";
import { Link } from "react-router-dom";

function Vans() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/vans");
        const data = await response.json();
        setData(data.vans);
      } catch (err) {
        console.log("An error occurred", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const vanElement = data.map((van) => (
    <Link to={`${van.id}`} className="van-car-link">
      <VanCard
        key={van.id}
        id={van.id}
        name={van.name}
        price={van.price}
        type={van.type}
        image={van.imageUrl}
      />
    </Link>
  ));

  return (
    <>
      <div className="van-container">
        <h2 className="vans-page-title">Explore our van options</h2>
        <VanFilter />
        <div className="vans-grid">
          {/* {<h2>Loading...</h2>} */}
          {loading ? <h2>Loading...</h2> : vanElement}
        </div>
      </div>
    </>
  );
}

export default Vans;
