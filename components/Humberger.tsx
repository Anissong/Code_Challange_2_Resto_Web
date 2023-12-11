import React from "react";

const Humberger = () => {
  return Array(3)
    .fill(1)
    .map((_, i) => <span key={i} className="h-[3px] w-8 bg-white "></span>);
};

export default Humberger;
