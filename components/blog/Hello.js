import React from "react";
import Caraousell from "./carousell";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="">
      <div className="w-11/12 m-auto mt-12 lg:w-4/5">
        <hr className="w-full border-0.5 border-slate-400 rounded my-5 self-center flex justify-center" />
      </div>
      {/* MAIN */}
      <div className="flex flex-col justify-between w-11/12 gap-16 m-auto mt-12 lg:w-4/5 lg:flex-row lg:mt-24">
        {/* left */}
        <div className="w-full lg:w-3/4 border-r-0 lg:border-r-0.5 border-slate-500">
          <h2 className="w-16 px-2 mb-6 text-sm text-white bg-purple-700 font-small rounded-xl">
            NEWS
          </h2>

          <h1 className="text-black mt-2 text-2xl lg:text-[34px] font-medium">
            ChatGPT and AI NFTs in 2023 – Hype or Hope?
          </h1>
          <h3 className="text-black mt-3 text-lg lg:text-[18px] font-[400]">
            by Anna Watson MARCH 2, 2023
          </h3>
          <Caraousell />
          <section className="bg-[#2B0855] text-white py-12 px-6 lg:px-12 rounded-md mb-6 mt-12 lg:mt-24 w-full lg:w-11/12 h-[200px] flex justify-center flex-col">
            <p className="text-[22px] self-center max-sm:text-sm">
              “Company has been a huge part of helping me grow my business through organic search and content marketing.”
            </p>
            <span className="block mt-4 text-[15px]">
              Mark Johnson, CEO at Becca
            </span>
          </section>
          <div className="w-full mb-12 bg-white lg:w-11/12 lg:mb-0">
            <h2 className="w-16 px-2 mb-6 text-sm text-white bg-purple-700 font-small rounded-xl">
              NEWS
            </h2>
            <h1 className="text-2xl lg:text-[34px] font-medium">
              Why AI Could Grow Substantially in 2023?
            </h1>
            <p className="text-black mt-3 text-lg lg:text-[18px] font-[400]">
              by Anna Watson{" "}
              <span className="text-gray-400">FEBRUARY 3, 2023</span>
            </p>
            <div className="mt-10 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={require("/public/blog-img-2.jpg").default}
                alt="Blog Image"
                className="w-full"
              />
            </div>
          </div>
          <section className="bg-[#7D78E0] text-white rounded-md mb-6 mt-10 w-full lg:w-11/12 h-[200px] flex justify-center flex-col">
            <p className="text-[20px] self-center p-6  max-sm:text-sm">
            NFT SOLVE THIS PROBLEM BYPROTECTING PATIENTS' SENSITIVE INFORMATION AND INFORMATION AND IMPORVING AND SECURITY
            </p>
          </section>
          <div className="w-full mt-16 mb-12 bg-white lg:w-11/12 lg:mb-0">
            <h2 className="w-16 px-2 mb-6 text-sm text-white bg-purple-700 font-small rounded-xl ">
              NEWS
            </h2>
            <h1 className="text-2xl lg:text-[34px] font-medium">
              Why AI Could Grow Substantially in 2023?
            </h1>
            <p className="text-black mt-3 text-lg lg:text-[18px] font-[400]">
              by Anna Watson{" "}
              <span className="text-gray-400">FEBRUARY 3, 2023</span>
            </p>
            <div className="mt-10 mb-10 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={require("/public/blog-img-2.jpg").default}
                alt="Blog Image"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600 lg:w-36"
            />
            <button
              type="button"
              className="px-4 py-2 text-white bg-purple-700 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Search
            </button>
          </div>

          {/* Card */}
          <div className="w-full lg:w-4/5 my-8 border bg-[#897BEC] h-[250px] rounded-lg overflow-hidden shadow-lg p-6 mt-8 lg:mt-[60px]">
            <div className="w-24 h-24 mx-auto mb-4 overflow-hidden border-4 border-purple-200 rounded-full">
              <Image
                src={require("/public/blog-img-1.jpg")}
                width={96}
                height={96}
                alt="Blog"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-center text-gray-100">
              by Anna Watson
            </h3>
            <p className="text-center text-gray-100">Copywriter</p>
          </div>

          {/* Read Next Section */}
          <aside className="w-full mt-8 lg:mt-16 lg:w-4/5">
            <h2 className="mb-4 text-lg font-bold text-purple-900">
              Read next
            </h2>
            <ul>
              <li className="mb-8">
                <a href="#" className="font-bold text-black-500">
                  6 Best Wireframing Tools for Designing Your Website
                </a>
                <div className="mt-1 text-gray-500">
                  <span>by Anna Watson</span>
                  <span className="block"> FEBRUARY 23, 2023</span>
                </div>
              </li>
              <hr className="w-full lg:w-2/3 border-0.5 border-slate-400 rounded my-5 self-center flex justify-center" />
              <li className="mb-8">
                <a href="#" className="font-bold text-black-800">
                  Who Owns WordPress? WordPress Ownership
                </a>
                <div className="mt-1 text-gray-500">
                  <span>by Anna Watson</span>
                  <span className="block"> FEBRUARY 23, 2023</span>
                </div>
              </li>
            </ul>

            <div className="h-64 p-4 mt-8 text-center bg-purple-100 rounded-lg lg:mt-16">
              <h3 className="pt-6 font-bold text-purple-800">Newsletter</h3>
              <p className="mb-4 text-gray-500">Get latest news in inbox</p>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 mb-4 border border-gray-300 rounded-md"
                />
                <button className="p-2 text-white bg-purple-800 rounded-md">
                  Sign In
                </button>
              </form>
            </div>
          </aside>
          {/* Sidebar */}
          <div className="mt-8 mb-6 lg:mt-16">
            <h2 className="mt-6 mb-5 text-lg font-bold text-purple-800">
              Follow us
            </h2>
            <div className="flex space-x-4 text-[17px] gap-2">
              <TiSocialTwitter />
              <FaFacebookF />
              <IoLogoYoutube />
              <AiFillInstagram />
              <FaSnapchatGhost />
            </div>
          </div>
          {/* Categories */}
          <div className="mt-8 mb-16 lg:mt-16">
            <h2 className="mb-4 text-lg font-bold text-purple-800">
              Categories
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-800">
                  LEARN (3)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-800">
                  NEWS (9)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-800">
                  PLUGIN (4)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-800">
                  PODCAST (3)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-800">
                  RESOURCES (3)
                </a>
              </li>
            </ul>
          </div>
          {/* Promotional Card */}
          <div className="w-full p-4 bg-purple-100 rounded-lg lg:w-4/5 h-80 max-sm:mb-10">
            <h3 className="mb-2 font-bold text-purple-800 pt-7">
              Up to 40% Off All Courses
            </h3>
            <p className="mb-4 text-gray-500">Read more →</p>
            <Image
              src={require("/public/blog-img-1.jpg")}
              alt="Course Promo"
              width={300}
              height={200}
              className="rounded-lg md:hidden max-sm:hidden max-md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
