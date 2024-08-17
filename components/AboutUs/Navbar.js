"use client";

import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { PiGreaterThan } from "react-icons/pi";

// import Link from 'next/link';

const Navbar = () => {
  // const [style,setStyle]=useState({display:'none'});
  const [homeDiv, setHomeDiv] = useState(false);
  const [pages, setPages] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [shop, setShop] = useState(false);
  const [blog, setBlog] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [sidebar, setSidebar] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleHomeDiv = (tag) => {
    if (tag === "home") {
      setHomeDiv(!homeDiv);
    }
    if (tag === "page") {
      setPages(!pages);
    }
    if (tag === "portfolio") {
      setPortfolio(!portfolio);
    }
    if (tag === "shop") {
      setShop(!shop);
    }
    if (tag === "blog") {
      setBlog(!blog);
    }
  };

  const changeSidebar = () => {
    setSidebar(!sidebar);
  };

  const hideSidebar = () => {
    setSidebar(false);
  };

  const slider = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div
        className={`relative max-sm:hidden ${activeTab == "home" ? "bg-[#d2d9f8]" : "bg-[#fff]"}`}
      >
        <div className="flex justify-around items-center h-[110px]">
          <div
            className={`flex items-center  bg-[#9c3df5] text-white h-full w-[90px]  text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl`}
          >
            {/* <Image src={require("/public/download-removebg-preview.png") } width={100}
      height={100}  alt="Picture of the author" /> */}
            <h1>N</h1>
            <h1>.</h1>
          </div>
          <div className="w-[400px] max-sm:hidden ">
            <ul className="flex justify-between font-medium border-emerald-300 text-slate-800 ">
              <Link href="/" onClick={() => setActiveTab("home")}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/portfolio" onClick={() => setActiveTab("portfolio")}>
                {" "}
                <li className="cursor-pointer">Services</li>
              </Link>
              <Link
                href="/softwareCompany"
                onClick={() => setActiveTab("contact")}
              >
                <li className="cursor-pointer">Contact</li>
              </Link>
              <Link href="/aboutUs" onClick={() => setActiveTab("about us")}>
                <li className="cursor-pointer">About Us</li>
              </Link>

              <Link href="/blog" onClick={() => setActiveTab("blog")}>
                <li className="cursor-pointer">Blog</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center w-[150px]  border-black justify-around font-xl text-slate-800">
            <h3 className="text-lg font-medium max-sm:hidden">Log in</h3>
            <HiOutlineMenuAlt4
              className="text-5xl text-blue-700 cursor-pointer "
              onClick={changeSidebar}
            />
          </div>
        </div>

        <div className="flex w-full ">
          {homeDiv ? (
            <div className="py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[400px] transition delay-1000 duration-1000 z-index[999] absolute">
              <ul className="flex flex-col gap-y-3 ">
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Main HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Slider Showcase
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  SaaS Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Software Company
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT Market
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Straming App
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  {" "}
                  Crypto Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
              </ul>
            </div>
          ) : null}

          {pages ? (
            <div className="py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[500px] duration-1000 transition z-index[999] absolute">
              <ul className="flex flex-col gap-y-3 ">
                <Link href="/aboutus">
                  <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10 cursor-pointer">
                    About Us
                  </li>
                </Link>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Slider Showcase
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  SaaS Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Software Company
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT Market
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Straming App
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  {" "}
                  Crypto Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
              </ul>
            </div>
          ) : null}
          {portfolio ? (
            <div className="py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[600px] duration-1000 transition z-index[999] absolute ">
              <ul className="flex flex-col gap-y-3 ">
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Main HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Slider Showcase
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  SaaS Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Software Company
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT Market
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Straming App
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  {" "}
                  Crypto Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
              </ul>
            </div>
          ) : null}
          {shop ? (
            <div className="py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[710px] duration-1000 transition z-index[999] absolute">
              <ul className="flex flex-col gap-y-3 ">
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Main HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Slider Showcase
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  SaaS Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Software Company
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT Market
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Straming App
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  {" "}
                  Crypto Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
              </ul>
            </div>
          ) : null}

          {blog ? (
            <div className="py-4 pl-6 shadow-xl font-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[810px] duration-1000 transition z-index[999] absolute">
              <ul className="flex flex-col gap-y-3 ">
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Main HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Slider Showcase
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  SaaS Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Software Company
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT Market
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  NFT HOME
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Straming App
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  {" "}
                  Crypto Home
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
                <li className="hover:duration-1000 hover:text-[#9c3df5] hover:pl-10">
                  Landing
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {sidebar ? (
          <div className="absolute right-[0px] z-50 top-[0px] text-white transition duration-1000 max-sm:flex ">
            <div className="bg-black w-[300px] h-[600px]  rounded-l-2xl">
              {/* <button className='px-2 py-3 text-5xl bg-yellow-500' onClick={hideSidebar}>X</button> */}
              <div className="flex justify-end px-5 pt-5">
                <button className="text-5xl text-white " onClick={hideSidebar}>
                  X
                </button>
              </div>
              <div className="mt-[100px] ml-[90px]">
                <h1 className="text-4xl font-extrabold cursor-pointer">
                  NT.Tech
                </h1>
              </div>
              <div>
                <hr className="w-[230px] m-auto mt-[40px] text-gray-600 opacity-45" />
              </div>
              <div>
                <ul className="flex flex-col mt-10 ml-8 text-xl font-bold text-[#bfa3cc] gap-y-3">
                  <Link href="/">
                    <li className="hover:text-white" onClick={hideSidebar}>
                      Home
                    </li>
                  </Link>
                  <Link href="/aboutUs">
                    <li className="hover:text-white" onClick={hideSidebar}>
                      Pages
                    </li>
                  </Link>
                  <Link href="/portfolio">
                    {" "}
                    <li
                      className="flex items-center gap-x-2 "
                      onClick={hideSidebar}
                    >
                      Portfolio{" "}
                      <MdWavingHand className="text-2xl text-orange-300" />
                    </li>
                  </Link>
                  <Link href="/blog">
                    {" "}
                    <li className="hover:text-white" onClick={hideSidebar}>
                      Blog
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="flex ml-8 gap-x-3 text-[#bfa3cc] mt-5 ">
                <BsInstagram className="hover:text-white" />
                <FaFacebookF className="hover:text-white" />
                <FaLinkedinIn className="hover:text-white" />
                <FaTwitter className="hover:text-white" />
                <FaYoutube className="hover:text-white" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {!mobileMenu ? (
        <div className="max-sm:text-white  max-sm:h-[10vh] hidden max-sm:block ">
          <div className="w-[90%] max-sm:mx-auto bg-white max-sm:text-red-500 max-sm:h-full flex justify-between mt-5">
            <div className="flex items-center  bg-[#9c3df5] text-white h-full w-[90px]  text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl">
              <h1>N</h1>
              <h1>.</h1>
            </div>
            <div>
              {" "}
              <HiOutlineMenuAlt4
                className="text-5xl text-blue-700 cursor-pointer "
                onClick={slider}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-sm:text-white  max-sm:h-[10vh] hidden max-sm:block ">
          <div className="w-[90%] max-sm:mx-auto bg-white max-sm:text-red-500 max-sm:h-full flex justify-between mt-5">
            <div className="flex items-center  bg-[#9c3df5] text-white h-full w-[90px]  text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl relative z-50">
              <h1>N</h1>
              <h1>.</h1>
            </div>
            <div>
              {" "}
              <RxCross1
                className="text-5xl text-blue-700 cursor-pointer "
                onClick={slider}
              />
            </div>
          </div>
          <div className="relative flex flex-col p-6 text-black bg-white gap-y-3 z-[999] mt-4">
            <Link href="/" onClick={slider}>
              <div className="flex items-center justify-between text-xl">
                <h1>Home</h1>
                <PiGreaterThan />
              </div>
            </Link>

            <Link href="/aboutUs" onClick={slider}>
              <div className="flex items-center justify-between text-xl">
                <h1>About Us</h1>
                <PiGreaterThan />
              </div>
            </Link>

            <Link href="/portfolio" onClick={slider}>
              <div className="flex items-center justify-between text-xl">
                <h1>Portfolio</h1>
                <PiGreaterThan />
              </div>
            </Link>

            <Link href="/softwareCompany" onClick={slider}>
              <div className="flex items-center justify-between text-xl">
                <h1>Contact us</h1>
                <PiGreaterThan />
              </div>
            </Link>

            <Link href="/blog" onClick={slider}>
              <div className="flex items-center justify-between text-xl">
                <h1>Blog</h1>
                <PiGreaterThan />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

// 'use client'

// import React from 'react'
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import Image from 'next/image'
// import { useState } from 'react';
// import { MdWavingHand } from "react-icons/md";
// import { BsInstagram } from "react-icons/bs";
// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
// import Link from 'next/link';
// import { RxCross1 } from "react-icons/rx";
// import { PiGreaterThan } from "react-icons/pi";
// import { BsChevronDown } from "react-icons/bs";
// import { BsChevronUp } from "react-icons/bs";
// // import { RxCross1 } from "react-icons/rx";

// const Navbar = () => {
//   const [homeDiv, setHomeDiv] = useState(false)
//   const [pages, setPages] = useState(false)
//   const [portfolio, setPortfolio] = useState(false)
//   const [shop, setShop] = useState(false)
//   const [blog, setBlog] = useState(false)
//   const [sidebar, setSidebar] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false)

//   const handleHomeDiv = (tag) => {
//     if (tag === 'home') {
//       setHomeDiv(!homeDiv)
//     }
//     if (tag === "page") {
//       setPages(!pages)
//     }
//     if (tag === "portfolio") {
//       setPortfolio(!portfolio)
//     }
//     if (tag === "shop") {
//       setShop(!shop)
//     }
//     if (tag === "blog") {
//       setBlog(!blog)
//     }
//   }

//   const changeSidebar = () => {
//     setSidebar(!sidebar)
//   }

//   const hideSidebar = () => {
//     setSidebar(false)
//   }

//   const slider = () => {
//     setMobileMenu(!mobileMenu)
//   }

//   return (
//     <>
//       <div className='relative hidden lg:block'>
//         <div className='flex justify-around items-center h-[110px]'>
//           <div className='flex items-center bg-[#9c3df5] text-white h-full w-[90px] text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl'>
//             <h1>N</h1>
//             <h1>.</h1>
//           </div>
//           <div className='w-[400px] hidden lg:block'>
//             <ul className='flex justify-between font-medium text-slate-800 '>
//               <li className='cursor-pointer' onMouseEnter={() => handleHomeDiv('home')}>Home</li>
//               <li className='cursor-pointer' onMouseEnter={() => handleHomeDiv('page')}>Pages</li>
//               <li className='cursor-pointer' onMouseEnter={() => handleHomeDiv('portfolio')}>Portfolio</li>
//               <li className='cursor-pointer' onMouseEnter={() => handleHomeDiv('shop')}>Shop</li>
//               <li className='cursor-pointer' onMouseEnter={() => handleHomeDiv('blog')}>Blog</li>
//             </ul>
//           </div>
//           <div className='flex items-center w-[150px] justify-around text-slate-800'>
//             <h3 className='hidden text-lg font-medium lg:block'>Log in</h3>
//             <HiOutlineMenuAlt4 className='text-5xl text-blue-700 cursor-pointer' onClick={changeSidebar} />
//           </div>
//         </div>

//         <div className='flex w-full'>
//           {homeDiv && (
//             <div className='absolute py-4 pl-6 font-semibold transition duration-1000 shadow-xl text-md w-72 text-slate-600 rounded-xl shadow-slate-300'>
//               <ul className='flex flex-col gap-y-3'>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Main HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Streaming App</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Crypto Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//               </ul>
//             </div>
//           )}
//           {pages && (
//             <div className='absolute py-4 pl-6 font-semibold transition duration-1000 shadow-xl text-md w-72 text-slate-600 rounded-xl shadow-slate-300'>
//               <ul className='flex flex-col gap-y-3'>
//                 <Link href="/aboutus"><li className='hover:text-[#9c3df5] hover:pl-10 cursor-pointer'>About Us</li></Link>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Streaming App</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Crypto Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//               </ul>
//             </div>
//           )}
//           {portfolio && (
//             <div className='absolute py-4 pl-6 font-semibold transition duration-1000 shadow-xl text-md w-72 text-slate-600 rounded-xl shadow-slate-300'>
//               <ul className='flex flex-col gap-y-3'>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Main HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Streaming App</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Crypto Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//               </ul>
//             </div>
//           )}
//           {shop && (
//             <div className='absolute py-4 pl-6 font-semibold transition duration-1000 shadow-xl text-md w-72 text-slate-600 rounded-xl shadow-slate-300'>
//               <ul className='flex flex-col gap-y-3'>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Main HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Streaming App</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Crypto Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//               </ul>
//             </div>
//           )}
//           {blog && (
//             <div className='absolute py-4 pl-6 font-semibold transition duration-1000 shadow-xl text-md w-72 text-slate-600 rounded-xl shadow-slate-300'>
//               <ul className='flex flex-col gap-y-3'>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Main HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Streaming App</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Crypto Home</li>
//                 <li className='hover:text-[#9c3df5] hover:pl-10'>Landing</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className='flex items-center justify-between lg:hidden'>
//         <div className='flex items-center bg-[#9c3df5] text-white h-14 w-14 text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl'>
//           <h1>N</h1>
//           <h1>.</h1>
//         </div>
//         <HiOutlineMenuAlt4 className='text-4xl text-blue-700 cursor-pointer' onClick={slider} />
//       </div>

//       {mobileMenu && (
//         <div className='lg:hidden'>
//           <div className='bg-white text-slate-800'>
//             <div className='flex items-center justify-between p-4'>
//               <h3 className='text-lg font-medium'></h3>
//               <RxCross1 className='text-2xl cursor-pointer' onClick={slider} />
//             </div>
//             <ul className='flex flex-col items-center font-medium gap-y-6'>
//               <li className='cursor-pointer' onClick={() => handleHomeDiv('home')}>Home</li>
//               <li className='cursor-pointer' onClick={() => handleHomeDiv('page')}>Pages</li>
//               <li className='cursor-pointer' onClick={() => handleHomeDiv('portfolio')}>Portfolio</li>
//               <li className='cursor-pointer' onClick={() => handleHomeDiv('shop')}>Shop</li>
//               <li className='cursor-pointer' onClick={() => handleHomeDiv('blog')}>Blog</li>
//             </ul>
//           </div>
//           <div className='py-4 text-slate-600'>
//             {homeDiv && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5]'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5]'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5]'>Software Company</li>
//                   <li className='hover:text-[#9c3df5]'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5]'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5]'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5]'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {pages && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <Link href="/aboutus"><li className='hover:text-[#9c3df5] cursor-pointer'>About Us</li></Link>
//                   <li className='hover:text-[#9c3df5]'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5]'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5]'>Software Company</li>
//                   <li className='hover:text-[#9c3df5]'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5]'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5]'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5]'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {portfolio && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5]'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5]'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5]'>Software Company</li>
//                   <li className='hover:text-[#9c3df5]'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5]'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5]'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5]'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {shop && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5]'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5]'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5]'>Software Company</li>
//                   <li className='hover:text-[#9c3df5]'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5]'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5]'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5]'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {blog && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5]'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5]'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5]'>Software Company</li>
//                   <li className='hover:text-[#9c3df5]'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5]'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5]'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5]'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5]'>Landing</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <div className={sidebar ? "block absolute top-0 left-0 h-full w-full bg-slate-500/20 " : "hidden"} onClick={hideSidebar}></div>

//       <div className={sidebar ? "lg: w-[340px] md:w-[380px] bg-slate-100 h-full px-3 fixed top-0 right-0 transition duration-1000" : "hidden"} onMouseLeave={hideSidebar}>
//         <div className='flex items-center justify-around py-3'>
//           <div className='flex items-center bg-[#9c3df5] text-white h-12 w-12 text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl'>
//             <h1>N</h1>
//             <h1>.</h1>
//           </div>
//           <div>
//             <RxCross1 className='text-3xl cursor-pointer' onClick={hideSidebar} />
//           </div>
//         </div>
//         <div className='py-4'>
//           <ul className='flex flex-col items-center font-medium'>
//             <li className='flex items-center mb-2 text-lg cursor-pointer gap-x-2' onClick={() => handleDiv('home')}>
//               <h1>Home</h1>
//               {homeDiv ? <BsChevronUp /> : <BsChevronDown />}
//             </li>
//             <li className='flex items-center mb-2 text-lg cursor-pointer gap-x-2' onClick={() => handleDiv('page')}>
//               <h1>Pages</h1>
//               {pages ? <BsChevronUp /> : <BsChevronDown />}
//             </li>
//             <li className='flex items-center mb-2 text-lg cursor-pointer gap-x-2' onClick={() => handleDiv('portfolio')}>
//               <h1>Portfolio</h1>
//               {portfolio ? <BsChevronUp /> : <BsChevronDown />}
//             </li>
//             <li className='flex items-center mb-2 text-lg cursor-pointer gap-x-2' onClick={() => handleDiv('shop')}>
//               <h1>Shop</h1>
//               {shop ? <BsChevronUp /> : <BsChevronDown />}
//             </li>
//             <li className='flex items-center mb-2 text-lg cursor-pointer gap-x-2' onClick={() => handleDiv('blog')}>
//               <h1>Blog</h1>
//               {blog ? <BsChevronUp /> : <BsChevronDown />}
//             </li>
//           </ul>
//           <div className='py-4 text-slate-600'>
//             {homeDiv && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Software Company</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {pages && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>About Us</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Software Company</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {portfolio && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Software Company</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {shop && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Software Company</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Landing</li>
//                 </ul>
//               </div>
//             )}
//             {blog && (
//               <div className='px-6'>
//                 <ul className='flex flex-col gap-y-3'>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Main HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Slider Showcase</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>SaaS Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Software Company</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT Market</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>NFT HOME</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Streaming App</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Crypto Home</li>
//                   <li className='hover:text-[#9c3df5] cursor-pointer'>Landing</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
