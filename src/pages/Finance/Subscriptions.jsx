// import React from "react";
// import greenTick from "../../assets/images/greenTick.png";
// import pattern from "../../assets/images/Pattern.png";
// import mailGift from "../../assets/images/mailGift.png"
// function Subscriptions() {
//   return (
//     <>
//       <div className="p-10">
//         <div className="myorderheading">
//           <h1 className=" text-2xl font-semibold font-inter text-gray-1">
//             My Order
//           </h1>
//         </div>
//         <div className="cards py-5 grid grid-cols-4 gap-16">
//           <div className="silver border shadow rounded-xl p-3 relative w-full max-w-[352px]">
//             <div className=" absolute top-0 right-0">
//               <img src={pattern} alt="" />
//             </div>
//             <div className="uperheadings flex flex-col gap-3">
//               <div>
//                 <h1 className=" text-2xl font-semibold font-inter text-custom-blue">
//                   Silver
//                 </h1>
//               </div>
//               <div className=" text-[32px] font-bold font-inter text-custom-blue">
//                 <h1>$70</h1>
//               </div>
//             </div>
//             <div className="lowerheading pt-10">
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   25 contacts per month
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   More business
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   2 minimum appointments
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   2 minimum Handovers
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center justify-center pb-4 md:pb-5 py-2">
//               <button className="w-full max-w-[312px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center">
//                 Subscribe
//               </button>
//             </div>
//             <div className="needhelp flex items-center justify-center">
//               <button className=" text-base font-medium font-Work-sans text-gray-2">
//                 Need help?
//               </button>
//             </div>
//           </div>
//           <div className="Gold border shadow rounded-xl p-3 relative w-full max-w-[352px] bg-custom-blue">
//             <div className=" absolute top-0 right-0">
//               <img src={pattern} alt="" />
//             </div>
//             <div className="uperheadings flex flex-col gap-3">
//               <div>
//                 <h1 className=" text-2xl font-semibold font-inter text-white">
//                   Gold
//                 </h1>
//               </div>
//               <div className=" text-[32px] font-bold font-inter text-white">
//                 <h1>$70</h1>
//               </div>
//             </div>
//             <div className="lowerheading pt-10">
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-white">
//                   25 contacts per month
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-white">
//                   More business
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-white">
//                   2 minimum appointments
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-white">
//                   2 minimum Handovers
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center justify-center pb-4 md:pb-5 py-2">
//               <button className="w-full max-w-[312px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white text-custom-blue flex items-center justify-center">
//                 Subscribe
//               </button>
//             </div>
//             <div className="needhelp flex items-center justify-center">
//               <button className=" text-base font-medium font-Work-sans text-white">
//                 Expiring: 12th July 2024
//               </button>
//             </div>
//           </div>
//           <div className="Platinum border shadow rounded-xl p-3 relative w-full max-w-[352px]">
//             <div className=" absolute top-0 right-0">
//               <img src={pattern} alt="" />
//             </div>
//             <div className="uperheadings flex flex-col gap-3">
//               <div>
//                 <h1 className=" text-2xl font-semibold font-inter text-custom-blue">
//                   Platinum
//                 </h1>
//               </div>
//               <div className=" text-[32px] font-bold font-inter text-custom-blue">
//                 <h1>$70</h1>
//               </div>
//             </div>
//             <div className="lowerheading pt-10">
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   25 contacts per month
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   More business
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   2 minimum appointments
//                 </h1>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <img src={greenTick} alt="" />
//                 <h1 className=" text-base font-medium font-Work-sans text-custom-blue">
//                   2 minimum Handovers
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center justify-center pb-4 md:pb-5 py-2">
//               <button className="w-full max-w-[312px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center">
//                 Subscribe
//               </button>
//             </div>
//             <div className="needhelp flex items-center justify-center">
//               <button className=" text-base font-medium font-Work-sans text-gray-2">
//                 Need help?
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className=" grid grid-cols-12">
//             <div className="heading mb-5 col-span-6">
//                 <div className="flex items-center justify-between">
//               <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
//                 New Car listings
//               </h1>
//               <button className="text-base font-medium font-inter text-custom-blue">
//                 View all
//               </button>
//                 </div>
//                 <div className="card py-4">
//                   <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
//                     <div className="flex items-center gap-4">
//                       <div>
//                         <img src={mailGift} alt="Car" className="w-24 h-24 md:w-auto md:h-auto" />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
//                         Gold plan purchase
//                         </h1>
//                         <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
//                         Paid by card ending with 233
//                         </h1>
//                         <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
//                         expires on 12th July 2024
//                         </h1>
//                       </div>
//                     </div>
//                     <div className="mt-4 md:mt-0">
//                       <h1 className=" text-[32px] font-bold font-inter text-gray-1">-$100</h1>
//                     </div>
//                   </div>
//                 </div>
//             </div>
           
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Subscriptions;


