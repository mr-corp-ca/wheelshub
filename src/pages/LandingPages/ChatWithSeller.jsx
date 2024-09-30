import React from "react";
import man1 from "../../assets/images/man1.png";
import man2 from "../../assets/images/man2.png";
import man3 from "../../assets/images/man3.png";
import man4 from "../../assets/images/man4.png";
import { useEffect, useRef } from "react";
import Svgs from '../../assets/svgs/index.js'


function ChatWithSeller({onClose, show}) {

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
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div ref={popupRef} className="w-[90%] h-[90vh] overflow-y-auto scrollbar-none bg-white shadow-lg rounded-xl border">
      <div className="chatsMainPart">
        <div className="ChatWholepart">
          <div className="rounded-xl border">
            <div className="upersection grid grid-cols-12">
              <div className="leftuper p-3 flex justify-between col-span-12 lg:col-span-4 items-center border-r border-b">
                <div className="flex items-center gap-3">
                  <div>
                    <img src={man4} alt="" />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base font-medium font-public-sans text-gray-1">Robert Fox</h1>
                    <h1 className="text-xs md:text-sm font-normal font-public-sans text-[#999999]">Online</h1>
                  </div>
                </div>
                <div>
                  <Svgs.SearchIcon/>
                </div>
              </div>
              <div className="rightuper p-3 flex justify-between col-span-12 lg:col-span-8 items-center border-b">
                <div className="flex items-center gap-3">
                  <div>
                    <img src={man3} alt="" />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base font-medium font-public-sans text-gray-1">Robert Fox</h1>
                    <h1 className="text-xs md:text-sm font-normal font-public-sans text-[#999999]">Online</h1>
                  </div>
                </div>
                <div>
                  <Svgs.VerticalDots3/>
                </div>
              </div>
              <div className="leftdownsection col-span-12 lg:col-span-4 border-r">
                <div className="text-lg font-medium font-public-sans text-gray-1 px-3 pt-5 pb-4">
                  <h1>Messages</h1>
                </div>
                <div className="leftdown p-3 flex justify-between items-center bg-[#f2f2f2] border-b w-full">
                  <div className="flex items-center gap-3 w-full">
                    <div>
                      <img src={man4} alt="" />
                    </div>
                    <div className=" w-full">
                      <div>
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Jimmy</h1>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                          <Svgs.GrayDoubleTick/>
                          <h1 className="text-xs md:text-base font-normal font-public-sans text-gray-2">Hey! I just checked your...</h1>
                        </div>
                        <div>
                          <h1 className="text-xs md:text-sm font-normal font-public-sans text-gray-4">10.44</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leftdown p-3 flex justify-between items-center border-b">
                  <div className="flex items-center gap-3 w-full">
                    <div>
                      <img src={man2} alt="" />
                    </div>
                    <div className=" w-full">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Nik Smith</h1>
                        <Svgs.OneIcon/>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                          <Svgs.BlueDoubleTick/>
                          <h1 className="text-xs md:text-base font-normal font-public-sans text-gray-2">Hey! I just checked your...</h1>
                        </div>
                        <div>
                          <h1 className="text-xs md:text-sm font-normal font-public-sans text-gray-4">10.44</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightdownsection col-span-12 lg:col-span-8 p-4">
                <div className="flex items-center justify-center py-5">
                 <Svgs.TodayLineIcon/>
                </div>
                <div>
                  <div className="chat1right">
                    <div className="flex items-center justify-end">
                      <h1 className="text-sm md:text-base font-normal font-public-sans py-[12px] px-[16px] bg-custom-blue text-white rounded-l-xl  flex items-center rounded-tr-xl">
                        Hey! we provide Finance services for used car sales at minimum interest prices.
                      </h1>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                    </div>
                  </div>
                  <div className="chat1left inline-block py-10">
                    <div className="flex items-center gap-3">
                      <img src={man1} alt="" />
                      <h1 className="bg-[#f8f8f8] text-sm md:text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Oh great! I would like to know more</h1>
                    </div>
                    <div className="text-end">
                      <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                    </div>
                  </div>
                  <div className="chat1right pb-10">
                    <div className="flex items-center justify-end">
                      <h1 className="text-sm md:text-base font-normal font-public-sans py-[12px] px-[16px] bg-custom-blue text-white rounded-l-xl flex items-center rounded-tr-xl w-fit">
                        Sure, Let me explain all interest prices for difference type of cars.
                      </h1>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                    </div>
                  </div>
                  <div className="chat1left inline-block pb-10">
                    <div className="flex items-center gap-3">
                      <img src={man1} alt="" />
                      <h1 className="bg-[#f8f8f8] text-sm md:text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Thank you!</h1>
                    </div>
                    <div className="text-end">
                      <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-[#f8f8f8] p-5 flex items-center justify-between">
                  <input className="text-sm md:text-base font-normal font-poppins text-gray-4 bg-[#f8f8f8] w-full h-full border-none outline-none" placeholder="Write a message ..." type="text" />
                  <Svgs.SendIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default ChatWithSeller;