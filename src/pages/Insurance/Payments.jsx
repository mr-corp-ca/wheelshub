// import React from "react";
// import photo from "../../assets/images/photo.png";
// import {
//   LineChart,
//   Line,
//   //   XAxis,
//   //   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Jan", uv: 1000 },
//   { name: "Feb", uv: 3000 },
//   { name: "Mar", uv: 2000 },
//   { name: "Apr", uv: 2780 },
//   { name: "May", uv: 1890 },
//   { name: "Jun", uv: 2390 },
//   { name: "Jul", uv: 3490 },
//   { name: "Aug", uv: 2000 },
//   { name: "Sep", uv: 2780 },
//   { name: "Oct", uv: 1890 },
//   { name: "Nov", uv: 2390 },
//   { name: "Dec", uv: 3490 },
// ];

// function Payments() {
//   return (
//     <>
//       <div className=" p-6 grid grid-cols-12 gap-5">
//         <div className=" col-span-12 lg:col-span-7">
//           <div className="paymentHeading">
//             <h1 className=" text-2xl font-semibold font-inter text-gray-1">
//               Payments
//             </h1>
//           </div>
//           <div className="graphPart border shadow p-10 mt-5 rounded-xl">
//             <div className="graph">
//               <ResponsiveContainer width="100%" height={200}>
//                 <LineChart data={data}>
//                   {/* <XAxis dataKey="name" /> */}
//                   {/* <YAxis /> */}
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="uv"
//                     stroke="#8884d8"
//                     strokeWidth={2}
//                     dot={true}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//             <div className="flex items-center justify-between">
//               <div>
//                 <div>
//                   <h1 className=" text-[48px] font-bold font-inter text-gray-1">
//                     $2500.00
//                   </h1>
//                 </div>
//                 <div>
//                   <h1 className=" text-lg font-medium font-Work-sans text-gray-1">
//                     Current Balance
//                   </h1>
//                 </div>
//               </div>
//               <div>
//                 <button className="bg-custom-blue text-white rounded-xl px-[16px] py-[12px] text-sm font-semibold font-inter w-[172px] h-[48px] ">
//                   Withdraw
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between pt-10">
//               <div className="flex items-center gap-3">
//                 <div>
//                   <img src={photo} alt="" />
//                 </div>
//                 <div>
//                   <h1 className=" text-base font-normal font-poppins text-[#000000]">
//                     3433566544564
//                   </h1>
//                   <h1 className=" text-sm font-light font-poppins text-[#7f7f7f]">
//                     Bank account
//                   </h1>
//                 </div>
//               </div>
//               <div>
//                 <button className="text-lg font-medium font-Work-sans text-custom-blue border border-custom-blue rounded-xl px-[24px] py-[13.5px] h-[48px] w-[84px] flex items-center">
//                   Edit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" col-span-12 lg:col-span-5">
//           <div className="heading flex items-center justify-between mb-5">
//             <h1 className="text-xl font-semibold font-inter text-[#161616]">
//               Recent Transactions
//             </h1>
//             <button className="text-base font-medium font-inter text-custom-blue">
//               View all
//             </button>
//           </div>
//           <div className="rounded-xl border p-5">
//             {Array(5)
//               .fill()
//               .map((_, i) => {
//                 return (
//                   <>
//                     <div className="photodown flex items-center justify-between border-b border-dashed py-3">
//                       <div className="flex items-center gap-2">
//                         <img
//                           src={photo}
//                           alt=""
//                           className="w-10 h-10 md:w-auto md:h-auto"
//                         />
//                         <span className="text-sm md:text-base font-normal font-poppins text-gray-1">
//                           Car Insurance
//                         </span>
//                       </div>
//                       <div>
//                         <h1 className="font-poppins text-sm md:text-base font-normal text-custom-blue">
//                           +$250
//                         </h1>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Payments;


import React from "react";
import photo from "../../assets/images/photo.png";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 1000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2000 },
  { name: "Sep", uv: 2780 },
  { name: "Oct", uv: 1890 },
  { name: "Nov", uv: 2390 },
  { name: "Dec", uv: 3490 },
];

function Payments() {
  return (
    <div className="p-6 grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-7">
        <div className="paymentHeading">
          <h1 className="text-2xl font-semibold font-inter text-gray-1">
            Payments
          </h1>
        </div>
        <div className="graphPart border shadow p-5 lg:p-10 mt-5 rounded-xl">
          <div className="graph">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold font-inter text-gray-1">
                $2500.00
              </h1>
              <h1 className="text-lg font-medium font-Work-sans text-gray-1">
                Current Balance
              </h1>
            </div>
            <div>
              <button className="bg-custom-blue text-white rounded-xl px-4 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-semibold font-inter w-full lg:w-auto h-[48px] flex items-center">
                Withdraw
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between pt-10 gap-4 lg:gap-0">
            <div className="flex items-center gap-3">
              <img src={photo} alt="" />
              <div>
                <h1 className="text-base font-normal font-poppins text-[#000000]">
                  3433566544564
                </h1>
                <h1 className="text-sm font-light font-poppins text-[#7f7f7f]">
                  Bank account
                </h1>
              </div>
            </div>
            <button className="text-lg font-medium font-Work-sans text-custom-blue border border-custom-blue rounded-xl px-6 py-3 h-[48px] w-auto flex items-center">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <div className="heading flex items-center justify-between mb-5">
          <h1 className="text-xl font-semibold font-inter text-[#161616]">
            Recent Transactions
          </h1>
          <button className="text-base font-medium font-inter text-custom-blue">
            View all
          </button>
        </div>
        <div className="rounded-xl border p-5">
          {Array(5)
            .fill()
            .map((_, i) => {
              return (
                <div key={i} className="photodown flex items-center justify-between border-b border-dashed py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={photo}
                      alt=""
                      className="w-10 h-10 md:w-auto md:h-auto"
                    />
                    <span className="text-sm md:text-base font-normal font-poppins text-gray-1">
                      Car Insurance
                    </span>
                  </div>
                  <div>
                    <h1 className="font-poppins text-sm md:text-base font-normal text-custom-blue">
                      +$250
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Payments;
