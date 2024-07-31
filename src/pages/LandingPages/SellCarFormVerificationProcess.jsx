// import React from "react";
// import tickImage from "../../assets/images/ticksign.png";
// import manInCarImage from "../../assets/images/manincar.png";
// import { Button } from "../../components/Button";
// import greentickicon from "../../assets/images/greentickicon.png";
// function SellCarFormVerificationProcess() {
//   return (
//     <>
//       <div className="w-full flex items-center justify-center px-4 my-5">
//         <div className="verificationProcess  p-6 sm:p-10 w-full max-w-4xl">
//           <div className="flex items-center justify-center flex-col gap-5">
//             <div>
//               <img src={greentickicon} alt="" className="max-w-full h-auto" />
//             </div>
//             <div>
//               <h1 className="text-2xl sm:text-[36px] font-semibold font-inter text-gray-1 text-center">
//                 Payment successful!
//               </h1>
//               <p className=" my-5 text-base font-normal font-plus-jakarta-sans text-gray-4">
//                 Payment of $100 is successfully paid to Wheeldealhub
//               </p>
//             </div>
//           </div>

//           <div className=" border rounded-xl p-5">
//             <div className="   border-b border-dashed pb-3 flex items-center justify-between w-full ">
//               <div className="flex items-center justify-between gap-5">
//                 <div className="img">
//                   <img
//                     src={manInCarImage}
//                     alt=""
//                     className="rounded-xl max-w-full h-auto"
//                   />
//                 </div>
//                 <div className="outer flex flex-col gap-2">
//                   <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
//                     <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-1">
//                       John Santner
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-4">
//                     12th July 2024 11:00 - 12:00 PM
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
//                     7711 128 St, Surrey, BC V3W 4E6, Canada
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className=" text-2xl font-semibold font-plus-jakarta-sans text-gray-1">
//                   $50.00
//                 </h1>
//               </div>
//             </div>
//             <div className=" py-10 flex items-center justify-between w-full ">
//               <div className="flex items-center justify-between gap-5">
//                 <div className="img">
//                   <img
//                     src={manInCarImage}
//                     alt=""
//                     className="rounded-xl max-w-full h-auto"
//                   />
//                 </div>
//                 <div className="outer flex flex-col gap-2">
//                   <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
//                     <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-1">
//                       John Santner
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-4">
//                     12th July 2024 11:00 - 12:00 PM
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
//                     7711 128 St, Surrey, BC V3W 4E6, Canada
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className=" text-2xl font-semibold font-plus-jakarta-sans text-gray-1">
//                   $50.00
//                 </h1>
//               </div>
//             </div>

//             <div className="py-5">
//             <hr className="text-gray-5 border-2" />
//           </div>


//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Transaction date
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Payment method
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Transaction ID
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Subtotal
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>

//           <div className="py-5">
//             <hr className="text-gray-5 border-2" />
//           </div>
//             <div className=" my-5 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-2xl font-normal font-Work-sans text-gray-4">
//               Total
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//           <div className="flex items-center justify-center py-3">
//             <button className="text-lg rounded-xl font-Work-sans font-medium w-[123px] h-[48px] px-[24px] py-[12px] bg-custom-blue text-white flex items-center justify-center">
//             Close
//             </button>
//           </div>          
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default SellCarFormVerificationProcess;




import React from "react";
import tickImage from "../../assets/images/ticksign.png";
import manInCarImage from "../../assets/images/manincar.png";
import { Button } from "../../components/Button";
import greentickicon from "../../assets/images/greentickicon.png";
import Navbar2 from "../../components/Navbar2";
import { useState } from "react";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import { Navigate, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";

function SellCarFormVerificationProcess() {
const navigate = useNavigate()
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


  return (
    <>
      <Navbar2 />
      <div className=" firstpart bg-[#f3f3f3] h-fit py-44">
      </div>
      <div className=" md:w-[80%] mx-auto  px-5 md:px-10 lg:pt-20 ">
        <div className=" bg-white ">
        <div className=" -mt-[30%] 2xl:-mt-[20%] rounded-xl shadow-2xl mb-10 px-2 lg:px-10 py-8">
          <div className="flex items-center justify-center flex-col gap-5 px-10">
            <div>
              <img src={greentickicon} alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-[36px] font-semibold font-inter text-gray-800 text-center">
                Payment successful!
              </h1>
              <p className="my-5 text-base text-center md:text-start font-normal font-plus-jakarta-sans text-gray-600">
                Payment of $100 is successfully paid to Wheeldealhub
              </p>
            </div>
          </div>
          <div className="border rounded-xl p-5 px-10">
            <div className="border-b border-dashed pb-3 flex flex-wrap  items-center  justify-between w-full gap-4">
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5">
                <div className="img ">
                  <img
                    src={manInCarImage}
                    alt=""
                    className="rounded-xl max-w-full h-auto"
                  />
                </div>
                <div className="outer flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
                    <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-800">
                      John Santner
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-600">
                      12th July 2024 11:00 - 12:00 PM
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
                      7711 128 St, Surrey, BC V3W 4E6, Canada
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold font-plus-jakarta-sans text-gray-800">
                  $50.00
                </h1>
              </div>
            </div>
            <div className="py-10 flex flex-wrap  items-center  justify-between w-full gap-4">
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5">
                <div className="img">
                  <img
                    src={manInCarImage}
                    alt=""
                    className="rounded-xl max-w-full h-auto"
                  />
                </div>
                <div className="outer flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
                    <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-800">
                      John Santner
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-600">
                      12th July 2024 11:00 - 12:00 PM
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
                      7711 128 St, Surrey, BC V3W 4E6, Canada
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold font-plus-jakarta-sans text-gray-800">
                  $50.00
                </h1>
              </div>
            </div>

            <div className="py-5">
              <hr className="text-gray-500 border-2" />
            </div>

            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Transaction date
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  10:00-11:00AM, 13 June 2024
                </h1>
              </div>
            </div>
            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Payment method
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  Credit Card
                </h1>
              </div>
            </div>
            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Transaction ID
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  1234567890
                </h1>
              </div>
            </div>
            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Subtotal
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  $100.00
                </h1>
              </div>
            </div>

            <div className="py-5">
              <hr className="text-gray-500 border-2" />
            </div>
            <div className="my-5 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-2xl font-normal font-Work-sans text-gray-600">
                  Total
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  $100.00
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center py-3">
              <button onClick={()=>{navigate('/')}} className="text-lg rounded-xl font-Work-sans font-medium w-[123px] h-[48px] px-[24px] py-[12px] bg-custom-blue text-white flex items-center justify-center">
                Close
              </button>
            </div>
          </div>
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
                  But who has any right to find fault with a man who chooses to
                  enjoy a pleasure that has no annoying consequences.
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
                <h3
                  onClick={() => handleClick("home")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Home
                </h3>
                <h3
                  onClick={() => bidsClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Bids
                </h3>
                <h3
                  onClick={() => investmentClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Investments
                </h3>
                <h3
                  onClick={() => handleClick("about")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  About us
                </h3>
                <h3
                  onClick={() => handleClick("home")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
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

export default SellCarFormVerificationProcess;