import React from "react";
import greenTick from "../../assets/images/greenTick.png";
import pattern from "../../assets/images/Pattern.png";
import mailGift from "../../assets/images/mailGift.png";

function Subscriptions() {
  return (
    <>
      <div className="p-4 md:p-10">
        <div className="myorderheading">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
            My Order
          </h1>
        </div>
        <div className="cards py-4 md:py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16">
          {[
            { title: "Silver", price: "$70", color: "text-custom-blue", bgColor: "bg-white", textColor: "text-custom-blue" },
            { title: "Gold", price: "$100", color: "text-white", bgColor: "bg-custom-blue", textColor: "text-white" },
            { title: "Platinum", price: "$130", color: "text-custom-blue", bgColor: "bg-white", textColor: "text-custom-blue" }
          ].map((plan, index) => (
            <div key={index} className={`border shadow rounded-xl p-3 relative w-full max-w-[352px] ${plan.bgColor}`}>
              <div className="absolute top-0 right-0">
                <img src={pattern} alt="Pattern" />
              </div>
              <div className="uperheadings flex flex-col gap-3">
                <div>
                  <h1 className={`text-2xl font-semibold font-inter ${plan.color}`}>{plan.title}</h1>
                </div>
                <div className={`text-[32px] font-bold font-inter ${plan.color}`}>
                  <h1>{plan.price}</h1>
                </div>
              </div>
              <div className="lowerheading pt-10">
                {["25 contacts per month", "More business", "2 minimum appointments", "2 minimum Handovers"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-2">
                    <img src={greenTick} alt="Tick" />
                    <h1 className={`text-base font-medium font-Work-sans ${plan.textColor}`}>{feature}</h1>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center pb-4 md:pb-5 py-2">
                <button className={`w-full max-w-[312px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans ${plan.bgColor === "bg-custom-blue" ? "bg-white text-custom-blue" : "bg-custom-blue text-white"} flex items-center justify-center`}>
                  Subscribe
                </button>
              </div>
              <div className="needhelp flex items-center justify-center">
                <button className={`text-base font-medium font-Work-sans ${plan.color === "text-custom-blue" ? "text-gray-2" : "text-white"}`}>
                  {plan.title === "Gold" ? "Expiring: 12th July 2024" : "Need help?"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="heading mb-5 col-span-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-[#161616]">
                  New Car listings
                </h1>
                <button className="text-base font-medium font-inter text-custom-blue">
                  View all
                </button>
              </div>
              <div className="card py-4">
                <div className="card1 border p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={mailGift} alt="Mail Gift" className="w-24 h-24 md:w-auto md:h-auto" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-base lg:text-lg font-semibold font-inter text-gray-1">
                        Gold plan purchase
                      </h1>
                      <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                        Paid by card ending with 233
                      </h1>
                      <h1 className="text-sm lg:text-lg font-medium font-Work-sans text-gray-4">
                        expires on 12th July 2024
                      </h1>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <h1 className="text-[32px] font-bold font-inter text-gray-1">-$100</h1>
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

export default Subscriptions;
