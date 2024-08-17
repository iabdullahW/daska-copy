import React from "react";
import CaraouselRev from "@/components/SoftwareCompany/CaraouselRev";
import { FaArrowRight } from "react-icons/fa";

const Review = () => {
  return (
    <div className="bg-[#E8ECFD] min-h-screen flex flex-col lg:flex-row justify-between items-center p-6">
      {/* left */}
      <div className="flex flex-col p-1 w-full lg:w-[27rem] mb-6 lg:mb-0 lg:ml-6">
        <div>
          <h3 className="text-[14px] text-[#351A5F] leading-[17px] font-semibold mb-[1rem]">
            WORK WITH
          </h3>
        </div>
        <div>
          <h1 className="text-2xl w-full lg:w-[29rem] text-[#351A5F] leading-[41px] font-semibold">
            INNOVATIVE APP CONCEPTS AND MONETIZATION
          </h1>
          <h1 className="text-2xl text-[#351A5F] leading-[41px] font-semibold">
            SOFTWARE FOR CREATORS
          </h1>
        </div>
        <div className="mt-[3rem] flex flex-col">
          <p className="text-[16px] text-[#351A5F] leading-[25px] font-semibold w-full lg:w-[29rem]">
            We provide innovative solutions for content creators, allowing them to focus on their craft
          </p>
          <p className="text-[16px] text-[#351A5F] leading-[25px] font-semibold mb-[1rem]">
            while we handle technical aspects of development and monetization
          </p>
          <p className="flex items-center text-purple-600 gap-x-1">
            Start using becca at ICloud.com
            <FaArrowRight className="text-purple-600" />
          </p>
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-[68rem]">
        <CaraouselRev />
      </div>
    </div>
  );
};

export default Review;