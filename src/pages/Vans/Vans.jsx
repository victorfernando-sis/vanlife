import React from "react";
import {
  Link,
  useSearchParams,
  useLocation,
  useLoaderData,
} from "react-router-dom";

import VanFilter from "../../components/VanFilter";
import VanCard from "../../components/VanCard";
import { getVans } from "../../api.js";


export async function loader() {
  return await getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const data = useLoaderData();

  const filterType = searchParams.get("type");
  const vanElement = data
    .filter((item) => {
      if (filterType) return item.type === filterType;
      return item;
    })
    .map((van) => (
      <Link
        key={van.id}
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
        <div className="vans-grid">{vanElement}</div>
      </div>
    </>
  );
}
