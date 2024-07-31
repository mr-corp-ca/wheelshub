import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import gallery from "../../assets/images/gallery.png";
import photo from "../../assets/images/photo.png";
import crossicon from "../../assets/images/crossIcon.png";
import greentickrounded from "../../assets/images/roundedGreentick.png"
import { useNavigate } from "react-router-dom";
function ClaimNow({ show, onClose, hidden, hide }) {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [selectedDay, setSelectedDay] = useState("Wed 17");
  const [selectedTime, setSelectedTime] = useState("10:00-11:00 AM");

  const days = ["Mon 17", "Tue 17", "Wed 17", "Thu 17", "Fri 17", "Sat 17"];
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
  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
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
      <div className="">
        <div ref={popupRef}>
          {/* <div>
            <img
              onClick={onClose}
              src={crossicon}
              className="bg-gray-300 rounded-full absolute right-2 cursor-pointer w-10"
              alt=""
            />
          </div> */}
          <div className="flex justify-between md:mb-6"></div>
          <form onSubmit={handleSubmit}>
            <div className=" mx-auto p-10 bg-white shadow-lg rounded-xl border">
              <div className={`${hidden}`}>
              <h2 className="text-[28px] text-center font-bold font-inter text-gray-1 mb-4">
                Reschedule mechanic appointment
              </h2>
              <div className="flex flex-wrap justify-center my-10">
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
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
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
              <div className=" flex items-center justify-center py-5">
                <button
                  onClick={onClose}
                  className="w-1/2 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Update appointment
                </button>
              </div>
              </div>
              <div className={`flex flex-col gap-3 ${hide}`}>
                <div className="img flex items-center justify-center">
                  <img src={greentickrounded} alt="" />
                </div>
                <div className=" flex items-center justify-center text-center">
                  <h1 className=" w-[60%] text-base font-medium font-poppins text-gray-1">
                  Verified
                  successfully
                  </h1>
                </div>
                <div  className=" flex items-center justify-center">
                  <button onClick={()=>{navigate('/dashboard/insurancelogin')}} className=" text-sm font-semibold font-inter bg-custom-blue px-[16px] py-[12px] w-full rounded-xl text-white">Close</button>
                </div>
              </div>
            </div>
            {/* <div className="py-6 text-center">
              <Button
                onClick={onClose}
                title="Submit claim"
                className="text-base font-medium"
              />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClaimNow;
