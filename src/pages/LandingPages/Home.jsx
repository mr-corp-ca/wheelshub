// import React from 'react'
// import backgroundImage from "../../assets/images/Mask group.png"
// function Home() {
//   return (
//    <>
//    <div className='containerPart'>
//     <div>
//         <div className=' relative'>
//             <img src={backgroundImage} className='w-full' alt="" />
//             <div className=''>
//                 <h1 className=' text-[72px] font-bold font-inter text-gray-1 absolute top-20 w-[60%] bg-gradient-to-r from-[#d4ecff] to-[#f0f7fd] px-20'>Sell Your Car Easily and Profitably</h1>
//             </div>
//             <div>
//                 <p className=' text-lg font-normal font-Work-sans text-gray-2 absolute w-[55%] top-80 px-20'>Sell your car easily and profitably with Wheeldealhub. Whether you want to sell directly to buyers or to our trusted dealers, we guarantee a smooth process and the best prices. Start today and experience hassle-free transactions with verified dealers and secure payments.</p>
//             </div>
//         </div>
//     </div>
//    </div>
//    </>
//   )
// }

// export default Home



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
// import './swiper-custom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import carImage from '../../assets/images/wheeldealhub (1) 1.png'; // Replace with the correct path to your image
import { Input } from '../../components/Input';
import backgroundimg from "../../assets/images/Mask_group-ai-brush-removebg-q6y0hhm (1).png"
import car1 from "../../assets/images/car1 (7).png"
import car2 from "../../assets/images/car2 (2).png"
import car3 from "../../assets/images/car3 (2).png"
import car4 from "../../assets/images/car4.png"
import car5 from "../../assets/images/car5.png"
import car6 from "../../assets/images/car6.png"
import displayicon1 from "../../assets/images/diplay (1).png"
import displayicon2 from "../../assets/images/diplay (2).png"
import displayicon3 from "../../assets/images/diplay (3).png"
import displayicon4 from "../../assets/images/diplay (4).png"
import savingIcon from "../../assets/images/saving.png"
import manImage from "../../assets/images/man.png";
import trophyImage from "../../assets/images/trophyy.png";
import progressImage from "../../assets/images/progress.png";
import savemoneyImage from "../../assets/images/save-money.png";
import icons1 from "../../assets/images/arrows (1).png"
import icons2 from "../../assets/images/arrows (2).png"
import icons3 from "../../assets/images/arrows (3).png"
import icons4 from "../../assets/images/arrows (4).png"
import menswithcar from "../../assets/images/manswithcar.png"
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import StarImage from "../../assets/images/starGroup.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import { useState } from 'react';
import waveicon from "../../assets/images/Wave.png"
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";

