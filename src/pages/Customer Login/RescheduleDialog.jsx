import React, { useState } from 'react';

const RescheduleDialog = () => {
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
    <div className=' w-[100vw] h-[100vh] flex items-center justify-center'>
    <div className=" w-[40%] mx-auto p-10 bg-white shadow-lg rounded-xl border">
      <h2 className="text-[28px] text-center font-bold font-inter text-gray-1 mb-4">Reschedule mechanic appointment</h2>
      <div className="flex flex-wrap justify-center mb-4">
        {days.map((day) => (
          <button
            key={day}
            className={`p-2 m-1 rounded ${
              selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200'
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
              selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } ${time === '1:00-2:00 PM' ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => time !== '1:00-2:00 PM' && setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <div className=' flex items-center justify-center'>
      <button className="w-1/2 py-2 bg-blue-500 text-white rounded-lg">
        Update appointment
      </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default RescheduleDialog;
