import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import audiimg from "../../assets/images/audi14.png"
import next from "../../assets/images/nextIcon.png"
import prev from "../../assets/images/prevIcon.png"
import car11 from "../../assets/images/car11.png"
import car12 from "../../assets/images/car12.png"
import car13 from "../../assets/images/man13.png"
import car14 from "../../assets/images/man14.png"
import mechanicMan from "../../assets/images/mechanicMan.png"
import man1img from "../../assets/images/insuranceMan1.png"
import man2img from "../../assets/images/insuranceMan2.png"
import man3img from "../../assets/images/insuranceMan3.png"
import maninsuit from "../../assets/images/mansuit.png"
import greentick from "../../assets/images/greentick3.png"
import goldstars from "../../assets/images/goldstars.png"
function DealerVerification() {
    const review = [
        {
            name: "Engine"
        },
        {
            name: "Exterior"
        },
        {
            name: "Tires"
        },
        {
            name: "Interior"
        }
    ]
    const navigate = useNavigate()
  return (
    <>
    
      <div className='grid grid-cols-12 p-3'>
        <div className='flex flex-col gap-4 col-span-7 lg:col-span-9'>
        <div className="">
        <h1 className="text-base md:text-2xl font-semibold font-inter text-gray-1">My car listings</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-2 md:gap-x-2 '>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
        </svg>
        <div className='flex flex-col md:flex-row font-poppins font-normal text-base'>
          <p onClick={() => navigate(-1)} className='text-gray-1 text-sm lg:text-base hover:cursor-pointer hover:text-black'>My car listings/Merc...../</p>
          <p className=' text-sm lg:text-base font-semibold text-custom-blue'>Mechanic verification</p>
        </div>
      </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 px-3 gap-3'>   
        <div className='leftpart col-span-7'>

        <div className='border rounded-xl p-5 flex items-center gap-5 flex-wrap'>
                <div>
                  <img src={mechanicMan} className='w-full' alt="" />
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-sm md:text-2xl font-semibold font-inter text-gray-1'>Mechanic appointment</h1>
                  <div className='flex items-center gap-2 pt-2'>
                    <img src={greentick} alt="" />
                    <h1 className=' text-lg font-medium font-Work-sans text-[#38A242]'>Verified by Mechanic</h1>
                </div>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                  <p className='text-lg font-medium font-Work-sans text-custom-blue'>+1 699 656 5554</p>
                </div>
              </div>


            <div className='img pt-5'>
                <img src={audiimg} className='w-full' alt="" />
            </div>
            <div className='images flex items-center justify-between py-5'>
                <img src={prev} alt="" />
                <img src={car14} alt="" className='hidden md:inline-block' />
                <img src={car12} alt="" className='hidden md:inline-block' />
                <img src={car12} alt="" className='hidden md:inline-block' />
                <img src={car11} alt="" />
                <img src={next} alt="" />
            </div>
            <div className='carReview border rounded-xl p-5 h-fit'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Car overview</h1>
              </div>
              <div className='flex flex-col md:flex-row justify-between pt-5 gap-5 md:gap-0'>
                <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Registration year</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Jun 2018</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Fuel type</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Diesel</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Kms Driven</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>82000 Kms</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Ownership</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>First Owner</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Transmission</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Manual</h1>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Insurance</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Comprehensive</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Seats</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>5 Seats</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>RTO</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Surrey</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Engine displacement</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>1248 CC</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Year of manufacture</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>2018</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='specification border rounded-xl p-5 h-fit my-8'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Specification</h1>
              </div>
              <div className='flex flex-col md:flex-row  justify-between pt-5 gap-5 md:gap-0'>
                <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Engine</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>1248 CC</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Fuel type</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Diesel</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Transmission</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Manual</h1>
                  </div>
                  
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Mileage</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>28 Kmpl</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Power</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>88.5 BHP</h1>
                  </div>
                 
                </div>
              </div>
            </div>
           
        </div>
        <div className='rightpart col-span-6 lg:col-span-5'>
            {review.map((value, i)=>{
               return(
                <>
                   <div key={i} className='reviewbox'>
            <div className='heading flex flex-wrap items-center justify-between'>
                <div>
                    <h1 className=' text-2xl font-semibold font-inter text-gray-1'>{value.name}</h1>
                </div>
                <div  className='flex items-center gap-3'>
                    <h1 className=' text-sm font-normal font-Work-sans text-gray-1'>5 Stars</h1>
                    <img src={goldstars} alt="" />
                </div>
            </div>
            <div className='reviewWrite border rounded-xl p-5 my-5'>
                <p className=' text-lg font-normal font-Work-sans text-gray-1'>
                Under the hood, the engine performs exceptionally well. It offers a smooth and powerful ride, with quick acceleration and impressive fuel efficiency. The engine runs quietly, even at higher speeds, and provides ample power for both city driving and highway cruising. Maintenance has been straightforward, with no significant issues reported.
                </p>
            </div>
           </div>
                </>
               )
            })}
          
          </div>
      </div>
    </>
  )
}

export default DealerVerification