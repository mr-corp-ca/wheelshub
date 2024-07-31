// import React from "react";
// import man1 from "../../assets/images/man1.png";
// import man2 from "../../assets/images/man2.png";
// import man3 from "../../assets/images/man3.png";
// import man4 from "../../assets/images/man4.png";
// import search from "../../assets/images/Search.png";
// import dots3 from "../../assets/images/dots3.png";
// import bluetick from "../../assets/images/bluetick.png";
// import graytick from "../../assets/images/graytick.png";
// import oneBlue from "../../assets/images/oneBlue.png";
// import today from "../../assets/images/today.png";
// import telegram from "../../assets/images/telegram.png"
// function Chats() {
//   return (
//     <>
//       <div className="chatsMainPart p-8">
//         <div className="chatHeading">
//           <h1 className=" text-2xl font-semibold font-inter text-gray-1">
//             Chats
//           </h1>
//         </div>
//         <div className="ChatWholepart  my-6">
//           <div className=" rounded-xl border ">
//             <div className="upersection grid grid-cols-12">
//               <div className="leftuper p-3 flex justify-between col-span-3 items-center border-r border-b">
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <img src={man4} alt="" />
//                   </div>
//                   <div>
//                     <h1 className=" text-base font-medium font-public-sans text-gray-1">
//                       Robert Fox
//                     </h1>
//                     <h1 className=" text-sm font-normal font-public-sans text-[#999999]">
//                       Online
//                     </h1>
//                   </div>
//                 </div>
//                 <div>
//                   <img src={search} alt="" />
//                 </div>
//               </div>
//               <div className="rightuper p-3 flex justify-between col-span-9 items-center border-b">
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <img src={man3} alt="" />
//                   </div>
//                   <div>
//                     <h1 className=" text-base font-medium font-public-sans text-gray-1">
//                       Robert Fox
//                     </h1>
//                     <h1 className=" text-sm font-normal font-public-sans text-[#999999]">
//                       Online
//                     </h1>
//                   </div>
//                 </div>
//                 <div>
//                   <img src={dots3} alt="" />
//                 </div>
//               </div>
//               <div className="leftdownsection col-span-3 border-r">
//                 <div className=" text-lg font-medium font-public-sans text-gray-1 px-3 pt-5 pb-4">
//                   <h1>Messages</h1>
//                 </div>
//                 <div className="leftdown p-3 flex justify-between  items-center bg-[#f2f2f2] border-b">
//                   <div className="flex items-center gap-3">
//                     <div>
//                       <img src={man4} alt="" />
//                     </div>
//                     <div>
//                       <div>
//                         <h1 className=" text-base font-medium font-poppins text-gray-1">
//                           Jimmy
//                         </h1>
//                       </div>
//                       <div className="flex items-center justify-between gap-7">
//                         <div className="flex items-center gap-2">
//                           <img src={graytick} alt="" />
//                           <h1 className=" text-base font-normal font-public-sans text-gray-2">
//                             Hey! I just checked your...
//                           </h1>
//                         </div>
//                         <div>
//                           <h1 className=" text-sm font-normal font-public-sans text-gray-4">
//                             10.44
//                           </h1>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="leftdown p-3 flex justify-between  items-center border-b">
//                   <div className="flex items-center gap-3">
//                     <div>
//                       <img src={man2} alt="" />
//                     </div>
//                     <div>
//                       <div className="flex items-center justify-between">
//                         <h1 className=" text-base font-medium font-poppins text-gray-1">
//                           Nik Smith
//                         </h1>
//                         <img src={oneBlue} alt="" />
//                       </div>
//                       <div className="flex items-center justify-between gap-7">
//                         <div className="flex items-center gap-2">
//                           <img src={bluetick} alt="" />
//                           <h1 className=" text-base font-normal font-public-sans text-gray-2">
//                             Hey! I just checked your...
//                           </h1>
//                         </div>
//                         <div>
//                           <h1 className=" text-sm font-normal font-public-sans text-gray-4">
//                             10.44
//                           </h1>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="rightdownsection col-span-9 p-4">
//                 <div className="flex items-center justify-center py-5">
//                   <img src={today} alt="" />
//                 </div>
//                 <div className="">
//                 <div className="chat1right">
//                   <div className="flex items-center justify-end">
//                     <h1 className="text-base font-normal font-public-sans p-4 bg-custom-blue text-white rounded-l-xl h-[44px] flex items-center rounded-tr-xl w-fit">
//                       Hey! we provide Finance services for used car sales at
//                       minimum interest prices.
//                     </h1>
//                   </div>
//                   <div className="flex items-center justify-end">
//                     <span className="block text-sm font-normal font-public-sans text-[#b4b4b4] py-2">
//                       05.21
//                     </span>
//                   </div>
//                 </div>
//                 <div className="chat1left inline-block py-10">
//                     <div className="flex items-center gap-3">
//                         <img src={man1} alt="" />
//                         <h1 className="bg-[#f8f8f8] text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Oh great! I would like to know more</h1>
//                   </div>
//                   <div className=" text-end">
//                     <span className="block text-sm font-normal font-public-sans text-[#b4b4b4] py-2">
//                       05.21
//                     </span>
//                     </div>
//                 </div>
//                 <div className="chat1right pb-10">
//                   <div className="flex items-center justify-end">
//                     <h1 className="text-base font-normal font-public-sans p-4 bg-custom-blue text-white rounded-l-xl h-[44px] flex items-center rounded-tr-xl w-fit">
//                     Sure, Let me explain all interest prices for difference type of cars.
//                     </h1>
//                   </div>
//                   <div className="flex items-center justify-end">
//                     <span className="block text-sm font-normal font-public-sans text-[#b4b4b4] py-2">
//                       05.21
//                     </span>
//                   </div>
//                 </div>
//                 <div className="chat1left inline-block pb-10">
//                     <div className="flex items-center gap-3">
//                         <img src={man1} alt="" />
//                         <h1 className="bg-[#f8f8f8] text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Thank you!</h1>
//                   </div>
//                   <div className=" text-end">
//                     <span className="block text-sm font-normal font-public-sans text-[#b4b4b4] py-2">
//                       05.21
//                     </span>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="rounded-xl border bg-[#f8f8f8] p-5 flex items-center justify-between">
//                     <h1 className=" text-base font-normal font-poppins text-gray-4">Write a message ...</h1>
//                     <img src={telegram} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chats;



