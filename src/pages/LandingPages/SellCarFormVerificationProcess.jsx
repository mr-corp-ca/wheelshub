import React, { useState } from "react";
import manInCarImage from "../../assets/images/manincar.png";
import greentickicon from "../../assets/images/greentickicon.png";
import Navbar2 from "../../components/Navbar2";
import { Navigate, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import { useSellACarContext } from "../../Context/SellACarContext";



function SellCarFormVerificationProcess({selectSell}) {
  const navigate = useNavigate();
  const {selectSale} = useSellACarContext()
  console.log('hellooooooooo select',  selectSale)
  console.log('hellooooooooo select22222',  selectSell)
  return (
    <>
    <div className=" max-w-[1920px] mx-auto">
      <Navbar2 active={"Sell-A-Car"} />
      <div className=" firstpart bg-[#f3f3f3] h-fit  py-16 sm:py-44"></div>
      <div className="   max-w-[1170px] mx-auto  px-5 md:px-10 lg:pt-20 ">
        <div className="  rounded-2xl bg-white  ">
          <div className=" -mt-[30%] 2xl:-mt-[20%] rounded-xl border shadow-2xl mb-10 px-2 lg:px-10 py-8">
            <div className="flex items-center justify-center flex-col gap-5 px-5 md:px-10">
              <div>
                <img src={greentickicon} alt="" className="max-w-full h-auto" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-[36px] font-semibold font-inter text-gray-800 text-center">
                  Payment successful!
                </h1>
                <h1>{selectSell}</h1>
                <p className="my-5 text-base text-center md:text-start font-normal font-plus-jakarta-sans text-gray-600">
                  Payment of $100 is successfully paid to Wheeldealhub
                </p>
              </div>
            </div>
            <div className="border rounded-xl p-5 md:px-10">
              <div className="border-b border-dashed pb-3 flex flex-wrap  items-center justify-center  lg:justify-between w-full gap-4">
                <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5">
                  <div className="img ">
                    <img
                      src={manInCarImage}
                      alt=""
                      className="rounded-xl max-w-full h-auto"
                    />
                  </div>
                  <div className="outer flex flex-col lg:items-start items-center lg:justify-start justify-center text-center lg:text-start gap-2">
                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
                      <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-800">
                        Mechanic appointment
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1">
                      <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-600">
                        12th July 2024 11:00 - 12:00 PM
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1">
                      <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
                        7711 128 St, Surrey, BC V3W 4E6, Canada
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" lg:text-start text-center ">
                  <h1 className=" text-2xl font-semibold font-plus-jakarta-sans text-gray-800">
                    $50.00
                  </h1>
                </div>
              </div>
              <div className="py-10 flex flex-wrap  items-center  justify-center lg:justify-between w-full gap-4">
                <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5">
                  <div className="img">
                    <img
                      src={manInCarImage}
                      alt=""
                      className="rounded-xl max-w-full h-auto"
                    />
                  </div>
                  <div className="outer flex flex-col items-center lg:items-start justify-center lg:justify-start gap-2 text-center lg:text-start">
                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
                      <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-800">
                        Dealer appointment
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1">
                      <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-600">
                        12th July 2024 11:00 - 12:00 PM
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-1">
                      <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
                        7711 128 St, Surrey, BC V3W 4E6, Canada
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <h1 className="text-2xl font-semibold font-plus-jakarta-sans text-gray-800">
                    $50.00
                  </h1>
                </div>
              </div>

              <div className="py-5">
                <hr className="text-gray-500 border-2" />
              </div>

              <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div>
                  <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                    Transaction date
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                    10:00-11:00AM, 13 June 2024
                  </h1>
                </div>
              </div>
              <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div>
                  <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                    Payment method
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                    Credit Card
                  </h1>
                </div>
              </div>
              <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div>
                  <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                    Transaction ID
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                    1234567890
                  </h1>
                </div>
              </div>
              <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div>
                  <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                    Subtotal
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                    $100.00
                  </h1>
                </div>
              </div>

              <div className="py-5">
                <hr className="text-gray-500 border-2" />
              </div>
              <div className="my-5 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div>
                  <h1 className="text-2xl font-normal font-Work-sans text-gray-600">
                    Total
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                    $100.00
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                  className="text-lg rounded-xl font-Work-sans font-medium w-[123px] h-[48px] px-[24px] py-[12px] bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
    </>
  );
}

export default SellCarFormVerificationProcess;
