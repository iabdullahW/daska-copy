import React from 'react'
import Hero from '@/components/AboutUs/Hero'
import Values from '@/components//AboutUs/Values'
import OurProject from '@/components/AboutUs/OurProject'
import Position from '@/components//AboutUs/Position'
import PeopleSlider from '@/components/AboutUs/PeopleSlider'
import Caraousel from "../../components/AboutUs/Caraousel"
// import BlueBox from '@/components/AboutUs/BlueBox'
// import Zero from '@/components/Zero'



const page = () => {
  return (
   
  <div className='overflow-hidden' > 
  <Hero />
  <Values/>
  <OurProject/>
  <Position/>
  
  <Caraousel/>
  {/* <BlueBox /> */}

  {/* <PeopleSlider/> */}
  </div>
   
  )
}

export default page
