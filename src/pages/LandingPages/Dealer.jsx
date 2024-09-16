import * as React from "react";
import Navbar2 from "../../components/Navbar2";
import Banner from "../../components/Banner";
import dnsautosale from '../../assets/images/DND AUTO sales LTD.png'
import drivehive from '../../assets/images/drivehive-logo.png'
import logo from '../../assets/images/Logo (1).png'
import legacycar from '../../assets/images/Legacy cars.png'
import skyline from '../../assets/images/Logo 1.png'
import basantlogo from '../../assets/images/basantlogo.png'
import acura from '../../assets/images/acruarmd-oem-h-cmyk-c-small.png'
import { useState } from "react";
import { Input } from "../../components/Input";
import Svgs from '../../assets/svgs/index.js'
import Skeleton_Find_Mechanic from "../../components/Skeleton/Skeleton_Find_Mechanic.js";
import { useEffect } from "react";

export default function Mechanic() {

  const cardsData = [
    {
      background: '#efefef',
      logo: acura,
      name: 'Ocean Park Automotive'
    },
    {
      background: 'bg-red-500',
      logo: skyline,
      name: 'NJ Auto Repair Mechanic'
    },
    {
      background: 'bg-purple-500',
      logo: legacycar,
      name: 'White Rock Automotive',
    },
    {
      background: 'bg-black',
      logo: logo,
      name: 'Arams Auto Repairs'
    },
    {
      background: 'bg-sky-300',
      logo: dnsautosale,
      name: 'Pro-Tech Auto Repairs Ltd'
    },
    {
      background: '#f3f3f3',
      logo: drivehive,
      name: 'Genesis Auto Repair Ltd.'
    },
    {
      background: '#efefef',
      logo: basantlogo,
      name: 'Genesis Auto Repair Ltd.'
    },
  ]

  const [selectedHearts, setSelectedHearts] = useState([]); // Array to track selected hearts

  const handleHeart = (index) => {
    setSelectedHearts(
      (prevSelectedHearts) =>
        prevSelectedHearts.includes(index)
          ? prevSelectedHearts.filter((i) => i !== index) // Unselect the heart
          : [...prevSelectedHearts, index] // Select the heart
    );
  };

  const [openIndex, setOpenIndex] = useState(true);
  const [popularity, setPopularity] = useState(true);

  const [btnActive, setBtnActive] = useState(0);
  const handleBtnClick = (value) => {
    setBtnActive(value);
  };
  const btnData = [
    {
      name: "Verified",
    },
    {
      name: "Nearby",
    },
    {
      name: "Most Viewed",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Navbar2 active={'Dealer-Page'}/>
      <div className="  flex flex-col lg:flex-row">
        {/* sidebar */}
        <div className="sidebar lg:w-[25%] p-4 lg:pl-10 lg:pt-10">
          {/* Filter Heading */}
          <div className="flex items-center gap-4">
          <Svgs.Filter_Icon/>
            <h1 className="text-2xl lg:text-[32px] font-inter font-bold text-gray-1">
              Filter
            </h1>
          </div>
          {/* Search bar */}
          <div className="mt-5">
            <Input
              type="text"
              placeholder="Search here"
              className="w-full border focus:outline-none bg-[#fafafa]"
            />
          </div>
          <div className="mt-5">
            <div className=" border rounded-[16px]">
              <div className={`p-4 ${openIndex? 'transition-all duration-700 ease-in-out': 'transition-all duration-700 ease-in-out'}`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setOpenIndex(!openIndex);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Location
                  </h2>
                  <span className="">
                    {openIndex ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                {openIndex && (
                  <div className={`pt-5 ${openIndex? 'transition-all duration-700 ease-in-out':'transition-all duration-700 ease-in-out'}`}>
                    <Input placeholder={"Type Location"} />
                  </div>
                )}
              </div>
              <div className="p-4">
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setPopularity(!popularity);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none transition-all duration-300 ease-in-out"
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Popularity
                  </h2>
                  <span>
                    {popularity ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                {popularity && (
                  <div className="pt-5">
                   <div className="flex items-center gap-4 my-4">
                    <input type="checkbox" className=" w-5 h-5" checked/>
                    <p className=" text-lg font-normal font-Work-sans text-gray-1">All</p>
                   </div>
                   <div className="flex items-center gap-4 my-4">
                    <input type="checkbox" className=" w-5 h-5"/>
                    <p className=" text-lg font-normal font-Work-sans text-gray-1">Most popular</p>
                   </div>
                   <div className="flex items-center gap-4 my-4">
                    <input type="checkbox" className=" w-5 h-5"/>
                    <p className=" text-lg font-normal font-Work-sans text-gray-1">Verified</p>
                   </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* content of cards */}
        <div className="p-4 mt-2 lg:w-3/4">
          <div className="">
            <div className="newRequests py-4">
            <h1 className="text-xl lg:text-[32px] font-bold text-gray-1 font-inter">
                Dealer
              </h1>
            </div>

            <div className="flex items-center flex-wrap gap-5 pt-10 pb-5">
            {btnData.map((v, i) => (
              <button
                key={i}
                onClick={() => {
                  handleBtnClick(i);
                }}
                className={`${
                  btnActive === i
                    ? "bg-custom-blue text-white shadow-2xl shadow-custom-blue"
                    : "bg-white text-gray-1 border border-gray-2"
                } rounded-lg   px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center`}
              >
                {v.name}
              </button>
            ))}
            </div>
            {isLoading ? (<>
              <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(15).fill().map(()=>(
              <Skeleton_Find_Mechanic/>
            ))}
            </div>
            </>):(<>
            <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardsData
                .map((value, index) => {
                  return (
                    <div
                      // onClick={() => navigate("/details")}
                      key={index}
                      className={`card border rounded-2xl flex flex-col gap-4`}
                    >
                     <div className={` h-[212px] rounded-t-2xl flex items-center justify-center ${value.background}`}>
                        <img src={value.logo} alt="" />
                      </div>
                      <div className="px-3 flex items-center justify-between">
                        <h1 className="text-base md:text-xl font-semibold font-inter text-gray-800">
                          {value.name}
                        </h1>
                        <span
                        className="cursor-pointer"
                        onClick={() => {
                          handleHeart(index);
                        }}
                      >
                        {selectedHearts.includes(index) ? (
                          <Svgs.HeartIconBlueFilled />
                        ) : (
                          <Svgs.HeartIconBlue />
                        )}
                      </span>
                      </div>
                      <div className="flex items-center px-3 justify-between">
                        <h1 className="text-base font-normal font-Work-sans text-custom-blue underline">
                          7711 128 St, Surrey, BC V3W 4E6, Canada
                        </h1>
                      </div>
                      <div className="px-3 flex items-center gap-3">
                      <Svgs.YellowStar/>
                        <h1 className="text-sm font-normal font-Work-sans text-gray-800">
                          430 Reviews
                        </h1>
                      </div>
                      <div className="flex items-center gap-2 px-3">
                      <Svgs.BlueTickVerified/>
                        <p className="text-sm font-normal font-Work-sans text-gray-800">
                          Verified by Wheeldealhub
                        </p>
                      </div>
                      <div className="flex items-center justify-center pb-4 md:pb-5 mx-5">
                        <button className="h-[44px] md:h-[48px] px-[10px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                          Call now - +650 334 4545
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            </>)}
          </div>
          <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
            <button className="h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center border border-gray-300 text-gray-800">
              Load more
            </button>
          </div>
        </div>
      </div>
      <Banner/>
    </>
  );
}
