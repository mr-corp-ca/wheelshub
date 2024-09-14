import React from "react";
import { useEffect, useRef } from "react";
import odi from "../../assets/images/odicarfordialog.png";
import locations from "../../assets/images/locaations.png";
import calls from "../../assets/images/calls.png";
import maps from "../../assets/images/mapss.png";
import Svgs from '../../assets/svgs/index'
import { useState } from "react";
import ChatWithSeller from "./ChatWithSeller";

function ClaimNow({ show, onClose }) {
  const popupRef = useRef();

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [selectedHearts, setSelectedHearts] = useState([]); // Array to track selected hearts

  const handleHeart = (index) => {
    setSelectedHearts((prevSelectedHearts) =>
      prevSelectedHearts.includes(index)
        ? prevSelectedHearts.filter((i) => i !== index) // Unselect the heart
        : [...prevSelectedHearts, index] // Select the heart
    );
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={popupRef} className="w-full max-w-[672px]  md:p-9 bg-white shadow-lg rounded-xl border relative px-3 py-9 mx-2">
      <span onClick={onClose} className="absolute left-[42%] -top-16 sm:hidden cursor-pointer"><Svgs.CrossIcon/></span>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-inter font-bold text-gray-1">
            Seller Details
          </h1>
          <span onClick={onClose} className="  cursor-pointer"><Svgs.CrossIcon color={'#999'} bg_color={'#eaeaea'}/></span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 my-5">
          <img src={odi} alt="Car" className="w-32 md:w-auto" />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <h1 className="lg:text-lg font-inter text-gray-1 font-semibold">
                Mercedes-Benz E 220 d
              </h1>
              <span
                  className="cursor-pointer"
                  onClick={() => {
                    handleHeart(1);
                  }}
                >
                  {selectedHearts.includes(1) ? (
                    <Svgs.HeartIconBlueFilled />
                  ) : (
                    <Svgs.HeartIconBlue />
                  )}
                </span>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
                45000 KM
              </h1>
              <Svgs.GrayDot/>
              <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
                2018 Model
              </h1>
              <Svgs.GrayDot/>
              <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
                Automatic
              </h1>
            </div>
            <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
              $22,500
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={locations} alt="Location" className="w-6 md:w-auto" />
            <h1 className="text-sm md:text-base font-normal font-Work-sans text-custom-blue">
              7711 128 St, Surrey, BC V3W 4E6, Canada
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <img src={calls} alt="Call" className="w-6 md:w-auto" />
            <h1 className="text-sm md:text-base font-normal font-Work-sans text-gray-1">
              +1 *** *** ****
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 my-5">
          <button className="h-11 md:h-12 px-3 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-gray-1 flex items-center justify-center gap-2 w-full md:w-auto">
            <img src={maps} alt="Maps" className="w-5 md:w-auto" />
            Directions
          </button>
          <button onClick={handleShowPopup} className="h-11 md:h-12 px-3 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-gray-1 flex items-center justify-center w-full md:w-auto">
            Chat with seller
          </button>
          {showPopup && <ChatWithSeller show={showPopup} onClose={handleClosePopup} />}
        </div>
        <div className="flex items-center justify-center my-5 mt-10">
          <button className="h-11 md:h-12 px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium font-Work-sans text-custom-blue bg-white border border-custom-blue flex items-center justify-center w-full md:w-auto">
            Check loan offers
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClaimNow;