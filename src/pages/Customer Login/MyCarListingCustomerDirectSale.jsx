import React, { useState } from "react";
import audi2 from "../../assets/images/audi2.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import Svgs from "../../assets/svgs/index";

function MyCarListingCustomerDirectSale() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState("2");

  const handleActive = (val) => {
    setIsActive(val);
  };
  const cars = [
    {
      buttonName: "View details",
    //   tickIcon: <Svgs.YellowTickVerified />,
    //   verification: "Verification pending",
      textColor: "text-[#FFB543]",
    },
    {
      buttonName: "View details",
      tickIcon: <Svgs.YellowTickVerified />,
      verification: "Verification pending",
      textColor: "text-[#FFB543]",
    },
    {
      buttonName: "View details",
      tickIcon: <Svgs.YellowTickVerified />,
      verification: "Verification pending",
      textColor: "text-[#FFB543]",
    },
    {
      buttonName: "View details",
      tickIcon: <Svgs.YellowTickVerified />,
      verification: "Verification pending",
      textColor: "text-[#FFB543]",
    },
  ];
  return (
    <>
      <Layout active={"My Car listings"}>
        <div className="">
          <div className="newRequests py-4 md:py-5">
            <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
              My car listings
            </h1>
            <div className="flex flex-wrap items-center gap-5 my-5">
              <button
                onClick={() => {
                  
                  navigate('/customer/customer-myCar-listing')
                }}
                className={`${
                  isActive === "1"
                    ? " bg-custom-blue text-white shadow-blue-300 shadow-2xl"
                    : " bg-white border border-gray-1 text-gray-1"
                } h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center `}
              >
                Wheeldealhub
              </button>
              <button
                onClick={() => {
                    handleActive("2");
                }}
                className={`${
                  isActive === "2"
                    ? " bg-custom-blue text-white shadow-blue-300 shadow-2xl"
                    : " bg-white border border-gray-1 text-gray-1"
                } h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center`}
              >
                Direct Sale
              </button>
            </div>
          </div>
          <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {cars.map((value, index) => {
              return (
                <div
                  key={index}
                  className="card border rounded-2xl flex flex-col gap-4 shadow-css"
                >
                  <div>
                    <img
                      src={audi2}
                      alt="Car"
                      className="w-full h-auto rounded-t-2xl"
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-base md:text-lg lg:text-base 2xl:text-lg font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                  </div>
                  <div className="flex items-center px-3 justify-between">
                    <h1 className="text-xs md:text-sm lg:text-xs 2xl:text-sm font-normal font-Work-sans text-gray-2">
                      45000 KM
                    </h1>
                    <Svgs.GrayDot />
                    <h1 className="text-xs md:text-sm lg:text-xs 2xl:text-sm font-normal font-Work-sans text-gray-2">
                      2018 Model
                    </h1>
                    <Svgs.GrayDot />
                    <h1 className="text-xs md:text-sm lg:text-xs 2xl:text-sm font-normal font-Work-sans text-gray-2">
                      Automatic
                    </h1>
                  </div>
                  <div className="px-3">
                    <h1 className="text-lg md:text-2xl lg:text-lg 2xl:text-2xl font-bold font-inter text-gray-1">
                      $22,500
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <span>{value.tickIcon}</span>
                    <p
                      className={`text-xs font-normal font-Work-sans ${value.textColor}`}
                    >
                      {value.verification}
                    </p>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button
                      onClick={() => {
                        navigate("/customer/mycar-listing-details");
                      }}
                      className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-blue-300 shadow-2xl"
                    >
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

export default MyCarListingCustomerDirectSale;
