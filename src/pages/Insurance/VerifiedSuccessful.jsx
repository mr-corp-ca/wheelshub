import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import gallery from "../../assets/images/gallery.png";
import photo from "../../assets/images/photo.png";
import crossicon from "../../assets/images/crossIcon.png";
import greentickrounded from "../../assets/images/roundedGreentick.png"
import { useNavigate } from "react-router-dom";
function VerifiedSuccessful({ show, onClose, hidden }) {
    const navigate = useNavigate()
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
            <div className=" mx-auto p-10 bg-white shadow-lg rounded-xl border">
            
              <div className="flex flex-col gap-3">
                <div className="img flex items-center justify-center">
                  <img src={greentickrounded} alt="" />
                </div>
                <div className=" flex items-center justify-center text-center">
                  <h1 className=" w-[60%] text-base font-medium font-poppins text-gray-1">
                  Verified
                  successfully
                  </h1>
                </div>
                <div  className=" flex items-center justify-center">
                  <button onClick={()=>{navigate('/insurance/insurance-my-order')}} className="  hover:bg-white hover:border hover:border-custom-blue hover:text-custom-blue text-sm font-semibold font-inter bg-custom-blue px-[16px] py-[12px] w-full rounded-xl text-white">Close</button>
                </div>
              </div>
            </div>
            {/* <div className="py-6 text-center">
              <Button
                onClick={onClose}
                title="Submit claim"
                className="text-base font-medium"
              />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifiedSuccessful;
