// import React from 'react'
// import mansmiling from "../../assets/images/mansmiling.png"
// import greentick from "../../assets/images/tickofgreen.png"
// import { Input } from '../../components/Input'
// import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
// import facebook from "../../assets/images/facebook.png";
// import tiktok from "../../assets/images/tiktok.png";
// import youtube from "../../assets/images/youtube.png";
// import twitter from "../../assets/images/twitter.png";
// import { useState } from 'react';
// import waveicon from "../../assets/images/Wave.png"
// import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
// function SellCarForm() {
//     const [tabActive, setTabActive] = useState("home");
//     const [openDropdown, setOpenDropdown] = useState(false)
//     const handleClick = (item) => {

//         setTabActive(item);
//       };

//       const bidsClick = () => {

//         handleClick("bids")

//       }
//       const investmentClick = () => {

//         handleClick("investments");

//       }
//   return (
//     <>
//     <div className='firstpart bg-[#f3f3f3] h-[100vh]'>
//         <div className=' grid grid-cols-12 gap-28 w-[70%] mx-auto'>
//             <div className=' col-span-6'>
//                 <div className=''>
//                     <h1 className=' text-[48px] font-bold font-inter text-gray-1'>
//                     Enter Your Personal
//                     Information
//                     </h1>
//                 </div>
//             <div className='flex flex-col gap-4 mt-5'>
//           <div className='flex items-center gap-5'>
//             <img src={greentick} alt="" />
//             <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Higher profits</h1>
//           </div>
//           <div className='flex items-center gap-5'>
//             <img src={greentick} alt="" />
//             <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Easy process</h1>
//           </div>
//           <div className='flex items-center gap-5'>
//             <img src={greentick} alt="" />
//             <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>100% Trusted</h1>
//           </div>
//         </div>
//             </div>
//             <div className=' col-span-6'>
//                 <img src={mansmiling} alt="" />
//             </div>
//         </div>
//         <div className='border bg-white rounded-xl w-[70%] mx-auto py-10 px-32'>
//             <div className=' flex items-center justify-center'>
//                 <h1 className=' text-[28px] font-inter font-bold text-gray-1'>Enter personal details</h1>
//             </div>
//             <div>
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
//                     <div className="w-full">
//                       <Input
//                         label={"Full name"}
//                         placeholder={"Full name"}
//                       />
//                     </div>
//                     <div className="w-full">
//                       <Input
//                         label={"Last name"}
//                         placeholder={"Last name"}
//                       />
//                     </div>
//             </div>
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-5">
//                     <div className="w-full">
//                       <Input
//                         type={"number"}
//                         label={"Phone Number"}
//                         placeholder={"+1"}
//                       />
//                     </div>
//                     <div className="w-full">
//                       <Input
//                         label={"Email ID"}
//                         placeholder={"Email id"}
//                       />
//                     </div>
//             </div>
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//                     <div className="w-full lg:w-1/2">
//                       <Input
//                         label={"Street address"}
//                         placeholder={"Type address"}
//                       />
//                     </div>
//             </div>
//             </div>
//             <div className='flex items-center justify-center pt-10 pb-20'>
//             <button className="h-[52px] w-[129px] rounded-lg bg-custom-blue text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
//               Next
//             </button>
//           </div>
//         </div>
//     </div>

//     <div className='py-10'>
//         {/* <img src={waveicon} className='w-full' alt="" /> */}
//     </div>
//     <div className="banner">
//               <img src={banner} className=" w-[100vw]" alt="" />
//             </div>


//             <div className="footer py-10 bg-[#e0e0e0]">
//               <div className="w-[90vw] lg:w-[80vw] mx-auto">
//                 <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
//                   <div className="first w-full lg:w-[35%]">
//                     <div>
//                       <img src={quickBidLogo} alt="" />
//                     </div>
//                     <div>
//                       <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-1 py-5 lg:py-10">
//                         But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences
//                       </p>
//                     </div>
//                     <div className="flex gap-4">
//                       <div>
//                         <img src={facebook} alt="" />
//                       </div>
//                       <div>
//                         <img src={twitter} alt="" />
//                       </div>
//                       <div>
//                         <img src={tiktok} alt="" />
//                       </div>
//                       <div>
//                         <img src={youtube} alt="" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="second w-full lg:w-[15%]">
//                     <div>
//                       <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
//                         Our Services
//                       </h1>
//                     </div>
//                     <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
//                       <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
//                         Home
//                       </h3>
//                       <h3
//                         onClick={() => bidsClick()}
//                         className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
//                         Bids
//                       </h3>
//                       <h3
//                         onClick={() => investmentClick()}
//                         className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
//                         Investments
//                       </h3>
//                       <h3 onClick={() => handleClick("about")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
//                         About us
//                       </h3>
//                       <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
//                         Contact us
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="third w-full lg:w-[35%]">
//                     <div>
//                       <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
//                         Contact
//                       </h1>
//                     </div>
//                     <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
//                       <h3 className="text-base lg:text-lg font-normal font-Work-sans">
//                         +012-334-5864
//                       </h3>
//                       <h3 className="text-base lg:text-lg font-normal font-Work-sans">
//                         info.alva@example.com
//                       </h3>
//                       <h3 className="text-base lg:text-lg font-normal font-Work-sans">
//                         2048 Wexford Way Wings SC 287290
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>



