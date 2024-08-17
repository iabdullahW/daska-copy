import React from 'react'
import ValueBox from './ValueBox'
import firstImage from "../../public/p1-img-3.jpg"
import secondImage from "../../public/p1-img-4.jpg"
import thirdImage from "../../public/p1-img-5.jpg"

const Values = () => {
  return (
    <>
      <div className='bg-[#f2edfc] h-auto md:h-[90vh] w-full mt-10 py-20'>
        <div className='w-[88%] m-auto'>
          <div className='flex flex-col gap-y-10'>
            <div>
              <h1 className='text-3xl font-bold text-center'>Our values</h1>
            </div>
            <div className='hidden md:flex gap-x-10'>
              <ValueBox 
                desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna."
                title="6 Best Wireframing Tools for Designing Your Website or App"
                image={firstImage}
              />
              <ValueBox 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                title="Let Your Users Easily Access All Their Nfts in One Place"
                image={secondImage}
              />
              <ValueBox 
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                title="Bring Together All NFT Collections with Becca"
                image={thirdImage}
              />
            </div>
            <div className='block md:hidden'>
              <div className='flex flex-col items-center gap-y-10'>
                <ValueBox 
                  desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna."
                  title="6 Best Wireframing Tools for Designing Your Website or App"
                  image={firstImage}
                />
                <ValueBox 
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                  title="Let Your Users Easily Access All Their Nfts in One Place"
                  image={secondImage}
                />
                <ValueBox 
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                  title="Bring Together All NFT Collections with Becca"
                  image={thirdImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Values
