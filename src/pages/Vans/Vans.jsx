import React, { useEffect, useState } from "react";
import VanFilter from "../../components/VanFilter";
import VanCard from "../../components/VanCard";
import { Link, useSearchParams, useLocation } from "react-router-dom";

function Vans() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
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

  const filterType = searchParams.get("type");
  const vanElement = data
    .filter((item) => {
      if (filterType) return item.type === filterType;
      return item;
    })
    .map((van) => (
      <Link
        to={`${van.id}`}
        state={{
          type: filterType,
          prevPath: location.pathname + location.search,
        }}
        className="van-car-link"
      >
        <VanCard
          key={van.id}
          id={van.id}
          name={van.name}
          price={van.price}
          type={van.type}
          image={van.imageUrl}
          location={location}
        />
      </Link>
    ));

  return (
    <>
      <div className="van-container">
        <h2 className="vans-page-title">Explore our van options</h2>
        <VanFilter
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          filterType={filterType}
        />
        <div className="vans-grid">
          {loading ? <h2>Loading...</h2> : vanElement}
        </div>
      </div>
    </>
  );
}

export default Vans;
