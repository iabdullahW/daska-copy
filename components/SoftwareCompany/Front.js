import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Animate from './Animate';

// import "./front.css"


const Front = () => {
  return (
    <div className="bg-[#d2d9f8] flex flex-col lg:flex-row justify-around items-center w-full h-fit overflow-x-hidden px-4 lg:px-8 py-8 lg:py-16">
      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto mt-16 mb-16 lg:flex-row lg:mb-32 lg:mt-32 ">
        {/* left div */}
        <div className="flex flex-col px-4 font-bold gap-y-6 lg:ml-16 lg:w-1/2 lg:px-0">
          <div className="w-full">
            <div className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tighter leading-snug lg:leading-[4rem]">
              <div>
                <h1 className="text-[#351A5F] lg:text-3xl lg:font-semibold lg:tracking-tighter lg:leading-[2rem] lg:leading-snug line-clamp-3  lg:text-3xl lg:font-bold ">
                WELCOME TO OUR PREMIER SOFTWARE 
                </h1>
                <h1 className="text-[#351A5F] lg:text-3xl lg:font-semibold lg:tracking-tighter lg:leading-[2rem] line-clamp-3 lg:leading-snug lg:font-bold">
                 DEVELOPMENT COMPANY IN CANADA
                </h1>
                {/* <Animate /> */}
              </div>
            </div>
          </div>
          <div className="mt-2 lg:mt-4">
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#351A5F] font-normal">
            We offer quality-driven, creative, and state-of-the-art solutions to support your success in today's dynamic business 
            </p>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#351A5F] font-normal">
            environment. As a software development company, we greatly enjoy solving challenging issues! 
            </p>
          </div>
          <div className="flex flex-col mt-4 sm:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-5 lg:mt-8">
            <button className="text-[14px] sm:text-[16px] font-normal text-white bg-[#7F2EF8] rounded-md cursor-pointer p-3">
            Let’s Talk 
            </button>
            <div className="flex items-center gap-4">
              <button className="text-[14px] sm:text-[16px] font-normal text-[#7F2EF8] cursor-pointer p-3">
              Contact Us
              </button>
              <FaLongArrowAltRight className="text-[#7F2EF8] cursor-pointer text-xl transition-transform transform hover:translate-x-1" />
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="relative px-4 mt-8 rounded-sm lg:mt-0 lg:w-1/2 lg:px-0">
        <Image src={require("/public/h3-rev1-img-1-removebg-preview.png")} className="absolute w-full h-auto max-w-xs lg:max-w-[250px] lg:ml-0 top-[-50px] animate-bounce  md:max-w-[150px] md:ml-20 max-sm:max-w-[120px] max-sm:top-[5px]" />
          <Image src={require("/public/webic1.png")} alt="Web Illustration" className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl " />
          <Image src={require("/public/h3-rev1-img-7-removebg-preview.png")} className="absolute w-full h-auto max-w-xs lg:top-[300px] lg:max-w-[200px] lg:ml-0 md:top-[180px] animate-bounce max-sm:hidden md:max-w-[100px] md:ml-32" />

        </div>

      </div>
    </div>
  );
};

export default Front;
