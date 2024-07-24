// import React from 'react'
// import greentick from "../../assets/images/tickofgreen.png"
// import manimage from "../../assets/images/manwithfinger.png"
// import yellowtick from "../../assets/images/yellowticke.png"
// import wheeldealimg from "../../assets/images/wheeldeal.png"
// import radio from "../../assets/images/Shape (1).png"
// import radio2 from "../../assets/images/Shape (2).png"
// import greenticke from "../../assets/images/greeticke.png"
// import teamicon from "../../assets/images/teamwork 1.png"
// function Sellyourcar() {
//   return (
//   <>
//   <div className='mainpart'>
//     <div className='firstpart h-[100vh] bg-[#f3f3f3] flex items-center justify-center'>
//         <div className='w-[70%] mx-auto'>
//         <div className=''>
//                 <h1 className=' text-[48px] font-bold font-inter text-gray-1'>Sell Car instantly on <span className=' text-[48px] font-bold font-inter text-gray-1 relative'>Wheeldealhub <img src={manimage}  className='absolute lg:-right-[70%] xl:-right-[70%] 2xl:-right-[130%]  -top-[70%] z-20' alt="" /> </span> 
//                 from Home</h1>
//             </div>
//             <div className='flex flex-col gap-4 mt-5'>
//                 <div className=' flex items-center gap-5'>
//                     <img src={greentick} alt="" />
//                     <h1 className=' text-lg font-medium font-Work-sans text-gray-1'>Higher profits</h1>
//                 </div>
//                 <div className=' flex items-center gap-5'>
//                     <img src={greentick} alt="" />
//                     <h1 className=' text-lg font-medium font-Work-sans text-gray-1'>Higher profits</h1>
//                 </div>
//                 <div className=' flex items-center gap-5'>
//                     <img src={greentick} alt="" />
//                     <h1 className=' text-lg font-medium font-Work-sans text-gray-1'>Higher profits</h1>
//                 </div>
//             </div>
//         </div>

//     </div>

//   </div>
//   </>
//   )
// }

// export default Sellyourcar


import React from 'react';
import greentick from "../../assets/images/tickofgreen.png";
import manimage from "../../assets/images/manwithfinger.png";
import yellowtick from "../../assets/images/yellowticke.png";
import wheeldealimg from "../../assets/images/wheeldeal.png";
import radio from "../../assets/images/Shape (1).png";
import radio2 from "../../assets/images/Shape (2).png";
import greenticke from "../../assets/images/greeticke.png";
import teamicon from "../../assets/images/teamwork 1.png";
import Navbar2 from '../../components/Navbar2';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Sellyourcar() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar2 />
      <div className="mainpart">
        <div className="firstpart h-[100vh] bg-[#f3f3f3] flex flex-col items-center justify-center">
          <div className="w-full sm:w-[90%] md:w-[70%] grid gridcols bg-emerald-600 mx-auto px-4 ">
            <div className=" flex flex-col 2xl:items-center">
              <h1 className=" bg-fuchsia-500 lg:text-[48px] font-bold font-inter text-gray-800">
                Sell Car instantly on{" "}
                <span className=" lg:text-[48px] font-bold font-inter text-gray-800 relative">
                  Wheeldealhub{" "}
                  <img
                    src={manimage}
                    className="hidden xl:block absolute -top-[70%] -right-[70%] "
                    alt=""
                  />{" "}
                </span>
                <br />from Home
              </h1>
            </div>

          </div>
          <div className="w-full sm:w-[90%] md:w-[70vw] mx-auto px-4   bg-yellow-200 gap-4 mt-5">
            <div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
                </h1>
              </div>
            </div>
          </div>
          <Button
            onClick={() => navigate("/sellyourcar/form  ")}
            title={"Next"} />
        </div>
      </div>
    </>
  );
}

export default Sellyourcar;






{/* <div className='bg-white rounded-xl my-14 py-10 border z-30'>
          <div className='flex items-center justify-center'>
            <h1 className='text-lg md:text-2xl lg:text-3xl font-semibold font-inter text-gray-1'>
              Where do you want to sell your car?
            </h1>
          </div>
          <div className='py-10 flex flex-col md:flex-row items-center justify-center gap-10'>
            <div className='border rounded-xl w-full md:w-1/3 px-10 py-5 flex items-center justify-center flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <img src={radio} alt="" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>WheelDealHub</h1>
              </div>
              <div>
                <img src={wheeldealimg} alt="" />
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <img src={greenticke} alt="" />
                  <h1 className='text-sm md:text-base font-medium font-Work-sans text-gray-1'>High Returns</h1>
                </div>
                <div className='flex items-center gap-4'>
                  <img src={greenticke} alt="" />
                  <h1 className='text-sm md:text-base font-medium font-Work-sans text-gray-1'>Fast process</h1>
                </div>
              </div>
            </div>
            <div className='border rounded-xl w-full md:w-1/3 px-10 py-5 flex items-center justify-center flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <img src={radio} alt="" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Public sale</h1>
              </div>
              <div>
                <img src={teamicon} alt="" />
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4 '>
                  <img src={greenticke} alt="" />
                  <h1 className='text-sm md:text-base font-medium font-Work-sans text-gray-1'>High Returns</h1>
                </div>
                <div className='flex items-center gap-4'>
                  <img src={greenticke} alt="" />
                  <h1 className='text-sm md:text-base font-medium font-Work-sans text-gray-1'>Fast process</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button className="h-11 md:h-12 rounded-lg bg-custom-blue text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Next
            </button>
          </div>
        </div> */}