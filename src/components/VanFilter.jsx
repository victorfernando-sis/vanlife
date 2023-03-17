import React from "react";
import { bkgColor } from "../utils";

function VanFilter({ searchParams, setSearchParams, filterType }) {
  const items = ["Simple", "Luxury", "Rugged"];

  return (
    <div className="van-filter ">
      {items.map((element) => (
        <button
          onClick={() => setSearchParams({ type: element.toLocaleLowerCase() })}
          className={`card-tag primary-tag 
          ${
            filterType === element.toLocaleLowerCase()
              ? `selected ${bkgColor(filterType)}`
              : ``
          }`}
          key={element}
        >
          {element}
        </button>
      ))}
      {searchParams.toString() !== "" && (
        <button
          onClick={() => setSearchParams({})}
          className="van-clear-filter"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

export default VanFilter;
