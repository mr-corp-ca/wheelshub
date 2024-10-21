import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import audiimg from "../../assets/images/audi14.png";
import { useState } from "react";
import Navbar2 from "../../components/Navbar2";
import ClaimNow from "./ClaimNow";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index.js";
import SkeletonBuyACarDetail from "../../components/Skeleton/SkeletonBuyACarDetail.js";
import { useEffect } from "react";


function BuyACarDetails() {
  const [progress, setProgress] = useState(32); // Initial progress value

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  const [value, setValue] = useState(0);

  const handleChangeProgress = (event) => {
    setValue(event.target.value);
  };

  const review = [
    {
      name: "Engine",
    },
    {
      name: "Exterior",
    },
    {
      name: "Tires",
    },
    {
      name: "Interior",
    },
  ];

  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = (item) => {
    setTabActive(item);
  };

  const bidsClick = () => {
    handleClick("bids");
  };

  const investmentClick = () => {
    handleClick("investments");
  };

  const [tabClick, setTabClick] = useState("1");

  const OntabClick = (items) => {
    setTabClick(items);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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

  const [btnActive, setBtnActive] = useState(0);
  const handleBtnClick = (value) => {
    setBtnActive(value);
  };

  const btnData = [
    {
      name: "OverView",
    },
    {
      name: " Specifications",
    },
    {
      name: "Gallery",
    },
  ];

  const handleBuyNow=()=>{
    navigate("/details");
    window.scrollTo(0,0)
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    <div className=" max-w-[1920px] mx-auto">
      <Navbar2 active={'Buy-A-Car'}/>
      <div className="grid grid-cols-1 lg:grid-cols-12 w-[90%] mx-auto gap-6 2xl:gap-[64px] mt-10">
        <div className="leftpart col-span-12 lg:col-span-7">
          {isLoading ? (
            <>
            {Array(1).fill().map(()=>(
              <>
              <SkeletonBuyACarDetail height={510}/>
              </>
            ))}
            </>
          ):(
            <>   
          <div className="img relative">
            <img src={audiimg} className="w-full" alt="" />
            <span className=" absolute top-[45%] left-6">
              <Svgs.ArrowLeft />
            </span>
            <span className="absolute top-[45%] right-6 ">
              <Svgs.ArrowRight />
            </span>
            <span className="absolute left-[40%] bottom-6">
              {" "}
              <button className=" text-sm font-normal font-Work-sans text-gray-1 bg-[#c5c5c6] rounded-[12px] p-[10px] flex items-center gap-[10px]">
                <Svgs.ImageGalleryIcon />{" "}
                <span className="hidden sm:inline-block">All images</span>
              </button>
            </span>
          </div>
            </>
          )}
          <div className="flex items-center flex-wrap gap-5 pt-10 pb-5">
            {btnData.map((v, i) => (
              <button
                key={i}
                onClick={() => {
                  handleBtnClick(i);
                }}
                className={`${
                  btnActive === i
                    ? "bg-custom-blue text-white shadow-2xl shadow-blue-300"
                    : "bg-white text-gray-1"
                } rounded-lg border  px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center`}
              >
                {v.name}
              </button>
            ))}
          </div>
          <div className="carReview border rounded-xl p-5 h-fit my-5 shadow-css">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
                Car overview
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between pt-5 gap-5 md:gap-5">
              <div className="flex flex-col gap-5 w-full lg:w-[50%]">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Registration year
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Jun 2018
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Fuel type
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Diesel
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Kms Driven
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    82000 Kms
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Ownership
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    First Owner
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Transmission
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Manual
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full lg:w-[50%]">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Insurance
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Comprehensive
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Seats
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    5 Seats
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    RTO
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Surrey
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Engine displacement
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                     CC
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Year of manufacture
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    2018
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="specification border rounded-xl p-5 h-fit my-8 shadow-css">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
                Specification
              </h1>
            </div>
            <div className="flex flex-col md:flex-row  justify-between pt-5 gap-5 md:gap-5">
              <div className="flex flex-col gap-5 w-full lg:w-[50%]">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Engine
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    1248 CC
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Fuel type
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Diesel
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Transmission
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Manual
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full lg:w-[50%]">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Mileage
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    28 Kmpl
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Power
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    88.5 BHP
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightpart col-span-12 lg:col-span-5">
          <div className="border rounded-xl p-4 xl:p-9 shadow-css">
            <div className="flex items-center justify-between">
              <h1 className="text-lg xl:text-[32px] font-bold font-inter text-gray-1">
                Mercedes-Benz E 220 d
              </h1>
              <span
                className="cursor-pointer"
                onClick={() => {
                  handleHeart(1);
                }}
              >
                {selectedHearts.includes(1) ? (
                  <Svgs.HeartIconBlueFilled />
                ) : (
                  <Svgs.HeartIconBlue />
                )}
              </span>
            </div>
            <div className="my-5">
              <div className="flex items-center gap-4">
                <h1 className="text-[9px] md:text-lg font-normal font-Work-sans text-gray-2">
                  45000 KM
                </h1>
                <Svgs.GrayDot />
                <h1 className="text-[9px] md:text-lg font-normal font-Work-sans text-gray-2">
                  2018 Model
                </h1>
                <Svgs.GrayDot />
                <h1 className="text-[9px] md:text-lg font-normal font-Work-sans text-gray-2">
                  Automatic
                </h1>
              </div>
              <div className="my-5">
                <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
                  $22,500
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Svgs.BlueTickVerified />
                <p className="text-xs lg:text-lg font-medium font-Work-sans ">
                  Verified by Mechanic
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Svgs.BlueTickVerified />
                <p className="text-xs lg:text-lg font-medium font-Work-sans ">
                  Verified by Dealer
                </p>
              </div>
            </div>
            <div className="flex items-center my-5">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-gray-1 text-gray-1 flex items-center justify-center">
                Verification certificate
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3 ">
                <h1 className=" text-[9px] lg:text-lg font-medium font-Work-sans text-gray-1">
                  EMI starts from - $270/Month.
                </h1>
                <button className=" text-[9px] lg:text-lg font-medium font-Work-sans text-custom-blue underline">
                  Check details
                </button>
              </div>
              <div className="flex items-center my-5 mt-10 gap-4 lg:gap-8 justify-center">
                <button
                  onClick={
                   handleBuyNow
                  }
                  className="h-[44px] w-[124px] md:h-[52px]  lg:px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-blue-300"
                >
                  Buy now
                </button>
                <button
                  onClick={handleShowPopup}
                  className="h-[44px] md:h-[52px] px-[10px] lg:px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-custom-blue text-custom-blue flex items-center justify-center"
                >
                  Seller details
                </button>
                {showPopup && (
                  <ClaimNow show={showPopup} onClose={handleClosePopup} />
                )}
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-5 my-5 shadow-css">
            <div>
              <h1 className="text-lg lg:text-[32px] font-bold font-inter text-gray-1">
                EMI Calculator
              </h1>
            </div>
            <div className="my-10">
              <h1 className=" text-xs lg:text-lg font-normal font-Work-sans text-gray-2">
                Avail upto 100% of the car value in finance at attractive
                interest rates
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
                Loan Amount
              </h1>
              <button className="py-[6px] px-[16px] text-gray-1 border border-gray-1 rounded-xl w-[116px] text-xl font-semibold font-inter">
                $28,000
              </button>
            </div>
            {/* Progress bar */}
            <div className="flex flex-col items-center my-5">
              <div className="w-full flex justify-between text-blue-500 my-2">
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
                onChange={handleChangeProgress}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #60a5fa ${
                    (value / 32000) * 100
                  }%, #e5e7eb ${(value / 32000) * 100}%)`,
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold font-inter text-gray-1">
                Duration
              </h1>
              <span className="text-lg font-normal text-gray-1 font-Work-sans">
                in years
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-5 my-5">
              {["1", "2", "3", "4", "5"].map((year) => (
                <button
                  key={year}
                  onClick={() => OntabClick(year)}
                  className={`flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${
                    tabClick === year
                      ? "bg-custom-blue text-white"
                      : "bg-white text-gray-1 border"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            <div>
              <h1 className="text-lg font-normal font-Work-sans text-gray-1">
                Your monthly EMI
              </h1>
            </div>
            <div className="flex items-center justify-center ml-32 lg:ml-20">
              <h1 className="lg:text-2xl font-semibold font-inter text-custom-blue">
                View breakup
              </h1>
            </div>
            <div>
              <h1 className="text-[32px] font-inter text-gray-1 font-bold">
                $32,000
              </h1>
            </div>
            <div className="flex items-center gap-3 my-5">
              <h1 className=" text-[9px] lg:text-lg font-medium font-Work-sans text-gray-1">
                EMI starts from - $270/Month.
              </h1>
              <button className=" text-[9px] lg:text-lg font-medium font-Work-sans text-custom-blue underline">
                Check details
              </button>
            </div>
            <div className="flex items-center justify-center my-10">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-custom-blue text-custom-blue flex items-center justify-center">
                Interested in loan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
    </>
  );
}

export default BuyACarDetails;
