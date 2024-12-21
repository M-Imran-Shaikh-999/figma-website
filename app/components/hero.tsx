// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <div>
//       <Image
//         src="/hero section.jpg" // Path public folder ke andar ka hota hai
//         alt="Hero Section"
//         width={600} // Width ko apni requirement ke hisaab se set karein
//         height={444} // Height ko adjust karein
//         layout="responsive" // Responsive behavior ke liye
//       />
//     </div>
//   );
// }
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background Image */}
//       <Image
//         src="/hero section.jpg"
//         alt="Hero Section"
//         layout="responsive"
//         width={1200}
//         height={600}
//       />

//       {/* White Box */}
//       <div
//         className="
//           absolute
//           top-[130px]
//           left-[730px]
//           w-[630px]
//           h-[444px]
//           bg-white
//           p-[48px_61px_46px_56px]
//           flex flex-col
//           gap-0
//           opacity-100
//           shadow-md
//         "
//       >
//         <h1 className="text-2xl font-semibold leading-snug">
//           Luxury homeware for people <br /> who love timeless design quality
//         </h1>
//         <p className="text-base text-gray-600 mt-4">
//           Shop the new Spring 2022 collection today
//         </p>
//         <button
//           className="mt-8 px-3 py-3 bg-gray-100 text-large font-medium hover:bg-gray-200 transition"
//         >
//           View collection
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background Image */}
//       <div className="relative">
//         <Image
//           src="/hero section.jpg"
//           alt="Hero Section"
//           layout="responsive"
//           width={1440}
//           height={704}
//         />
//       </div>

//     </div>
//   );
// };

// export default HeroSection;

// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-auto ">
//       {/* Background Image */}
//       <div className="relative">
//         <Image
//           src="/hero section.jpg"
//           alt="Hero Section"
//           layout="responsive"
//           width={1440}
//           height={704}
//         />
//       </div>

//       {/* Overlay Text and Button */}
//       <div className="absolute top-[130px] left-[730px] w-[630px] h-[444px] bg-white p-5 flex flex-col shadow-md">
//         <h1 className="text-2xl font-semibold leading-snug">
//           Luxury homeware for people <br /> who love timeless design quality
//         </h1>
//         <p className="text-base text-gray-600 mt-4">
//           Shop the new Spring 2022 collection today
//         </p>
//         <button className="mt-6 px-6 py-5 p-[80] text-left  text-slate-500 text-lg font-medium hover:bg-gray-900 transition">
//           View collection
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background Image */}
//       <div className="relative">
//         <Image
//           src="/hero section.jpg"
//           alt="Hero Section"
//           layout="responsive"
//           width={1440}
//           height={704}
//         />
//       </div>

//       {/* Overlay Text and Button */}
//       <div className="absolute top-[130px] left-[730px] w-[630px] h-[444px] bg-white p-5 flex flex-col shadow-md">
//         <h1 className="text-[32px] font-normal leading-[44.8px] text-left underline-none underline-position-from-font text-black-500 w-[513px]">
//           Luxury homeware for people <br /> who love timeless design quality
//         </h1>
//         <p className="text-base text-gray-900 mt-4">
//           Shop the new Spring 2022 collection today
//         </p>
//         <button className="mt-6 px-6 py-3 m-8 p- bg-slate-300 text-[16px] font-medium leading-[24px] text-left text-slate-500 transition">
//           View collection
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import React from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background Image */}
//       <div className="relative">
//         <Image
//           src="/hero section.jpg"
//           alt="Hero Section"
//           layout="responsive"
//           width={1440}
//           height={704}
//         />
//       </div>

//       {/* Overlay Text and Button */}
//       <div className="absolute top-[130px] left-[730px] w-[630px] h-[444px] justify-center mt-20 p-7 bg-white">
//         <h1 className="text-3xl font-normal leading-snug text-left ">
//           Luxury homeware for people <br /> who love timeless design quality
//         </h1>
//         <p className="text-base text-gray-600 mt-4">
//           Shop the new Spring 2022 collection today
//         </p>
//         <button className="mt-6 px-6 py-3 md:px-8 bg-[#cecbcb] text-black text-lg font-medium leading-[24px]  hover:bg-gray-200 transition">
//           {" "}
//           View collection{" "}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <div className="relative">
        <Image
          src="/hero section.jpg"
          alt="Hero Section"
          layout="responsive"
          width={1440}
          height={704}
        />
      </div>

      {/* Overlay Content */}
      <div
        className="absolute top-[130px] left-[730px] w-[630px] h-[444px] 
        p-[48px_61px_46px_56px] bg-white mt-40"
      >
        {/* Heading */}
        <h2
          className="text-[32px] leading-[44.8px] font-[400] text-[#22202E] font-[Clash Display]"
        >
          Luxury homeware for people <br /> who love timeless design quality
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] text-gray-500 mt-4">
          Shop the new Spring 2022 collection today
        </p>

        {/* Button */}
        <button
          className="mt-36 px-6 py-3 bg-[#cecbcb] text-black text-[16px] font-medium 
          hover:bg-gray-200 transition"
        >
          View collection
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
