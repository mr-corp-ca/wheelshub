import React, { useState } from "react";
import greentick from "../../assets/images/tickofgreen.png";
import paymentImg from "../../assets/images/paymentimg.png";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Navbar2 from "../../components/Navbar2";
import Svgs from '../../assets/svgs/index'


function SellCarFormAppointmentDealerPaymentProcess() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar2/>
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
      <div className='grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:max-w-[90%] mx-auto px-5 md:px-10 lg:pt-20'>
          <div className='md:col-span-9 '>
            <h1 className='text-[20px]  lg:text-[48px] font-bold font-inter text-gray-800 '>
            Confirm Your Mechanic and Dealer
            Appointments - $50 Each
            </h1>
            <div className='flex flex-col gap-4 mt-5 '>
              <div className='flex items-center gap-5'>
                <Svgs.GreenTickIcon/>
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Guaranteed Time Slot</h1>
              </div>
              <div className='flex items-center gap-5'>
              <Svgs.GreenTickIcon/>
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Priority Service</h1>
              </div>
              <div className='flex items-center gap-5'>
              <Svgs.GreenTickIcon/>
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Commitment Assurance</h1>
              </div>
            </div>
          </div>
          <div className='hidden md:col-span-3 md:flex items-center justify-center '>
            <img src={paymentImg} alt="Man smiling" />
          </div>
        </div>
      </div>
      <div className="cardpart flex justify-center bg-white mx-5">
        <div className=" mb-16 -mt-16 w-full md:w-[90%] mx-auto bg-white border rounded-xl py-10 md:px-16">
        <div className="payment">
            <div className="rounded-xl">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl md:text-[28px] font-bold font-inter text-gray-800">
                  Make payment
                </h1>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-10">
                <div className="left w-full md:w-[50%]">
                  <div className="voucher border-b md:border-b-0 md:border-r p-5">
                    <div className="flex items-center justify-between my-5">
                      <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-600">
                        Mechanic appointment fee
                      </h1>
                      <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                        $50.00
                      </h1>
                    </div>
                    <div className="flex items-center justify-between my-5 border-b pb-4">
                      <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-600">
                        Dealer appointment fee
                      </h1>
                      <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                        $50.00
                      </h1>
                    </div>
                    <div className="flex items-center justify-between my-7">
                      <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-600">
                        Total amount to pay
                      </h1>
                      <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                        $100.00
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="right w-full md:w-[50%]">
                  <div className="voucher p-5">
                    <div>
                      <label
                        htmlFor="card-number"
                        className="block text-sm md:text-base font-medium font-inter text-gray-800"
                      >
                        Card number
                      </label>
                      <input
                        id="card-number"
                        className="w-full px-4 py-3 md:px-[16px] md:py-[12.5px] border rounded-xl my-2"
                        placeholder="0000 0000 0000"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 my-5">
                      <div className="w-full">
                        <label
                          htmlFor="valid-through"
                          className="block text-sm md:text-base font-medium font-inter text-gray-800"
                        >
                          Valid through
                        </label>
                        <input
                          id="valid-through"
                          className="w-full px-4 py-3 md:px-[16px] md:py-[12.5px] border rounded-xl my-2"
                          placeholder="00/00"
                          type="text"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="cvv"
                          className="block text-sm md:text-base font-medium font-inter text-gray-800"
                        >
                          CVV
                        </label>
                        <input
                          id="cvv"
                          className="w-full px-4 py-3 md:px-[16px] md:py-[12.5px] border rounded-xl my-2"
                          placeholder="000"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-4 md:mt-0">
                    <button className="text-sm md:text-lg font-Work-sans font-medium text-gray-800 border border-gray-800 rounded-lg h-[44px] md:h-[52px] w-[180px] md:w-[226px] flex items-center justify-center">
                      + Add new card
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center pb-4 md:pb-5">
                <button
                  onClick={() => navigate("/sellyourcar/verification-process")}
                  className="h-[44px] md:h-[52px] px-[24px] md:px-[44px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue"
                >
                  Proceed to pay
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      <Banner/>
    </>
  );
}
export default SellCarFormAppointmentDealerPaymentProcess;