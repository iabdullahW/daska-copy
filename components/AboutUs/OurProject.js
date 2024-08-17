import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";

const OurProject = () => {
  return (
    <>
      <div className='w-[80%] mx-auto h-auto md:h-[90vh] mt-10 flex flex-col md:flex-row gap-10 md:gap-32'>
        <div className='left w-full md:w-[50%]'>
          <Image 
            src={require("/public/p1-img-6.jpg")} 
            alt="Picture of the author" 
            className='h-auto md:h-[50vh] w-full rounded-lg'
          />
        </div>
        <div className='right w-full md:w-[50%] flex flex-col gap-y-8'>
          <p className='font-semibold text-slate-700'>OUR PROJECT</p>
          <h1 className='text-2xl font-semibold tracking-wider md:text-3xl'>
            All-inclusive crypto data with<br />
            <span>useful insights</span>
          </h1>
          <span className='text-slate-600'>
            <p>Dictum at tempor commodo ullamcorper a lacus</p>
            <p>vestibulum. Nunc scelerisque viverra mauris in aliquam.</p>
            <p>Lobortis feugiat vivamus at augue nunc eget.</p>
          </span>

          <div className='flex flex-col gap-y-4'>
            <div className='flex items-center gap-x-2'>
              <TiTick className='p-1 text-2xl text-white bg-purple-800 rounded-full'/>
              <h1 className='font-semibold text-slate-700'>Digital strategy</h1>
            </div>
            <div className='flex items-center gap-x-2'>
              <TiTick className='p-1 text-2xl text-white bg-purple-800 rounded-full'/>
              <h1 className='font-semibold text-slate-700'>Modernized prospecting</h1>
            </div>
            <div className='flex items-center gap-x-2'>
              <TiTick className='p-1 text-2xl text-white bg-purple-800 rounded-full'/>
              <h1 className='font-semibold text-slate-700'>Finance manager</h1>
            </div>
          </div>
          
          <div className='flex items-center text-purple-500 gap-x-2'>
            <h1 className='tracking-wider'>Start using Becca Domain</h1>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProject
