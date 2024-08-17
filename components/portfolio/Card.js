import React from 'react'
import Image from 'next/image'

const Card = ({image,name,title}) => {
  return (
    <>
      <div className='w-[31%] flex flex-col gap-y-5 my-5  max-sm:w-[300px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-normal '>
      <div>
            <Image src={image} />
            </div>
            <div className='max-sm:text-center max-sm:flex max-sm:flex-col max-sm:justify-center'>
            <h1 className='font-medium text-slate-600 '>{name}</h1>
            <h1 className='text-2xl font-semibold max-sm:text-md'>{title}</h1>
            </div>
      </div>
    </>
  )
}

export default Card
