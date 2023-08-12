import React from "react";

const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#1890ff"
        strokeWidth="8"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          dur="2s"
          from="0, 282.7433388230814"
          to="282.7433388230814, 0"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          from="0"
          to="282.7433388230814"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Loader;
