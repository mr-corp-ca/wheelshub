import React, { useState, useEffect } from "react";
import dealerimg from "../../assets/images/dealer.png";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import Banner from "../../components/Banner";
import dealerfamily from "../../assets/images/dealerfamily.png";
import Svgs from "../../assets/svgs/index.js";
import Skeleton_Find_Mechanic from "../../components/Skeleton/Skeleton_Find_Mechanic.js";

function SellCarFormFindDealer() {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [heart, setHeart] = useState(false);
  const [handleIndex, setHandleIndex] = useState(null);

  const [visibleMechanics, setVisibleMechanics] = useState(6);
  const mechanics = Array(100).fill();
  const loadMoreMechanics = () => {
    setVisibleMechanics((prev) => prev + 6); // Increase visible mechanics by 6
  };

  const handleClick = (item) => {
    setTabActive(item);
  };

  const bidsClick = () => {
    handleClick("bids");
  };

  const investmentClick = () => {
    handleClick("investments");
  };
  const [buttonClick, setButtonClick] = useState(null);

  const handleButtonClick = (index) => {
    setButtonClick(index);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      navigate("/sellyourcar/dealer-appointment-form");
      window.scrollTo({
        top: 0,
      });
    } else {
      alert("Please agree to the terms and conditions!");
    }
  };

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
    <div className=" max-w-[1920px] mx-auto">
      <Navbar2 active={"Sell-A-Car"} />
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
        <div className="grid grid-cols-1 md:grid-cols-12  w-full 2xl:w-[1440px] mx-auto px-5 md:px-[135px] lg:pt-32">
          <div className="md:col-span-8 ">
            <h1 className="text-[20px]  xl:text-[48px] font-bold font-inter text-gray-800 ">
              Pick a Dealer for Professional Car Verification
            </h1>
            <div className="flex flex-col gap-4 my-10 ">
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Enhanced Credibility
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Increased Market Value
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Faster Sales Process
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-4 lg:flex items-center justify-center ">
            <img src={dealerimg} alt="Man smiling" className="" />
          </div>
        </div>
      </div>
      <div className="cardpart flex justify-center bg-white ">
        <div className=" mb-20 -mt-32 w-full md:w-[95%] 2xl:w-[1440px] mx-auto bg-white shadow-css border rounded-xl py-10 px-5 xl:px-16">
          <div className="flex items-center justify-center text-2xl md:text-[28px] font-bold font-inter text-gray-800">
            <h1>Select Dealer to check the car</h1>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-10 pb-5">
            <button className="rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Verified
            </button>
            <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
              Nearby
            </button>
            <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
              Most viewed
            </button>
          </div>
          {isLoading ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-5">
                {Array(6)
                  .fill()
                  .map(() => (
                    <Skeleton_Find_Mechanic />
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-5">
                {mechanics.slice(0, visibleMechanics).map((_, index) => (
                  <div
                    key={index}
                    className={`card border rounded-2xl flex flex-col gap-4 ${
                      buttonClick === index
                        ? "border border-custom-blue shadow-css"
                        : ""
                    }`}
                  >
                    <div>
                      <img
                        src={dealerfamily}
                        alt="Car"
                        className="w-full h-auto rounded-t-2xl"
                      />
                    </div>
                    <div className="px-3 flex items-center justify-between">
                      <h1 className="text-base md:text-xl font-semibold font-inter text-gray-800">
                        BL Car Mechanics
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
                      <Svgs.YellowStar />
                      <h1 className="text-sm font-normal font-Work-sans text-gray-800">
                        430 Reviews
                      </h1>
                    </div>
                    <div className="flex items-center gap-2 px-3">
                      <Svgs.BlueTickVerified />
                      <p className="text-sm font-normal font-Work-sans text-gray-800">
                        Verified by Wheeldealhub
                      </p>
                    </div>
                    <div className="flex items-center justify-center pb-4 md:pb-5">
                      <button
                        onClick={() => {
                          handleButtonClick(index);
                        }}
                        className={`h-[44px] md:h-[48px] ${
                          buttonClick === index ? "px-[30px]" : "px-[24px]"
                        } px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-blue-300 ${
                          buttonClick === index
                            ? "bg-custom-green"
                            : "bg-custom-blue"
                        }`}
                      >
                        {buttonClick === index ? (
                          <span className="flex items-center justify-center gap-2">
                            <Svgs.WhiteTickIcon />
                            Selected
                          </span>
                        ) : (
                          "Call now - +650 334 4545"
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
          {visibleMechanics < mechanics.length && (
            <button
              onClick={loadMoreMechanics}
              className="h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center border border-gray-300 text-gray-800
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 focus:outline-none 
  animate-fadeIn"
            >
              Load more
            </button>
          )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-5">
              <input
                checked={isChecked}
                onChange={handleCheckboxChange}
                type="checkbox"
                className="h-4 w-4 cursor-pointer"
              />
              <p className=" text-xs md:text-lg font-normal font-inter text-gray-800">
                I agree to pay the Dealer fee of $250 after successfull
                verification
              </p>
            </div>
            <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
              <button className="w-[129px] h-[52px] px-[44px] py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-blue-300">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <Banner />
    </div>
    </>
  );
}

export default SellCarFormFindDealer;
