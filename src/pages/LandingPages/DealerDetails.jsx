import React from "react";
import usedCarsImage from "../../assets/images/usedcarsimages.png";
import contact from "../../assets/images/contact.png";
import maps from "../../assets/images/maps.png";
import gmail from "../../assets/images/gmail.png";
import Navbar2 from "../../components/Navbar2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import manImage from "../../assets/images/man.png";
import trophyImage from "../../assets/images/trophyy.png";
import progressImage from "../../assets/images/progress.png";
import savemoneyImage from "../../assets/images/save-money.png";
import StarImage from "../../assets/images/starGroup.png";
import { useState } from 'react';
import Banner from "../../components/Banner";
import Svgs from '../../assets/svgs/index.js'
import SkeletonBuyACarDetail from "../../components/Skeleton/SkeletonBuyACarDetail.js";
import { useEffect } from "react";


function DealerDetails() {
  const [tabActive, setTabActive] = useState("home");
  const handleClick = (item) => {

    setTabActive(item);
  };

  const bidsClick = () => {

    handleClick("bids")

  }
  const investmentClick = () => {

    handleClick("investments");

  }

  const [selectedHearts, setSelectedHearts] = useState([]); // Array to track selected hearts

  const handleHeart = (index) => {
    setSelectedHearts(
      (prevSelectedHearts) =>
        prevSelectedHearts.includes(index)
          ? prevSelectedHearts.filter((i) => i !== index) // Unselect the heart
          : [...prevSelectedHearts, index] // Select the heart
    );
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Navbar2 active={'Buy-A-Car'}/>
      <div className="grid grid-cols-1 lg:grid-cols-12 p-5 lg:p-10 gap-5 lg:gap-10">
        {isLoading?(
          <>
          <div className="col-span-12 lg:col-span-6">
          {Array(1).fill().map(()=>(
            <>
            <SkeletonBuyACarDetail height={510}/>
            </>
          ))}
          </div>
          </>
        ):(
        <div className="col-span-12 lg:col-span-6">
          <img src={usedCarsImage} className="w-full" alt="Used Cars" />
        </div>
        )}
        <div className="col-span-12 lg:col-span-6">
          <div className="border rounded-xl p-5 shadow-css">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl lg:text-[32px] font-bold font-inter text-gray-1">
                Surrey car dealers
              </h1>
              <span
                        className="cursor-pointer"
                        onClick={() => {
                          handleHeart(0);
                        }}
                      >
                        {selectedHearts.includes(0) ? (
                          <Svgs.HeartIconBlueFilled />
                        ) : (
                          <Svgs.HeartIconBlue />
                        )}
                      </span>            </div>
            <div className="my-4">
              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
                7711 128 St, Surrey, BC V3W 4E6, Canada
              </h1>
            </div>
            <div className="flex flex-col gap-3 my-4">
              <div className="flex items-center gap-3">
                <Svgs.YellowStar/>
                <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-1">
                  430 Reviews
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Svgs.BlueTickVerified/>
                <p className="text-sm lg:text-lg font-medium font-Work-sans text-gray-1">
                  Verified by Wheeldealhub
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[524px] rounded-xl p-4 bg-[#eeeeee] flex flex-col gap-3">
              <div>
                <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                  Opening hours (Mon-Sat)
                </h1>
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-semibold font-inter text-gray-1">
                  7:00-7:00 PM
                </h1>
              </div>
            </div>
            <div className="flex items-center my-5 mt-10">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                Call now - +650 334 4545
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 my-5 mx-5">
        <div className="border shadow-css rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <Svgs.Phone_Call/>
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
              +1 660 656 6766
            </h1>
          </div>
        </div>
        <div className="border shadow-css rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <Svgs.Location/>
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue text-center">
              7711 128 St, Surrey, BC V3W 4E6, Canada
            </h1>
          </div>
        </div>
        <div className="border shadow-css rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <Svgs.Mail/>
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
              info@surreydealers.com
            </h1>
          </div>
        </div>
      </div>
      <div className="blueRectangle w-[90%] lg:w-[80%] mx-auto py-10 lg:py-16">
        <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
          <div className="flex flex-wrap items-center justify-between gap-10 lg:gap-0">
            <div className="flex flex-col items-center">
              <Svgs.Rating/>
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
              6+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
              Years experience
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <Svgs.Car_Rental/>
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
              600+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
              Cars Verified
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <Svgs.Car_Rental/>
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
              430+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
              Car handovers
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <Svgs.Life_Insurance/>
              <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
              1k+
              </h1>
              <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
              Positive reviews
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials bg-[#d2eaff] py-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl lg:text-[54px] font-bold font-inter text-gray-1">
            What people say about us?
          </h1>
        </div>
        <Swiper
          cssMode={true}
          loop={true}
          spaceBetween={50}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {[0, 1, 2].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="cards w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {Array(3)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-7">
                      <div className="flex flex-wrap items-center gap-5">
                        <div>
                          <div className="w-[64px] h-[64px] rounded-full bg-[#cecece]"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div>
                            <h1 className="text-xl font-semibold font-inter text-gray-1">
                              Sandra T. Robinson
                            </h1>
                          </div>
                          <div className="flex items-center">
                            <img src={StarImage} className="inline" alt="" />
                            <span className="text-lg font-medium font-Work-sans text-gray-1 px-2">
                              5.0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                          And equal blame belongs to those who fail in their duty
                          through weakness of will, which is the same as saying
                          through shrinking from toil and pain.
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center py-10 flex items-center justify-center">
          <button className="border h-[52px] flex items-center justify-center text-gray-1 border-gray-1 rounded-xl w-[117px]  py-[15px] text-lg font-medium font-Work-sans hover:transition-all hover:scale-105 active:scale-95">
            View all
          </button>
        </div>
      </div>
      <Banner/>
    </>
  );
}

export default DealerDetails;
