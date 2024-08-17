import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const PeopleSlider = ({ image }) => {
  return (
    <>
      <div className="w-[80%] h-auto md:h-[90vh] mx-auto mt-28 max-sm:w-[84%]">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="left w-full md:w-[40%] ">
            <Image src={image} alt="Person Image" className="w-full rounded-2xl " />
          </div>
          <div className="right w-full md:w-[50%] font-semibold text-center md:text-left">
            <div className="flex flex-col gap-y-5">
              <div>
                <h1 className="text-xl tracking-wide md:text-3xl max-sm:text-sm">
                  "Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aut <br /> in possimus sed adipisci. Eos tempora "
                </h1>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg md:text-2xl text-slate-400">headbook</h1>
                <h1 className="font-semibold text-black text-md md:text-xl">
                  Jose Wilson,{" "}
                  <span className="text-slate-400 max-sm:text-sm">Developer at Beca</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col mt-5 gap-y-4">
              <hr className="w-full mx-auto"/>
              <div className="flex items-center justify-between hidden w-full mx-auto md:flex">
                <div className="flex items-center hidden cursor-pointer gap-x-2">
                  <span className="px-[2px] bg-purple-500 rounded-full text-transparent">..</span>
                  <span className="text-2xl font-bold text-purple-500 px-[1px] bg-purple-500 rounded-full">.</span>
                  <span className="h-1 px-1 text-2xl font-bold text-purple-500 bg-purple-500 rounded-full">.</span>
                  <span className="px-[2px] bg-purple-500 rounded-full text-transparent">..</span>
                </div>
                <div className="flex items-center text-purple-500 gap-x-2">
                  <h2 className="text-lg">Learn more from our team</h2>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleSlider;
