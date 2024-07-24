// import React from "react";
// import tickImage from "../../assets/images/ticksign.png";
// import manInCarImage from "../../assets/images/manincar.png";
// import { Button } from "../../components/Button";
// import greentickicon from "../../assets/images/greentickicon.png";
// function SellCarFormVerificationProcess() {
//   return (
//     <>
//       <div className="w-full flex items-center justify-center px-4 my-5">
//         <div className="verificationProcess  p-6 sm:p-10 w-full max-w-4xl">
//           <div className="flex items-center justify-center flex-col gap-5">
//             <div>
//               <img src={greentickicon} alt="" className="max-w-full h-auto" />
//             </div>
//             <div>
//               <h1 className="text-2xl sm:text-[36px] font-semibold font-inter text-gray-1 text-center">
//                 Payment successful!
//               </h1>
//               <p className=" my-5 text-base font-normal font-plus-jakarta-sans text-gray-4">
//                 Payment of $100 is successfully paid to Wheeldealhub
//               </p>
//             </div>
//           </div>

//           <div className=" border rounded-xl p-5">
//             <div className="   border-b border-dashed pb-3 flex items-center justify-between w-full ">
//               <div className="flex items-center justify-between gap-5">
//                 <div className="img">
//                   <img
//                     src={manInCarImage}
//                     alt=""
//                     className="rounded-xl max-w-full h-auto"
//                   />
//                 </div>
//                 <div className="outer flex flex-col gap-2">
//                   <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
//                     <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-1">
//                       John Santner
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-4">
//                     12th July 2024 11:00 - 12:00 PM
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
//                     7711 128 St, Surrey, BC V3W 4E6, Canada
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className=" text-2xl font-semibold font-plus-jakarta-sans text-gray-1">
//                   $50.00
//                 </h1>
//               </div>
//             </div>
//             <div className=" py-10 flex items-center justify-between w-full ">
//               <div className="flex items-center justify-between gap-5">
//                 <div className="img">
//                   <img
//                     src={manInCarImage}
//                     alt=""
//                     className="rounded-xl max-w-full h-auto"
//                   />
//                 </div>
//                 <div className="outer flex flex-col gap-2">
//                   <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
//                     <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-1">
//                       John Santner
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-4">
//                     12th July 2024 11:00 - 12:00 PM
//                     </h1>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-center gap-1">
//                     <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
//                     7711 128 St, Surrey, BC V3W 4E6, Canada
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className=" text-2xl font-semibold font-plus-jakarta-sans text-gray-1">
//                   $50.00
//                 </h1>
//               </div>
//             </div>

//             <div className="py-5">
//             <hr className="text-gray-5 border-2" />
//           </div>


//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Transaction date
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Payment method
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Transaction ID
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//             <div className=" my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-2">
//               Subtotal
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>

//           <div className="py-5">
//             <hr className="text-gray-5 border-2" />
//           </div>
//             <div className=" my-5 flex flex-col sm:flex-row justify-between items-center gap-2">
//             <div>
//               <h1 className="text-2xl font-normal font-Work-sans text-gray-4">
//               Total
//               </h1>
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left">
//                 10:00-11:00AM, 13 June 2024
//               </h1>
//             </div>
//           </div>
//           <div className="flex items-center justify-center py-3">
//             <button className="text-lg rounded-xl font-Work-sans font-medium w-[123px] h-[48px] px-[24px] py-[12px] bg-custom-blue text-white flex items-center justify-center">
//             Close
//             </button>
//           </div>          
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default SellCarFormVerificationProcess;




import React from "react";
import tickImage from "../../assets/images/ticksign.png";
import manInCarImage from "../../assets/images/manincar.png";
import { Button } from "../../components/Button";
import greentickicon from "../../assets/images/greentickicon.png";
import Navbar2 from "../../components/Navbar2";

function SellCarFormVerificationProcess() {
  return (
    <>
      <Navbar2 />
      <div className="w-full flex items-center justify-center px-4 my-5">
        <div className="verificationProcess p-6 sm:p-10 w-full lg:w-[70vw]">
          <div className="flex items-center justify-center flex-col gap-5">
            <div>
              <img src={greentickicon} alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-[36px] font-semibold font-inter text-gray-800 text-center">
                Payment successful!
              </h1>
              <p className="my-5 text-base font-normal font-plus-jakarta-sans text-gray-600">
                Payment of $100 is successfully paid to Wheeldealhub
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-5">
            <div className="border-b border-dashed pb-3 flex flex-wrap  items-center  justify-between w-full gap-4">
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5">
                <div className="img ">
                  <img
                    src={manInCarImage}
                    alt=""
                    className="rounded-xl max-w-full h-auto"
                  />
                </div>
                <div className="outer flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
                    <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-800">
                      John Santner
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-600">
                      12th July 2024 11:00 - 12:00 PM
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
                      7711 128 St, Surrey, BC V3W 4E6, Canada
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold font-plus-jakarta-sans text-gray-800">
                  $50.00
                </h1>
              </div>
            </div>
            <div className="py-10 flex flex-wrap  items-center  justify-between w-full gap-4">
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5">
                <div className="img">
                  <img
                    src={manInCarImage}
                    alt=""
                    className="rounded-xl max-w-full h-auto"
                  />
                </div>
                <div className="outer flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1">
                    <h1 className="text-xl sm:text-2xl font-semibold font-inter text-gray-800">
                      John Santner
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-gray-600">
                      12th July 2024 11:00 - 12:00 PM
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1">
                    <h1 className="text-base sm:text-lg font-medium font-Work-sans text-custom-blue underline">
                      7711 128 St, Surrey, BC V3W 4E6, Canada
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold font-plus-jakarta-sans text-gray-800">
                  $50.00
                </h1>
              </div>
            </div>

            <div className="py-5">
              <hr className="text-gray-500 border-2" />
            </div>

            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Transaction date
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  10:00-11:00AM, 13 June 2024
                </h1>
              </div>
            </div>
            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Payment method
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  Credit Card
                </h1>
              </div>
            </div>
            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Transaction ID
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  1234567890
                </h1>
              </div>
            </div>
            <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-base sm:text-lg font-normal font-Work-sans text-gray-500">
                  Subtotal
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  $100.00
                </h1>
              </div>
            </div>

            <div className="py-5">
              <hr className="text-gray-500 border-2" />
            </div>
            <div className="my-5 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <h1 className="text-2xl font-normal font-Work-sans text-gray-600">
                  Total
                </h1>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-800 text-center sm:text-left">
                  $100.00
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center py-3">
              <button className="text-lg rounded-xl font-Work-sans font-medium w-[123px] h-[48px] px-[24px] py-[12px] bg-custom-blue text-white flex items-center justify-center">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellCarFormVerificationProcess;
