import React from "react";

import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
function MechanicAppointments() {
  const navigate = useNavigate()
  return (
    <>
    <Layout active={'Appointments'}>
      <div className="">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <div className="heading flex items-center justify-between">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
              Appointments
              </h1>
            </div>
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-4 rounded-xl flex flex-col md:flex-row justify-between items-center">
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
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          Winner Name:{" "} <span className="text-sm lg:text-lg font-medium font-Work-sans text-gray-2">Sean Wills</span> 
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button onClick={() => { navigate("/mechanic/mechanic-verify-now") }} className=" hover:text-white hover:bg-custom-blue hover:border-none w-full md:h-[44px] rounded-xl border px-2 md:px-5 py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 border-gray-1 flex items-center justify-center">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="payments col-span-12 lg:col-span-5 ">
            <div className="flex items-center justify-start">
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
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-green">
                        Verified by you
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                        12-07-2024 11:00 PM
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default MechanicAppointments;