import React, { useState } from "react";
import manInCarImage from "../../assets/images/manincar.png";
import greentickicon from "../../assets/images/greentickicon.png";
import Navbar2 from "../../components/Navbar2";
import { Navigate, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import { useSellACarContext } from "../../Context/SellACarContext";



function CarListedSuccessfully({selectSell}) {
  const navigate = useNavigate();
  const {selectSale} = useSellACarContext()
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
                <h1 className="text-2xl sm:text-[36px] font-semibold font-inter text-gray-800 text-center pt-4">
                Car listed successfully
                </h1>
                <h1>{selectSell}</h1>
                <p className="my-5 text-base text-center  font-normal font-plus-jakarta-sans text-gray-600">
                You can check and edit your listing in  my profile
                </p>
              </div>
            </div>
            <div className=" w-[547px] h-[148px] border rounded-xl flex items-center gap-x-4 justify-center mx-auto my-10">
                <button className=" border rounded-xl w-[186px] h-[52px] text-lg font-medium font-Work-sans text-gray-1">Close</button>
                <button onClick={()=>{navigate('/customer/mycar-listing-customer-directsale')}} className=" bg-custom-blue w-[186px] h-[52px] rounded-xl text-white text-lg font-medium font-Work-sans">Check now</button>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
    </>
  );
}

export default CarListedSuccessfully;
