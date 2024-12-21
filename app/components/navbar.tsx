// import React from 'react'
// export default function navbar() {
//   return (
//     <div>
//       <header className='bg-white shadow-sm boarder-b mx-auto flex flex-col w-[1440px]'>
//         <div className='bg-white white-2 text-x-large justify center px-8 w-full'>
//         <div className='text-center text-color-white-600'>Avion</div>
//         </div>
//       </header>
//       <div>
//         <nav className=" hidden md:flex space-x-8 justify-center">
//         <a href="#" className="text-slate-600 hover:text-black underline">plant pots</a>
//         <a href="#" className="text-slate-600 hover:text-black underline">ceramics</a>
//         <a href="#" className="text-slate-600 hover:text-black underline">Tables</a>
//         <a href="#" className="text-slate-600 hover:text-black underline">chairs</a>
//         <a href="#" className="text-slate-600 hover:text-black underline">crockery</a>
//         <a href="#" className="text-slate-600 hover:text-black underline">Tableware</a>
//         <a href="#" className="text-slate-600 hover:text-black underline">cuttlery</a>
        
//             </nav>
//       </div>
//     </div>
//   )
// }


////////////////////////////////////////////////////////

// import React from 'react';
// import { FaRegUserCircle } from 'react-icons/fa'; // User Icon
// import { IoCartOutline } from 'react-icons/io5'; // Cart Icon
// import { CiSearch } from "react-icons/ci"; // search icon


// export default function Navbar() {
//   return (
//     <div>
//       {/* Header Section */}
//       {/* <div className='flex items-center space-x-6'>
//       <CiSearch  className='text-2xl text-slate-600 hover:text-black cursor-pointer'/>
//       </div> */}

//       <header className="bg-white shadow-sm border-b mx-auto w-full max-w-[1440px]">
//         <div className="bg-white text-xl px-8 w-full flex items-center py-4">
//           {/* Center: Avion Text */}
//           <div className="text-slate-600 font-bold text-center mx-auto">
//             Avion
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center space-x-6">
//             {/* Cart Icon */}
//             <IoCartOutline className="text-2xl text-slate-600 hover:text-black cursor-pointer" />
//             {/* User Icon */}
//             <FaRegUserCircle className="text-2xl text-slate-600 hover:text-black cursor-pointer" />
//           </div>
//         </div>
//       </header>

//       {/* Navigation Section */}
//       <div>
//         <nav className="hidden md:flex space-x-8 justify-center py-4">
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Plant Pots
//           </a>
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Ceramics
//           </a>
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Tables
//           </a>
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Chairs
//           </a>
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Crockery
//           </a>
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Tableware
//           </a>
//           <a href="#" className="text-slate-600 hover:text-black underline">
//             Cutlery
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa'; // User Icon
import { IoCartOutline } from 'react-icons/io5'; // Cart Icon
import { CiSearch } from "react-icons/ci"; // Search Icon

export default function Navbar() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b mx-auto w-full max-w-[1440px]">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Left: Search Icon */}
          <div className="flex items-center space-x-4">
            <CiSearch className="text-2xl text-slate-600 hover:text-black cursor-pointer" />
          </div>

          {/* Center: Avion Text */}
          <div className="text-slate-600 font-bold text-xl">Avion</div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <IoCartOutline className="text-2xl text-slate-600 hover:text-black cursor-pointer" />
            {/* User Icon */}
            <FaRegUserCircle className="text-2xl text-slate-600 hover:text-black cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Navigation Section */}
      <div>
        <nav className="hidden md:flex space-x-8 justify-center py-4">
          <a href="#" className="text-slate-600 hover:text-black ">Plant Pots</a>
          <a href="#" className="text-slate-600 hover:text-black ">Ceramics</a>
          <a href="#" className="text-slate-600 hover:text-black ">Tables</a>
          <a href="#" className="text-slate-600 hover:text-black ">Chairs</a>
          <a href="#" className="text-slate-600 hover:text-black ">Crockery</a>
          <a href="#" className="text-slate-600 hover:text-black ">Tableware</a>
          <a href="#" className="text-slate-600 hover:text-black ">Cutlery</a>
        </nav>
      </div>
    </div>
  );
}

