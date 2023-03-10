import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVansDetailsInfo() {
  const [van] = useOutletContext();
  return (
    <div>
      <p>
        <strong>Name: </strong>
        {van?.name}
      </p>
      <p>
        <strong>Category: </strong>
        {van?.type.charAt(0).toUpperCase()+van?.type.slice(1)}
      </p>
      <p>
        <strong>Description: </strong>
        {van?.description}
      </p>
      <p>
        <strong>Visibility: </strong>
        Private
      </p>
    </div>
  );
}

export default HostVansDetailsInfo;
