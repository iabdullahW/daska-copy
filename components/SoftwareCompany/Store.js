import React from 'react';
import Image from "next/image";
import { AiOutlineStock } from "react-icons/ai";
import { CiLocationOn, CiClock2, CiTrophy } from "react-icons/ci";
import "./store.css";

const Store = () => {
  return (
    <div className='bg-[#E8ECFD]'>
    <div className="min-h-screen bg-[#E8ECFD] text-red-500 w-[94%] mx-auto ">
      <div className="flex flex-col items-center justify-center p-6 bg lg:flex-row lg:p-0 ">
        <div className="w-full mb-6 text-white bg-center bg-cover mobile lg:w-1/2 h-80 lg:h-auto lg:mb-0"></div>
        <div className="w-full p-4 text-black lg:w-1/2 lg:p-8">
          <h1 className="mt-6 mb-6 text-3xl font-bold text-center text-white lg:mt-12 lg:mb-12 lg:text-left">
          WHY CHOOSE A SOFTWARE DEVELOPMENT COMPANY IN 
          CANADA
          </h1>
          <div className="flex flex-col mb-10 lg:flex-row gap-x-10">
            <div className="flex mb-6 gap-x-3 lg:mb-0">
              <AiOutlineStock className="text-3xl text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Free estimation</h1>
                <p className="text-xl text-white">Comprehensive understanding of client needs</p>
              </div>
            </div>
            <div className="flex mb-6 gap-x-3 lg:mb-0">
              <CiLocationOn className="text-3xl text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">On-budget on-time</h1>
                <p className="text-xl text-white">Predictable and stable cooperation</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:flex-row gap-x-10">
            <div className="flex mb-6 gap-x-3 lg:mb-0">
              <CiClock2 className="text-3xl text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Project workshops</h1>
                <p className="text-xl text-white" >Proactive approach to product strategy creation and decision-making</p>
              </div>
            </div>
            <div className="flex mb-6 gap-x-3 lg:mb-0">
              <CiTrophy className="text-3xl text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Dedicated team</h1>
                <p className="text-xl text-white">Certified project managers and technical experts</p>
              </div>
            </div>
          </div>
          {/* Uncomment the below section if needed */}
          {/* <div className="flex flex-col lg:flex-row gap-x-10">
            <div className="flex mb-6 gap-x-3 lg:mb-0">
              <CiLocationOn className="text-3xl text-red-500" />
              <div>
                <h1 className="font-bold">Passionate people</h1>
                <p className="text-xl">Talented individuals with programming passion</p>
              </div>
            </div>
            <div className="flex mb-6 gap-x-3 lg:mb-0">
              <CiLocationOn className="text-3xl text-red-500" />
              <div>
                <h1 className="font-bold">High-quality products</h1>
                <p className="text-xl">Professional, modern, bug-free, optimized performance apps</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Store;