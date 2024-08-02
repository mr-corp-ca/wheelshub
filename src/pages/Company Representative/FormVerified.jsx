import React from "react";
import {useEffect, useRef } from "react";
import greentickrounded from "../../assets/images/roundedGreentick.png";
import { useNavigate } from "react-router-dom";
function FormVerified({ show, onClose}) {
  const navigate = useNavigate();

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
        <div ref={popupRef} className=" mx-auto p-10 bg-white shadow-lg rounded-xl border">
          <div className="flex flex-col gap-3">
            <div className="img flex items-center justify-center">
              <img src={greentickrounded} alt="" />
            </div>
            <div className=" flex items-center justify-center text-center">
              <h1 className=" w-[60%] text-base font-medium font-poppins text-gray-1">
                Verified successfully
              </h1>
            </div>
            <div className=" flex items-center justify-center">
              <button
                onClick={() => {
                  navigate("/dashboard/representativedashboard");
                }}
                className="hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue hover:shadow-none shadow-2xl shadow-custom-blue text-sm font-semibold font-inter bg-custom-blue px-[16px] py-[12px] w-full rounded-xl text-white"
              >
                Close
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default FormVerified;
