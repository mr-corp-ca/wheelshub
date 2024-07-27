import React, { useState } from "react";
import mansmiling from "../../assets/images/mansmiling.png";
import greentick from "../../assets/images/tickofgreen.png";
import { Input } from "@headlessui/react";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import waveicon from "../../assets/images/Wave.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import mechanicImage from "../../assets/images/themechanic.png";
import carmechanic from "../../assets/images/carmechanic.png";
import hearticon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import yellowTick from "../../assets/images/yellowTick.png";
import checkboxpng from "../../assets/images/Checbox container (1).png";
import calenderImg from "../../assets/images/calender.png";
import paymentImg from "../../assets/images/paymentimg.png";
import { useNavigate } from "react-router-dom";
function SellCarFormAppointmentDealerPaymentProcess() {
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

  const [selectedDay, setSelectedDay] = useState("Wed 17");
  const [selectedTime, setSelectedTime] = useState("10:00-11:00 AM");

  return (
    <>
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
      <div className='grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:max-w-[80%] mx-auto px-5 md:px-10 lg:pt-20'>
          <div className='md:col-span-9 '>
            <h1 className='text-[20px]  lg:text-[48px] font-bold font-inter text-gray-800 '>
            Confirm Your Mechanic and Dealer
            Appointments - $50 Each
            </h1>
            <div className='flex flex-col gap-4 mt-5 '>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Flexible timings</h1>
              </div>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Minimized Wait Times</h1>
              </div>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Personalized Service</h1>
              </div>
            </div>
          </div>
          <div className='hidden md:col-span-3 md:flex items-center justify-center '>
            <img src={paymentImg} alt="Man smiling" />
          </div>
        </div>
       

        {/* <div className="w-full md:w-[80%] mx-auto bg-white border rounded-xl py-10 px-5 md:px-16 mt-10">
          <div className="payment ">
            <div className="  rounded-xl ">
              <div className="flex items-center justify-center">
                <h1 className=" text-[28px] font-bold font-inter text-gray-1">
                  Make payment
                </h1>
              </div>
              <div className="flex items-center justify-between gap-10 my-10">
                <div className="left w-[50%]">
                  <div className="voucher border-r p-5">
                    <div className="flex items-center justify-between my-5">
                      <h1 className="text-lg font-normal font-Work-sans text-gray-2">
                        Mechanic appointment fee
                      </h1>
                      <h1 className=" text-lg font-medium font-Work-sans text-gray-1">
                        $50.00
                      </h1>
                    </div>
                    <div className="flex items-center justify-between my-5 border-b pb-4">
                      <h1 className="text-lg font-normal font-Work-sans text-gray-2">
                        Dealer appointment fee
                      </h1>
                      <h1 className=" text-lg font-medium font-Work-sans text-gray-1">
                        $50.00
                      </h1>
                    </div>
                    <div className="flex items-center justify-between my-7">
                      <h1 className="text-lg font-normal font-Work-sans text-gray-2">
                        Total amount to pay
                      </h1>
                      <h1 className=" text-lg font-medium font-Work-sans text-gray-1">
                        $100.00
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="right w-[50%] ">
                  <div className="voucher  p-5">
                    <div>
                      <label
                        htmlFor=""
                        className="block text-base font-medium font-inter text-gray-1"
                      >
                        Card number
                      </label>
                      <input
                        className="w-full px-[16px] py-[12.5px] border rounded-xl my-2"
                        placeholder="0000 0000 0000"
                        type="text"
                      />
                    </div>
                    <div className="flex items-center gap-6 my-5">
                      <div>
                        <label
                          htmlFor=""
                          className="block text-base font-medium font-inter text-gray-1"
                        >
                          Valid through
                        </label>
                        <input
                          className="w-full px-[16px] py-[12.5px] border rounded-xl my-2"
                          placeholder="00/00"
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor=""
                          className="block text-base font-medium font-inter text-gray-1"
                        >
                          CVV
                        </label>
                        <input
                          className="w-full px-[16px] py-[12.5px] border rounded-xl my-2"
                          placeholder="000"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=' flex items-center justify-center'>
      <button className=" text-lg font-Work-sans font-medium text-gray-1 border border-gray-1 rounded-lg h-[52px] w-[226px] flex items-center justify-center">
      + Add new card
      </button>
      </div>
                </div>
              </div>
              <div className="flex items-center justify-center pb-4 md:pb-5">
                      <button className="h-[44px] md:h-[52px] px-[44px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                      Proceed to pay
                      </button>
                    </div>
            </div>
          </div>
        </div> */}

       
      </div>
      <div className="cardpart flex justify-center bg-white mx-5">
        <div className=" mb-16 -mt-16 w-full md:w-[80%] mx-auto bg-white border rounded-xl py-10 px-5 md:px-16">
        <div className="payment">
            <div className="rounded-xl">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl md:text-[28px] font-bold font-inter text-gray-800">
                  Make payment
                </h1>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-10">
                <div className="left w-full md:w-[50%]">
                  <div className="voucher border-b md:border-b-0 md:border-r p-5">
                    <div className="flex items-center justify-between my-5">
                      <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-600">
                        Mechanic appointment fee
                      </h1>
                      <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                        $50.00
                      </h1>
                    </div>
                    <div className="flex items-center justify-between my-5 border-b pb-4">
                      <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-600">
                        Dealer appointment fee
                      </h1>
                      <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                        $50.00
                      </h1>
                    </div>
                    <div className="flex items-center justify-between my-7">
                      <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-600">
                        Total amount to pay
                      </h1>
                      <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                        $100.00
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="right w-full md:w-[50%]">
                  <div className="voucher p-5">
                    <div>
                      <label
                        htmlFor="card-number"
                        className="block text-sm md:text-base font-medium font-inter text-gray-800"
                      >
                        Card number
                      </label>
                      <input
                        id="card-number"
                        className="w-full px-4 py-3 md:px-[16px] md:py-[12.5px] border rounded-xl my-2"
                        placeholder="0000 0000 0000"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 my-5">
                      <div className="w-full">
                        <label
                          htmlFor="valid-through"
                          className="block text-sm md:text-base font-medium font-inter text-gray-800"
                        >
                          Valid through
                        </label>
                        <input
                          id="valid-through"
                          className="w-full px-4 py-3 md:px-[16px] md:py-[12.5px] border rounded-xl my-2"
                          placeholder="00/00"
                          type="text"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="cvv"
                          className="block text-sm md:text-base font-medium font-inter text-gray-800"
                        >
                          CVV
                        </label>
                        <input
                          id="cvv"
                          className="w-full px-4 py-3 md:px-[16px] md:py-[12.5px] border rounded-xl my-2"
                          placeholder="000"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-4 md:mt-0">
                    <button className="text-sm md:text-lg font-Work-sans font-medium text-gray-800 border border-gray-800 rounded-lg h-[44px] md:h-[52px] w-[180px] md:w-[226px] flex items-center justify-center">
                      + Add new card
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center pb-4 md:pb-5">
                <button
                  onClick={() => navigate("/sellyourcar/verificationProcess")}
                  className="h-[44px] md:h-[52px] px-[24px] md:px-[44px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue"
                >
                  Proceed to pay
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="banner">
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
      </div>
    </>
  );
}

export default SellCarFormAppointmentDealerPaymentProcess;
