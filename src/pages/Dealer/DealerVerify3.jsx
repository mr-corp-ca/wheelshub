import React from "react";
import { useNavigate } from "react-router-dom";
import graystars from "../../assets/images/graystars.png";
import crossIcon from "../../assets/images/crossIcon.png";  // Assuming the close icon image file is crossIcon.png
import VerifiedSuccessful from "./VerifiedSuccessful";
import { useState } from "react";
import Stars from "../Mechanic/Stars";
import { Layout } from "../../components/Layout/DashboardLayout";
function DealerVerifyNow3() {
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <Layout active={'Dashboard'}>
      <div className="my-5">
        <h1 className="text-2xl font-semibold font-inter text-gray-1">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-row items-center gap-x-2">
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
        <div className="flex flex-row font-poppins text-xs lg:text-lg">
          <p
            onClick={() => navigate(-1)}
            className="text-gray-1 hover:cursor-pointer hover:text-black font-medium"
          >
            Car verification/
          </p>
          <p className="font-semibold text-custom-blue">
            Mercedes-Benz E 220 D
          </p>
        </div>
      </div>
      <div className="flex my-5">
        <div className="w-full lg:w-[90%] border lg:px-0 px-3 py-8 md:py-16 rounded-xl">
          <div className="flex items-center justify-center flex-col gap-6">
            <h1 className="text-lg md:text-[28px] font-bold font-inter text-gray-1">
              Car condition review
            </h1>
          </div>
          <div className="pt-3 w-full md:w-[80%] mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-5">
                <div className="space-y-4 md:space-y-0 pt-3">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="engine1"
                          className="block text-base font-medium font-inter text-gray-1"
                        >
                          Engine
                        </label>
                        {/* <img src={graystars} alt="Rating" /> */}
                        <Stars/>
                      </div>
                      <div className="pt-1">
                        <textarea
                          id="engine1"
                          className="border outline-none rounded-xl p-3 bg-[#fafafa] w-full"
                          rows={5}
                          placeholder="Type here"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="engine2"
                          className="block text-base font-medium font-inter text-gray-1"
                        >
                          Exterior
                        </label>
                        {/* <img src={graystars} alt="Rating" /> */}
                        <Stars/>
                      </div>
                      <div className="pt-1">
                        <textarea
                          id="engine2"
                          className="border outline-none rounded-xl p-3 bg-[#fafafa] w-full"
                          rows={5}
                          placeholder="Type here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 py-5">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="engine3"
                          className="block text-base font-medium font-inter text-gray-1"
                        >
                          Interior
                        </label>
                        {/* <img src={graystars} alt="Rating" /> */}
                        <Stars/>
                      </div>
                      <div className="pt-1">
                        <textarea
                          id="engine3"
                          className="border outline-none rounded-xl p-3 bg-[#fafafa] w-full"
                          rows={5}
                          placeholder="Type here"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="engine4"
                          className="block text-base font-medium font-inter text-gray-1"
                        >
                          Tires
                        </label>
                        {/* <img src={graystars} alt="Rating" /> */}
                        <Stars/>
                      </div>
                      <div className="pt-1">
                        <textarea
                          id="engine4"
                          className="border outline-none rounded-xl p-3 bg-[#fafafa] w-full"
                          rows={5}
                          placeholder="Type here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full text-center flex items-center justify-center">
                <button
                  onClick={handleShowPopup}
                  className="w-[224px] text-sm rounded-lg px-2 py-3 font-inter font-semibold bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                  title="Mark as verified"
                >
                  Mark as verified
                </button>
                {showPopup && <VerifiedSuccessful show={showPopup} onClose={handleClosePopup} />}

              </div>
            </form>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default DealerVerifyNow3;
