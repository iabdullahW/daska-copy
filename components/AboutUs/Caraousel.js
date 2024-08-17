"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PeopleSlider from "./PeopleSlider";
import personOne from "./image/h7-testimonials-f-img-2.jpg";
import personTwo from "./image/h7-testimonials-f-img-1.jpg";
import personThree from "./image/h7-testimonials-f-img-3.jpg";

export default function CaraouselRev() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 full slide and part of the next slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true, // Center the slides
    // centerPadding: "1%", // Padding on the sides of centered slide

  };

  return (
    <div >
      <Slider {...settings}>
     
          {/* <div className="w-[50%] border"> */}
    
         <PeopleSlider image={personOne}/>
          {/* </div> */}
          {/* <div className="w-[90%] border"> */}
         <PeopleSlider image={personTwo}/>

          {/* </div> */}
         <PeopleSlider image={personThree}/>
         
      
       
        
      </Slider>
    </div>
  );
}