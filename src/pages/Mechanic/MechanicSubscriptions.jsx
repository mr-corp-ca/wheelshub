import React, { useState } from "react";
import greenTick from "../../assets/images/greenTick.png";
import pattern from "../../assets/images/Pattern.png";
import mailGift from "../../assets/images/mailGift.png";
import { Layout } from "../../components/Layout/DashboardLayout";

function MechanicSubscriptions() {
  const [cardbg, setCardbg] = useState(1)

  const handleCardClick = (item) =>{
    setCardbg(item)
  }
  return (
    <>
    <Layout active={'Subscriptions'}>
      <div className=" my-5">
        <div className="myorderheading">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
            My Order
          </h1>
        </div>
        <div className="cards py-4 md:py-5 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {[
            { id: 1 , title: "Silver", price: "$70", color: "text-custom-blue", bgColor: "bg-custom-blue", textColor: "text-custom-blue" },
            { id: 2 , title: "Gold", price: "$100", color: "text-white", bgColor: "bg-custom-blue", textColor: "text-white" },
            { id: 3 , title: "Platinum", price: "$130", color: "text-custom-blue", bgColor: "bg-custom-blue", textColor: "text-custom-blue" }
          ].map((plan, index) => (
            <div onClick={()=>{handleCardClick(index)}} key={index} className={` rounded-xl p-3 relative w-full max-w-[352px] ${cardbg === index ? 'bg-custom-blue text-white shadow-2xl shadow-custom-blue' : 'bg-white text-custom-blue border'}`}>
              <div className="absolute top-0 right-0">
                <img src={pattern} alt="Pattern" />
              </div>
              <div className="uperheadings flex flex-col gap-3">
                <div>
                  <h1 className={`text-2xl font-semibold font-inter`}>{plan.title}</h1>
                </div>
                <div className={`text-[32px] font-bold font-inter `}>
                  <h1>{plan.price}</h1>
                </div>
              </div>
              <div className="lowerheading pt-10">
                {["25 contacts per month", "More business", "2 minimum appointments", "2 minimum Handovers"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-2">
                    <img src={greenTick} alt="Tick" />
                    <h1 className={`text-base font-medium font-Work-sans`}>{feature}</h1>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center pb-4 md:pb-5 py-2">
                <button className={`w-full max-w-[312px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans ${cardbg === index ? "bg-white text-custom-blue" : "bg-custom-blue text-white"} flex items-center justify-center`}>
                  Subscribe
                </button>
              </div>
              <div className="needhelp flex items-center justify-center">
                <button className={`text-base font-medium font-Work-sans ${cardbg === index ? " text-white" : " text-gray-2"}`}>
                  {plan.title === "Gold" ? "Expiring: 12th July 2024" : "Need help?"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="heading mb-5 col-span-2">
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
                  <div className="flex justify-center md:justify-start flex-col md:flex-row items-center gap-4">
                    <div>
                      <img src={mailGift} alt="Mail Gift" className="" />
                    </div>
                    <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-2">
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
      </Layout>
    </>
  );
}

export default MechanicSubscriptions;