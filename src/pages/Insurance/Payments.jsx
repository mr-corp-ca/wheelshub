import React from "react";
import photo from "../../assets/images/photo.png";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Layout } from "../../components/Layout/DashboardLayout";

const data = [
  { name: "Jan", This_month: 1000 },
  { name: "Feb", This_month: 3000 },
  { name: "Mar", This_month: 2000 },
  { name: "Apr", This_month: 2780 },
  { name: "May", This_month: 1890 },
  { name: "Jun", This_month: 2390 },
  { name: "Jul", This_month: 3490 },
  { name: "Aug", This_month: 2000 },
  { name: "Sep", This_month: 2780 },
  { name: "Oct", This_month: 1890 },
  { name: "Nov", This_month: 2390 },
  { name: "Dec", This_month: 3490 },
];




function Payments() {
  return (
    <Layout active={'Payments'}>
    <div className="my-5 grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8">
        <div className="paymentHeading">
          <h1 className="text-2xl font-semibold font-inter text-gray-1">
            Payments
          </h1>
        </div>
        <div className="graphPart border shadow-css p-5 lg:p-10 mt-5 rounded-xl">
          <div className="graph">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <Tooltip />
                <Line
                  dataKey="This_month"
                  type="monotone"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
            <div className="mb-4 lg:mb-0 text-center md:text-start">
              <h1 className="text-4xl lg:text-5xl font-bold font-inter text-gray-1">
                $2500.00
              </h1>
              <h1 className="text-lg font-medium font-Work-sans text-gray-1">
                Current Balance
              </h1>
            </div>
            <div>
              <button className="bg-custom-blue text-white rounded-xl px-4 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-semibold font-inter w-full lg:w-auto h-[48px] flex items-center">
                Add money
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
      <div className="col-span-12 lg:col-span-4">
        <div className="heading flex items-center justify-between mb-5">
          <h1 className="text-xl font-semibold font-inter text-[#161616]">
            Recent Transactions
          </h1>
          <button className="text-base font-medium font-inter text-custom-blue">
            View all
          </button>
        </div>
        <div className="rounded-2xl shadow-css border p-5">
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
    </Layout>
  );
}

export default Payments;
