import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Svgs from "../../assets/svgs/index.js";
import { format, addDays, subDays, isSameDay } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Calendar styles

function ClaimNow({ show, onClose, hidden, hide }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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


 

  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }

    setIsCalendarOpen(false);
  };



  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="mx-3 overflow-y-auto h-[90vh] lg:h-full md:flex items-center justify-center ">
        <div ref={popupRef}>
          <div className="flex justify-between md:mb-6"></div>
          <form onSubmit={handleSubmit}>
            <div className=" mx-auto p-5 md:p-10 bg-white shadow-lg rounded-xl border">
              <div className={`${hidden}`}>
                <h2 className=" lg:text-[28px] text-center font-bold font-inter text-gray-1 mb-4">
                  Reschedule mechanic appointment
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
                    onClick={onClose}
                    className=" w-[271px] h-[52px] flex items-center justify-center bg-custom-blue text-white rounded-md hover:bg-blue-600 text-lg font-medium font-Work-sans shadow-2xl shadow-custom-blue"
                  >
                    Update appointment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClaimNow;
