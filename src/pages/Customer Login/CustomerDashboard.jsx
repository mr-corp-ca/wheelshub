// import React from 'react'
// import ad1Img from "../../assets/images/Ads 1.png"
// import audiCar from "../../assets/images/audicar.png";
// import grayDot from "../../assets/images/graydot.png";
// import markIcon from "../../assets/images/mark.png"
// import poster from "../../assets/images/poster.png"
// function CustomerDashboard() {
//   return (
//     <>
//     <div className='mainpart grid grid-cols-11 p-10 gap-5'>
//         <div className='leftpart col-span-12 lg:col-span-6'>
//             <div className='imgpart'>
//                 <div className=' relative'>
//                     <img src={ad1Img} className='w-full' alt="" />
//                     <h1 className=' text-lg font-normal font-poppins text-gray-1 absolute bg-white px-5 rounded-bl-xl top-0 right-0'>Advertisement</h1>
//                     {/* <button className=' absolute w-[156px] h-[52px] rounded-lg bg-white px-[24px] py-[15.5px] text-lg font-medium font-Work-sans text-gray-1 bottom-20 left-10 flex items-center justify-center'>View details</button> */}
//                 </div>
//             </div>
//             <div className="my-10">  
//             <div className="heading flex items-center justify-between">
//               <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
//               My wish list
//               </h1>
//               <button className="text-base font-medium font-inter text-custom-blue">
//                 View all
//               </button>
//             </div> 
//             {Array(3)
//               .fill()
//               .map((_, index) => (
//                 <div key={index} className="card py-4">
//                   <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
//                     <div className="flex items-center gap-3">
//                       <div>
//                         <img src={audiCar} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
//                       </div>
//                       <div className='flex flex-col gap-3'>
//                         <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
//                           Mercedes-Benz E 220 d
//                         </h1>
//                         <div className="flex items-center justify-between gap-3">
//                     <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">45000 KM</h1>
//                     <img src={grayDot} alt="" />
//                     <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">2018 Model</h1>
//                     <img src={grayDot} alt="" />
//                     <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">Automatic</h1>
//                   </div>
//                         <h1 className="text-sm lg:text-2xl font-bold font-inter text-gray-1">
//                         $22,500
//                         </h1>
//                       </div>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex flex-col gap-5">
//                       <button  className="w-full md:w-[156px] h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
//                       View car
//                       </button>

//                       <button  className="w-full md:w-[156px] h-[44px] rounded-lg border border-gray-1 text-gray-1 px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
//                       Remove
//                       </button>

//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <div className='rightpart col-span-12 lg:col-span-4'>
//             <div>
//             <div className='preference'>
//                 <h1 className=' text-xl font-semibold font-inter text-gray-1'>My preferences</h1>
//             </div>
//             <div className='border rounded-xl my-5 px-3'>
//                 <div className='py-5'>
//                 <label htmlFor="" className='block text-base font-medium font-inter text-gray-1'>Select car make</label>
//                 <select name="" id="" className='w-full px-[16px] py-[12.5px] rounded-xl border outline-none text-base font-medium font-inter text-gray-1 mt-2 bg-[#fafafa]'>
//                     <option value="">Select</option>
//                     <option value="">Select</option>
//                     <option value="">Select</option>
//                 </select>
//                 </div>
//                 <div className=''>
//                 <label htmlFor="" className='block text-base font-medium font-inter text-gray-1'>Car model</label>
//                 <select name="" id="" className='w-full px-[16px] py-[12.5px] rounded-xl border outline-none text-base font-medium font-inter text-gray-1 mt-2 bg-[#fafafa]'>
//                     <option value="">Select</option>
//                     <option value="">Select</option>
//                     <option value="">Select</option>
//                 </select>
//                 </div>
//                 <div className='py-5'>
//                 <label htmlFor="" className='block text-base font-medium font-inter text-gray-1'>Kms Driven</label>
//                 <input placeholder='Type here' name="" id="" className='w-full px-[16px] py-[12.5px] flex items-center rounded-xl border outline-none text-base font-medium font-inter text-gray-1 mt-2 bg-[#fafafa]'/> 
//                 </div>
//                 <div className=' flex items-center justify-center py-5'>
//                     <button className='flex items-center justify-center h-[52px] px-[44px] py-[15.5px] rounded-xl bg-custom-blue text-white text-lg font-medium font-Work-sans shadow-2xl shadow-custom-blue'>Save preference</button>
//                 </div>
//             </div>
//             </div>
//             <div>
//             <div className="heading flex items-center justify-between mt-10">
//               <h1 className="lg:text-xl font-semibold font-inter text-[#161616]">
//               Recent Orders
//               </h1>
//               <button className="text-base font-medium font-inter text-custom-blue">
//                 View all
//               </button>
//             </div> 
//             <div className='border rounded-xl p-5 my-5'>
//                 <div className='flex items-center gap-2 py-5'>
//                     <img src={markIcon} alt="" />
//                     <h1 className=' text-base font-semibold font-inter text-gray-1'>Car handover</h1>
//                 </div>
//                 <div className='outer flex items-center border-b border-dashed pb-3 gap-5'>
//                     <div className='first border-r pr-5 flex flex-col gap-3'>
//                         <h1 className=' text-base font-medium font-inter text-gray-1'>Car make</h1>
//                         <p className=' text-sm font-normal font-inter text-gray-4'>Audi A4</p>
//                     </div>
//                     <div className='second border-r pr-5 flex flex-col gap-3'>
//                         <h1 className=' text-base font-medium font-inter text-gray-1'>Date</h1>
//                         <p className=' text-sm font-normal font-inter text-gray-4'>Audi A4</p>
//                     </div>
//                     <div className='third flex flex-col gap-3'>
//                         <h1 className=' text-base font-medium font-inter text-gray-1'>Time</h1>
//                         <p className=' text-sm font-normal font-inter text-gray-4'>Audi A4</p>
//                     </div>

