'use client'

// import ReactTyped from "react-typed";

// const TextAnimation = () => {
//   return (
//     <div className="p-4 md:p-8 lg:p-12">
//       <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl md:font-bold lg:font-extrabold line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
//         Work w/ icons and sync them from design to {" "}
//         <ReactTyped strings={["code>/"]} typeSpeed={100} loop className="text-purple-500"/>
//       </h1>
//     </div>
//   );
// };

// export default TextAnimation;


import { ReactTyped } from "react-typed";

const TextAnimation = () => {
  return (
    <div>
      <h1 className="max-sm:text-4xl max-sm:font-semibold max-sm:line-clamp-6 ">
        Work w/ icons and sync them from design to {" "}
        <ReactTyped strings={["code>/"]} typeSpeed={100} loop className="text-purple-500"/>
      </h1>
    </div>
  );
};

export default TextAnimation;