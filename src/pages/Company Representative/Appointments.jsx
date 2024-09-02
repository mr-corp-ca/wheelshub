import React, { useState } from "react";

import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
function Appointments() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("mechanic");

  const hnadleClick = (item) => {
    setActiveTab(item);
  };
  return (
    <>
    <Layout active={'Appointments'}>
      <div className="">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-5">
          {activeTab === "mechanic" && (
            <>
              <div className="col-span-12 lg:col-span-7">
                <div className="">
                  <div className="heading flex items-center justify-between mb-5">
                    <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                      Appointments
                    </h1>
                  </div>
                  <div className="flex  flex-wrap  items-center gap-5 pb-5">
                    <button
                      onClick={() => {
                        hnadleClick("mechanic");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "mechanic"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Mechanic
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("dealer");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "dealer"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Dealer
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("handover");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "handover"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Handover
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("insurance");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "insurance"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Insurance
                    </button>
                  </div>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
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
                            <div className="flex justify-center md:justify-start items-center gap-2">
                              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                                Winner Name:
                              </h1>
                              <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">
                                Sean Wills
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button
                            onClick={() => {
                              navigate("/representative/appointmentsdetails");
                            }}
                            className=" hover:bg-custom-blue hover:text-white hover:shadow-2xl hover:shadow-custom-blue w-[150px] h-[44px] rounded-lg border px-2 md:px-[26px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-[#6f9cff] border-[#6f9cff] flex items-center justify-center"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="payments col-span-12 lg:col-span-5 ">
                <div className="flex items-center justify-start ">
                  <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                    History
                  </h1>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                          <div>
                            <img src={audiCar} alt="Car" className="" />
                          </div>
                          <div className=" text-center md:text-start">
                            <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                              Mercedes-Benz E 220 d
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-[#38A242]">
                              Car handover done
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                              12th July 2024 11:00 - 12:00 PM
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
          {activeTab === "dealer" && (
            <>
              <div className="col-span-12 lg:col-span-7">
                <div className=" ">
                  <div className="heading flex items-center justify-between mb-5">
                    <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                      Appointments
                    </h1>
                  </div>
                  <div className="flex  flex-wrap  items-center gap-5 pb-5">
                    <button
                      onClick={() => {
                        hnadleClick("mechanic");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "mechanic"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Mechanic
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("dealer");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "dealer"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Dealer
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("handover");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "handover"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Handover
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("insurance");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "insurance"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Insurance
                    </button>
                  </div>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
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
                            <div className="flex justify-center md:justify-start items-center gap-2">
                              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                                Winner Name:
                              </h1>
                              <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">
                                Sean Wills
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button
                            onClick={() => {
                              navigate("/representative/dealerdetailscompany");
                            }}
                            className=" hover:bg-custom-blue hover:text-white hover:shadow-2xl hover:shadow-custom-blue w-[150px] h-[44px] rounded-lg border px-2 md:px-[26px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-[#6f9cff] border-[#6f9cff] flex items-center justify-center"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="payments col-span-12 lg:col-span-5 ">
                <div className="flex items-center justify-start ">
                  <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                    History
                  </h1>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                          <div>
                            <img src={audiCar} alt="Car" className="" />
                          </div>
                          <div className=" text-center md:text-start">
                            <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                              Mercedes-Benz E 220 d
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-[#38A242]">
                              Car handover done
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                              12th July 2024 11:00 - 12:00 PM
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
          {activeTab === "handover" && (
            <>
              <div className="col-span-12 lg:col-span-7">
                <div className="">
                  <div className="heading flex items-center justify-between mb-5">
                    <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                      Appointments
                    </h1>
                  </div>
                  <div className="flex  flex-wrap  items-center gap-5 pb-5">
                    <button
                      onClick={() => {
                        hnadleClick("mechanic");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "mechanic"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Mechanic
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("dealer");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "dealer"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Dealer
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("handover");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "handover"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Handover
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("insurance");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "insurance"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Insurance
                    </button>
                  </div>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
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
                            <div className="flex justify-center md:justify-start items-center gap-2">
                              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                                Winner Name:
                              </h1>
                              <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">
                                Sean Wills
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button
                            onClick={() => {
                              navigate("/representative/appointmentsdetails");
                            }}
                            className=" hover:bg-custom-blue hover:text-white hover:shadow-2xl hover:shadow-custom-blue w-[150px] h-[44px] rounded-lg border px-2 md:px-[26px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-[#6f9cff] border-[#6f9cff] flex items-center justify-center"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="payments col-span-12 lg:col-span-5 ">
                <div className="flex items-center justify-start ">
                  <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                    History
                  </h1>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                          <div>
                            <img src={audiCar} alt="Car" className="" />
                          </div>
                          <div className=" text-center md:text-start">
                            <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                              Mercedes-Benz E 220 d
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-[#38A242]">
                              Car handover done
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                              12th July 2024 11:00 - 12:00 PM
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
          {activeTab === "insurance" && (
            <>
              <div className="col-span-12 lg:col-span-7">
                <div className="">
                  <div className="heading flex items-center justify-between mb-5">
                    <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                      Appointments
                    </h1>
                  </div>
                  <div className="flex  flex-wrap  items-center gap-5 pb-5">
                    <button
                      onClick={() => {
                        hnadleClick("mechanic");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "mechanic"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Mechanic
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("dealer");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "dealer"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Dealer
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("handover");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "handover"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Handover
                    </button>
                    <button
                      onClick={() => {
                        hnadleClick("insurance");
                      }}
                      className={` rounded-xl text-lg font-medium font-Work-sans px-[16px] py-[10px] ${
                        activeTab === "insurance"
                          ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                          : " bg-white text-gray-1 border border-gray-1"
                      }`}
                    >
                      Insurance
                    </button>
                  </div>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                          <div>
                            <img
                              src={audiCar}
                              alt="Car"
                              className=""
                            />
                          </div>
                          <div className="text-center md:text-start">
                            <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                              Mercedes-Benz E 220 d
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                              12th July 2024 11:00 - 12:00 PM
                            </h1>
                            <div className="flex justify-center md:justify-start items-center gap-2">
                              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                                Winner Name:
                              </h1>
                              <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">
                                Sean Wills
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button
                            onClick={() => {
                              navigate("/representative/appointmentsdetails");
                            }}
                            className=" hover:bg-custom-blue hover:text-white hover:shadow-2xl hover:shadow-custom-blue hover:border-none w-[150px] h-[44px] rounded-lg border px-2 md:px-[26px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 border-gray-1 flex items-center justify-center"
                          >
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="payments col-span-12 lg:col-span-5 ">
                <div className="flex items-center justify-start ">
                  <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                    History
                  </h1>
                </div>
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="card py-4">
                      <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                          <div>
                            <img
                              src={audiCar}
                              alt="Car"
                              className=""
                            />
                          </div>
                          <div className=" text-center md:text-start">
                            <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                              Mercedes-Benz E 220 d
                            </h1>
                            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-[#FFB543]">
                              Verification pending
                            </h1>
                            <div className="mt-4 flex items-center justify-center">
                              <button
                                onClick={() => {
                                  navigate("/representative/appointmentsdetails");
                                }}
                                className=" hover:bg-custom-blue hover:text-white  w-[150px] h-[44px] rounded-xl border px-2 md:px-[12px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-custom-blue border-custom-blue flex items-center justify-center"
                              >
                                Verify now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Appointments;
