import React from 'react'
import Card from '@/components/portfolio/Card'
import one from "../../components/portfolio/images/one.jpg"
import two from "../../components/portfolio/images/two.jpg"
import three from "../../components/portfolio/images/three.jpg"
import four from "../../components/portfolio/images/four.jpg"
import five from "../../components/portfolio/images/five.jpg"
import six from "../../components/portfolio/images/six.jpg"

const categories=[
    {
        image:one,
        name:"ILLUSTRATION",
        title:"3D art"
        
    },
    {
        image:two,
        name:"ILLUSTRATION",
        title:"Design"
        
    },
    {
        image:three,
        name:"ILLUSTRATION",
        title:"App Animation"
        
    },
    {
        image:four,
        name:"ILLUSTRATION",
        title:"App illustrations"
        
    },
    {
        image:five,
        name:"ILLUSTRATION",
        title:"Listen Mihokuy"
        
    },
    {
        image:six,
        name:"ILLUSTRATION",
        title:"Monkey Business"
        
    },
]

const page = () => {
  return (
    <>
      <div className='w-[82%]  mx-auto mt-[70px] flex flex-wrap  justify-between max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
        {
            categories.map((category)=>{
                return <>
                    <Card image ={category.image} name = {category.name} title = {category.title}/>
                </>
            })
        }
      </div>
    </>
  )
}

export default page
