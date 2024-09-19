import React from "react";
import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import Employees from "./Employees";
import { useState } from "react";
import ClaimNow from "./ClaimNow";
import { Layout } from "../../components/Layout/DashboardLayout";
import SkeletonFinanceNewCarListing from "../../components/Skeleton/SkeletonFinanceNewCarListing";
import { useEffect } from "react";

function Insurance() {
  const [isVisible, setIsVisible] = useState(false);

  const showDialog = () => {
    setIsVisible(true);
  };

  const closeDialog = () => {
    setIsVisible(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [popup, setpopup] = useState(null);
  const handleShowPopup = (index) => {
    setShowPopup(true);
    setpopup(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Layout active={"Dashboard"}>
        <div className="">
          <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <div className="heading flex items-center justify-between mb-5">
                <h1 className="text-lg lg:text-2xl font-semibold font-inter text-[#161616]">
                  New Insurance requests
                </h1>
                <button className="text-sm lg:text-base font-medium font-inter text-custom-blue">
                  View all
                </button>
              </div>
              {isLoading ? (
                <>
                  {Array(4)
                    .fill()
                    .map(() => (
                      <div className="py-4">
                        <SkeletonFinanceNewCarListing />
                      </div>
                    ))}
                </>
              ) : (
                <>
                  {Array(4)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className="card py-4">
                        <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3">
                            <div>
                              <img src={audiCar} alt="Car" className="" />
                            </div>
                            <div className=" text-center md:text-start">
                              <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                                Mercedes-Benz E 220 d
                              </h1>
                              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                                12th July 2024 11:00 - 12:00 PM
                              </h1>
                              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                                Winner Name:{" "}
                                <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">
                                  Sean Wills
                                </span>
                              </h1>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <button
                              onClick={() => {
                                handleShowPopup(index);
                              }}
                              className=" hover:text-white hover:bg-custom-blue hover:border-none w-full md:w-[150px] h-[44px] rounded-xl border border-gray-1 px-4 md:px-[25.5px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 flex items-center justify-center"
                            >
                              Approve
                            </button>
                            {popup === index && showPopup && (
                              <ClaimNow
                                show={showPopup}
                                onClose={handleClosePopup}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
            <div className="payments col-span-12 lg:col-span-4 ">
              <div className="flex items-center justify-start mb-10">
                <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                  Payments
                </h1>
              </div>
              <div className="border rounded-xl p-4 md:p-5 my-5 shadow-css">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                  <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-3">
                    <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-1">
                      Balance
                    </h1>
                    <h1 className="text-xl md:text-2xl font-semibold font-inter text-custom-blue">
                      $1500.00
                    </h1>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className=" hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue w-full md:w-[136px] h-[48px] px-4 md:px-[16px] py-2 md:py-[12px] bg-custom-blue text-white font-semibold font-inter text-sm rounded-xl">
                      Withdraw
                    </button>
                  </div>
                </div>
                <div className="photo">
                  <div className="photodown flex items-center justify-between border-b border-dashed py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={photo}
                        alt=""
                        className="w-10 h-10 md:w-auto md:h-auto"
                      />
                      <span className="text-sm md:text-base font-normal font-poppins text-gray-1">
                        Car Insurance
                      </span>
                    </div>
                    <div>
                      <h1 className="font-poppins text-sm md:text-base font-normal text-custom-blue">
                        +$250
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="photo">
                  <div className="photodown flex items-center justify-between border-b border-dashed py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={photo}
                        alt=""
                        className="w-10 h-10 md:w-auto md:h-auto"
                      />
                      <span className="text-sm md:text-base font-normal font-poppins text-gray-1">
                        Car Insurance
                      </span>
                    </div>
                    <div>
                      <h1 className="font-poppins text-sm md:text-base font-normal text-custom-blue">
                        +$250
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="photo">
                  <div className="photodown flex items-center justify-between border-b border-dashed py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={photo}
                        alt=""
                        className="w-10 h-10 md:w-auto md:h-auto"
                      />
                      <span className="text-sm md:text-base font-normal font-poppins text-gray-1">
                        Car Insurance
                      </span>
                    </div>
                    <div>
                      <h1 className="font-poppins text-sm md:text-base font-normal text-custom-blue">
                        +$250
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Insurance;
