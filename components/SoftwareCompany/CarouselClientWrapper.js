"use client"; // This directive will ensure the component is used as a client component
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselClientWrapper() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="carousel-container w-[80vw]  overflow-x-hidden h-[18rem]  ">
      <Slider {...settings}>
        <div className="flex items-center justify-center">
          <div className="flex flex-row">
            <Image
              src={require("/public/pia.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover  ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
             
            />
            <Image
              src={require("/public/pso.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
             
            />
            <Image
              src={require("/public/daraz.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              
            />

            <Image
              src={require("/public/uni.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-row">
            <Image
              src={require("/public/pia.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
            <Image
              src={require("/public/pso.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
            <Image
              src={require("/public/daraz.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />

            <Image
              src={require("/public/uni.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-row">
            <Image
              src={require("/public/pia.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
            <Image
              src={require("/public/pso.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
            <Image
              src={require("/public/daraz.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />

            <Image
              src={require("/public/uni.png")}
              className="h-[15rem] w-[13rem] rounded-l-lg object-cover mt-[2rem] ml-[5rem]"
              alt="Left Image"
              layout="intrinsic"
              width={130} // Use the width and height properties
              height={150}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}