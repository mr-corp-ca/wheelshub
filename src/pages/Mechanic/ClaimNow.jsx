import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import gallery from "../../assets/images/gallery.png";
import photo from "../../assets/images/photo.png";
import crossicon from "../../assets/images/crossIcon.png";
import greentickrounded from "../../assets/images/roundedGreentick.png"
import audiCar from "../../assets/images/audicar.png";

function ClaimNow({ show, onClose, hidden }) {
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
          {/* <div>
            <img
              onClick={onClose}
              src={crossicon}
              className="bg-gray-300 rounded-full absolute right-2 cursor-pointer w-10"
              alt=""
            />
          </div> */}
          <div className="flex justify-between md:mb-6"></div>
          <form onSubmit={handleSubmit}>
            <div className=" mx-5 p-10 bg-white shadow-lg rounded-xl border">
            <div className="">
                    <h1 className="text-2xl md:text-3xl font-bold font-inter text-gray-800">
                    Verification request
                    </h1>
                  </div>
                  <div className="my-4">
                    <div className="card py-4">
                      <div className="card1 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex  flex-wrap items-center gap-3">
                          <img
                            src={audiCar}
                            alt="Car"
                            className=""
                          />
                          <div>
                            <h1 className="text-base md:text-lg font-semibold font-inter text-gray-800">
                              Mercedes-Benz E 220 d
                            </h1>
                            <p className="text-sm md:text-base font-medium font-worksans text-gray-500">
                              12th July 2024 11:00 - 12:00 PM
                            </p>
                            <p className="text-sm md:text-base font-medium font-worksans text-gray-500">
                              Winner Name: Sean Wills
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      className="w-full md:w-[218px] h-[52px] px-4 py-3 border border-gray-300 font-medium text-sm lg:text-lg font-worksans rounded-xl flex items-center justify-center"
                    >
                      Ask for Reschedule
                    </button>
                    <button
                    onClick={onClose}
                      type="button"
                      className="w-full md:w-[218px] h-[52px] px-4 py-3 bg-custom-blue font-medium text-lg font-worksans rounded-xl text-white flex items-center justify-center"
                    >
                      Approve Request
                    </button>
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

export default ClaimNow;
