import * as React from "react";
import { useState, useEffect } from "react";
import audi2 from "../../assets/images/audi2.png";
import Navbar2 from "../../components/Navbar2";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index.js";
import { Input } from "../../components/Input.jsx";
import SkeletonBuyACar from "../../components/Skeleton/SkeletonBuyACar.js";

export default function AccordionUsage() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const navigate = useNavigate();

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
  const [modelyear, setModelyear] = useState(true);
  const [km, setKm] = useState(true);
  const [fueltype, setFueltype] = useState(true);
  const [location, setLocation] = useState(false);
  const [ownershio, setOwnership] = useState(false);
  const [bodytype, setbodytype] = useState(false);
  const [color, setColor] = useState(false);

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
      <Navbar2 active={"Buy-A-Car"} />
      <div className="  flex flex-col lg:flex-row">
        {/* sidebar */}
        <div className="sidebar lg:w-[25%] p-4 lg:pl-10 lg:pt-10">
          {/* Filter Heading */}
          <div className="flex items-center gap-4">
            <Svgs.Filter_Icon />
            <h1 className="text-lg lg:text-[32px] font-inter font-bold text-gray-1">
              Filter
            </h1>
          </div>
          {/* Search bar */}
          <div className="mt-5">
            <div className=" border flex items-center gap-x-2 h-[45px] rounded-lg bg-[#fafafa] px-4 py-3">
              <Svgs.Search/>
              <input type="text" placeholder="Search here" className=" text-base font-normal font-inter text-gray-4 h-full w-full flex bg-transparent flex-1 border-none outline-none"/>
            </div>
          </div>

          <div className="mt-5">
            <div className=" border rounded-[16px]  p-4">
              {/* Filter */}
              <div className={` border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setOpenIndex(!openIndex);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Budget
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
                  <div className={`pt-5`}>
                    <div className="w-full flex justify-between text-blue-500">
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">
                        ${value}
                      </span>
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">
                        $32000
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="32000"
                      value={value}
                      onChange={(e) => {
                        e.preventDefault();
                        setValue(e.target.value);
                      }}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${
                          (value / 32000) * 100
                        }%, #e5e7eb ${(value / 32000) * 100}%)`,
                      }}
                    />
                  </div>
                )}
              </div>
              {/* Filter */}
              <div className="pt-8 border-b border-dashed pb-5">
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setPopularity(!popularity);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none transition-all duration-300 ease-in-out"
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Brand
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
                  <div className="border rounded-[8px] px-4 py-3 h-[44px] mt-5 flex items-center justify-between bg-[#fafafa]">
                    <select
                      name=""
                      id=""
                      className="w-full outline-none border-none font-medium font-inter text-gray-1 bg-transparent"
                    >
                      <option value="">Select</option>
                      <option value="">BMW</option>
                      <option value="">BUGATTI</option>
                    </select>
                  </div>
                )}
              </div>
              <div className={`pt-8 border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setModelyear(!modelyear);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Model year
                  </h2>
                  <span className="">
                    {modelyear ? (
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
                {modelyear && (
                  <div className={`pt-5`}>
                    <div className="w-full flex justify-between text-blue-500">
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">
                        {value1}
                      </span>
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">
                        2024
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2024"
                      value={value1}
                      onChange={(e) => {
                        e.preventDefault();
                        setValue1(e.target.value);
                      }}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${
                          (value1 / 2024) * 100
                        }%, #e5e7eb ${(value1 / 2024) * 100}%)`,
                      }}
                    />
                  </div>
                )}
              </div>
              <div className={`pt-8 border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setKm(!km);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Kilometers driven
                  </h2>
                  <span className="">
                    {km ? (
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
                {km && (
                  <div className={`pt-5`}>
                    <div className="w-full flex justify-between text-blue-500">
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">
                        {value2}KM
                      </span>
                      <span className=" text-sm font-medium font-Work-sans text-custom-blue">
                        4500KM
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="4500"
                      value={value2}
                      onChange={(e) => {
                        e.preventDefault();
                        setValue2(e.target.value);
                      }}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${
                          (value2 / 4500) * 100
                        }%, #e5e7eb ${(value2 / 4500) * 100}%)`,
                      }}
                    />
                  </div>
                )}
              </div>
              <div className={`pt-8 border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setFueltype(!fueltype);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Fuel type
                  </h2>
                  <span className="">
                    {fueltype ? (
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
                {fueltype && (
                  <div className={`pt-5`}>
                    <div className="pt-5">
                      <div className="flex items-center gap-4 my-4">
                        <input type="checkbox" className=" w-5 h-5" checked />
                        <p className=" text-lg font-normal font-Work-sans text-gray-1">
                          Diesel
                        </p>
                      </div>
                      <div className="flex items-center gap-4 my-4">
                        <input type="checkbox" className=" w-5 h-5" />
                        <p className=" text-lg font-normal font-Work-sans text-gray-1">
                          Petrol
                        </p>
                      </div>
                      <div className="flex items-center gap-4 my-4">
                        <input type="checkbox" className=" w-5 h-5" />
                        <p className=" text-lg font-normal font-Work-sans text-gray-1">
                          CNG
                        </p>
                      </div>
                      <div className="flex items-center gap-4 my-4">
                        <input type="checkbox" className=" w-5 h-5" />
                        <p className=" text-lg font-normal font-Work-sans text-gray-1">
                          Electric
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`pt-8 border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setLocation(!location);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Location
                  </h2>
                  <span className="">
                    {location ? (
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
                {location && (
                  <div className={`pt-5`}>
                    <Input placeholder={"Type location"} className={'bg-[#fafafa]'}/>
                  </div>
                )}
              </div>
              <div className={`pt-8 border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setbodytype(!bodytype);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Body Type
                  </h2>
                  <span className="">
                    {bodytype ? (
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
                {bodytype && (
                  <div className={`pt-5`}>
                    <Input placeholder={"Body Type"} className={'bg-[#fafafa]'}/>
                  </div>
                )}
              </div>
              <div className={`pt-8 border-b border-dashed pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setOwnership(!ownershio);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Ownership
                  </h2>
                  <span className="">
                    {ownershio ? (
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
                {ownershio && (
                  <div className={`pt-5`}>
                    <Input placeholder={"Type here"} className={'bg-[#fafafa]'} />
                  </div>
                )}
              </div>
              <div className={`pt-8 pb-5`}>
                {/* Accordion Header */}
                <button
                  onClick={() => {
                    setColor(!color);
                  }}
                  className="flex items-center justify-between w-full focus:outline-none "
                >
                  <h2 className="text-2xl font-semibold font-inter text-gray-1">
                    Color
                  </h2>
                  <span className="">
                    {color ? (
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
                {color && (
                  <div className={`pt-5`}>
                    <Input placeholder={"Type here"} className={'bg-[#fafafa]'}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* content of cards */}
        <div className="p-4 lg:w-3/4">
          <div className="newRequests my-6">
            <h1 className="text-xl lg:text-[32px] font-bold font-inter text-gray-1">
              Cars nearby your location
            </h1>
          </div>

          <div className="flex items-center flex-wrap gap-5 md:pt-10 my-7">
            {btnData.map((v, i) => (
              <button
                key={i}
                onClick={() => {
                  handleBtnClick(i);
                }}
                className={`${
                  btnActive === i
                    ? "bg-custom-blue text-white shadow-2xl shadow-blue-300"
                    : "bg-white text-gray-1 border border-gray-2"
                } rounded-lg   px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center`}
              >
                {v.name}
              </button>
            ))}
          </div>

          {isLoading ? (
            <>
              <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Array(30)
                  .fill()
                  .map((_, i) => (
                    <SkeletonBuyACar key={i}/>
                  ))}
              </div>
            </>
          ) : (
            <>
            <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
              {Array(30)
                .fill()
                .map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="card border rounded-2xl flex flex-col gap-4"
                    >
                      <div>
                        <img
                          src={audi2}
                          alt="Car"
                          className="w-full h-auto rounded-t-2xl"
                        />
                      </div>
                      <div className="px-3 flex items-center justify-between">
                        <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
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
                        <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                          45000 KM
                        </h1>
                        <Svgs.GrayDot />
                        <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                          2018 Model
                        </h1>
                        <Svgs.GrayDot />
                        <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                          Automatic
                        </h1>
                      </div>
                      <div className="px-3">
                        <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
                          $22,500
                        </h1>
                      </div>
                      <div className="flex items-center gap-2 px-3">
                        <div className="flex items-center gap-1">
                          <Svgs.BlueTickVerified />
                          <p className="text-xs font-normal font-Work-sans text-gray-1">
                            Verified by Mechanic
                          </p>
                        </div>
                        <div className=" flex items-center gap-1">
                          <Svgs.BlueTickVerified />
                          <p className="text-xs font-normal font-Work-sans text-gray-1">
                            Verified by Dealer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center pb-4 md:pb-5">
                        <button
                          onClick={() => {
                            navigate("/buy-a-car-details");
                          }}
                          className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-blue-300 shadow-2xl"
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            </>
          )}
        </div>
      </div>
      <Banner />
    </>
  );
}
