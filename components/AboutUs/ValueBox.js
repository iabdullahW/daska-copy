import React from 'react'
import Image from 'next/image'

const ValueBox = ({ image, title, desc }) => {
  return (
    <div className='w-full md:w-[33%] p-4'>
      <div className='flex flex-col gap-y-5'>
        <Image 
          src={image} 
          alt="Picture of the author" 
          className='w-full h-auto rounded-xl'
        />
        <h1 className='pl-4 text-lg font-semibold tracking-wider md:text-xl'>
          {title}
        </h1>
        <p className='pl-4 text-sm md:text-base text-slate-700 md:hidden '>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ValueBox
