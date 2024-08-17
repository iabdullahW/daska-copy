'use client'

import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from 'next/image'
import { useState } from 'react';
import { MdWavingHand } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { RxCross1 } from "react-icons/rx";
import { PiGreaterThan } from "react-icons/pi";

// import Link from 'next/link';

const Navbar = () => {

  // const [style,setStyle]=useState({display:'none'});
  const [homeDiv,setHomeDiv] = useState(false)
  const [pages,setPages]=useState(false)
  const [portfolio,setPortfolio]= useState(false)
  const [shop,setShop]= useState(false)
  const [blog,setBlog]= useState(false)

  const [sidebar,setSidebar]=useState(false);

  const [mobileMenu,setMobileMenu]=useState(false)

  const handleHomeDiv = (tag) => {
    if(tag === 'home'){
      setHomeDiv(!homeDiv)
    }
   if(tag === "page"){
      setPages(!pages)
      
    }
   if(tag === "portfolio"){
      setPortfolio(!portfolio)
    }
   if(tag === "shop"){
      setShop(!shop)
    }
   if(tag === "blog"){
      setBlog(!blog)
    }
   
    
  } 
  
  const changeSidebar =()=>{
    setSidebar(!sidebar)
    
  }

  const hideSidebar=()=>{
    setSidebar(false)
    
  }


  const slider=()=>{
    setMobileMenu(!mobileMenu)
  }
 

  
  
  return (
    <>
    <div className='relative max-sm:hidden'>
      <div className='flex justify-around items-center h-[110px]'>
            <div className='flex items-center  bg-[#9c3df5] text-white h-full w-[90px]  text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl'>
              {/* <Image src={require("/public/download-removebg-preview.png") } width={100}
      height={100}  alt="Picture of the author" /> */}
      <h1>N</h1>
      <h1>.</h1>
            </div>
            <div className='w-[400px] max-sm:hidden '>
                <ul className='flex justify-between font-medium border-emerald-300 text-slate-800 '>
                <Link href="/"><li className='cursor-pointer' 
                    >Home</li></Link>
                    <Link href="/aboutUs"><li className='cursor-pointer' 
                    >Pages</li></Link>
                    <Link href="/portfolio"> <li className='cursor-pointer' >
                    Portfolio</li></Link>
                   <Link href="/softwareCompany"><li className='cursor-pointer' >Shop</li></Link>
                    <Link href="/blog"><li className='cursor-pointer' >Blog</li></Link>
                    
                </ul>
            </div>
            <div className='flex items-center w-[150px]  border-black justify-around font-xl text-slate-800'>
                <h3 className='text-lg font-medium max-sm:hidden'>Log in</h3>
                <HiOutlineMenuAlt4 className='text-5xl text-blue-700 cursor-pointer ' onClick={changeSidebar}/>
            </div>
      </div>
      
      <div className='flex w-full '>
      {homeDiv ? <div className=  'py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[400px] transition delay-1000 duration-1000 z-index[999] absolute' 
      >
        <ul className='flex flex-col gap-y-3 '>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'  >Main HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Straming App</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'> Crypto Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
        </ul>
      </div> : null}
      
      {
        pages? <div className='py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[500px] duration-1000 transition z-index[999] absolute'>
        <ul className='flex flex-col gap-y-3 '>
         <Link href="/aboutus" ><li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10 cursor-pointer'  >About Us</li></Link> 
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Straming App</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'> Crypto Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
        </ul>
      </div> :null
      }
      { portfolio ? <div className='py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[600px] duration-1000 transition z-index[999] absolute '>
        <ul className='flex flex-col gap-y-3 '>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'  >Main HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Straming App</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'> Crypto Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
          
        </ul>
      </div>: null
       
      }
      {
        shop ?  <div className='py-4 pl-6 shadow-xl mfont-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[710px] duration-1000 transition z-index[999] absolute'>
        <ul className='flex flex-col gap-y-3 '>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'  >Main HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Straming App</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'> Crypto Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
        </ul>
      </div> : null
       
      }
     
      {
        blog ? <div className='py-4 pl-6 shadow-xl font-semibold text-md w-72 text-slate-600 rounded-xl shadow-slate-300 ml-[810px] duration-1000 transition z-index[999] absolute'>
        <ul className='flex flex-col gap-y-3 '>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'  >Main HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Slider Showcase</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>SaaS Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Software Company</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT Market</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>NFT HOME</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Straming App</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'> Crypto Home</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
          <li className='hover:duration-1000 hover:text-[#9c3df5] hover:pl-10'>Landing</li>
        </ul>
      </div> : null
      }
     
      </div>
      { sidebar ? 
      <div className='absolute right-[0px] z-50 top-[0px] text-white transition duration-1000 max-sm:flex '>
        <div className='bg-black w-[300px] h-[600px]  rounded-l-2xl'>
          {/* <button className='px-2 py-3 text-5xl bg-yellow-500' onClick={hideSidebar}>X</button> */}
          <div className='flex justify-end px-5 pt-5'>
            <button className='text-5xl text-white ' onClick={hideSidebar}>X</button>
          </div>
          <div className='mt-[100px] ml-[90px]'>
            <h1 className='text-4xl font-extrabold cursor-pointer'>NT.Tech</h1>
            </div>
            <div>
            <hr className='w-[230px] m-auto mt-[40px] text-gray-600 opacity-45'/>
            </div>
            <div>
              <ul className='flex flex-col mt-10 ml-8 text-xl font-bold text-[#bfa3cc] gap-y-3' >
                <li className='hover:text-white'>Our Services</li>
                <li className='hover:text-white'>Careers</li>
                <li className='flex items-center gap-x-2 '>Contact Us <MdWavingHand className='text-2xl text-orange-300'/></li>
                <li className='hover:text-white'>Landing</li>
              </ul>
            </div>
            <div className='flex ml-8 gap-x-3 text-[#bfa3cc] mt-5 '>
            <BsInstagram className='hover:text-white'/>
            <FaFacebookF className='hover:text-white'/>
            <FaLinkedinIn className='hover:text-white'/>
            <FaTwitter className='hover:text-white'/>
            <FaYoutube className='hover:text-white'/>
            </div>
            
          
        </div> 
       
     </div> :null
      }
    
     
     </div>
     {!mobileMenu ?
     <div className='max-sm:text-white  max-sm:h-[10vh] hidden max-sm:block '>
        <div className='w-[90%] max-sm:mx-auto bg-white max-sm:text-red-500 max-sm:h-full flex justify-between mt-5'>
        <div className='flex items-center  bg-[#9c3df5] text-white h-full w-[90px]  text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl'>
            
      <h1>N</h1>
      <h1>.</h1>
            </div>
          <div> <HiOutlineMenuAlt4 className='text-5xl text-blue-700 cursor-pointer ' onClick={slider}/></div>
        </div>
     </div>: <div className='max-sm:text-white  max-sm:h-[10vh] hidden max-sm:block '>
        <div className='w-[90%] max-sm:mx-auto bg-white max-sm:text-red-500 max-sm:h-full flex justify-between mt-5'>
        <div className='flex items-center  bg-[#9c3df5] text-white h-full w-[90px]  text-4xl justify-center font-bold rounded-b-2xl shadow-gray-400 shadow-xl relative z-50'>
            
      <h1>N</h1>
      <h1>.</h1>
            </div>
          <div> <RxCross1 className='text-5xl text-blue-700 cursor-pointer ' onClick={slider}/></div>
        </div>
        <div className='relative flex flex-col p-6 text-black bg-white gap-y-3'>
            <div className='flex items-center justify-between text-xl'>
              <h1>Home</h1>
              <PiGreaterThan />
            </div>
            <div className='flex items-center justify-between text-xl'>
              <h1>Pages</h1>
              <PiGreaterThan />
            </div>
            <div className='flex items-center justify-between text-xl'>
              <h1>Portfolio</h1>
              <PiGreaterThan />
            </div>
            <div className='flex items-center justify-between text-xl'>
              <h1>Shop</h1>
              <PiGreaterThan />
            </div>
            <div className='flex items-center justify-between text-xl'>
              <h1>Blog</h1>
              <PiGreaterThan />
            </div>
        </div>
     </div> }

     
     
      
    </>
  )
}

export default Navbar

