import React from 'react'
import { useNavigate } from 'react-router-dom'
import man1img from "../../assets/images/insuranceMan1.png"
import man2img from "../../assets/images/insuranceMan2.png"
import man3img from "../../assets/images/insuranceMan3.png"
import documentIcon from "../../assets/images/system-uicons_document.png"
import { useState } from 'react'
import VerifiedSuccessful from './VerifiedSuccessful'
import { Layout } from '../../components/Layout/DashboardLayout'

function AppointmentsDetails() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const navigate = useNavigate()
  return (
    <>
    <Layout active={'Appointments'}>
      <div className="">
        <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">Insurance</h1>
      </div>
      <div className='flex items-center gap-2 md:gap-x-2 my-5'>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
        </svg>
        <div className='flex flex-col md:flex-row font-poppins font-normal text-base'>
          <p onClick={() => navigate(-1)} className='text-gray-1 hover:cursor-pointer hover:text-black'>Insurance/</p>
          <p onClick={() => navigate(-1)} className='text-gray-1 hover:cursor-pointer hover:text-black'>Insurance policy verification/</p>
          <p className='font-semibold text-custom-blue'>Mercedes-Benz E 220 D</p>
        </div>
      </div>
      <div className=''>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <div className='col-span-1 lg:col-span-7'>
            <div className='border shadow-css rounded-xl p-5 h-fit'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Insurance details</h1>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-between pt-5 gap-5 md:gap-5'>
                <div className='flex flex-col gap-5 w-full md:w-[50%]'>
                  <div className='flex items-center justify-between gap-1'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Insurance agent</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>LB Insurance</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Start date</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>02-7-2024</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Customer</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Jack</h1>
                  </div>
                </div>
                <div className='flex flex-col gap-5 w-full md:w-[50%]'>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Insurance price</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>$3600</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>End date</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>01-7-2025</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Rep. name</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>John</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='border shadow-css rounded-xl p-5 col-span-1 lg:col-span-5 my-7'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Documents</h1>
              </div>
              <div className='pt-10 flex flex-col md:flex-row items-center gap-6 flex-wrap'>
                <div className='flex flex-col items-center gap-2'>
                  <div className='border shadow-css rounded-xl w-fit p-5 flex items-center justify-center flex-col gap-5 shadow-sm'>
                    <img src={documentIcon} alt="" />
                    <button className='px-5 py-2 border border-gray-1 rounded-xl text-base font-medium font-Work-sans text-gray-1 hover:bg-custom-blue hover:text-white hover:border-none'>Download</button>
                  </div>
                  <div>
                    <h1 className='text-base font-medium font-Work-sans text-gray-1'>Registration form</h1>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <div className='border shadow-css rounded-xl w-fit p-5 flex items-center justify-center flex-col gap-5 shadow-sm'>
                    <img src={documentIcon} alt="" />
                    <button className='px-5 py-2 border border-gray-1 rounded-xl text-base font-medium font-Work-sans text-gray-1 hover:bg-custom-blue hover:text-white hover:border-none'>Download</button>
                  </div>
                  <div>
                    <h1 className='text-base font-medium font-Work-sans text-gray-1'>Document 1</h1>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <div className='border shadow-css rounded-xl w-fit p-5 flex items-center justify-center flex-col gap-5 shadow-sm'>
                    <img src={documentIcon} alt="" />
                    <button className='px-5 py-2 border border-gray-1 rounded-xl text-base font-medium font-Work-sans text-gray-1 hover:bg-custom-blue hover:text-white hover:border-none'>Download</button>
                  </div>
                  <div>
                    <h1 className='text-base font-medium font-Work-sans text-gray-1'>Bill receipt</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='border shadow-css rounded-xl p-5 bg-[#f0f4fe]'>
              <div className='w-full md:w-[50%] flex items-center flex-col justify-center mx-auto gap-5'>
                <div>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Verify now</h1>
                </div>
                <div className='text-center'>
                  <h1 className='text-base font-medium font-inter text-gray-2'>
                    Are you sure all the documents are information is correct?
                  </h1>
                </div>
                <div>
                  <button onClick={handleShowPopup} className=' hover:bg-[#f0f4fe] hover:text-custom-blue hover:border-custom-blue hover:border w-[136px] h-[48px] px-4 py-2 rounded-xl bg-custom-blue text-white text-sm font-semibold font-inter'>Verify now</button>
                  {showPopup && <VerifiedSuccessful show={showPopup} onClose={handleClosePopup} />}
                </div>
              </div>
            </div>
          </div>

          <div className='border shadow-css rounded-xl p-5 py-10 col-span-1 lg:col-span-5'>
            <div>
              <h1 className='text-xl md:text-[32px] font-bold font-inter text-gray-1'>Insurance details</h1>
            </div>
            <div className='rounded-xl bg-[#eeeeee] p-5 my-5'>
              <div className='flex flex-col gap-4'>
                <div>
                  <h1 className='md:text-lg font-medium font-Work-sans text-gray-4'>Insurance policy date</h1>
                </div>
                <div>
                  <h1 className='text-lg md:text-2xl font-semibold font-inter text-gray-1'>14-07-2024, 11:00 AM</h1>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <h1 className='md:text-lg font-medium font-Work-sans text-gray-4'>Address:</h1>
                  <span className='md:text-lg font-medium font-Work-sans text-custom-blue'>7711 128 St, Surrey, BC V3W 4E6, Canada</span>
                </div>
              </div>
            </div>
            <div>
              <div className='py-3 border-b border-dashed flex flex-col md:flex-row items-center gap-5'>
                <div>
                  <img src={man3img} alt="" />
                </div>
                <div className='flex items-center md:items-start justify-center md:justify-start flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                </div>
              </div>
            </div>
            <div className='pt-4'>
              <div className='py-3 border-b border-dashed flex items-center flex-col md:flex-row gap-5'>
                <div>
                  <img src={man2img} alt="" />
                </div>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                  <p className='text-lg font-medium font-Work-sans text-custom-blue'>+1 699 656 5554</p>
                </div>
              </div>
            </div>
            <div className='pt-4'>
              <div className='py-3 flex items-center flex-col md:flex-row gap-5'>
                <div>
                  <img src={man1img} alt="" />
                </div>
                <div className='flex items-center md:items-start justify-center md:justify-start flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default AppointmentsDetails
