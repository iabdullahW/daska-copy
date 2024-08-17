// import React from 'react';
// import Image from 'next/image';
// // import TextAnimation from './TextAnimation';
// import TextAnimation from './TypeAnimation';

// const Hero = () => {
//   return (
//     <>
//       <div className='h-[80vh] flex flex-col md:flex-row justify-around mt-10 text-3xl m-auto w-[88%]'>
//         <div className='left flex flex-col md:w-[40%] w-full text-sm md:text-3xl'>
//           <div className='flex flex-col gap-y-8 md:gap-y-14'>
//             <div>
//               <div className='flex flex-col font-bold gap-y-4 md:gap-y-6'>
//                 <div className='font-medium text-3xl md:text-5xl w-full md:w-[90%] tracking-tighter leading-tight md:leading-[4rem]'>
//                   <TextAnimation />
//                 </div>
//                 <div className='text-sm font-light text-gray-700 md:text-xl max-md:hidden'>
//                   <p>Lorem mollis aliquam ut porttitor leo nequeas gravida in fermentum et sollicitudin suis amet.</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className='flex justify-around'>
//                 <hr className='w-[120px] md:w-[170px] text-black h-[6px] md:h-[12px]'/>
//                 <hr className='w-[120px] md:w-[170px] text-black h-[6px] md:h-[12px]'/>
//               </div>
//               <div className='flex flex-col items-center justify-around md:flex-row gap-y-4 md:gap-y-0'>
//                 <div className='relative flex w-full md:w-[40%] justify-between items-center'>
//                   <div className='flex'>
//                     <Image src={require("/public/istockphoto-1437816897-170667a.webp")} 
//                            alt="User 1" className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full' />
//                     <Image src={require("/public/istockphoto-1476170969-170667a.webp")} 
//                            alt="User 2" className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full absolute left-6 md:left-10 border-white border-2 md:border-4' />
//                   </div>
//                   <div>
//                     <h1 className='text-sm font-bold md:text-lg text-slate-600 md:font-normal'>356 Users</h1>
//                   </div>
//                 </div>
//                 <div className='flex items-center gap-x-2 w-full md:w-[38%] md:flex hidden'>
//                   <h1 className='text-lg font-medium tracking-tighter md:text-2xl'>$11,897</h1>
//                   <h1 className='text-xs md:text-sm text-slate-600'>PER YEAR</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='hidden md:block w-full md:w-[45%] '>
//           <Image src={require("/public/p1-img-1 (1).jpg")} 
//                  alt="Hero image" className='w-full rounded-xl' />
//         </div>
//         <div className='block w-full md:hidden '>
//           <Image src={require("/public/p1-img-1 (1).jpg")} 
//                  alt="Hero image" className='w-[90%] mx-auto rounded-xl' />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from 'react';
import Image from 'next/image';
import TextAnimation from './TypeAnimation'; // Assuming TypeAnimation component exists

const Hero = () => {
  return (
    <div className='container px-4 mx-auto sm:px-6 lg:px-8'>
      <div className='flex flex-col justify-around mt-10 text-3xl md:flex-row'>
        <div className='left flex flex-col md:w-[40%] w-full text-sm md:text-3xl'>
          <div className='flex flex-col gap-y-8 md:gap-y-14'>
            <div>
              <div className='flex flex-col font-bold gap-y-4 md:gap-y-6'>
                <div className='font-medium text-3xl md:text-5xl w-full md:w-[90%] tracking-tighter leading-tight md:leading-[4rem]'>
                  <TextAnimation />
                </div>
                <div className='text-sm font-light text-gray-700 md:text-xl'>
                  <p>Lorem mollis aliquam ut porttitor leo nequeas gravida in fermentum et sollicitudin suis amet.</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-between md:flex-row'>
              <div className='flex items-center gap-x-2 w-full md:w-[40%]'>
                <Image src={require("/public/istockphoto-1437816897-170667a.webp")} 
                       alt="User 1" className='w-12 h-12 rounded-full md:w-20 md:h-20' />
                <Image src={require("/public/istockphoto-1476170969-170667a.webp")} 
                       alt="User 2" className='w-12 h-12 ml-4 border-2 border-white rounded-full md:w-20 md:h-20 md:border-4' />
                <h1 className='text-sm font-bold md:text-lg text-slate-600 md:font-normal md:hidden'>356 Users</h1>
              </div>
              <div className='flex items-center gap-x-2 w-full md:w-[38%]'>
                <h1 className='text-lg font-medium tracking-tighter md:text-2xl'>$11,897</h1>
                <h1 className='text-xs md:text-sm text-slate-600'>PER YEAR</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[45%]'>
          <Image src={require("/public/p1-img-1 (1).jpg")} 
                 alt="Hero image" className='w-full rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
