"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const HomeTextAnimation = () => {
  return (
    <div>
      <h1 className="text-[#351a5f] text-6xl font-medium w-[73%] leading-[4rem]">
        Customize with Becca new features for your{" "}
        <ReactTyped
          strings={["app>/"]}
          typeSpeed={100}
          loop
          className="text-purple-500 "
        />
      </h1>
    </div>
  );
};

export default HomeTextAnimation;
