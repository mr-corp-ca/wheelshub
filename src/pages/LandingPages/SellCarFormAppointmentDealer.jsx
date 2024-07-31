import React, { useState } from "react";
import mansmiling from "../../assets/images/mansmiling.png";
import greentick from "../../assets/images/tickofgreen.png";
import { Input } from "../../components/Input";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import waveicon from "../../assets/images/Wave.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import mechanicImage from "../../assets/images/themechanic.png";
import carmechanic from "../../assets/images/carmechanic.png";
import hearticon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import yellowTick from "../../assets/images/yellowTick.png";
import checkboxpng from "../../assets/images/Checbox container (1).png";
import calenderImg from "../../assets/images/calender.png"
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import Banner from "../../components/Banner";
function SellCarFormAppointmentDealer() {
  const navigate = useNavigate()
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


  const [selectedDay, setSelectedDay] = useState('Wed 17');
  const [selectedTime, setSelectedTime] = useState('10:00-11:00 AM');

  const days = ['Mon 17', 'Tue 17', 'Wed 17', 'Thu 17', 'Fri 17', 'Sat 17'];
  const times = [
    '9:00-10:00 AM',
    '10:00-11:00 AM',
    '11:00-12:00 PM',
    '1:00-2:00 PM',
    '2:00-3:00 PM',
    '3:00-4:00 PM',
    '4:00-5:00 PM',
    '5:00-6:00 PM',
  ];

  return (
    <>
      <Navbar2 />
      <div className="firstpart bg-[#f3f3f3] min-h-screen h-[50vh] py-10">
        <div className="grid grid-cols-1 md:grid-cols-8 w-full md:w-[70%] mx-auto px-5 md:px-0">
          <div className="md:col-span-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-gray-800">
              Book a Convenient Time with
              Your Dealer
            </h1>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Higher profits
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
                  100% Trusted
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-2 items-center justify-center">
            <img src={calenderImg} alt="Mechanic" />
          </div>
        </div>

        <div className="w-full md:w-[80%] mx-auto bg-white border rounded-xl py-10 px-5 md:px-16 mt-10">
          <div className=' flex items-center justify-center'>
            <div className="  rounded-xl ">
              <h2 className=" text-[28px] text-center font-bold font-inter text-gray-1 mb-4">Reschedule mechanic appointment</h2>
              <div className="flex flex-wrap justify-center mb-4">
                {days.map((day) => (
                  <button
                    key={day}
                    className={`p-2 m-1 rounded ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {times.map((time) => (
                  <button
                    key={time}
                    className={`p-2 rounded ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      } ${time === '1:00-2:00 PM' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => time !== '1:00-2:00 PM' && setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className=' flex items-center justify-center'>
                <button
                  onClick={() => navigate("/sellyourcar/appointmentPaymentProcess")}
                  className="w-1/2 py-2 bg-blue-500 text-white rounded-lg">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="banner mt-[300px]">
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