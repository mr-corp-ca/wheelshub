// import React from "react";
// import odi from "../../assets/images/odicarfordialog.png";
// import hearticon from "../../assets/images/hearticon.png";
// import grayDot from "../../assets/images/graydot.png";
// import locations from "../../assets/images/locaations.png"
// import calls from "../../assets/images/calls.png"
// import maps from "../../assets/images/mapss.png"
// function BuyACarDetailsDialog() {
//   return (
//     <>
//       <div className=" border rounded-xl p-5 w-[672px]">
//         <div className="">
//           <h1 className=" text-[32px] font-inter font-bold text-gray-1">
//             Seller Details
//           </h1>
//         </div>
//         <div className="flex items-center gap-5 my-5">
//           <div>
//             <img src={odi} alt="" />
//           </div>
//           <div className=" flex flex-col gap-1 w-full">
//             <div className="flex items-center justify-between ">
//               <h1 className=" text-lg font-inter text-gray-1 font-semibold">
//                 Mercedes-Benz E 220 d
//               </h1>
//               <img src={hearticon} alt="" />
//             </div>
//             <div>
//               <div className="flex items-center gap-4">
//                 <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
//                   45000 KM
//                 </h1>
//                 <img src={grayDot} alt="" />
//                 <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
//                   2018 Model
//                 </h1>
//                 <img src={grayDot} alt="" />
//                 <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
//                   Automatic
//                 </h1>
//               </div>
//             </div>
//           <div>
//           <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
//               $22,500
//             </h1>
//           </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//         <div className="flex items-center gap-4">
//             <img src={locations} alt="" />
//             <h1 className=" text-base font-normal font-Work-sans text-custom-blue">7711 128 St, Surrey, BC V3W 4E6, Canada</h1>
//         </div>
//         <div className="flex items-center gap-4">
//             <img src={calls} alt="" />
//             <h1 className=" text-base font-normal font-Work-sans text-gray-1">+1 *** *** ****</h1>
//         </div>
//         </div>
//         <div className="flex items-center my-5 gap-8">
//             <button className="h-[44px] px-[12px] py-[10px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-gray-1 flex items-center justify-center gap-2">
//                 <img src={maps} alt="" />
//                 Directions
//             </button>
//             <button className="h-[44px] px-[12px] py-[11.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-gray-1 flex items-center justify-center">
//             Chat with seller
//             </button>
//           </div>
//           <div className="flex items-center justify-center my-10">
//             <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans text-custom-blue bg-white border border-custom-blue flex items-center justify-center">
//                 Check loan offers
//             </button>
//           </div>
//       </div>
//     </>
//   );
// }

// export default BuyACarDetailsDialog;


import React from "react";
import odi from "../../assets/images/odicarfordialog.png";
import hearticon from "../../assets/images/hearticon.png";
import grayDot from "../../assets/images/graydot.png";
import locations from "../../assets/images/locaations.png";
import calls from "../../assets/images/calls.png";
import maps from "../../assets/images/mapss.png";

function BuyACarDetailsDialog() {
  return (
    <>
    <div className="w-[100%] h-[100vh] flex items-center justify-center px-3 lg:px-0">
    <div className="border rounded-xl p-7 w-full max-w-[672px] mx-auto">
      <div>
        <h1 className="text-2xl md:text-3xl font-inter font-bold text-gray-1">
          Seller Details
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 my-5">
        <img src={odi} alt="Car" className="w-32 md:w-auto" />
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between">
            <h1 className="lg:text-lg font-inter text-gray-1 font-semibold">
              Mercedes-Benz E 220 d
            </h1>
            <img src={hearticon} alt="Heart icon" className="w-6 md:w-auto" />
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
              45000 KM
            </h1>
            <img src={grayDot} alt="Dot" className="w-1 md:w-auto" />
            <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
              2018 Model
            </h1>
            <img src={grayDot} alt="Dot" className="w-1 md:w-auto" />
            <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
              Automatic
            </h1>
          </div>
          <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
            $22,500
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img src={locations} alt="Location" className="w-6 md:w-auto" />
          <h1 className="text-sm md:text-base font-normal font-Work-sans text-custom-blue underline">
            7711 128 St, Surrey, BC V3W 4E6, Canada
          </h1>
        </div>
        <div className="flex items-center gap-4 ">
          <img src={calls} alt="Call" className="w-6 md:w-auto" />
          <h1 className="text-sm md:text-base font-normal font-Work-sans text-gray-1">
            +1 *** *** ****
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 my-5">
        <button className="h-11 md:h-12 px-3 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-gray-1 flex items-center justify-center gap-2 w-full md:w-auto">
          <img src={maps} alt="Maps" className="w-5 md:w-auto" />
          Directions
        </button>
        <button className="h-11 md:h-12 px-3 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-gray-1 flex items-center justify-center w-full md:w-auto">
          Chat with seller
        </button>
      </div>
      <div className="flex items-center justify-center my-5 mt-10">
        <button className="h-11 md:h-12 px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium font-Work-sans text-custom-blue bg-white border border-custom-blue flex items-center justify-center w-full md:w-auto">
          Check loan offers
        </button>
      </div>
    </div>
    </div>
    </>
  );
}

export default BuyACarDetailsDialog;
