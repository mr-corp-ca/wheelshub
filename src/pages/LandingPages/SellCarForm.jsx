import React, { useState } from 'react';
import mansmiling from "../../assets/images/mansmiling.png";
import greentick from "../../assets/images/tickofgreen.png";
import { Input } from '../../components/Input';
import Navbar2 from '../../components/Navbar2';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';

function SellCarForm() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar2 />
      <div className='firstpart bg-[#f3f3f3] h-fit py-32 '>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:w-[80%] mx-auto '>
          <div className='md:col-span-6 mx-5 lg:mx-0'>
            <h1 className='text-[30px] lg:text-[48px] font-bold font-inter text-gray-800 '>
              Enter Your Personal Information
            </h1>
            <div className='flex flex-col gap-4 my-10'>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Higher profits</h1>
              </div>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>Easy process</h1>
              </div>
              <div className='flex items-center gap-5'>
                <img src={greentick} alt="Green tick" />
                <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-800'>100% Trusted</h1>
              </div>
            </div>
          </div>
          <div className='hidden md:col-span-6 lg:flex items-center justify-center -mr-10'>
            <img src={mansmiling} alt="Man smiling" />
          </div>
        </div>
       
      </div>
      <div className='bg-white flex justify-center mx-5 lg:mx-0'>
      <div className='details border bg-white rounded-xl w-full md:w-[80%] mx-auto py-10 px-5 md:px-32 -mt-32 mb-20'>
          <div className='flex items-center justify-center'>
            <h1 className='text-2xl md:text-3xl font-inter font-bold text-gray-800'>Enter personal details</h1>
          </div>
          <div className='mt-5'>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
              <div className="w-full">
                <Input label="Full name" placeholder="Full name" />
              </div>
              <div className="w-full">
                <Input label="Last name" placeholder="Last name" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-5">
              <div className="w-full">
                <Input type="number" label="Phone Number" placeholder="+1" />
              </div>
              <div className="w-full">
                <Input label="Email ID" placeholder="Email id" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <Input label="Street address" placeholder="Type address" />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center pt-10 pb-5'>
            <button
              onClick={() => navigate("/sellyourcar/findmechanic")}
              className="h-11 w-32 rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Next
            </button>
          </div>
        </div>
      </div>
      <Banner/>
    </>
  );
}

export default SellCarForm;