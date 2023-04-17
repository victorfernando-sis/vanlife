import React, { useEffect, useState } from "react";

function Warning(props) {
  const { message } = props;
  const [isActive, setIsActive] = useState(true);
try {
    
} catch (error) {
    
}
  setTimeout(() => {
    setIsActive((prev) => !prev);
  }, 5000);

  return (
    <div
      className={`warning success`}
      style={{ display: isActive ? "block" : "none" }}
    >
      *{message}
    </div>
  );
}

export default Warning;
