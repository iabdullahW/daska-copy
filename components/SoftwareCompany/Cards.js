"use client";
import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#E8ECFD] min-h-[100vh] w-full m-auto p-4 lg:p-8 relative ">
      <Image
        src={require("/public/h3-img-5__1_-removebg-preview.png")}
        className="absolute bottom-0 left-0 w-full md:w-full md:h-3/4 max-sm:w-full max-sm:h-3/4 "
        alt="Background Image"
      />

      <Slider {...settings}>
        {[
          "Web development",
          "Graphic designing",
          "SEO & content marketing",
          "Social media marketing",
          "Pay-per-click (PPC)",
          "Mobile app development"
        ].map((text, index) => (
          <div key={index} className="p-2">
            <div className="bg-white opacity-80 border border-slate-300 h-[20rem] lg:h-[24rem] w-full shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-3 flex flex-col justify-between">
              <h1 className="flex justify-end text-[#351a5f] text-[14px] lg:text-[16px] font-semibold mt-[1rem] lg:mt-[3rem] mr-[1rem] lg:mr-[2rem]">
                Settings
              </h1>
              <h3 className="text-[#351a5f] font-bold text-[18px] lg:text-[23px] flex justify-end mb-[1rem] px-2 lg:px-3">
                {text}
              </h3>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center items-center mt-8 lg:mt-[4rem] ">
        <div className="bg-slate-200 border border-slate-300 shadow-lg w-full lg:w-[73rem] rounded-md flex flex-col lg:flex-row justify-between items-center p-4 lg:p-6 gap-y-2 lg:gap-y-0 backdrop-filter backdrop-blur-lg bg-opacity-30 sm:absolute sm:z-50">
          <div className="flex flex-col lg:flex-row items-center gap-x-2 lg:ml-[24rem] text-center lg:text-left ">
            <FaHandshake className="text-[#16031F] text-lg font-extrabold" />
            <h6 className="text-[#303043]">Your Partners in Digital Growth</h6>
            <FaLongArrowAltRight className="text-[#7F2EF8] cursor-pointer text-xl hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;