import React from "react";
import man1 from "../../assets/images/man1.png";
import man2 from "../../assets/images/man2.png";
import man3 from "../../assets/images/man3.png";
import man4 from "../../assets/images/man4.png";
import search from "../../assets/images/Search.png";
import dots3 from "../../assets/images/dots3.png";
import bluetick from "../../assets/images/bluetick.png";
import graytick from "../../assets/images/graytick.png";
import oneBlue from "../../assets/images/oneBlue.png";
import today from "../../assets/images/today.png";
import telegram from "../../assets/images/telegram.png";

function Chats() {
  return (
    <>
      <div className="chatsMainPart p-4 md:p-8">
        <div className="chatHeading">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">Chats</h1>
        </div>
        <div className="ChatWholepart my-6">
          <div className="rounded-xl border">
            <div className="upersection grid grid-cols-12">
              <div className="leftuper p-3 flex justify-between col-span-12 md:col-span-3 items-center border-r border-b">
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
                  <img src={search} alt="" />
                </div>
              </div>
              <div className="rightuper p-3 flex justify-between col-span-12 md:col-span-9 items-center border-b">
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
                  <img src={dots3} alt="" />
                </div>
              </div>
              <div className="leftdownsection col-span-12 md:col-span-3 border-r">
                <div className="text-lg font-medium font-public-sans text-gray-1 px-3 pt-5 pb-4">
                  <h1>Messages</h1>
                </div>
                <div className="leftdown p-3 flex justify-between items-center bg-[#f2f2f2] border-b">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={man4} alt="" />
                    </div>
                    <div>
                      <div>
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Jimmy</h1>
                      </div>
                      <div className="flex items-center justify-between gap-7">
                        <div className="flex items-center gap-2">
                          <img src={graytick} alt="" />
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
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={man2} alt="" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Nik Smith</h1>
                        <img src={oneBlue} alt="" />
                      </div>
                      <div className="flex items-center justify-between gap-7">
                        <div className="flex items-center gap-2">
                          <img src={bluetick} alt="" />
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
              <div className="rightdownsection col-span-12 md:col-span-9 p-4">
                <div className="flex items-center justify-center py-5">
                  <img src={today} alt="" />
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
                  <img src={telegram} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
