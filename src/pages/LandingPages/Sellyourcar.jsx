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

import React from "react";
import wheeldealimg from "../../assets/images/wheeldeal.png";
import greenticke from "../../assets/images/greeticke.png";
import teamicon from "../../assets/images/teamwork 1.png";
import Navbar2 from "../../components/Navbar2";
import { useNavigate } from "react-router-dom";
import greentick from "../../assets/images/tickofgreen.png";
import { useState } from "react";
import { useLoginContext } from "../../Context/LoginContext";
import { useRoleContext } from "../../Context/RoleContext";
import modeldesgin from "../../assets/images/manwithfinger.png";
import Banner from "../../components/Banner";
import Svgs from '../../assets/svgs/index.js'


function Sellyourcar() {
  const navigate = useNavigate();

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

  const [loginType, setLoginType] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  const { setRole } = useRoleContext();
  console.log(loginType);

  const [borderColor, setBorderColor] = useState("");

  const handleborderColor = (item) => {};

  const [selectedMechanic, setSelectedMechanic] = useState("");

  const handleSelect = (id) => {
    setLoginType(id);
    setBorderColor(id);
  };

  return (
    <>
      <Navbar2 active={'Sell-A-Car'}/>
      <div className="mainpart">
        {/* <div className="firstpart h-fit bg-[#f3f3f3] py-44">
          <div className="w-[70%] mx-auto px-4 ">
            <div className=" flex flex-col ">
              <h1 className=" lg:text-[48px] font-bold font-inter text-gray-800">
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
          <div className=" mx-auto px-4  gap-4 mt-5">
            <div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="" className="" />
                <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="" className="" />
                <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="" className="" />
                <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
                </h1>
              </div>
            </div>
          </div>

          </div>
         
        </div> */}
        <div className=" py-32  bg-[#F3F3F3]   flex justify-center">
          <div className="lg:px-7 xl:px-0 items-center  grid lg:grid-cols-12 w-[95%] lg:w-[1170px]">
            <div className=" flex flex-col  lg:gap-[48px] gap-[25px] lg:col-span-8 bottom-[20px] relative ">
              <div className=" text-center md:text-start sm:text-[48px] text-[20px] text-[#333333] lg:w-[800px] xl:w-[821px] font-bold w-full font-inter">
                <h6>Sell Car instantly on Wheeldeal hub from Home</h6>
              </div>
              <div className="flex flex-col items-center md:items-start gap-[24px] ">
                <div className="flex gap-[24px]">
                  <div>
                    <Svgs.GreenTickIcon/>
                  </div>
                  <div>
                    <h6 className="lg:text-[18px] font-medium font-Work-sans text-gray-1">
                      Higher profits
                    </h6>
                  </div>
                </div>

                <div className="flex gap-[24px]">
                  <div>
                    <Svgs.GreenTickIcon/>
                  </div>
                  <div>
                    <h6 className="lg:text-[18px] font-medium font-Work-sans text-gray-1">
                    Easy process
                    </h6>
                  </div>
                </div>

                <div className="flex gap-[24px]">
                  <div>
                    <Svgs.GreenTickIcon/>
                  </div>
                  <div>
                    <h6 className="lg:text-[18px] font-medium font-Work-sans text-gray-1">
                    100% Trusted
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd div from images */}
            <div className="hidden lg:block col-span-4   relative ">
              <img src={modeldesgin} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-css rounded-[16px] my-14 py-10 px-5 border z-30 w-[95%] lg:max-w-[1170px] mx-auto -mt-32">
          <div className="flex items-center justify-center text-center md:text-start">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold font-inter text-gray-1">
              Where do you want to sell your car??
            </h1>
          </div>
          <div className="py-10 flex flex-col md:flex-row items-center justify-center gap-16">
            <div
              onClick={() => {
                handleSelect("form");
              }}
              className={`${
                borderColor === "form"
                  ? "border-2  border-custom-blue"
                  : " border-2"
              } border rounded-[16px] w-[280px] h-[312px] px-9 py-[18px] flex items-center justify-center flex-col gap-4 cursor-pointer shadow-css`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  value={"form"}
                  checked={loginType === "form"}
                  onChange={(e) => {
                    setLoginType(e.target.value);
                  }}
                  name="same"
                  className=" h-5 w-5"
                />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                  WheelDealHub
                </h1>
              </div>
              <div>
                <img src={wheeldealimg} alt="" />
                
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Svgs.GreenTickIcon/>
                  <h1 className="text-sm md:text-base font-medium font-Work-sans text-gray-1">
                    High Returns
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <Svgs.GreenTickIcon/>
                  <h1 className="text-sm md:text-base font-medium font-Work-sans text-gray-1">
                    Fast process
                  </h1>
                </div>
              </div>
            </div>
            <div onClick={() => {handleSelect("sel-car-to-public")}}
              className={`${
                borderColor === "sel-car-to-public"
                  ? "border-2  border-custom-blue"
                  : " border-2"
              } border rounded-[16px]  px-[65px] py-[18px] flex items-center justify-center flex-col gap-4 cursor-pointer w-[280px] h-[312px] shadow-css`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  value={"sel-car-to-public"}
                  checked={loginType === "sel-car-to-public"}
                  onChange={(e) => {
                    setLoginType(e.target.value);
                  }}
                  name="same"
                  className=" h-5 w-5"
                />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                  Public sale
                </h1>
              </div>
              <div>
                <img src={teamicon} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 ">
                  <Svgs.YellowTickIcon/>
                  <h1 className="text-sm md:text-base font-medium font-Work-sans text-gray-1">
                  Low returns
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <Svgs.YellowTickIcon/>
                  <h1 className="text-sm md:text-base font-medium font-Work-sans text-gray-1">
                  Slow process
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (loginType === "") {
                  alert("Please select where you want to sale ");
                } else {
                  setIsLoggedIn(true);
                  setRole(loginType);
                  navigate(`/sellyourcar/${loginType}`);
                  window.scrollTo({
                    top: 0,
                  });
                }
              }}
              className="h-[52px] w-[129px] rounded-lg bg-custom-blue text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue"
            >
              Next
            </button>
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
        <Banner />
      </div>
    </>
  );
}

export default Sellyourcar;
