import React, { useEffect, useState } from "react";
import greentick from "../../assets/images/tickofgreen.png";
import mechanicImage from "../../assets/images/themechanic.png";
import carmechanic from "../../assets/images/carmechanic.png";
import hearticon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import yellowTick from "../../assets/images/yellowTick.png";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import Banner from "../../components/Banner";
import whitetick from "../../assets/images/whitetick.png";
import Svgs from "../../assets/svgs/index.js";
import Skeleton_Find_Mechanic from "../../components/Skeleton/Skeleton_Find_Mechanic.js";

function SellCarFormFindMechanic() {
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

  const [buttonClick, setButtonClick] = useState(null);

  const handleButtonClick = (index) => {
    setButtonClick(index);
  };

  const [heartColor, setHeartColor] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      navigate("/sellyourcar/appointment");
      window.scrollTo({
        top: 0,
        // Use 'smooth' for smooth scrolling, 'auto' for instant scrolling
      });
    } else {
      alert("Please agree to the terms and conditions!");
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Navbar2 active={'Sell-A-Car'}/>
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  w-full 2xl:max-w-[1440px] mx-auto px-5 md:px-[135px]">
          <div className="md:col-span-9 ">
            <h1 className="text-[20px]  xl:text-[48px] font-bold font-inter text-gray-800 ">
              Select a Certified Mechanic for a Thorough Check-Up
            </h1>
            <div className="flex flex-col gap-4 mt-5 ">
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Expert verification
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Easy process
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Verification certificate
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-3 lg:flex items-center justify-center ">
            <img src={mechanicImage} alt="Man smiling" />
          </div>
        </div>
      </div>
      <div className="cardpart flex justify-center bg-white">
        <div className=" mb-20 -mt-16 lg:-mt-32 w-full md:w-[90%] 2xl:max-w-[1440px] mx-auto bg-white border rounded-[16px] shadow-md py-10 px-5 md:px-16">
          <div className="flex text-center items-center justify-center text-2xl md:text-[28px] font-bold font-inter text-gray-800">
            <h1>Select mechanic to check the car</h1>
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
                {Array(6).fill().map(()=>(
                  <Skeleton_Find_Mechanic />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-5">
                {Array(6)
                  .fill()
                  .map((_, index) => {
                    return (
                      <div
                        key={index}
                        className={`card border rounded-2xl flex flex-col gap-4 max-w-[360px] ${
                          buttonClick === index
                            ? "border border-custom-blue shadow-css"
                            : ""
                        }`}
                      >
                        <div>
                          <img
                            src={carmechanic}
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
                            } px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue ${
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
                              "Select mechanic"
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </>
          )}

          <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
            <button className="h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center border border-gray-300 text-gray-800">
              Load more
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-5">
              {/* <img src={checkboxpng} alt="Checkbox" /> */}
              <input
                checked={isChecked}
                onChange={handleCheckboxChange}
                type="checkbox"
                className="h-4 w-4"
              />
              <p className=" text-xs md:text-lg font-normal font-inter text-gray-800">
                I agree to pay the mechanic fee of $250 after successful
                verification
              </p>
            </div>
            <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
              <button
                type="submit"
                className="w-[129px] h-[52px] px-[44px] py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <Banner />
    </>
  );
}

export default SellCarFormFindMechanic;
