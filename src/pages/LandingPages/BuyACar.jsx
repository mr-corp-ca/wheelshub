// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import filterIcon from "../../assets/images/filter 1.png"
// import searchIcon from "../../assets/images/Vector (1).png"
// import { useState } from 'react';
// import audi2 from "../../assets/images/audi2.png";
// import grayDot from "../../assets/images/graydot.png";
// import yellowTick from "../../assets/images/yellowTick.png";
// export default function AccordionUsage() {
//     const [value, setValue] = useState(0);

//     const handleChange = (event) => {
//       setValue(event.target.value);
//     };
//   return (
//     <>
//     <div className='flex'>
//     {/* sidebar */}
//     <div className='sidebar lg:w-[25%] pl-20 pt-10'>
//         {/* Filter Heading */}
//         <div className='flex items-center gap-4'>
//             <img src={filterIcon} alt="" />
//             <h1 className=' text-[32px] font-inter font-bold text-gray-1'>Filter</h1>
//         </div>
//         {/* Search bar */}
//         <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-5">
//       <input
//         type="text"
//         placeholder="Search here"
//         className="ml-2 w-full border-none focus:outline-none"
//       />
//     </div>
//     <div  className=' mt-5'>

//        {/* Accourdian */}
//        <div className=' border-2 rounded-xl '>
//       <Accordion defaultExpanded className='border-none outline-none'>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Budget</h1>
//         </AccordionSummary>
//         <AccordionDetails>
//          {/* progreebar */}
//     <div className="flex flex-col items-center border-b border-dashed pb-3">
//     <div className="w-full flex justify-between text-blue-500">
//         <span>${value}</span>
//         <span>$32000</span>
//       </div>
//       <input
//         type="range"
//         min="0"
//         max="32000"
//         value={value}
//         onChange={handleChange}
//         className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//         style={{
//           background: `linear-gradient(to right, #60a5fa ${value / 32000 * 100}%, #e5e7eb ${value / 32000 * 100}%)`
//         }}
//       />

//     </div>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Brand</h1>
//         </AccordionSummary>
//         <AccordionDetails>
//           {/* Search bar */}
//           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//       <select
//         type="text"
//         placeholder="Search here"
//         className=" text-base font-medium font-inter text-gray-1 ml-2 w-full border-none focus:outline-none"
//       >
//         <option value="">Select</option>
//         <option value="">Select</option>
//         <option value="">Select</option>
//         <option value="">Select</option>
//       </select>
//     </div>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Model year</h1>
//         </AccordionSummary>
//         <AccordionDetails>
//          {/* progreebar */}
//     <div className="flex flex-col items-center border-b border-dashed pb-3">
//     <div className="w-full flex justify-between text-blue-500">
//         <span>${value}</span>
//         <span>$32000</span>
//       </div>
//       <input
//         type="range"
//         min="0"
//         max="32000"
//         value={value}
//         onChange={handleChange}
//         className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//         style={{
//           background: `linear-gradient(to right, #60a5fa ${value / 32000 * 100}%, #e5e7eb ${value / 32000 * 100}%)`
//         }}
//       />

//     </div>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Kilometers driven</h1>
//         </AccordionSummary>
//         <AccordionDetails>
//          {/* progreebar */}
//     <div className="flex flex-col items-center border-b border-dashed pb-3">
//     <div className="w-full flex justify-between text-blue-500">
//         <span>${value}</span>
//         <span>$32000</span>
//       </div>
//       <input
//         type="range"
//         min="0"
//         max="32000"
//         value={value}
//         onChange={handleChange}
//         className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//         style={{
//           background: `linear-gradient(to right, #60a5fa ${value / 32000 * 100}%, #e5e7eb ${value / 32000 * 100}%)`
//         }}
//       />

//     </div>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion defaultExpanded>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Fuel type</h1>
//         </AccordionSummary>
//         <AccordionDetails>
//             <div className=''>
//                 <div className='flex items-center gap-5'>
//                     <input type="checkbox" />
//                     <h1>Diesel</h1>
//                 </div>
//                 <div className='flex items-center gap-5'>
//                     <input type="checkbox" />
//                     <h1>Diesel</h1>
//                 </div>
//                 <div className='flex items-center gap-5'>
//                     <input type="checkbox" />
//                     <h1>Diesel</h1>
//                 </div>
//                 <div className='flex items-center gap-5'>
//                     <input type="checkbox" />
//                     <h1>Diesel</h1>
//                 </div>
//             </div>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Location</h1>
//         </AccordionSummary>
//         <AccordionDetails>

//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Body type</h1>
//         </AccordionSummary>
//         <AccordionDetails>

