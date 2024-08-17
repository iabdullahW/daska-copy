import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";



const Custom = () => {
  return (
    <div className="bg-[#E8ECFD] w-full min-h-screen flex flex-col lg:flex-row justify-around items-center overflow-x-hidden p-4 lg:p-8">
      {/* left */}
      <div className="flex flex-col items-center p-4 lg:items-start lg:p-0">
        <div className="text-[14px] leading-[17px] text-[#351A5F] text-xl mb-4 font-light">
          WORK WITH
        </div>
        <div className="text-[#351A5F] text-2xl lg:text-4xl font-semibold tracking-normal text-center lg:text-left">
        CUSTOMIZE AND TURN YOUR <br /> IDEAS INTO REALITY.
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 p-4 mt-8 lg:flex-row">
          <div className="text-[#351A5F] text-lg font-medium leading-4">Screen sharing</div>
          <div className="text-[#351A5F] text-lg font-medium leading-4 max-sm:hidden">Screen sharing</div>
        </div>
        <hr className="h-[5px] border-purple-500 w-full lg:w-[600px]" />
        <div className="flex flex-col items-start justify-between w-full gap-2 mt-8 lg:flex-row ">
          <div className="text-[#351A5F]">
            <ul className="flex flex-col pl-5 text-lg list-disc gap-y-2 max-sm:flex ">
              <li>Consultation and Idea Evaluation</li>
              <li>Custom Software Development</li>
              <li>User-Centric Approach</li>
            </ul>
          </div>
          <div className="text-[#351A5F]">
            <ul className="flex flex-col pl-5 text-lg list-disc gap-y-2">
              <li>Testing and Quality Assurance</li>
              <li>Deployment and Support</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center pt-5 pl-4 text-purple-500 gap-x-3">
          Start using Becca at ICloud.com <FaLongArrowAltRight className="text-3xl font-thin" />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-center p-4 lg:p-0">
      {/* <Image src={curly} /> */}
          {/* <Image src={require("/public/larki.jpg")} className="w-1/3 h-auto max-w-xs lg:max-w-md rounded-[500px]" /> */}
        {/* <Image src={require("/public/h3-rev1-img-1-removebg-preview.png")} className="w-full h-auto max-w-xs lg:max-w-md" /> */}
        <Image src={require("/public/customR.png")} className="w-full h-auto max-w-xs lg:max-w-md" />
        <Image src={require("/public/customR.png")} className="w-full h-auto max-w-xs lg:max-w-md" />
      </div>
    </div>
  );
};

export default Custom;
