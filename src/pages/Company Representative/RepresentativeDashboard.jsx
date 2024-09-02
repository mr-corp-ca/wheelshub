import React from "react";

import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import manincar from "../../assets/images/manincar.png"
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
function RepresentativeDashboard() {
  const navigate = useNavigate()
  return (
    <>
    <Layout active={'Dashboard'}>
      <div className=" my-5">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-7">
          <div className="heading flex items-center justify-between">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
              Car handovers
              </h1>
              <button className="text-base font-medium font-inter text-custom-blue">
                View all
              </button>
            </div>
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row  items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="" />
                      </div>
                      <div className=" text-center md:text-start">
                        <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4 ">
                          12th July 2024 11:00 - 12:00 PM
                        </h1>
                        <div className="flex justify-center md:justify-start items-center gap-2">
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          Winner Name: 
                        </h1>
                        <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">Sean Wills</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button onClick={()=>{navigate("/representative/insuranceformcompany")}}  className="w-[150px] h-[44px] hover:bg-custom-blue hover:text-white hover:border-none rounded-lg border px-2 md:px-[26px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 border-gray-1 flex items-center justify-center">
                      Verify
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="payments col-span-12 lg:col-span-5 ">
            <div className="flex items-center justify-start">
              <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
              Insurance policy verifications
              </h1>
            </div>
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="" />
                      </div>
                      <div className=" text-center md:text-start flex md:items-start items-center justify-center md:justify-start flex-col">
                        <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
                        </h1>
                        <h1 className="text-sm lg:text-base font-medium font-Work-sans text-[#FFB543]">
                        Verification pending
                        </h1>
                        <button onClick={()=>{navigate("/representative/insuranceformcompany")}} className=" hover:bg-custom-blue hover:text-white  w-fit border border-custom-blue rounded-xl px-[10px] py-[11.5px] text-custom-blue h-[44px] flex items-center justify-center mt-4 text-lg font-medium font-Work-sans">
                        Verify now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-span-12 lg:col-span-7">
          <div className="heading flex items-center justify-between">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
              Business Verifications
              </h1>
              <button className="text-base font-medium font-inter text-custom-blue">
                View all
              </button>
            </div>
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex md:flex-row flex-col items-center gap-3">
                      <div>
                        <img src={manincar} alt="Car" className="" />
                      </div>
                      <div className=" text-center md:text-start">
                        <h1 className="text-base lg:text-xl font-semibold font-inter text-gray-1">
                        Surrey Car Dealers
                        </h1>
                        <div className="flex justify-center md:justify-start items-center gap-2">
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                        Contact person: 
                        </h1>
                        <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">Sean Wills</span>
                        </div>
                        <h1 className="text-sm lg:text-base font-normal font-Work-sans text-custom-blue underline">
                        7711 128 St, Surrey, BC V3W 4E6, Canada
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button onClick={()=>{navigate("/representative/insuranceformcompany")}} className="w-[150px] h-[44px] hover:bg-custom-blue hover:text-white hover:border-none rounded-xl border px-2 md:px-[12px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-custom-blue border-custom-blue flex items-center justify-center">
                      Verify now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="payments col-span-12 lg:col-span-5 ">
            <div className="flex items-center justify-start">
              <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                Payments
              </h1>
            </div>
            <div className="border rounded-xl p-4 md:p-5 my-5">
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

export default RepresentativeDashboard;