import React from "react";

import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import { Navigate, useNavigate } from "react-router-dom";
function InsuranceMyOrder() {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-4 md:p-6 lg:p-8">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7">
            <div className="heading flex items-center justify-between mb-5">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                My Order
              </h1>
            </div>
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
                      </div>
                      <div>
                        <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          12th July 2024 11:00 - 12:00 PM
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          Winner Name: Sean Wills
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button onClick={() => { navigate("/dashboard/insuranceform1") }} className="w-full h-[44px] rounded-xl border px-2 md:px-[12px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-custom-blue border-custom-blue flex items-center justify-center">
                        Submit details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="payments col-span-12 lg:col-span-5 ">
            <div className="flex items-center justify-start mb-10">
              <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                History
              </h1>
            </div>
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
                      </div>
                      <div>
                        <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          12th July 2024 11:00 - 12:00 PM
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          Winner Name: Sean Wills
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InsuranceMyOrder;