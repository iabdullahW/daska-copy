import Image from 'next/image'
import bgImage from '../../public/p3-background-img-1.jpg' // Ensure you save the image in the public directory

const Contact = () => {
  return (
    <div className="relative w-full h-64 md:h-72 lg:h-80 xl:h-96">
      <Image 
        src={bgImage} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 z-0"
      />
      <div className="relative flex items-center justify-center h-full px-4 bg-opacity-50 md:px-8">
        <div className="max-w-screen-lg mx-auto text-center text-white">
          <h1 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl md:mb-4">
            If you need information or <br /> support, feel free to contact us
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Contact
