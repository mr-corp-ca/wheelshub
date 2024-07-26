import React, { useState } from "react";
import mansmiling from "../../assets/images/mansmiling.png";
import greentick from "../../assets/images/tickofgreen.png";
import { Input } from "../../components/Input";
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
import dealerimg from "../../assets/images/dealer.png"
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
function SellCarFormFindDealer() {
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
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:max-w-[80%] mx-auto px-5 md:px-10 lg:pt-32">
          <div className="md:col-span-9 ">
            <h1 className="text-[20px]  lg:text-[48px] font-bold font-inter text-gray-800 ">
            Pick a Dealer for Professional
            Car Verification
            </h1>
            <div className="flex flex-col gap-4 mt-5 ">
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                Enhanced Credibility
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                Increased Market Value
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                Faster Sales Process
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-3 lg:flex items-center justify-center ">
            <img src={dealerimg} alt="Man smiling" />
          </div>
        </div>
      </div>

      <div className="cardpart flex justify-center bg-white ">
        <div className=" mb-20 lg:-mt-10 w-full md:w-[90%] mx-auto bg-white border rounded-xl py-10 px-5 md:px-16">
          <div className="flex items-center justify-center text-2xl md:text-[28px] font-bold font-inter text-gray-800">
            <h1>Select mechanic to check the car</h1>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-10 pb-5">
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
          <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-5">
            {Array(6)
              .fill()
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className="card border rounded-2xl flex flex-col gap-4"
                  >
                    <div>
                      <img
                        src={carmechanic}
                        alt="Car"
                        className="w-full h-auto rounded-t-2xl"
                      />
                    </div>
                    <div className="px-3 flex items-center justify-between">
                      <h1 className="text-base md:text-xl font-semibold font-inter text-gray-800">
                        BL Car Mechanics
                      </h1>
                      <img src={hearticon} alt="Heart icon" />
                    </div>
                    <div className="flex items-center px-3 justify-between">
                      <h1 className="text-base font-normal font-Work-sans text-custom-blue underline">
                        7711 128 St, Surrey, BC V3W 4E6, Canada
                      </h1>
                    </div>
                    <div className="px-3 flex items-center gap-3">
                      <img src={yellowstar} alt="Yellow star" />
                      <h1 className="text-sm font-normal font-Work-sans text-gray-800">
                        430 Reviews
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 px-3">
                      <img src={yellowTick} alt="Yellow tick" />
                      <p className="text-sm font-normal font-Work-sans text-gray-800">
                        Verified by Wheeldealhub
                      </p>
                    </div>
                    <div className="flex items-center justify-center pb-4 md:pb-5">
                      <button className="h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                        Select mechanic
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
            <button className="h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center border border-gray-300 text-gray-800">
              Load more
            </button>
          </div>
          <div className="flex items-center justify-center gap-5">
            <img src={checkboxpng} alt="Checkbox" />
            <p className="text-lg font-normal font-inter text-gray-800">
              I agree to pay the mechanic fee of $250 after successful
              verification
            </p>
          </div>
          <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
            <button
              onClick={() => navigate("/sellyourcar/appointment")}
              className="w-[129px] h-[52px] px-[44px] py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="banner mt-10">
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

export default SellCarFormFindDealer;