//         </AccordionDetails>
//       </Accordion>
//       <Accordion >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Ownership</h1>
//         </AccordionSummary>
//         <AccordionDetails>

//         </AccordionDetails>
//       </Accordion>
//       <Accordion >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//          <h1 className=' text-2xl font-semibold font-inter text-gray-1'>Color</h1>
//         </AccordionSummary>
//         <AccordionDetails>

//         </AccordionDetails>
//       </Accordion>
//     </div>
//     </div>

//     </div>
//     {/* content of cards */}
//     <div className="p-4 md:p-6">
//         <div className="newRequests py-4 md:py-6">
//           <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
//           Cars nearby your location
//           </h1>
//         </div>
//         <div className="flex items-center gap-5 pt-10 pb-5">
//             <button className="rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
//               Verified
//             </button>
//             <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
//               Nearby
//             </button>
//             <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
//               Most viewed
//             </button>
//           </div>
//         <div className="cardpart grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {Array(30)
//             .fill()
//             .map((_, index) => {
//               return (
//                 <div key={index} className="card border rounded-2xl flex flex-col gap-4">
//                   <div>
//                     <img src={audi2} alt="Car" className="w-full h-auto rounded-t-2xl" />
//                   </div>
//                   <div className="px-3">
//                     <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
//                       Mercedes-Benz E 220 d
//                     </h1>
//                   </div>
//                   <div className="flex items-center px-3 justify-between">
//                     <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">45000 KM</h1>
//                     <img src={grayDot} alt="" />
//                     <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">2018 Model</h1>
//                     <img src={grayDot} alt="" />
//                     <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">Automatic</h1>
//                   </div>
//                   <div className="px-3">
//                     <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">$22,500</h1>
//                   </div>
//                   <div className="flex items-center gap-2 px-3">
//                     <img src={yellowTick} alt="" />
//                     <p className="text-xs font-normal font-Work-sans text-[#FFB543]">Verification pending</p>
//                   </div>
//                   <div className="flex items-center justify-center pb-4 md:pb-5">
//                     <button className="w-full max-w-[132px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
//                       Chat now
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import filterIcon from "../../assets/images/filter 1.png";
import searchIcon from "../../assets/images/Vector (1).png";
import { useState } from "react";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import waveicon from "../../assets/images/Wave.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import Navbar2 from "../../components/Navbar2";
import bluetick from "../../assets/images/bluetickzigzag.png"
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";


