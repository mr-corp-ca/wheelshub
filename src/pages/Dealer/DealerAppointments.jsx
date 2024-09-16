import React from "react";
import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";

function DealerAppointments() {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);

const showDialog = () => {
  setIsVisible(true);
};

const closeDialog = () => {
  setIsVisible(false);
};
  return (
    <>
    <Layout active={'Appointments'}>
    <div className="">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7">
            <div className="heading flex items-center justify-between mb-5">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
              Appointments
              </h1>
            </div>
            <div className="flex items-center gap-5">
            <div className="mt-4 md:mt-0">
                      <button  className=" h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
                      Verification appointments
                      </button>
                    </div>
            <div className="mt-4 md:mt-0">
                      <button  className=" h-[44px] rounded-lg bg-white border border-gray-1 text-gray-1 px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
                      Car handovers
                      </button>
                    </div>
               
            </div>
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border px-2 py-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
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
                      <button onClick={()=>{navigate('/dealer/dealer-detail-page')}} className="w-full md:w-[150px] h-[44px] rounded-xl border border-gray-1 px-4 md:px-[25.5px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 flex items-center justify-center">
                        Approve
                      </button>
                      {/* {isVisible && <Employees onClose={() => setIsVisible(false)} />} */}
                    </div>
                  </div>
                </div>
              ))}
               <div className="col-span-12 lg:col-span-7">   
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border px-2 py-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
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
                      <button onClick={()=>{navigate('/dealer/dealer-handover-details')}} className="w-full md:w-[156px] h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
                      Verify now
                      </button>
                      {/* {isVisible && <Employees onClose={() => setIsVisible(false)} />} */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>

          <div className="payments col-span-12 lg:col-span-5 ">
            <div className="flex items-center justify-start ">
              <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                History
              </h1>
            </div>
            {Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border px-2 py-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
                      </div>
                      <div>
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

         
        </div>
      </div>
      </Layout>
    </>
  )
}

export default DealerAppointments