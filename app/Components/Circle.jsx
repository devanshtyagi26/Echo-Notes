import React from "react";

function Circle({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <circle cx="9" cy="9" r="9" fill={color} />
    </svg>
  );
}

export default Circle;