//                 </div>

//                 <div className='flex items-center gap-2 py-5 mt-5'>
//                     <h1 className=' text-base font-semibold font-inter text-gray-1'>Dealer details</h1>
//                 </div>
//                 <div className='outer flex items-center border-b border-dashed pb-3 gap-5'>
//                     <div className='first border-r pr-5 flex flex-col gap-3'>
//                         <h1 className=' text-base font-medium font-inter text-gray-1'>Loaction</h1>
//                         <p className=' text-sm font-normal font-inter text-custom-blue underline'>188m Surrey</p>
//                     </div>
//                     <div className='second border-r pr-5 flex flex-col gap-3'>
//                         <h1 className=' text-base font-medium font-inter text-gray-1'>Incharge</h1>
//                         <p className=' text-sm font-normal font-inter text-gray-4'>Audi A4</p>
//                     </div>
//                     <div className='third flex flex-col gap-3'>
//                         <h1 className=' text-base font-medium font-inter text-gray-1'>Contact no</h1>
//                         <p className=' text-sm font-normal font-inter text-gray-4'>Audi A4</p>
//                     </div>

//                 </div>

//                 <div className=' flex items-center justify-center mt-5'>
//                 <button  className="w-full md:w-[156px] h-[52px] rounded-lg border border-gray-1 text-gray-1 py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
//                 View details
//                       </button>
//                 </div>
//             </div>
//             </div>
//             <div className='poster flex items-center justify-end'>
//                 <img src={poster} alt="" />
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default CustomerDashboard

