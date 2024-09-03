import React from "react";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import bluetick from "../../assets/images/verified.png"
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
function MyCarListingCustomer() {
  const navigate = useNavigate()
    const cars = [
        {
            buttonName: "View details",
            tickIcon: yellowTick,
            verification: "Verification pending",
            textColor : "text-[#FFB543]"
        },
        {
            buttonName: "Handover the car",
            tickIcon: bluetick,
            verification: "Verified",
            textColor: "text-custom-blue"
        },
        {
            buttonName: "View details",
            tickIcon: yellowTick,
            verification: "Verification pending",
            textColor : "text-[#FFB543]"
        }
    ]
  return (
    <>
    <Layout active={'My Car listings'}>
      <div className="">
        <div className="newRequests py-4 md:py-5">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
          My car listings
          </h1>
          <div className="flex flex-wrap items-center gap-5 my-5">
                    <button className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
                    Wheeldealhub
                    </button>
                    <button className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg border border-gray-1 text-sm md:text-lg font-medium font-Work-sans bg-white text-gray-1 flex items-center justify-center">
                    Direct selling
                    </button>
                  </div>
        </div>
        <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {
            cars.map((value, index) => {
              return (
                <div key={index} className="card border rounded-2xl flex flex-col gap-4 ">
                  <div>
                    <img src={audi2} alt="Car" className="w-full h-auto rounded-t-2xl" />
                  </div>
                  <div className="px-3">
                    <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                  </div>
                  <div className="flex items-center px-3 justify-between">
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">45000 KM</h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">2018 Model</h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">Automatic</h1>
                  </div>
                  <div className="px-3">
                    <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">$22,500</h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <img src={value.tickIcon} alt="" />
                    <p className={`text-xs font-normal font-Work-sans ${value.textColor}`}>{value.verification}</p>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button onClick={()=>{navigate("/customer/mycarlistingdetails")}} className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
                      {value.buttonName}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      </Layout>
    </>
  );
}

export default MyCarListingCustomer;