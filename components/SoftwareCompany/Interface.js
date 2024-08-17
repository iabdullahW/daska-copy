import React from "react";
import Image from "next/image";
import CarouselClientWrapper from "./CarouselClientWrapper";

const Interface = () => {
  return (
    <div className="bg-[#16031F] min-h-screen w-full overflow-x-hidden m-auto relative">
      {/* top */}
      <div>
      <Image src={require("/public/h3-rev5-img-5-removebg-preview.png")} className="absolute w-full h-auto max-w-xs lg:max-w-[200px] lg:right-1 lg:top-[180px] z-40  md:max-w-[150px] md:right-1 md:top-[200px] max-sm:w-[90px] max-sm:top-[190px]" />

        <div className="flex flex-col items-center px-4 mt-16 space-y-3 text-center md:mt-24 lg:mt-36">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
          Our Offerings Are Customized To Meet The Demands Of Your 
Business
          </h1>
          <h3 className="text-sm text-white md:text-base">
          We have established strong connections with over 100 regional brands thanks to 
          our scalable and effective operations
          </h3>
        </div>
        {/* images */}
        <div className="relative flex flex-col items-center justify-center px-4 mt-16 space-y-6 lg:flex-row lg:justify-around md:mt-24 lg:mt-28 lg:space-y-0 lg:space-x-6">
          <Image
            src={require("/public/left.png")}
            className="object-cover w-40 h-48 rounded-l-lg md:h-60 lg:h-60 md:w-48 lg:w-52"
            alt="Left"
          />
          <Image
            src={require("/public/main.jpg")}
            className="h-80 md:h-96 lg:h-[40rem] w-full lg:w-[50%] object-cover"
            alt="Main"
          />
          <Image
            src={require("/public/right.png")}
            className="object-cover w-40 h-48 rounded-r-lg md:h-60 lg:h-68 md:w-48 lg:w-56"
            alt="Right"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col items-center justify-center px-4 py-10">
        {/* carousel */}
        <div className="flex flex-col justify-center">
          <div>
            <CarouselClientWrapper />
          </div>
          <hr className="w-[80vw] border-2 border-slate-400 rounded my-5 self-center" />
        </div>
        {/* sections */}
        <div className="flex flex-col items-start justify-around w-full mt-16 space-y-12 lg:flex-row lg:space-y-0 lg:space-x-12 lg:w-3/4">
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">OUR VISION</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-white md:text-lg">
              
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
              Being the top software development and digital marketing company in Canada 
involves offering businesses cutting-edge solutions and unrivalled knowledge to 
help them realize their full potential in digital marketing
              </h3>
              {/* <h3 className="text-base font-medium text-white md:text-lg">
              solutions and unrivalled knowledge to help them realize their full potential in digital marketing.
              </h3> */}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Our Mission</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-white md:text-lg">
              
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
              We aim to offer clients comprehensive digital marketing and software development 
services, delivering customized, high-quality solutions that drive measurable results
and sustainable growth
              </h3>
              {/* <h3 className="text-base font-medium text-white md:text-lg">
              high-quality solutions that drive measurable results and sustainable growth.
              </h3> */}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Employee Training</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-white md:text-lg">
              We aim to offer clients comprehensive digital marketing and software development 
services, delivering customized, high-quality solutions that drive measurable results
and sustainable growth.
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
              {/* We aim to offer clients comprehensive digital marketing and software development services, delivering customized, */}
              </h3>
              {/* <h3 className="text-base font-medium text-white md:text-lg">
              high-quality solutions that drive measurable results and sustainable growth.
              </h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
