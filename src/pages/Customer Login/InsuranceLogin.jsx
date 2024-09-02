import React from "react";
import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";

function InsuranceLogin() {
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
    <Layout active={'Insurance'}>
    <div className="">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-7">
            <div className="heading flex items-center justify-between mb-5">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
              Insurance
              </h1>
            </div>
           
            {Array(1)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="" />
                      </div>
                      <div className=" text-center sm:text-start">
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
                      <button onClick={()=>{navigate('/customer/insuranceactivedetail')}} className="w-[159px] h-[44px] rounded-xl border border-gray-1 px-4  py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 flex items-center justify-center">
                      View details
                      </button>
                      {/* {isVisible && <Employees onClose={() => setIsVisible(false)} />} */}
                    </div>
                  </div>
                </div>
              ))}
              
          </div>

          <div className="payments col-span-12 lg:col-span-5 ">
            <div className="flex items-center justify-start ">
              <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
              Insurance policy verifications
              </h1>
            </div>
            {Array(1)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="" />
                      </div>
                      <div className=" text-center sm:text-start">
                        <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
                        </h1>
                        <h1 className="text-sm lg:text-base font-medium font-Work-sans text-[#FFB543]">
                        Verification pending
                        </h1>
                        <div className=" flex items-center sm:items-start justify-center sm:justify-start">
                        <button onClick={()=>{navigate('/customer/insurancedetails')}} className=" border border-custom-blue rounded-xl px-[10px] py-[11.5px] text-custom-blue h-[44px] flex items-center justify-center mt-4 text-lg font-medium font-Work-sans">
                        Verify now
                        </button>

                        </div>
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

export default InsuranceLogin