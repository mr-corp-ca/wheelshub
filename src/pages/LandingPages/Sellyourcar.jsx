import React from "react";
import wheeldealimg from "../../assets/images/wheeldeal.png";
import teamicon from "../../assets/images/teamwork 1.png";
import Navbar2 from "../../components/Navbar2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginContext } from "../../Context/LoginContext";
import { useRoleContext } from "../../Context/RoleContext";
import modeldesgin from "../../assets/images/manwithfinger.png";
import Banner from "../../components/Banner";
import Svgs from '../../assets/svgs/index.js'
import { useSellACarContext } from "../../Context/SellACarContext.jsx";


function Sellyourcar() {

  const {setSelectSell} = useSellACarContext()

  const navigate = useNavigate();


  const [loginType, setLoginType] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  const { setRole } = useRoleContext();
  // console.log(loginType);

  const [borderColor, setBorderColor] = useState("");

  const handleSelect = (id) => {
    setLoginType(id);
    setBorderColor(id);
    
  };

 const handleChange =(e)=>{
  setLoginType(e.target.value);
  setSelectSell(e.target.value)
 }
  return (
    <>
      <Navbar2 active={'Sell-A-Car'}/>
      <div className="mainpart">
        <div className=" py-32  bg-[#F3F3F3]   flex justify-center">
          <div className="lg:px-7 xl:px-0 items-center  grid lg:grid-cols-12 w-[95%] lg:w-[1170px]">
            <div className=" flex flex-col  lg:gap-[48px] gap-[25px] lg:col-span-8 bottom-[20px] relative ">
              <div className="px-2 text-center md:text-start sm:text-[48px] text-[20px] text-[#333333] lg:w-[800px] xl:w-[821px] font-bold w-full font-inter">
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
                  onChange={
                    handleChange
                  }
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
        <Banner />
      </div>
    </>
  );
}

export default Sellyourcar;
