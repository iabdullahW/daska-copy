import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import HomeTextAnimation from "./HomeTextAnimation";

const HeroSection = () => {
  return (
    <div className="w-[80%] m-auto pt-16 ">
      <div className="flex ">
        <div className=" basis-[50%]   ">
          <div className="bg-white p-1 flex items-center gap-2 w-[55%] rounded-md">
            <p className="text-gray-500 text-sm">👋 We're hiring self motivated people to join us.</p>{" "}
            <FaLongArrowAltRight className="text-[#8835f6] h-[1.5rem]" />{" "}
          </div>
          <div className="mt-10">
          <HomeTextAnimation  />
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
