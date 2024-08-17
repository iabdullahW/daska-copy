import React from 'react'
import Image from 'next/image'
import one from "../../public/pexels-emmy-e-1252107-2381069.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";

const Position = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-cyan-900 to-blue-500 w-[88%] mx-auto relative h-[70vh] rounded-2xl mt-10 flex flex-col items-center justify-center'>
        <div className='absolute hidden top-8 left-8 lg:block'>
          <Image src={one} alt="Decorative image" className='w-[100px] h-[100px] rounded-full p-[4px] bg-yellow-300'/>
        </div>
        <div className='absolute hidden top-20 right-8 lg:block'>
          <Image src={one} alt="Decorative image" className='w-[100px] h-[100px] rounded-full p-[4px] bg-yellow-300'/>
        </div>
        <div className='absolute hidden top-64 right-24 lg:block'>
          <Image src={one} alt="Decorative image" className='w-[100px] h-[100px] rounded-full p-[4px] bg-yellow-300'/>
        </div>
        <h1 className='mx-auto text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl'>
          We are always looking for new talents <br /> who want to become part of our journey
        </h1>
        <div className='absolute flex flex-col items-center gap-5 bottom-10 md:flex-row'>
          <button className='px-6 py-3 text-lg text-white bg-purple-800 rounded-xl max-sm:text-sm'>
            Read More
          </button>
          <div className='flex items-center hidden text-white gap-x-2 md:flex'>
            <p className='text-lg'>View Open Positions</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default Position