import React from 'react'
import ad1Img from "../../assets/images/Ads 1.png"
import audiCar from "../../assets/images/audicar.png";
import grayDot from "../../assets/images/graydot.png";
import markIcon from "../../assets/images/mark.png"
import poster from "../../assets/images/poster.png"
import { Navigate, useNavigate } from 'react-router-dom';
function CustomerDashboard() {
  const naivgate = useNavigate()
  return (
    <>
      <div className='mainpart grid grid-cols-1 lg:grid-cols-10 gap-5'>
        <div className='leftpart col-span-6'>
          <div className='imgpart relative'>
            <img src={ad1Img} className='w-full' alt="Advertisement" />
            <h1 className='text-sm lg:text-lg font-normal font-poppins text-gray-1 absolute top-0 right-0 bg-white px-5 rounded-bl-xl'>Advertisement</h1>
          </div>

          <div className="my-10">
            <div className="heading flex items-center justify-between">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">My wish list</h1>
              <button className="text-base font-medium font-inter text-custom-blue">View all</button>
            </div>

            {Array(3).fill().map((_, index) => (
              <div key={index} className="card py-4">
                <div className="border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src={audiCar} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
                    <div className='flex flex-col gap-3'>
                      <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">Mercedes-Benz E 220 d</h1>
                      <div className="flex flex-wrap items-center gap-2">
                        <h1 className="text-xs lg:text-sm font-normal font-Work-sans text-gray-2">45000 KM</h1>
                        <img src={grayDot} alt="dot" />
                        <h1 className="text-xs lg:text-sm font-normal font-Work-sans text-gray-2">2018 Model</h1>
                        <img src={grayDot} alt="dot" />
                        <h1 className="text-xs lg:text-sm font-normal font-Work-sans text-gray-2">Automatic</h1>
                      </div>
                      <h1 className="text-sm lg:text-2xl font-bold font-inter text-gray-1">$22,500</h1>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col gap-5">
                    <button onClick={()=>{naivgate('/dashboard/myCarlistingcustomer')}} className=" w-[156px] h-[44px] rounded-lg bg-custom-blue text-white text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">View car</button>
                    <button className=" w-[156px] h-[44px] rounded-lg border border-gray-1 text-gray-1 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rightpart col-span-6 lg:col-span-4'>
          <div className='preference'>
            <h1 className='text-xl font-semibold font-inter text-gray-1'>My preferences</h1>
          </div>
          <div className='border rounded-xl my-5 px-3'>
            <div className='py-5'>
              <label htmlFor="carMake" className='block text-base font-medium font-inter text-gray-1'>Select car make</label>
              <select id="carMake" className='w-full px-4 py-3 rounded-xl border outline-none text-base font-medium font-inter text-gray-1 mt-2 bg-[#fafafa]'>
                <option value="">Select</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
              </select>
            </div>
            <div>
              <label htmlFor="carModel" className='block text-base font-medium font-inter text-gray-1'>Car model</label>
              <select id="carModel" className='w-full px-4 py-3 rounded-xl border outline-none text-base font-medium font-inter text-gray-1 mt-2 bg-[#fafafa]'>
                <option value="">Select</option>
                <option value="A4">A4</option>
                <option value="A6">A6</option>
              </select>
            </div>
            <div className='py-5'>
              <label htmlFor="kmsDriven" className='block text-base font-medium font-inter text-gray-1'>Kms Driven</label>
              <input id="kmsDriven" placeholder='Type here' className='w-full px-4 py-3 rounded-xl border outline-none text-base font-medium font-inter text-gray-1 mt-2 bg-[#fafafa]' />
            </div>
            <div className='flex items-center justify-center py-5'>
              <button className='flex items-center justify-center h-14 px-10 rounded-xl bg-custom-blue text-white text-lg font-medium font-Work-sans shadow-2xl shadow-custom-blue'>Save preference</button>
            </div>
          </div>

          <div>
            <div className="heading flex items-center justify-between mt-10">
              <h1 className="lg:text-xl font-semibold font-inter text-[#161616]">Recent Orders</h1>
              <button className="text-base font-medium font-inter text-custom-blue">View all</button>
            </div>
            <div className='border rounded-xl p-5 my-5'>
              <div className='flex items-center gap-2 py-5'>
                <img src={markIcon} alt="Icon" />
                <h1 className='text-base font-semibold font-inter text-gray-1'>Car handover</h1>
              </div>
              <div className='outer flex flex-wrap items-center border-b border-dashed pb-3 gap-5'>
                <div className='border-r pr-5 flex flex-col gap-3'>
                  <h1 className='text-base font-medium font-inter text-gray-1'>Car make</h1>
                  <p className='text-sm font-normal font-inter text-gray-4'>Audi A4</p>
                </div>
                <div className='border-r pr-5 flex flex-col gap-3'>
                  <h1 className='text-base font-medium font-inter text-gray-1'>Date</h1>
                  <p className='text-sm font-normal font-inter text-gray-4'>12/03/2023</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-base font-medium font-inter text-gray-1'>Time</h1>
                  <p className='text-sm font-normal font-inter text-gray-4'>10:00 AM</p>
                </div>
              </div>
              <div className='flex  items-center gap-2 py-5 mt-5'>
                <h1 className='text-base font-semibold font-inter text-gray-1'>Dealer details</h1>
              </div>
              <div className='outer flex flex-wrap items-center border-b border-dashed pb-3 gap-5'>
                <div className='border-r pr-5 flex flex-col gap-3'>
                  <h1 className='text-base font-medium font-inter text-gray-1'>Location</h1>
                  <p className='text-sm font-normal font-inter text-custom-blue underline'>188m Surrey</p>
                </div>
                <div className='border-r pr-5 flex flex-col gap-3'>
                  <h1 className='text-base font-medium font-inter text-gray-1'>Incharge</h1>
                  <p className='text-sm font-normal font-inter text-gray-4'>John Doe</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-base font-medium font-inter text-gray-1'>Contact no</h1>
                  <p className='text-sm font-normal font-inter text-gray-4'>+123456789</p>
                </div>
              </div>
              <div className='flex items-center justify-center mt-5'>
                <button className="w-full md:w-[156px] h-[52px] rounded-lg border border-gray-1 text-gray-1 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">View details</button>
              </div>
            </div>
          </div>

          <div className='poster flex items-center justify-end'>
            <img src={poster} alt="Poster" className='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerDashboard
