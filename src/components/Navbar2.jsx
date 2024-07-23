// import React from 'react'
// import wheeldeallogo from "../assets/images/wheeldeal (2).png"
// import bellIcon from "../assets/images/bellIcon.png"
// import profilePic from "../assets/images/profile pic.png"
// function Navbar2() {
//   return (
//     <>
//     <nav className=' border-b-2'>
//         <div className='py-3 w-[90%] mx-auto flex items-center justify-between'>
//             <div>
//                 <img src={wheeldeallogo} alt="" />
//             </div>
//             <div className='flex items-center gap-5'>
//                 <ul className='flex items-center gap-5'>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Sell Your Car</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Buy a Car</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Mechanic</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Dealer</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Insurance</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Finances</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Contact us</li>
//                 </ul>
//                 <div>
//                     <img src={bellIcon} alt="" />
//                 </div>
//                 <div>
//                     <img src={profilePic} alt="" />
//                 </div>
//             </div>
//         </div>
//     </nav>
//     </>
//   )
// }

// export default Navbar2


import React, { useState } from 'react';
import wheeldeallogo from '../assets/images/wheeldeal (2).png';
import bellIcon from '../assets/images/bellIcon.png';
import profilePic from '../assets/images/profile pic.png';
// import menuIcon from '../assets/images/menuIcon.png'; // Add a menu icon

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='border-b-2'>
        <div className='py-3 w-[90%] mx-auto flex items-center justify-between'>
          <div>
            <img src={wheeldeallogo} alt='WheelDeal Logo' />
          </div>
          <div className='hidden lg:flex items-center gap-5'>
            <ul className='flex items-center gap-5'>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Sell Your Car</li>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Buy a Car</li>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Mechanic</li>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Dealer</li>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Insurance</li>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Finances</li>
              <li className='xl:text-lg font-normal font-Work-sans text-gray-1'>Contact us</li>
            </ul>
            <div className='lg:hidden flex items-center'>
              <img src={bellIcon} alt='Bell Icon' />
            </div>
            <div>
              <img src={profilePic} alt='Profile Pic' />
            </div>
          </div>
          <div className='lg:hidden flex items-center'>
            <button onClick={toggleMenu}>
              <img src={bellIcon} alt='Menu Icon' />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className='md:hidden'>
            <ul className='flex flex-col items-center gap-5 py-2'>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Sell Your Car</li>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Buy a Car</li>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Mechanic</li>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Dealer</li>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Insurance</li>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Finances</li>
              <li className='text-lg font-normal font-Work-sans text-gray-1'>Contact us</li>
              <div className='flex gap-5'>
                <div>
                  <img src={bellIcon} alt='Bell Icon' />
                </div>
                <div>
                  <img src={profilePic} alt='Profile Pic' />
                </div>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar2;
