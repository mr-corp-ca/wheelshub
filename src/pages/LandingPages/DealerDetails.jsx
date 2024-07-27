// import React from "react";
// import usedCarsImage from "../../assets/images/usedcarsimages.png";
// import heartIcon from "../../assets/images/hearticon.png";
// import yellowstar from "../../assets/images/staryellow.png";
// import bluetick from "../../assets/images/bluetick (2).png";
// import contact from "../../assets/images/contact.png"
// import maps from "../../assets/images/maps.png"
// import gmail from "../../assets/images/gmail.png"
// function DealerDetails() {
//   return (
//     <>
//       <div className="grid grid-cols-12 p-10 gap-10">
//         <div className=" col-span-6">
//           <img src={usedCarsImage} alt="" />
//         </div>
//         <div className=" col-span-6">
//           <div className="border rounded-xl p-5">
//             <div className="flex items-center justify-between">
//               <h1 className=" text-[32px] font-bold font-inter text-gray-1">
//                 Surrey car dealers
//               </h1>
//               <img src={heartIcon} alt="" />
//             </div>
//             <div className="my-4">
//               <h1 className="text-lg font-medium font-Work-sans text-custom-blue">
//                 7711 128 St, Surrey, BC V3W 4E6, Canada
//               </h1>
//             </div>
//             <div className="flex flex-col gap-3 my-4">
//               <div className=" flex items-center gap-3">
//                 <img src={yellowstar} alt="Yellow star" />
//                 <h1 className="text-lg font-medium font-Work-sans  text-gray-1">
//                   430 Reviews
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img src={bluetick} alt="Yellow tick" />
//                 <p className="text-lg font-medium font-Work-sans text-gray-1">
//                   Verified by Wheeldealhub
//                 </p>
//               </div>
//             </div>
//             <div className="w-[524px] rounded-xl p-4 bg-[#eeeeee] flex flex-col gap-3">
//               <div>
//                 <h1 className=" text-lg font-medium font-Work-sans text-gray-4">
//                   Opening hours(Mon-Sat)
//                 </h1>
//               </div>
//               <div>
//                 <h1 className=" text-2xl font-semibold font-inter text-gray-1">
//                   7:00-7:00 PM
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center my-5 mt-10">
//               <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
//               Call now - +650 334 4545
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center gap-5 my-5">
//         <div className=" border shadow rounded-xl px-[87px] py-[14px] w-fit flex items-center justify-center flex-col gap-4 h-[128px]">
//             <div>
//                 <img src={contact} alt="" />
//             </div>
//             <div>
//                 <h1 className=" text-lg font-medium font-Work-sans text-custom-blue">
//                 +1 660 656 6766
//                 </h1>
//             </div>
//         </div>
//         <div className=" border shadow rounded-xl px-[39px] py-[14px] w-fit flex items-center justify-center flex-col gap-4 h-[128px]">
//             <div>
//                 <img src={maps} alt="" />
//             </div>
//             <div>
//                 <h1 className=" w-[242px] text-center text-lg font-medium font-Work-sans text-custom-blue">
//                 7711 128 St, Surrey, BC V3W
//                 4E6, Canada
//                 </h1>
//             </div>
//         </div>
//         <div className=" border shadow rounded-xl px-[53px] py-[14px] w-fit flex items-center justify-center flex-col gap-4 h-[128px]">
//             <div>
//                 <img src={gmail} alt="" />
//             </div>
//             <div>
//                 <h1 className=" text-lg font-medium font-Work-sans text-custom-blue">
//                 info@surreydealers.com
//                 </h1>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DealerDetails;


import React from "react";
import usedCarsImage from "../../assets/images/usedcarsimages.png";
import heartIcon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import bluetick from "../../assets/images/bluetick (2).png";
import contact from "../../assets/images/contact.png";
import maps from "../../assets/images/maps.png";
import gmail from "../../assets/images/gmail.png";
import Navbar2 from "../../components/Navbar2";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
// import './swiper-custom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import carImage from '../../assets/images/wheeldealhub (1) 1.png'; // Replace with the correct path to your image
import { Input } from '../../components/Input';
import backgroundimg from "../../assets/images/Mask_group-ai-brush-removebg-q6y0hhm (1).png"
import car1 from "../../assets/images/car1 (7).png"
import car2 from "../../assets/images/car2 (2).png"
import car3 from "../../assets/images/car3 (2).png"
import car4 from "../../assets/images/car4.png"
import car5 from "../../assets/images/car5.png"
import car6 from "../../assets/images/car6.png"
import displayicon1 from "../../assets/images/diplay (1).png"
import displayicon2 from "../../assets/images/diplay (2).png"
import displayicon3 from "../../assets/images/diplay (3).png"
import displayicon4 from "../../assets/images/diplay (4).png"
import savingIcon from "../../assets/images/saving.png"
import manImage from "../../assets/images/man.png";
import trophyImage from "../../assets/images/trophyy.png";
import progressImage from "../../assets/images/progress.png";
import savemoneyImage from "../../assets/images/save-money.png";
import icons1 from "../../assets/images/arrows (1).png"
import icons2 from "../../assets/images/arrows (2).png"
import icons3 from "../../assets/images/arrows (3).png"
import icons4 from "../../assets/images/arrows (4).png"
import menswithcar from "../../assets/images/manswithcar.png"
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import StarImage from "../../assets/images/starGroup.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import { useState } from 'react';
import waveicon from "../../assets/images/Wave.png"
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
// import Navbar2 from '../../components/Navbar2';
import { Navbar } from '../../components/Navbar';
import { NavigateBeforeSharp } from '@mui/icons-material';




