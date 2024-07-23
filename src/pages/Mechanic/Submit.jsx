import React from 'react';
import greenTick from "../../assets/images/greentick2.png";

function Submit() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center p-4">
        <div className="w-full max-w-sm bg-slate-100 flex items-center justify-center flex-col py-10 gap-5 rounded-xl">
          <div>
            <img src={greenTick} alt="Green Tick" />
          </div>
          <div className="w-full px-4 text-center">
            <h1 className="text-base font-medium font-poppins text-gray-800">
              Documents submitted successfully
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <button className="w-48 h-12 bg-custom-blue text-white rounded-xl text-sm font-semibold font-inter">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submit;
