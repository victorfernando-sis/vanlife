import React from "react";
import { useOutletContext } from "react-router-dom";

function Gallery() {
  const [van] = useOutletContext();
  return (
    <div className="host-vans-gallery">
      <img
        src={`${van.imageUrl}`}
        alt="Gallery"
        className="host-vans-gallery"
      />
    </div>
  );
}

export default Gallery;