function DealerDetails() {
  const [tabActive, setTabActive] = useState("home");
  const handleClick = (item) => {

    setTabActive(item);
  };

  const bidsClick = () => {

    handleClick("bids")

  }
  const investmentClick = () => {

    handleClick("investments");

  }
  return (
    <>
      <Navbar2 />
      <div className="grid grid-cols-1 lg:grid-cols-12 p-5 lg:p-10 gap-5 lg:gap-10">
        <div className="col-span-12 lg:col-span-6">
          <img src={usedCarsImage} className="w-full" alt="Used Cars" />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="border rounded-xl p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl lg:text-[32px] font-bold font-inter text-gray-1">
                Surrey car dealers
              </h1>
              <img src={heartIcon} alt="Heart Icon" className="w-6 lg:w-auto" />
            </div>
            <div className="my-4">
              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
                7711 128 St, Surrey, BC V3W 4E6, Canada
              </h1>
            </div>
            <div className="flex flex-col gap-3 my-4">
              <div className="flex items-center gap-3">
                <img src={yellowstar} alt="Yellow star" className="w-6 lg:w-auto" />
                <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-1">
                  430 Reviews
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={bluetick} alt="Blue tick" className="w-6 lg:w-auto" />
                <p className="text-sm lg:text-lg font-medium font-Work-sans text-gray-1">
                  Verified by Wheeldealhub
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[524px] rounded-xl p-4 bg-[#eeeeee] flex flex-col gap-3">
              <div>
                <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                  Opening hours (Mon-Sat)
                </h1>
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-semibold font-inter text-gray-1">
                  7:00-7:00 PM
                </h1>
              </div>
            </div>
            <div className="flex items-center my-5 mt-10">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                Call now - +650 334 4545
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-5">
        <div className="border shadow rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <img src={contact} alt="Contact Icon" className="w-10 lg:w-auto" />
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
              +1 660 656 6766
            </h1>
          </div>
        </div>
        <div className="border shadow rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <img src={maps} alt="Maps Icon" className="w-10 lg:w-auto" />
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue text-center">
              7711 128 St, Surrey, BC V3W 4E6, Canada
            </h1>
          </div>
        </div>
        <div className="border shadow rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <img src={gmail} alt="Gmail Icon" className="w-10 lg:w-auto" />
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
              info@surreydealers.com
            </h1>
          </div>
        </div>
      </div>
      <div className="blueRectangle w-[90%] lg:w-[80%] mx-auto py-10 lg:py-16">
        <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
            <div className="flex flex-col items-center">
              <img src={manImage} alt="" className="w-16 lg:w-auto" />
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                50k+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                Bidders
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={trophyImage} alt="" className="w-16 lg:w-auto" />
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                2k+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                Winners
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={progressImage} alt="" className="w-16 lg:w-auto" />
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                $7M+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                Investments
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={savemoneyImage} alt="" className="w-16 lg:w-auto" />
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                21%
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                Return
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials bg-[#d2eaff] py-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl lg:text-[54px] font-bold font-inter text-gray-1">
            What people say about us?
          </h1>
        </div>
        <Swiper
          cssMode={true}
          loop={true}
          spaceBetween={50}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {[0, 1, 2].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="cards w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {Array(3)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-7">
                      <div className="flex items-center gap-5">
                        <div>
                          <div className="w-[64px] h-[64px] rounded-full bg-[#cecece]"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div>
                            <h1 className="text-xl font-semibold font-inter text-gray-1">
                              Sandra T. Robinson
                            </h1>
                          </div>
                          <div className="flex items-center">
                            <img src={StarImage} className="inline" alt="" />
                            <span className="text-lg font-medium font-Work-sans text-gray-1 px-2">
                              5.0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                          And equal blame belongs to those who fail in their duty
                          through weakness of will, which is the same as saying
                          through shrinking from toil and pain.
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center py-10">
          <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
            View all
          </button>
        </div>
      </div>
      <div className="banner">
        <img src={banner} className=" w-[100vw]" alt="" />
      </div>

      <div className="footer py-10 bg-[#e0e0e0]">
        <div className="w-[90vw] lg:w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
            <div className="first w-full lg:w-[35%]">
              <div>
                <img src={quickBidLogo} alt="" />
              </div>
              <div>
                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-1 py-5 lg:py-10">
                  But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>
                  <img src={twitter} alt="" />
                </div>
                <div>
                  <img src={tiktok} alt="" />
                </div>
                <div>
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
            <div className="second w-full lg:w-[15%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Home
                </h3>
                <h3
                  onClick={() => bidsClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Bids
                </h3>
                <h3
                  onClick={() => investmentClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
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
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
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
        <div className="">
          <h1 className="text-white font-medium text-sm font-Work-sans">
            © 2022 wheeldealhub. All Rights Reserved
          </h1>
        </div>
      </div>
    </>
  );
}

export default DealerDetails;
