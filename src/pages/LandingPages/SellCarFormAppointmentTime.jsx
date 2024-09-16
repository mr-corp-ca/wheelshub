import React, { useState } from "react";
import greentick from "../../assets/images/tickofgreen.png";
import calenderImg from "../../assets/images/calender.png";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import back from "../../assets/images/back.png";
import forw from "../../assets/images/forw.png";
import Banner from "../../components/Banner";
import Svgs from '../../assets/svgs/index.js'

function SellCarFormAppointmentTime() {
  const navigate = useNavigate();

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

  const handleClick=()=>{
    navigate("/sellyourcar/find-dealer")
    window.scrollTo({
      top: 0,
       // Use 'smooth' for smooth scrolling, 'auto' for instant scrolling
    });
  }
  return (
    <>
      <Navbar2 />
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  w-full xl:w-[1170px] mx-auto px-5 xl:px-0 lg:pt-20">
          <div className="md:col-span-9 ">
            <h1 className="text-[20px]  lg:text-[48px] font-bold font-inter text-gray-800 w-[90%]">
              Book a Convenient Time with Your Mechanic
            </h1>
            <div className="flex flex-col gap-4 mt-5 ">
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Flexible timings
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Minimized Wait Times
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <img src={greentick} alt="Green tick" />
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
        <div className=" mb-16 -mt-16 w-full xl:w-[1170px] mx-auto bg-white border rounded-[16px] shadow py-10 px-5 md:px-16">
          <div className=" flex items-center justify-center">
            <div className="  rounded-xl ">
              <h2 className=" text-lg lg:text-[28px] text-center font-bold font-inter text-gray-1 my-5 px-8">
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
                    handleClick
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
      <Banner/>
    </>
  );
}

export default SellCarFormAppointmentTime;
