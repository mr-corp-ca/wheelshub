import React, { useState } from "react";
import greentick from "../../assets/images/tickofgreen.png";
import calenderImg from "../../assets/images/calender.png";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import back from "../../assets/images/back.png";
import forw from "../../assets/images/forw.png";
import Banner from "../../components/Banner";
import Svgs from '../../assets/svgs/index.js'

function SellCarFormAppointmentDealer() {
  const navigate = useNavigate();
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

  const [selectedDay, setSelectedDay] = useState("Wed 17");
  const [selectedTime, setSelectedTime] = useState("10:00-11:00 AM");

  const days = ["Mon 18", "Tue 19", "Wed 20", "Thu 21", "Fri 22", "Sat 23"];
  const times = [
    "9:00-10:00 AM",
    "10:00-11:00 AM",
    "11:00-12:00 PM",
    "1:00-2:00 PM",
    "2:00-3:00 PM",
    "3:00-4:00 PM",
    "4:00-5:00 PM",
    "5:00-6:00 PM",
  ];

  const handleNavigationClick=()=>(
    navigate("/sellyourcar/appointment-payment-process"),
    window.scrollTo({top:0})
  )
  return (
    <>
      <Navbar2 active={'Sell-A-Car'}/>
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:max-w-[80%] mx-auto px-5 md:px-10 lg:pt-20">
          <div className="md:col-span-9 ">
            <h1 className="text-[20px]  lg:text-[48px] font-bold font-inter text-gray-800 ">
              Book a Convenient Time with Your Dealer
            </h1>
            <div className="flex flex-col gap-4 mt-5 ">
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon/>
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Flexible timings
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon/>
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Minimized Wait Times
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon/>
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Personalized Service
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-3 md:flex items-center justify-center ">
            <img src={calenderImg} alt="Man smiling" />
          </div>
        </div>
      </div>
      <div className="cardpart flex justify-center bg-white mx-5">
        <div className=" mb-16 -mt-16 w-full md:w-[90%] mx-auto bg-white border rounded-xl py-10 px-5 md:px-16">
          <div className=" flex items-center justify-center">
            <div className="  rounded-xl ">
              <h2 className=" text-lg lg:text-[28px] text-center font-bold font-inter text-gray-1 my-5 px-10">
              Select mechanic appointment time
              </h2>
              <div className="flex items-center flex-wrap justify-center my-7">
                <img src={back} alt="" className=" cursor-pointer" />
                {days.map((day) => (
                  <button
                    key={day}
                    className={`p-2 m-1 rounded ${
                      selectedDay === day
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ))}
                <img src={forw} alt="" className=" cursor-pointer" />
                <span className="border rounded-[8px] p-4 ml-6"><Svgs.CalendarIcon/></span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-7 ">
                {times.map((time) => (
                  <button
                    key={time}
                    className={`p-2 rounded ${
                      selectedTime === time
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    } ${
                      time === "1:00-2:00 PM"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() =>
                      time !== "1:00-2:00 PM" && setSelectedTime(time)
                    }
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className=" flex items-center justify-center">
                <button
                  onClick={
                    handleNavigationClick
                  }
                  className="w-1/2 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="banner">
        <img src={banner} className="w-full" alt="Banner" />
      </div>

      <div className="footer py-10 bg-[#e0e0e0]">
        <div className="w-[90vw] lg:w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
            <div className="first w-full lg:w-[35%]">
              <div>
                <img src={quickBidLogo} alt="Quick Bid Logo" />
              </div>
              <div>
                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-800 py-5 lg:py-10">
                  But who has any right to find fault with a man who chooses to
                  enjoy a pleasure that has no annoying consequences.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={facebook} alt="Facebook" />
                </div>
                <div>
                  <img src={twitter} alt="Twitter" />
                </div>
                <div>
                  <img src={tiktok} alt="TikTok" />
                </div>
                <div>
                  <img src={youtube} alt="YouTube" />
                </div>
              </div>
            </div>
            <div className="second w-full lg:w-[15%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3
                  onClick={() => handleClick("home")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Home
                </h3>
                <h3
                  onClick={() => bidsClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Bids
                </h3>
                <h3
                  onClick={() => investmentClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Investments
                </h3>
                <h3
                  onClick={() => handleClick("about")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  About us
                </h3>
                <h3
                  onClick={() => handleClick("home")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Contact us
                </h3>
              </div>
            </div>
            <div className="third w-full lg:w-[35%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Contact
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  +012-334-5864
                </h3>
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  info.alva@example.com
                </h3>
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  2048 Wexford Way Wings SC 287290
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="companyName h-[100px] bg-[#4f4f4f] flex items-center justify-center">
        <h1 className="text-white font-medium text-sm font-Work-sans">
          © 2022 wheeldealhub. All Rights Reserved
        </h1>
      </div> */}
      <Banner/>
    </>
  );
}

export default SellCarFormAppointmentDealer;
