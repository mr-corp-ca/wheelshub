import React from "react";
import Navbar2 from "../../components/Navbar2";
import greentick from "../../assets/images/greentickimage.png";
import manincar from "../../assets/images/manincar.png"

function HandoverAppointment() {
  return (
    <>
      <Navbar2 />
      <div className="firstpart bg-[#f3f3f3] h-[50vh]">
       
      </div>
      <div className="cardpart flex justify-center bg-white mx-5">
        <div className=" mb-16 -mt-48 w-full md:w-[90%] mx-auto bg-white border rounded-xl py-10 px-5 md:px-16">
            <div className="flex flex-col items-center justify-center gap-8">
            <div className="">
            <img src={greentick} alt="" />
          </div>
          <div>
            <h1 className=" text-[36px] font-semibold font-inter text-gray-1">Handover request sent</h1>
          </div>
          <div>
            <p className=" text-base font-normal font-plus-jakarta-sans text-gray-4">You will be notified about the time of handover once the dealer accepted the request.</p>
          </div>
            </div>
          <div className=" border rounded-xl p-8 mt-8">
            <div className=" border-b-2 flex items-center gap-5 pb-8">
                <div>
                    <img src={manincar} alt="" />
                </div>
                <div className=" flex flex-col gap-3">
                    <h1 className=" text-2xl font-semibold font-inter text-gray-1">Dealer appointment</h1>
                    <h1 className=" text-lg font-medium text-custom-blue font-Work-sans">7711 128 St, Surrey, BC V3W 4E6, Canada</h1>
                </div>
            </div>
            <div className=" flex items-center justify-between my-10">
                <h1 className=" text-lg font-normal text-gray-2 font-Work-sans">Reporting time</h1>
                <h1 className=" text-xl font-semibold font-plus-jakarta-sans text-gray-1">Handover time is not updated yet.</h1>
            </div>
            <div className=" flex items-center justify-center">
                <button className="px-[44px] py-[15.5px] h-[52px] flex items-center justify-center rounded-xl bg-custom-blue shadow-2xl shadow-custom-blue text-white text-lg font-medium font-Work-sans ">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HandoverAppointment;