export default function AccordionUsage() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);



  const handleClick = (item) => {
    setTabActive(item);
  };

  const bidsClick = () => {
    handleClick("bids");
  };

  const investmentClick = () => {
    handleClick("investments");
  };

  const navigate = useNavigate()
  return (
    <>
      <Navbar2 active={'BuyACar_Landing_Page'}/>
      <div className="  flex flex-col lg:flex-row">
        {/* sidebar */}
        <div className="sidebar lg:w-[30%] p-4 lg:pl-16 lg:pt-10">
          {/* Filter Heading */}
          <div className="flex items-center gap-4">
            <img src={filterIcon} alt="Filter Icon" />
            <h1 className="text-lg lg:text-[32px] font-inter font-bold text-gray-1">
              Filter
            </h1>
          </div>
          {/* Search bar */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-5">
            <input
              type="text"
              placeholder="Search here"
              className="ml-2 w-full border-none focus:outline-none"
            />
          </div>
          <div className="mt-5">
            {/* Accordion */}
            <div className="border-2 rounded-xl">
              <Accordion defaultExpanded className="border-none outline-none">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Budget
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Progress bar */}
                  <div className="flex flex-col items-center border-b border-dashed pb-3">
                    <div className="w-full flex justify-between text-blue-500">
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">${value}</span>
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">$32000</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="32000"
                      value={value}
                      onChange={(e)=>{
                        e.preventDefault();
                        setValue(e.target.value)
                      }}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${(value / 32000) * 100
                          }%, #e5e7eb ${(value / 32000) * 100}%)`,
                      }}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Brand
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Dropdown */}
                  <div className="flex w-full items-center border border-gray-300 rounded-md px-3 py-2">
                    <select className=" w-full text-base font-medium font-inter text-gray-1 ml-2 border-none focus:outline-none">
                      <option className=" text-base font-medium font-inter text-gray-1" value="">Select</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="audi">Audi</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="bmw">BMW</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="mercedes">Mercedes</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="tesla">Tesla</option>
                    </select>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Model year
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Progress bar */}
                  <div className="flex flex-col items-center border-b border-dashed pb-3">
                    <div className="w-full flex justify-between text-blue-500">
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">{value1}</span>
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">2024</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2024"
                      value={value1}
                      onChange={(e)=>{
                        e.preventDefault();
                        setValue1(e.target.value)
                      }}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${(value1 / 2024) * 100
                          }%, #e5e7eb ${(value1 / 2024) * 100}%)`,
                      }}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Kilometers driven
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Progress bar */}
                  <div className="flex flex-col items-center border-b border-dashed pb-3">
                    <div className="w-full flex justify-between text-blue-500">
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">{value2}KM</span>
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">4500KM</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="4500"
                      value={value2}
                      onChange={(e)=>{
                        e.preventDefault();
                        setValue2(e.target.value)
                      }}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${(value2 / 4500) * 100
                          }%, #e5e7eb ${(value2 / 4500) * 100}%)`,
                      }}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Fuel type
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="">
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">Diesel</h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">Petrol</h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">CNG</h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">Electric</h1>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6a-content"
                  id="panel6a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Location
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Location content here */}
                  <div className="flex w-full items-center border border-gray-300 rounded-md px-3 py-2">
                    <select className=" w-full text-base font-medium font-inter text-gray-1 ml-2 border-none focus:outline-none">
                      <option className=" text-base font-medium font-inter text-gray-1" value="">Lahore</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="audi">Karachi</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="bmw">Islamabad</option>
                    </select>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7a-content"
                  id="panel7a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Body type
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Body type content here */}
                  <div className="flex w-full items-center border border-gray-300 rounded-md px-3 py-2">
                    <select className=" w-full text-base font-medium font-inter text-gray-1 ml-2 border-none focus:outline-none">
                      <option className=" text-base font-medium font-inter text-gray-1" value="">Sedan</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="audi">Coupe</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="bmw">Sport</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="mercedes">Off road</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="tesla">Convertible</option>
                    </select>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8a-content"
                  id="panel8a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Ownership
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Ownership content here */}
                  <div className="flex w-full items-center border border-gray-300 rounded-md px-3 py-2">
                    <select className=" w-full text-base font-medium font-inter text-gray-1 ml-2 border-none focus:outline-none">
                      <option className=" text-base font-medium font-inter text-gray-1" value="">Own</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="audi">Company</option>
                    </select>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel9a-content"
                  id="panel9a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                    Color
                  </h1>
                </AccordionSummary>
                <AccordionDetails>{/* Color content here */}
                <div className="flex w-full items-center border border-gray-300 rounded-md px-3 py-2">
                    <select className=" w-full text-base font-medium font-inter text-gray-1 ml-2 border-none focus:outline-none">
                      <option className=" text-base font-medium font-inter text-gray-1" value="">White</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="audi">Black</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="bmw">Grey</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="mercedes">Red</option>
                      <option className=" text-base font-medium font-inter text-gray-1" value="tesla">Ash</option>
                    </select>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        {/* content of cards */}
        <div className="p-4 lg:w-3/4">
          <div className="newRequests my-6">
            <h1 className="text-xl lg:text-[32px] font-bold font-inter text-gray-1">
              Cars nearby your location
            </h1>
          </div>

          <div className="flex items-center flex-wrap gap-5 pt-10 my-7">
            <button className="rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Verified
            </button>
            <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
              Nearby
            </button>
            <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
              Most viewed
            </button>
          </div>

          <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array(30)
              .fill()
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className="card border rounded-2xl flex flex-col gap-4"
                  >
                    <div>
                      <img
                        src={audi2}
                        alt="Car"
                        className="w-full h-auto rounded-t-2xl"
                      />
                    </div>
                    <div className="px-3">
                      <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
                        Mercedes-Benz E 220 d
                      </h1>
                    </div>
                    <div className="flex items-center px-3 justify-between">
                      <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                        45000 KM
                      </h1>
                      <img src={grayDot} alt="" />
                      <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                        2018 Model
                      </h1>
                      <img src={grayDot} alt="" />
                      <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                        Automatic
                      </h1>
                    </div>
                    <div className="px-3">
                      <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
                        $22,500
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 px-3">
                      <div className="flex items-center gap-1">
                      <img src={bluetick} alt="" />
                      <p className="text-xs font-normal font-Work-sans text-gray-1">
                      Verified by Mechanic
                      </p>
                      </div>
                      <div  className=" flex items-center gap-1">
                      <img src={bluetick} alt="" />
                      <p className="text-xs font-normal font-Work-sans text-gray-1">
                      Verified by Dealer
                      </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pb-4 md:pb-5">
                      <button onClick={()=>{navigate('/buyacardetails')}} className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
                      View details
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* <div className="banner">
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
