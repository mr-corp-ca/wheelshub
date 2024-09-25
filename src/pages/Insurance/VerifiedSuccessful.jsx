import React from "react";
import { useState, useEffect, useRef } from "react";
import greentickrounded from "../../assets/images/roundedGreentick.png";
import { useNavigate } from "react-router-dom";
import Svgs from "../../assets/svgs/index.js";

function VerifiedSuccessful({ show, onClose, hidden }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const popupRef = useRef();

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
      <div className="">
        <div ref={popupRef}>
          <div className="flex justify-between md:mb-6"></div>
          <form onSubmit={handleSubmit}>
            <div className=" mx-auto bg-white px-12 py-5 shadow-lg rounded-xl border">
              <div className="flex flex-col gap-5">
                <div className="img flex items-center justify-center">
                  <Svgs.GreenTickSuccessful/>
                </div>
                <div className=" flex items-center justify-center text-center">
                  <h1 className=" w-[90%] text-base font-medium font-poppins text-gray-1">
                    Documents submitted successfully
                  </h1>
                </div>
                <div className=" flex items-center justify-center">
                  <button
                    onClick={() => {
                      navigate("/insurance/insurance-my-order");
                    }}
                    className="  hover:bg-white hover:border hover:border-custom-blue hover:text-custom-blue text-sm font-semibold font-inter bg-custom-blue w-[190px] h-[48px] flex items-center justify-center rounded-xl text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifiedSuccessful;
