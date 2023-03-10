import React from "react";
import { useOutletContext } from "react-router-dom";

function DetailedPricing() {
  const [van] = useOutletContext();
  return <div>${parseFloat(van?.price).toFixed(2)}/day</div>;
}

export default DetailedPricing;
