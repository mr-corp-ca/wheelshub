// import React from "react";
// import usedCarsImage from "../../assets/images/usedcarsimages.png";
// import heartIcon from "../../assets/images/hearticon.png";
// import yellowstar from "../../assets/images/staryellow.png";
// import bluetick from "../../assets/images/bluetick (2).png";
// import contact from "../../assets/images/contact.png"
// import maps from "../../assets/images/maps.png"
// import gmail from "../../assets/images/gmail.png"
// function DealerDetails() {
//   return (
//     <>
//       <div className="grid grid-cols-12 p-10 gap-10">
//         <div className=" col-span-6">
//           <img src={usedCarsImage} alt="" />
//         </div>
//         <div className=" col-span-6">
//           <div className="border rounded-xl p-5">
//             <div className="flex items-center justify-between">
//               <h1 className=" text-[32px] font-bold font-inter text-gray-1">
//                 Surrey car dealers
//               </h1>
//               <img src={heartIcon} alt="" />
//             </div>
//             <div className="my-4">
//               <h1 className="text-lg font-medium font-Work-sans text-custom-blue">
//                 7711 128 St, Surrey, BC V3W 4E6, Canada
//               </h1>
//             </div>
//             <div className="flex flex-col gap-3 my-4">
//               <div className=" flex items-center gap-3">
//                 <img src={yellowstar} alt="Yellow star" />
//                 <h1 className="text-lg font-medium font-Work-sans  text-gray-1">
//                   430 Reviews
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img src={bluetick} alt="Yellow tick" />
//                 <p className="text-lg font-medium font-Work-sans text-gray-1">
//                   Verified by Wheeldealhub
//                 </p>
//               </div>
//             </div>
//             <div className="w-[524px] rounded-xl p-4 bg-[#eeeeee] flex flex-col gap-3">
//               <div>
//                 <h1 className=" text-lg font-medium font-Work-sans text-gray-4">
//                   Opening hours(Mon-Sat)
//                 </h1>
//               </div>
//               <div>
//                 <h1 className=" text-2xl font-semibold font-inter text-gray-1">
//                   7:00-7:00 PM
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center my-5 mt-10">
//               <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
//               Call now - +650 334 4545
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center gap-5 my-5">
//         <div className=" border shadow rounded-xl px-[87px] py-[14px] w-fit flex items-center justify-center flex-col gap-4 h-[128px]">
//             <div>
//                 <img src={contact} alt="" />
//             </div>
//             <div>
//                 <h1 className=" text-lg font-medium font-Work-sans text-custom-blue">
//                 +1 660 656 6766
//                 </h1>
//             </div>
//         </div>
//         <div className=" border shadow rounded-xl px-[39px] py-[14px] w-fit flex items-center justify-center flex-col gap-4 h-[128px]">
//             <div>
//                 <img src={maps} alt="" />
//             </div>
//             <div>
//                 <h1 className=" w-[242px] text-center text-lg font-medium font-Work-sans text-custom-blue">
//                 7711 128 St, Surrey, BC V3W
//                 4E6, Canada
//                 </h1>
//             </div>
//         </div>
//         <div className=" border shadow rounded-xl px-[53px] py-[14px] w-fit flex items-center justify-center flex-col gap-4 h-[128px]">
//             <div>
//                 <img src={gmail} alt="" />
//             </div>
//             <div>
//                 <h1 className=" text-lg font-medium font-Work-sans text-custom-blue">
//                 info@surreydealers.com
//                 </h1>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DealerDetails;


import React from "react";
import usedCarsImage from "../../assets/images/usedcarsimages.png";
import heartIcon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import bluetick from "../../assets/images/bluetick (2).png";
import contact from "../../assets/images/contact.png";
import maps from "../../assets/images/maps.png";
import gmail from "../../assets/images/gmail.png";

function DealerDetails() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 p-5 lg:p-10 gap-5 lg:gap-10">
        <div className="col-span-12 lg:col-span-6">
          <img src={usedCarsImage} className="w-full" alt="Used Cars" />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="border rounded-xl p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl lg:text-[32px] font-bold font-inter text-gray-1">
                Surrey car dealers
              </h1>
              <img src={heartIcon} alt="Heart Icon" className="w-6 lg:w-auto" />
            </div>
            <div className="my-4">
              <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
                7711 128 St, Surrey, BC V3W 4E6, Canada
              </h1>
            </div>
            <div className="flex flex-col gap-3 my-4">
              <div className="flex items-center gap-3">
                <img src={yellowstar} alt="Yellow star" className="w-6 lg:w-auto" />
                <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-1">
                  430 Reviews
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={bluetick} alt="Blue tick" className="w-6 lg:w-auto" />
                <p className="text-sm lg:text-lg font-medium font-Work-sans text-gray-1">
                  Verified by Wheeldealhub
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[524px] rounded-xl p-4 bg-[#eeeeee] flex flex-col gap-3">
              <div>
                <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                  Opening hours (Mon-Sat)
                </h1>
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-semibold font-inter text-gray-1">
                  7:00-7:00 PM
                </h1>
              </div>
            </div>
            <div className="flex items-center my-5 mt-10">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                Call now - +650 334 4545
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-5">
        <div className="border shadow rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <img src={contact} alt="Contact Icon" className="w-10 lg:w-auto" />
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
              +1 660 656 6766
            </h1>
          </div>
        </div>
        <div className="border shadow rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <img src={maps} alt="Maps Icon" className="w-10 lg:w-auto" />
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue text-center">
              7711 128 St, Surrey, BC V3W 4E6, Canada
            </h1>
          </div>
        </div>
        <div className="border shadow rounded-xl px-10 py-5 w-full md:w-auto flex items-center justify-center flex-col gap-4 h-[128px]">
          <div>
            <img src={gmail} alt="Gmail Icon" className="w-10 lg:w-auto" />
          </div>
          <div>
            <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-custom-blue">
              info@surreydealers.com
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealerDetails;
