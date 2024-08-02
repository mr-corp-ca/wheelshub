import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import audiimg from "../../assets/images/audi14.png";
import next from "../../assets/images/nextIcon.png";
import prev from "../../assets/images/prevIcon.png";
import car11 from "../../assets/images/car11.png";
import car12 from "../../assets/images/car12.png";
import car14 from "../../assets/images/man14.png";
import mechanicMan from "../../assets/images/mechanicMan.png";
import yellowTick from "../../assets/images/yellowTick.png";
import { useState } from "react";
import ClaimNow from "./ClaimNow";
function MyCarListingDetails() {
  const review = [
    {
      name: "Engine",
    },
    {
      name: "Exterior",
    },
    {
      name: "Tires",
    },
    {
      name: "Interior",
    },
  ];
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="grid grid-cols-11 p-3">
        <div className="flex  flex-col gap-4 col-span-7 lg:col-span-9">
          <div className="">
            <h1 className="text-base md:text-2xl font-semibold font-inter text-gray-1">
             My car listings
            </h1>
          </div>
          <div className="flex items-center flex-row gap-2 md:gap-x-2 ">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z"
                fill="black"
              />
            </svg>
            <div className="flex flex-col items-center md:flex-row font-poppins font-normal text-base">
              <p
                onClick={() => navigate(-1)}
                className="text-gray-1 text-sm lg:text-base hover:cursor-pointer hover:text-black"
              >
                Car handover/
              </p>
              <p className=" text-sm lg:text-base font-semibold text-custom-blue">
                Mercedes-Benz E 220 D
              </p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={()=>{navigate('/dashboard/paymentprocessmycarlisting')}} className="w-[132px] h-[44px] flex items-center justify-center  rounded-xl bg-custom-blue text-white text-sm font-semibold font-inter shadow-2xl shadow-custom-blue">
            Edit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 px-3 gap-3 py-5">
        <div className="leftpart col-span-12  lg:col-span-6">
          <div className="img">
            <img src={audiimg} className="w-full" alt="" />
          </div>
          <div className="images flex items-center justify-between py-5">
            <img src={prev} alt="" />
            <img src={car14} alt="" className="hidden md:inline-block" />
            <img src={car12} alt="" className="hidden md:inline-block" />
            <img src={car12} alt="" className="hidden md:inline-block" />
            <img src={car11} alt="" />
            <img src={next} alt="" />
          </div>
        </div>
        <div className="rightpart col-span-12 lg:col-span-6">
          <div className="border rounded-xl p-5 ">
            <div>
              <h1 className=" text-[32px] font-bold font-inter text-gray-1">
                Verifications
              </h1>
            </div>
            <div className="flex items-center gap-2 border-b border-dashed pb-2 my-5">
              <div>
                <img src={mechanicMan} className="w-full" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm md:text-2xl font-semibold font-inter text-gray-1">
                  Mechanic appointment
                </h1>
                <p className="lg:text-lg font-medium font-Work-sans text-gray-4">
                  12th July 2024 11:00 - 12:00 PM
                </p>
                <p className="lg:text-lg font-medium font-Work-sans text-custom-blue">
                  7711 128 St, Surrey, BC V3W 4E6, Canada
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b border-dashed pb-2 my-5">
              <div>
                <img src={mechanicMan} className="w-full" alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm md:text-2xl font-semibold font-inter text-gray-1">
                  Dealer appointment
                </h1>
                <p className="lg:text-lg font-medium font-Work-sans text-gray-4">
                  12th July 2024 11:00 - 12:00 PM
                </p>
                <p className="lg:text-lg font-medium font-Work-sans text-custom-blue">
                  7711 128 St, Surrey, BC V3W 4E6, Canada
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={yellowTick} alt="" />
                <p onClick={()=>{navigate('/dashboard/mechanicverification')}} className="text-xs lg:text-lg font-medium font-Work-sans text-[#FFB543]">
                  Verification pending
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={yellowTick} alt="" />
                <p onClick={()=>{navigate('/dashboard/dealerverification')}} className="text-xs lg:text-lg font-medium font-Work-sans text-[#FFB543]">
                  Verification pending
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center my-14">
                    <button     onClick={handleShowPopup} className=" h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-custom-blue text-custom-blue flex items-center justify-center ">
                    Reschedule appointment
                    </button>
                    {showPopup && <ClaimNow show={showPopup} onClose={handleClosePopup} hide={'hidden'} />}
                  </div>
                  <div>
                    <div>
                      <h1 className=" text-xl lg:text-[32px] font-bold font-inter text-gray-1">
                      Transaction details
                      </h1>
                    </div>
                    <div className=" ">
                      <div className=" flex flex-col gap-5 my-5">
                      <div className=" flex items-center justify-between">
                        <h1 className=" lg:text-lg font-normal font-Work-sans text-gray-2">Transaction date</h1>
                        <h1 className=" lg:text-xl font-semibold font-plus-jakarta-sans text-gray-1">Tuesday, 13 June 2024</h1>
                      </div>
                      <div className=" flex items-center justify-between">
                        <h1 className=" lg:text-lg font-normal font-Work-sans text-gray-2">Payment method</h1>
                        <h1 className=" lg:text-xl font-semibold font-plus-jakarta-sans text-gray-1">Mastercard ending with 232</h1>
                      </div>
                      <div className=" flex items-center justify-between">
                        <h1 className=" lg:text-lg font-normal font-Work-sans text-gray-2">Transaction ID</h1>
                        <h1 className=" lg:text-xl font-semibold font-plus-jakarta-sans text-gray-1">123453565544</h1>
                      </div>
                      <div className=" flex items-center justify-between">
                        <h1 className=" lg:text-lg font-normal font-Work-sans text-gray-2">Subtotal</h1>
                        <h1 className=" lg:text-xl font-semibold font-plus-jakarta-sans text-gray-1">$100.00</h1>
                      </div>
                      </div>
                      <div>
                        <hr />
                      </div>
                      <div className=" flex items-center justify-between mt-5">
                        <h1 className=" text-2xl font-normal font-Work-sans text-gray-2">Total</h1>
                        <h1 className=" text-2xl font-semibold font-plus-jakarta-sans text-gray-1">$100.00</h1>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCarListingDetails;
