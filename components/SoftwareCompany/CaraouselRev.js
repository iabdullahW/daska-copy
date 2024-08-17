"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CaraouselRev() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "1%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "1%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-[46rem] h-[22rem] overflow-hidden ml-auto mr-auto">
      <Slider {...settings}>
        <div>
          <div className="p-2">
            <Image
              src={require("/public/revone.jpeg")}
              className="h-[15rem] w-full md:w-[46rem] rounded-lg object-cover"
              alt="Slide 1"
              layout="intrinsic"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <Image
              src={require("/public/revtwo.webp")}
              className="h-[15rem] w-full md:w-[46rem] rounded-lg object-cover"
              alt="Slide 2"
              layout="intrinsic"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <Image
              src={require("/public/revthree.webp")}
              className="h-[15rem] w-full md:w-[46rem] rounded-lg object-cover"
              alt="Slide 3"
              layout="intrinsic"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <Image
              src={require("/public/revtwo.webp")}
              className="h-[15rem] w-full md:w-[46rem] rounded-lg object-cover"
              alt="Slide 2"
              layout="intrinsic"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}