"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaStarSolid } from 'react-icons/lia';

export default function CarouselHell() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="bg-[#E8ECFD] text-[#351A5F] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] overflow-x-hidden h-[19rem] mx-auto">
      <Slider {...settings}>
        {[{
          title: "Lorem Ipsum Te Amo",
          position: "CEO at BECCA",
        }, {
          title: "Es Te Vosotros Siuu",
          position: "HRO at BECCA",
        }, {
          title: "Muchas Gracias Efficion",
          position: "HEC at BECCA",
        }].map(({ title, position }, idx) => (
          <div key={idx} className="p-4 text-center">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, starIdx) => (
                <LiaStarSolid key={starIdx} className="text-[#822EF7]" />
              ))}
            </div>
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">{title}</h1>
            <p className="mt-2 text-xs md:text-sm lg:text-base">{position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