function Home() {
    const [tabActive, setTabActive] = useState("home");
    const [openDropdown, setOpenDropdown] = useState(false)
    const handleClick = (item) => {
      
        setTabActive(item);
      };
    
      const bidsClick = () => {
       
        handleClick("bids")
     
      }
      const investmentClick = () => {
    
        handleClick("investments");
   
      }

    const cards= [
        {
            icnos: displayicon1,
            heading: "Register"
        },
        {
            icnos: displayicon2,
            heading: "Select Mechanic"
        },
        {
            icnos: displayicon3,
            heading: "Select dealer"
        },
        {
            icnos: displayicon4,
            heading: "Sell your car"
        },
    ]

    // const cardss = [
    //     { icnos: customIcon1, heading: 'Step 1' },
    //     { icnos: customIcon2, heading: 'Step 2' },
    //     { icnos: customIcon3, heading: 'Step 3' },
    //     { icnos: customIcon4, heading: 'Step 4' },
    //   ];
  return (
    <>
    <div className=" relative ">
        <img src={backgroundimg} className=' absolute -z-10 w-full bg-[#f4faff] h-[115vh] ' alt="" />
      <div className=" py-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-[60%] text-center lg:text-left">
            <h1 className="text-[32px] lg:text-[72px] font-bold text-gray-1 px-20 bg-gradient-to-r from-[#d1eaff] to-[#eef6fd] mt-20">
              Sell Your Car Easily and Profitably
            </h1>
            <p className=" px-20 text-sm md:text-base lg:text-lg my-10 font-normal font-Work-sans text-gray-2">
              Sell your car easily and profitably with Wheeldealhub. Whether you want to sell directly to buyers or to our trusted dealers, we guarantee a smooth process and the best prices. Start today and experience hassle-free transactions with verified dealers and secure payments.
            </p>
            <div className="flex items-center gap-5 px-20">
            <button  className=" h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
            Sell now
            </button>
            <button  className=" h-[44px] rounded-lg border border-gray-1 text-gray-1 px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
            Buy a car
            </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-10">
            <img src={carImage} alt="Car" className="w-full h-auto pr-20" />
          </div>
        </div>
       
      </div>
      {/* <div className='w-[90%] mx-auto my-10 backdrop-blur-3xl'>
        <div className='flex items-center border border-b-0 w-fit rounded-t-xl '>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car1} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car2} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car3} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car4} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car5} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] '><img src={car6} alt="" />Sell</button>
        </div>
        <div className=' border rounded-xl rounded-tl-none py-10  shadow-2xl shadow-[#eef6fd]'>
            <div>
                <h1 className=' text-[36px] font-semibold font-inter text-gray-1 text-center'>Sell Car instantly on Wheeldealhub from Home</h1>
            </div>
            <div className=' flex items-center justify-center pt-5'>
            <button  className=" h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
            Sell now
            </button>
            </div>
        </div>
      </div> */}
       <div className='w-[90%] mx-auto my-10 backdrop-blur-3xl'>
      <div className='flex flex-wrap items-center border border-b-0 w-full lg:w-fit rounded-t-xl'>
        <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r'><img src={car1} alt="car1" />Sell</button>
        <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r'><img src={car2} alt="car2" />Sell</button>
        <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r'><img src={car3} alt="car3" />Sell</button>
        <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r'><img src={car4} alt="car4" />Sell</button>
        <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r'><img src={car5} alt="car5" />Sell</button>
        <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[15px] md:px-[30px] py-[10px] md:py-[20px]'><img src={car6} alt="car6" />Sell</button>
      </div>
      <div className='border rounded-xl rounded-tl-none py-10 shadow-2xl shadow-[#eef6fd]'>
        <div>
          <h1 className='text-[24px] md:text-[36px] font-semibold font-inter text-gray-1 text-center'>Sell Car instantly on Wheeldealhub from Home</h1>
        </div>
        <div className='flex items-center justify-center pt-5'>
          <button className="h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
            Sell now
          </button>
        </div>
      </div>
    </div>


    </div>
    {/* <div className='howitsworks'>
        <div className='flex items-center justify-center my-20'>
            <h1 className=' text-[64px] font-bold font-inter text-black mt-10'>
            How it Works
            </h1>
        </div>
        <div className='grid grid-cols-4 gap-5 w-[90%] mx-auto'>
            {cards.map((value,i)=>{
                return(
                    <>
                <div className='card border py-10 px-4 w-fit flex items-center justify-center flex-col gap-5 rounded-xl'>
                    <div>
                        <img src={value.icnos} alt="" className=' p-4 rounded-xl bg-custom-blue' />
                    </div>
                    <div>
                        <h1 className=' text-[32px] font-bold font-inter text-black'>{value.heading}</h1>
                    </div>
                    <div>
                        <h1 className='text-center text-lg font-normal text-gray-2 font-Work-sans'>Create an account on WDH to get started. Provide your personal information.</h1>
                    </div>
                </div>
                    
                    </>
                )
            })}
            </div>
    </div> */}

<div className='howitsworks'>
      <div className='flex items-center justify-center my-10'>
        <h1 className='text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-black mt-10'>
          How it Works
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto'>
        {cards.map((value, i) => (
          <div key={i} className='card border py-10 px-4 w-full flex items-center justify-center flex-col gap-5 rounded-xl'>
            <div>
              <img src={value.icnos} alt="" className='p-4 rounded-xl bg-custom-blue' />
            </div>
            <div>
              <h1 className='text-[20px] md:text-[24px] lg:text-[32px] font-bold font-inter text-black'>{value.heading}</h1>
            </div>
            <div>
              <h1 className='text-center text-sm md:text-base lg:text-lg font-normal text-gray-2 font-Work-sans'>
                Create an account on WDH to get started. Provide your personal information.
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>


    {/* <div className='keybenefits my-20 '>
        <div className='w-[90%] mx-auto grid grid-cols-12 gap-10'>
            <div className='leftpart col-span-6'>
                <div className=' flex items-center justify-center h-[100vh]'>
                    <img src={menswithcar} className='w-[90%]' alt="" />
                </div>
            </div>
            <div className='rightpart col-span-6'>
                    <div>
                        <h1 className='text-[64px] font-bold font-inter text-gray-1'>Key benefits</h1>
                    </div>
                    <div>
                        <div className='flex gap-7 py-5'>
                            <div className="iconss ">
                                <img src={icons1} width={"200px"} className='p-10 bg-[#eef6fd]  shadow-2xl shadow-[#eef6fd] border  rounded-2xl ' alt="" />
                            </div>
                            <div className=''>
                                <div className='flex flex-col'>
                                    <h1 className=' text-2xl font-semibold font-inter text-gray-1'>
                                    Higher Profits
                                    </h1>
                                </div>
                                <div>
                                    <h1 className=' text-lg font-normal font-Work-sans text-gray-2'>Sell directly to buyers or through our platform. With competitive pricing and various selling options, WDH ensures you receive the highest possible profit from your car sale.</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-7 py-5'>
                            <div className="iconss ">
                                <img src={icons1} width={"200px"} className='p-10 bg-[#eef6fd]  shadow-2xl shadow-[#eef6fd] border  rounded-2xl ' alt="" />
                            </div>
                            <div className=''>
                                <div className='flex flex-col'>
                                    <h1 className=' text-2xl font-semibold font-inter text-gray-1'>
                                    Higher Profits
                                    </h1>
                                </div>
                                <div>
                                    <h1 className=' text-lg font-normal font-Work-sans text-gray-2'>Sell directly to buyers or through our platform. With competitive pricing and various selling options, WDH ensures you receive the highest possible profit from your car sale.</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-7 py-5'>
                            <div className="iconss ">
                                <img src={icons1} width={"200px"} className='p-10 bg-[#eef6fd]  shadow-2xl shadow-[#eef6fd] border  rounded-2xl ' alt="" />
                            </div>
                            <div className=''>
                                <div className='flex flex-col'>
                                    <h1 className=' text-2xl font-semibold font-inter text-gray-1'>
                                    Higher Profits
                                    </h1>
                                </div>
                                <div>
                                    <h1 className=' text-lg font-normal font-Work-sans text-gray-2'>Sell directly to buyers or through our platform. With competitive pricing and various selling options, WDH ensures you receive the highest possible profit from your car sale.</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-7 '>
                            <div className="iconss ">
                                <img src={icons1} width={"200px"} className='p-10 bg-[#eef6fd]  shadow-2xl shadow-[#eef6fd] border  rounded-2xl ' alt="" />
                            </div>
                            <div className=''>
                                <div className='flex flex-col'>
                                    <h1 className=' text-2xl font-semibold font-inter text-gray-1'>
                                    Higher Profits
                                    </h1>
                                </div>
                                <div>
                                    <h1 className=' text-lg font-normal font-Work-sans text-gray-2'>Sell directly to buyers or through our platform. With competitive pricing and various selling options, WDH ensures you receive the highest possible profit from your car sale.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div> */}

<div className='keybenefits my-20'>
      <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10'>
        <div className='leftpart lg:col-span-6'>
          <div className='flex items-center justify-center lg:h-[100vh]'>
            <img src={menswithcar} className='' alt="" />
          </div>
        </div>
        <div className='rightpart lg:col-span-6'>
          <div>
            <h1 className='text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-gray-1'>
              Key benefits
            </h1>
          </div>
          {[1, 2, 3, 4].map((item) => (
            <div className='flex gap-7 py-5' key={item}>
              <div className="iconss">
                <img src={icons1} width={"200px"} className='p-2 lg:p-5 bg-[#eef6fd] shadow-2xl shadow-[#eef6fd] border rounded-2xl' alt="" />
              </div>
              <div>
                <div className='flex flex-col'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>
                    Higher Profits
                  </h1>
                </div>
                <div>
                  <h1 className='text-sm md:text-base lg:text-lg font-normal font-Work-sans text-gray-2'>
                    Sell directly to buyers or through our platform. With competitive pricing and various selling options, WDH ensures you receive the highest possible profit from your car sale.
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="blueRectangle w-[90%] lg:w-[80%] mx-auto py-10 lg:py-16">
              <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                  <div className="flex flex-col items-center">
                    <img src={manImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      50k+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Bidders
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={trophyImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      2k+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Winners
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={progressImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      $7M+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Investments
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={savemoneyImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      21%
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Return
                    </h1>
                  </div>
                </div>
              </div>
    </div>
    {/* <div className='explore w-[90%] mx-auto'>
        <div className=' flex items-center justify-center'>
            <h1 className=' text-[64px] font-bold font-inter text-black'>
            Explore nearby location
            </h1>
        </div>
        <div className='my-10 backdrop-blur-3xl'>
        <div className='flex items-center border border-b w-fit rounded-t-xl '>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car1} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car2} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car3} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car4} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] border-r'><img src={car5} alt="" />Sell</button>
            <button className='flex items-center gap-2 text-lg font-medium font-Work-sans text-gray-1 px-[30px] py-[20px] '><img src={car6} alt="" />Sell</button>
        </div>
      </div>
    </div> */}

<div className='explore w-[90%] mx-auto'>
      <div className='flex items-center justify-center'>
        <h1 className='text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-black'>
          Explore nearby location
        </h1>
      </div>
      <div className='my-10 backdrop-blur-3xl'>
        <div className='flex flex-wrap items-center border border-b w-full md:w-fit rounded-t-xl'>
          {[car1, car2, car3, car4, car5, car6].map((car, index) => (
            <button
              key={index}
              className='flex items-center gap-2 text-sm md:text-lg font-medium font-Work-sans text-gray-1 px-4 py-3 md:px-[30px] md:py-[20px] border-r'
            >
              <img src={car} alt="" className='w-6 md:w-auto' />Sell
            </button>
          ))}
        </div>
      </div>
    </div>


    <div className='cars w-[90%] mx-auto'>
    <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div key={index} className="card border rounded-2xl flex flex-col gap-4">
                  <div>
                    <img src={audi2} alt="Car" className="w-full h-auto rounded-t-2xl" />
                  </div>
                  <div className="px-3">
                    <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                  </div>
                  <div className="flex items-center px-3 justify-between">
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">45000 KM</h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">2018 Model</h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">Automatic</h1>
                  </div>
                  <div className="px-3">
                    <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">$22,500</h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <img src={yellowTick} alt="" />
                    <p className="text-xs font-normal font-Work-sans text-[#FFB543]">Verification pending</p>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button className="w-full max-w-[132px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
                      Chat now
                    </button>
                  </div>
                </div>
              );
            })}
            </div>
            <div className="text-center py-10">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
                  View all
                </button>
              </div>
    </div>
    <div className="testimonials bg-[#d2eaff] py-10">
              <div className="text-center mb-10">
                <h1 className="text-2xl lg:text-[54px] font-bold font-inter text-gray-1">
                  What people say about us?
                </h1>
              </div>
              <Swiper
                cssMode={true}
                loop={true}
                spaceBetween={50}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {[0, 1, 2].map((slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="cards w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                      {Array(3)
                        .fill()
                        .map((_, i) => (
                          <div key={i} className="bg-white rounded-xl shadow-md p-7">
                            <div className="flex items-center gap-5">
                              <div>
                                <div className="w-[64px] h-[64px] rounded-full bg-[#cecece]"></div>
                              </div>
                              <div className="flex flex-col gap-1">
                                <div>
                                  <h1 className="text-xl font-semibold font-inter text-gray-1">
                                    Sandra T. Robinson
                                  </h1>
                                </div>
                                <div className="flex items-center">
                                  <img src={StarImage} className="inline" alt="" />
                                  <span className="text-lg font-medium font-Work-sans text-gray-1 px-2">
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                                And equal blame belongs to those who fail in their duty
                                through weakness of will, which is the same as saying
                                through shrinking from toil and pain.
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="text-center py-10">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
                  View all
                </button>
              </div>
    </div>
    <div>
        <img src={waveicon} className='w-full' alt="" />
    </div>
    <div className="banner">
              <img src={banner} className=" w-[100vw]" alt="" />
            </div>


            <div className="footer py-10 bg-[#e0e0e0]">
              <div className="w-[90vw] lg:w-[80vw] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                  <div className="first w-full lg:w-[35%]">
                    <div>
                      <img src={quickBidLogo} alt="" />
                    </div>
                    <div>
                      <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-1 py-5 lg:py-10">
                        But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <img src={facebook} alt="" />
                      </div>
                      <div>
                        <img src={twitter} alt="" />
                      </div>
                      <div>
                        <img src={tiktok} alt="" />
                      </div>
                      <div>
                        <img src={youtube} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="second w-full lg:w-[15%]">
                    <div>
                      <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                        Our Services
                      </h1>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                      <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                        Home
                      </h3>
                      <h3
                        onClick={() => bidsClick()}
                        className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                        Bids
                      </h3>
                      <h3
                        onClick={() => investmentClick()}
                        className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                        Investments
                      </h3>
                      <h3 onClick={() => handleClick("about")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                        About us
                      </h3>
                      <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                        Contact us
                      </h3>
                    </div>
                  </div>
                  <div className="third w-full lg:w-[35%]">
                    <div>
                      <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                        Contact
                      </h1>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        +012-334-5864
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        info.alva@example.com
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        2048 Wexford Way Wings SC 287290
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="companyName h-[100px] bg-[#4f4f4f] flex items-center justify-center">
              <div className="">
                <h1 className="text-white font-medium text-sm font-Work-sans">
                  © 2022 wheeldealhub. All Rights Reserved
                </h1>
              </div>
            </div>
    </>
  );
}

export default Home;

