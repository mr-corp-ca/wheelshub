import React from "react";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import { useState, useEffect } from "react";
import SkeletonBuyACar from "../../components/Skeleton/SkeletonBuyACar";
import SkeletonFinanceMyOrder from "../../components/Skeleton/SkeletonFinanceMyOrder";
import Svgs from '../../assets/svgs/index.js'

function MyOrder() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    <Layout active={'My orders'}>
      <div className="">
        <div className="newRequests py-4 ">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
            New requests
          </h1>
        </div>
        {isLoading ? (
          <>
          <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:flex 2xl:items-center 2xl:gap-x-[33px]">
          {Array(4).fill().map(()=>(
            <SkeletonFinanceMyOrder/>
          ))}
          </div>
          </>
        ):(
          <>
        <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:flex 2xl:items-center 2xl:gap-x-[33px]">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div key={index} className="card border rounded-2xl flex flex-col gap-4  shadow-css">
                  <div>
                    <img src={audi2} alt="Car" className="w-full h-auto rounded-t-2xl" />
                  </div>
                  <div className="px-3">
                    <h1 className="text-base md:text-lg lg:text-base 2xl:text-lg font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                  </div>
                  <div className="flex items-center px-3 justify-between">
                    <h1 className="text-xs md:text-sm lg:text-[10px] 2xl:text-sm font-normal font-Work-sans text-gray-2">45000 KM</h1>
                    <Svgs.GrayDotIcon/>
                    <h1 className="text-xs md:text-sm lg:text-[10px] 2xl:text-sm font-normal font-Work-sans text-gray-2">2018 Model</h1>
                    <Svgs.GrayDotIcon/>
                    <h1 className="text-xs md:text-sm lg:text-[10px] 2xl:text-sm font-normal font-Work-sans text-gray-2">Automatic</h1>
                  </div>
                  <div className="px-3">
                    <h1 className="2xl:text-2xl font-bold font-inter text-gray-1">$22,500</h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <Svgs.YellowTickVerified/>
                    <p className="text-xs font-normal font-Work-sans text-[#FFB543]">Verification pending</p>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button onClick={()=>{navigate('/finance/chats')}} className="w-full max-w-[132px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
                      Chat now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
          </>
        )}
      </div>
      </Layout>
    </>
  );
}

export default MyOrder;
