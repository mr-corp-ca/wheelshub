// import React from "react";
// import Verification from "./Verification";
// import Setting from "./Setting";
// import VerificationinProcess from "./VerificationinProcess";
// import audiCar from "../../assets/images/audicar.png";
// import photo from "../../assets/images/photo.png"
// function Finance() {
//   return (
//     <>
//       <div>
//         <div className="mainpart grid grid-cols-12 p-5 gap-5">
//           <div className=" col-span-12 lg:col-span-7">
//             <div className="heading flex items-center justify-between">
//               <h1 className="text-2xl font-semibold font-inter text-[#161616]">
//                 New Car listings
//               </h1>
//               <button className=" text-base font-medium font-inter text-custom-blue">
//                 View all
//               </button>
//             </div>
//             {Array(4)
//               .fill()
//               .map(() => {
//                 return (
//                   <>
//                     <div className="card py-4">
//                       <div className="card1 border p-5 rounded-xl flex justify-between items-center">
//                         <div className="flex items-center gap-3">
//                           <div>
//                             <img src={audiCar} alt="" />
//                           </div>
//                           <div>
//                             <h1 className="text-lg font-semibold font-inter text-gray-1">
//                               Mercedes-Benz E 220 d
//                             </h1>
//                             <h1 className="text-lg font-medium font-Work-sans text-gray-4">
//                               12th July 2024 11:00 - 12:00 PM
//                             </h1>
//                             <h1 className="text-lg font-medium font-Work-sans text-gray-4">
//                               Winner Name: Sean Wills
//                             </h1>
//                           </div>
//                         </div>
//                         <div>
//                           <button className="w-[150px] h-[44px] rounded-xl border border-gray-1 px-[25.5px] py-[11.5px] text-lg font-medium font-Work-sans text-gray-1 flex items-center justify-center">
//                             Approve
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })}
//           </div>
//           <div className="payments col-span-12 lg:col-span-5">
//             <div className="flex items-center justify-start">
//               <h1 className="text-xl font-semibold font-inter text-gray-1">
//                 Payments
//               </h1>
//             </div>
//             <div className="border rounded-xl p-5 my-5">
//               <div className="flex justify-between items-center">
//                 <div className="flex flex-col gap-3">
//                   <h1 className="text-lg font-normal font-Work-sans text-gray-1">
//                     Balance
//                   </h1>
//                   <h1 className=" text-2xl font-semibold font-inter text-custom-blue">
//                     $100.00
//                   </h1>
//                 </div>
//                 <div>
//                   <button className=" w-[136px] h-[48px] px-[16px] py-[12px] bg-custom-blue text-white font-semibold font-inter text-sm rounded-xl">
//                     Add Money
//                   </button>
//                 </div>
//               </div>
//               <div className="photo pt-16">
//                 <div className="photoUP">
//                     <img src={photo} alt="" className=" border-b-2 border-dashed py-2"/>
//                 </div>
//                 <div className="photodown flex items-center justify-between py-2 border-b-2 border-dashed">
//                     <div className="flex items-center gap-2">
//                         <img src={photo} alt="" />
//                         <span className=" text-base font-normal font-poppins text-gray-1">Subscription</span>
//                     </div>
//                     <div>
//                         <h1 className=" font-poppins text-base font-normal text-[#FF0000]">-$150</h1>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Finance;


import React from "react";
import Verification from "./Verification";
import Setting from "./Setting";
import VerificationinProcess from "./VerificationinProcess";
import audiCar from "../../assets/images/audicar.png";
import photo from "../../assets/images/photo.png";

function Finance() {
  return (
    <>
      <div className="">
        <div className="mainpart grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8">
            <div className="heading flex flex-wrap items-center justify-between mb-5">
              <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                New Car listings
              </h1>
              <button className="text-base font-medium font-inter text-custom-blue">
                View all
              </button>
            </div>
            {Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="card py-4">
                  <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center flex-wrap gap-3">
                      <div>
                        <img src={audiCar} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
                      </div>
                      <div>
                        <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                          Mercedes-Benz E 220 d
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          12th July 2024 11:00 - 12:00 PM
                        </h1>
                        <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                          Winner Name: Sean Wills
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="w-full md:w-[150px] h-[44px] rounded-xl border border-gray-1 px-4 md:px-[25.5px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans text-gray-1 flex items-center justify-center">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="payments col-span-12 lg:col-span-4 ">
            <div className="flex items-center justify-start mb-10">
              <h1 className="text-lg lg:text-xl font-semibold font-inter text-gray-1">
                Payments
              </h1>
            </div>
            <div className="border rounded-xl p-4 md:p-5 my-5">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <div className="flex flex-col gap-3">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-1">
                    Balance
                  </h1>
                  <h1 className="text-xl md:text-2xl font-semibold font-inter text-custom-blue">
                    $100.00
                  </h1>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="w-full md:w-[136px] h-[48px] px-4 md:px-[16px] py-2 md:py-[12px] bg-custom-blue text-white font-semibold font-inter text-sm rounded-xl">
                    Add Money
                  </button>
                </div>
              </div>
              <div className="photo pt-8 md:pt-16">
                <div className="photoUP mb-4">
                  <img src={photo} alt="" className="border-b-2 border-dashed py-2 " />
                </div>
                <div className="photodown flex items-center justify-between py-2 border-b-2 border-dashed">
                  <div className="flex items-center gap-2">
                    <img src={photo} alt="" className="w-10 h-10 md:w-auto md:h-auto" />
                    <span className="text-sm md:text-base font-normal font-poppins text-gray-1">
                      Subscription
                    </span>
                  </div>
                  <div>
                    <h1 className="font-poppins text-sm md:text-base font-normal text-[#FF0000]">
                      -$150
                    </h1>
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

export default Finance;
