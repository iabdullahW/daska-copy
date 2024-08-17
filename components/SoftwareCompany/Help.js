// "use client";
// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { IoIosArrowUp } from "react-icons/io";
// import help from "../../public/help.png"
// import Image from "next/image";

// const Help = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const faqs = [
//     {
//       question: "Which services are you offering?",
//       answer:
//         "Our services encompass an extensive range, including SEO & content marketing social media marketing website building graphic design and more",
//     },
//     {
//       question: "How much time does it take to finish a project?",
//       answer:
//         "Every project has a different timeframe based on its extent and complexity. We collaborate closely with our clients to establish reasonable timeframes and guarantee timely delivery",
//     },
//     {
//       question: "Do you provide customized solutions?",
//       answer:
//       "Yes, our area of expertise is offering tailored solutions that address the particular requirements of every customer. Our staff takes the time to comprehend your objectives and creates customized plans",
//     },
//     {
//       question: "What level of work experience do you have?",
//       answer:
//         "YOur staff has years of experience in software development and digital marketing, and they bring a lot of knowledge and skills to every project. We stay ahead of market trends to provide the best solutions",
//     },
//     {
//       question: "How can you make sure your services are of a high quality?",
//       answer:
//         "Our primary goal is quality. We have a strict quality assurance procedure in place toguarantee that every project meets our high standards. We are dedicated to providing outstanding outcomes as a team",
//     },
//     {
//       question: "Can you assist with software development as well as digital marketing?",
//       answer:
//         "Without a doubt. As a full-service organization, we provide software development and digital marketing solutions. In other words, you can depend on us to meet your digital needs while maintaining consistency and quality",
//     },
//     {
//       question: "How Profitable Is It to Invest in Digital Marketing?",
//       answer:
//         "Research shows that organizations that invest in digital marketing solutions significantly boost their reach, engagement, sales, and profits. The results speak forthemselves; digital marketing success is quantifiable.",
//     },
//   ];

//   const handleToggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-[#E8ECFD] flex justify-center items-center w-full min-h-screen py-8  lg:relative lg:pt-96  ">
//       <div className="w-full max-w-screen-xl px-4 lg:px-52 lg:absolute lg:z-50 ">
//         <h2 className="mb-8 text-2xl font-normal leading-8 text-center lg:text-4xl lg:leading-10">
//           Help & FAQ
//         </h2>
//         <div className="flex flex-col space-y-4 lg:space-y-5">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="w-full p-4 bg-white rounded-lg shadow-sm lg:p-6"
//             >
//               <div
//                 className="flex items-center justify-between cursor-pointer"
//                 onClick={() => handleToggle(index)}
//               >
//                 <h3 className="text-base lg:text-lg font-medium text-[#351A5F]">
//                   {faq.question}
//                 </h3>
//                 {activeIndex === index ? (
//                   <IoIosArrowUp className="w-5 h-5 font-bold lg:w-6 lg:h-6" />
//                 ) : (
//                   <FaChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
//                 )}
//               </div>
//               {activeIndex === index && (
//                 <div className="mt-4 text-gray-700">
//                   <p className="text-sm lg:text-base">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <Image src={help} alt="help" className="absolute w-full h-full "/>
//     </div>
//   );
// };

// export default Help;
"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import help from "../../public/help.png";
import Image from "next/image";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Which services are you offering?",
      answer:
        "Our services encompass an extensive range, including SEO & content marketing social media marketing website building graphic design and more",
    },
    {
      question: "How much time does it take to finish a project?",
      answer:
        "Every project has a different timeframe based on its extent and complexity. We collaborate closely with our clients to establish reasonable timeframes and guarantee timely delivery",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Yes, our area of expertise is offering tailored solutions that address the particular requirements of every customer. Our staff takes the time to comprehend your objectives and creates customized plans",
    },
    {
      question: "What level of work experience do you have?",
      answer:
        "Our staff has years of experience in software development and digital marketing, and they bring a lot of knowledge and skills to every project. We stay ahead of market trends to provide the best solutions",
    },
    {
      question: "How can you make sure your services are of a high quality?",
      answer:
        "Our primary goal is quality. We have a strict quality assurance procedure in place to guarantee that every project meets our high standards. We are dedicated to providing outstanding outcomes as a team",
    },
    {
      question: "Can you assist with software development as well as digital marketing?",
      answer:
        "Without a doubt. As a full-service organization, we provide software development and digital marketing solutions. In other words, you can depend on us to meet your digital needs while maintaining consistency and quality",
    },
    {
      question: "How Profitable Is It to Invest in Digital Marketing?",
      answer:
        "Research shows that organizations that invest in digital marketing solutions significantly boost their reach, engagement, sales, and profits. The results speak for themselves; digital marketing success is quantifiable.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E8ECFD] flex justify-center items-center w-full lg:h-[180vh]  lg:relative   md:h-[100vh] max-sm:h-[130vh]">
      <div className="absolute w-full max-w-screen-xl px-4 lg:px-52 lg:absolute lg:z-50 md:z-50 max-sm:absolute max-sm:z-50 ">
        <h2 className="mb-8 text-2xl font-extrabold leading-8 text-center lg:text-4xl lg:leading-10">
          Help & FAQ
        </h2>
        <div className="flex flex-col space-y-4 lg:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full p-4 bg-white rounded-lg shadow-sm lg:p-6"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-base lg:text-lg font-medium text-[#351A5F]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <IoIosArrowUp className="w-5 h-5 font-bold lg:w-6 lg:h-6" />
                ) : (
                  <FaChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                )}
              </div>
              {activeIndex === index && (
                <div className="mt-4 text-gray-700">
                  <p className="text-sm lg:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Image src={help} alt="help" className="absolute w-full h-full md:h-full md:w-full max-sm:h-full max-sm:w-full max-sm:hidden"/>
    </div>
  );
};

export default Help;

