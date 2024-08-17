'use client'

import { ReactTyped } from "react-typed";

const Animate = () => {
  return (
    <div className="p-4 md:p-0 lg:p-0 max-sm:p-0">
      <h1 className="text-[#351A5F] text-2xl md:text-4xl lg:text-6xl">
        idea to <ReactTyped strings={["code/>"]} typeSpeed={100} loop className="text-[#7F2EF8] inline"/>
      </h1>
    </div>
  );
};

export default Animate;
