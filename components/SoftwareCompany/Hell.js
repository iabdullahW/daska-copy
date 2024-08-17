"use client";
import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import CarouselHell from "@/components/SoftwareCompany/CarouselHell";

// Static image imports
import LeftImage from "/public/L.png";
import RightImage from "/public/R.png";
import message from "/public/h3-rev3-img-2-removebg-preview.png"

const Hell = () => {
  return (
    <div className="bg-[#E8ECFD] w-full min-h-screen flex flex-col justify-between items-center py-8 lg:pt-10">
      <div className="flex flex-col items-center w-full px-5 lg:gap-8">
        {/* top */}
        <div className="flex flex-col items-center justify-center w-full gap-4 lg:flex-row lg:justify-around">
          {/* left */}
          <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:w-auto max-sm:flex max-sm:flex-row max-sm:gap-x-5 md:flex-row md:gap-x-5 lg:relative">
            {/* <div className="hidden lg:block bg-[#E8ECFD] w-48 h-4 lg:mb-16"></div> */}
            <Image
              src={LeftImage}
              className="w-auto mb-8 lg:h-auto lg:w-auto lg:mb-0 md:h-[40vh]"
              alt="Left Image"
            />
           
            
            <Image
              src={RightImage}
              className="w-auto mt-16 h-60 lg:w-auto lg:h-auto lg:mt-0 lg:ml-8 md:h-[40vh] max-sm:hidden"
              alt="Right Image"
            />
             <Image
              src={message}
              className="w-48 mb-8 lg:h-auto lg:w-auto lg:mb-0 lg:absolute lg:right-[-60px] max-sm:hidden"
              alt="Left Image"
            />
          </div>

          {/* right */}
          <div className="flex flex-col items-center w-full mt-8 text-center lg:w-2/5 lg:items-start lg:text-left lg:mt-0">
            <p className="text-[#351A5F] text-sm font-semibold mb-2">WORK WITH</p>
            <h2 className="text-[#351A5F] text-2xl lg:text-3xl font-bold mb-3">
            COMPREHENSIVE SOFTWARE SERVICES <br /> FOR YOUR  
BUSINESS
            </h2>
            <p className="text-[#351A5F] text-sm lg:text-base font-semibold mb-4">
            Our business software solutions are customized to fit your company's unique 
requirements. We offer software that increases productivity and streamlines 
business operations, from customer relationship management to inventory 
management.
            </p>
            <div className="flex flex-col gap-4 px-4 lg:px-0">
              <div className="flex items-center gap-2">
                <MdVerified className="text-[#822EF7] text-lg" />
                <p className="text-[#351A5F] text-sm lg:text-base font-semibold">Cloud-Based Software Solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <MdVerified className="text-[#822EF7] text-lg" />
                <p className="text-[#351A5F] text-sm lg:text-base font-semibold">Custom Software Development</p>
              </div>
              <div className="flex items-center gap-2">
                <MdVerified className="text-[#822EF7] text-lg" />
                <p className="text-[#351A5F] text-sm lg:text-base font-semibold">Enterprise Software Solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <MdVerified className="text-[#822EF7] text-lg" />
                <p className="text-[#351A5F] text-sm lg:text-base font-semibold">E-commerce site audit</p>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-center justify-center w-full mt-8 lg:mt-16">
          <CarouselHell />
        </div>
      </div>
    </div>
  );
};

export default Hell;