//             <div className="companyName h-[100px] bg-[#4f4f4f] flex items-center justify-center">
//               <div className="">
//                 <h1 className="text-white font-medium text-sm font-Work-sans">
//                   © 2022 wheeldealhub. All Rights Reserved
//                 </h1>
//               </div>
//             </div>
//     </>
//   )
// }

// export default SellCarForm


import React, { useState } from 'react';
import mansmiling from "../../assets/images/mansmiling.png";
import greentick from "../../assets/images/tickofgreen.png";
import { Input } from '../../components/Input';
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import waveicon from "../../assets/images/Wave.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import Navbar2 from '../../components/Navbar2';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';

function SellCarForm() {
  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate()

  const handleClick = (item) => {
    setTabActive(item);
  };

  const bidsClick = () => {
    handleClick("bids");
  };

  const investmentClick = () => {
    handleClick("investments");
  };

  return (
    <>
      <Navbar2 />
      <div className='firstpart bg-[#f3f3f3] h-fit py-32 '>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:w-[80%] mx-auto '>
          <div className='md:col-span-6 mx-5 lg:mx-0'>
            <h1 className='text-[30px] lg:text-[48px] font-bold font-inter text-gray-800 '>
              Enter Your Personal Information
            </h1>
            <div className='flex flex-col gap-4 my-10'>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Higher profits</h1>
              </div>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Easy process</h1>
              </div>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>100% Trusted</h1>
              </div>
            </div>
          </div>
          <div className='hidden md:col-span-6 lg:flex items-center justify-center -mr-10'>
            <img src={mansmiling} alt="Man smiling" />
          </div>
        </div>
       
      </div>
      <div className='bg-white flex justify-center mx-5 lg:mx-0'>
      <div className='details border bg-white rounded-xl w-full md:w-[80%] mx-auto py-10 px-5 md:px-32 -mt-32 mb-20'>
          <div className='flex items-center justify-center'>
            <h1 className='text-2xl md:text-3xl font-inter font-bold text-gray-800'>Enter personal details</h1>
          </div>
          <div className='mt-5'>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
              <div className="w-full">
                <Input label="Full name" placeholder="Full name" />
              </div>
              <div className="w-full">
                <Input label="Last name" placeholder="Last name" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-5">
              <div className="w-full">
                <Input type="number" label="Phone Number" placeholder="+1" />
              </div>
              <div className="w-full">
                <Input label="Email ID" placeholder="Email id" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <Input label="Street address" placeholder="Type address" />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center pt-10 pb-5'>
            <button
              onClick={() => navigate("/sellyourcar/mechanic")}
              className="h-11 w-32 rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className=''>
        {/* <img src={waveicon} className='w-full' alt="Wave icon" /> */}
      </div>
      {/* <div className="banner mt-[100px] md:mt-[100px] lg:mt-[100px] xl:mt-[400px] 2xl:mt-[200px]">
        <img src={banner} className="w-full" alt="Banner" />
      </div>

      <div className="footer py-10 bg-[#e0e0e0]">
        <div className="w-[90vw] lg:w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
            <div className="first w-full lg:w-[35%]">
              <div>
                <img src={quickBidLogo} alt="Quick Bid Logo" />
              </div>
              <div>
                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-800 py-5 lg:py-10">
                  But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={facebook} alt="Facebook" />
                </div>
                <div>
                  <img src={twitter} alt="Twitter" />
                </div>
                <div>
                  <img src={tiktok} alt="TikTok" />
                </div>
                <div>
                  <img src={youtube} alt="YouTube" />
                </div>
              </div>
            </div>
            <div className="second w-full lg:w-[15%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Home
                </h3>
                <h3 onClick={() => bidsClick()} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Bids
                </h3>
                <h3 onClick={() => investmentClick()} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Investments
                </h3>
                <h3 onClick={() => handleClick("about")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  About us
                </h3>
                <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Contact us
                </h3>
              </div>
            </div>
            <div className="third w-full lg:w-[35%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Contact
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  +012-334-5864
                </h3>
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  info.alva@example.com
                </h3>
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  2048 Wexford Way Wings SC 287290
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="companyName h-[100px] bg-[#4f4f4f] flex items-center justify-center">
        <h1 className="text-white font-medium text-sm font-Work-sans">
          © 2022 wheeldealhub. All Rights Reserved
        </h1>
      </div> */}
      <Banner/>
    </>
  );
}

export default SellCarForm;
