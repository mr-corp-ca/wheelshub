import React, { useState } from "react";
import calenderImg from "../../assets/images/calender.png";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index.js";
import { format, addDays, subDays, isSameDay } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Calendar styles

function SellCarFormAppointmentTime() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to current date
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // No time slot selected initially
  const [startDate, setStartDate] = useState(new Date()); // Start with the current date for tabs
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Calendar dialog visibility state

  // List of time slots available for selection
  const timeSlots = [
    "9:00-10:00 AM",
    "10:00-11:00 AM",
    "11:00-12:00 PM",
    "1:00-2:00 PM",
    "2:00-3:00 PM",
    "3:00-4:00 PM",
    "4:00-5:00 PM",
    "5:00-6:00 PM",
  ];

  // Handles clicking the back arrow to go to the previous date
  const handlePrevDay = () => setStartDate(subDays(startDate, 1));

  // Handles clicking the forward arrow to go to the next date
  const handleNextDay = () => setStartDate(addDays(startDate, 1));

  // Handles when a user clicks a date tab to select a different date
  const handleDateClick = (date) => setSelectedDate(date);

  // Handles when a user selects a time slot
  const handleTimeSlotClick = (time) => setSelectedTimeSlot(time);

  // Toggle the calendar dialog open/closed
  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen);

  // Handle date change from the calendar and update the date tabs
  const handleCalendarChange = (date) => {
    setSelectedDate(date); // Update the selected date
    setStartDate(date); // Update the start date to show correct range
    setIsCalendarOpen(false); // Close the calendar after selection
  };

  // Generate the list of date tabs (a 6-day range starting from startDate)
  const generateDateTabs = () => {
    const daysToShow = 6;
    const dates = [];
    for (let i = 0; i <= daysToShow; i++) {
      const date = addDays(startDate, i);
      dates.push(date);
    }
    return dates;
  };

  const handleClickOutside = () => {
    setIsCalendarOpen(false);
  };

  const handleClick = () => {
    navigate("/sellyourcar/find-dealer");
    window.scrollTo({
      top: 0,
      // Use 'smooth' for smooth scrolling, 'auto' for instant scrolling
    });
  };
  return (
    <>
    <div className=" max-w-[1920px] mx-auto">
      <Navbar2 active={"Sell-A-Car"} />
      <div className="firstpart bg-[#f3f3f3] h-fit py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  w-full xl:w-[1170px] mx-auto px-5 xl:px-0 lg:pt-20">
          <div className="md:col-span-8 ">
            <h1 className="text-[20px]  lg:text-[48px] font-bold font-inter text-gray-800 w-[90%]">
              Book a Convenient Time with Your Mechanic
            </h1>
            <div className="flex flex-col gap-4 mt-5 ">
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Flexible timings
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Minimized Wait Times
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Personalized Service
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:flex items-center justify-center ">
            <img src={calenderImg} alt="Man smiling" className=""/>
          </div>
        </div>
      </div>
      <div className="cardpart flex justify-center bg-white mx-5">
        <div className=" mb-16 -mt-16 w-full xl:w-[1170px] mx-auto bg-white border shadow-css rounded-[16px] py-16 px-5 md:px-16">
          <div className=" flex items-center justify-center">
            <div className="  rounded-xl ">
              <h2 className=" text-lg lg:text-[28px] text-center font-bold font-inter text-gray-1 mb-9">
                Select mechanic appointment time
              </h2>

              <div className="flex flex-wrap justify-center lg:justify-between items-center mb-4 gap-y-2">
                {/* Back Arrow */}
                <button
                  onClick={handlePrevDay}
                  className="w-[28px] h-[34px] rounded-lg flex items-center justify-center border border-gray-1 mr-2"
                >
                  <Svgs.ArrowLeft />
                </button>
                {/* Date Tabs */}
                <div className="flex items-center justify-center flex-wrap gap-2">
                  {generateDateTabs().map((date, index) => (
                    <div
                      key={index}
                      onClick={() => handleDateClick(date)}
                      className={`px-4 py-2 rounded-md cursor-pointer border ${
                        isSameDay(date, selectedDate)
                          ? "bg-custom-blue text-white"
                          : "bg-white text-gray-1"
                      }`}
                    >
                      <span className=" text-lg font-medium font-Work-sans">
                        {format(date, "EEE dd")}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Forward Arrow and Calendar Icon */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleNextDay}
                    className="w-[28px] h-[34px] rounded-lg flex items-center justify-center border border-gray-1 ml-2"
                  >
                    <Svgs.ArrowRight />
                  </button>

                  {/* Calendar Icon */}
                  <button
                    onClick={toggleCalendar}
                    className="border rounded-lg p-4"
                  >
                    <Svgs.CalendarIcon />
                  </button>

                  {/* Calendar Dialog (only show if isCalendarOpen is true) */}
                  {isCalendarOpen && (
                    <div className=" absolute z-50 ">
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleCalendarChange}
                        inline
                        shouldCloseOnSelect={true}
                        onClickOutside={handleClickOutside}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-9 mb-6">
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    onClick={() => handleTimeSlotClick(time)}
                    className={`py-3 text-center border rounded-lg cursor-pointer ${
                      selectedTimeSlot === time
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-1 hover:bg-custom-blue hover:text-white"
                    }`}
                  >
                    <span className="text-base font-medium font-Work-sans">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <div className="mt-9 text-center flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="w-[129px] h-[52px] flex items-center justify-center bg-custom-blue text-white rounded-md hover:bg-blue-600 text-lg font-medium font-Work-sans shadow-2xl shadow-blue-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
    </>
  );
}

export default SellCarFormAppointmentTime;
