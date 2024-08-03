import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import carImage from "../../assets/images/wheeldealhub (1) 1.png"; // Replace with the correct path to your image
import backgroundimg from "../../assets/images/Mask_group-ai-brush-removebg-q6y0hhm (1).png";
import car1 from "../../assets/images/car1 (7).png";
import car2 from "../../assets/images/car2 (2).png";
import car3 from "../../assets/images/car3 (2).png";
import car4 from "../../assets/images/car4.png";
import car5 from "../../assets/images/car5.png";
import car6 from "../../assets/images/car6.png";
import displayicon1 from "../../assets/images/diplay (1).png";
import displayicon2 from "../../assets/images/diplay (2).png";
import displayicon3 from "../../assets/images/diplay (3).png";
import displayicon4 from "../../assets/images/diplay (4).png";
import manImage from "../../assets/images/man.png";
import trophyImage from "../../assets/images/trophyy.png";
import progressImage from "../../assets/images/progress.png";
import savemoneyImage from "../../assets/images/save-money.png";
import icons1 from "../../assets/images/arrows (1).png";
import menswithcar from "../../assets/images/manswithcar.png";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import StarImage from "../../assets/images/starGroup.png";
import { useState } from "react";
import waveicon from "../../assets/images/Wave.png";
import Navbar2 from "../../components/Navbar2";
import bluetick from "../../assets/images/bluetickzigzag.png";
import Banner from "../../components/Banner";
function Home() {
  const cards = [
    {
      icnos: displayicon1,
      heading: "Register",
    },
    {
      icnos: displayicon2,
      heading: "Select Mechanic",
    },
    {
      icnos: displayicon3,
      heading: "Select dealer",
    },
    {
      icnos: displayicon4,
      heading: "Sell your car",
    },
  ];

  const [buttonClick, setButtonClick] = useState(0);

  const handleButtonClick = (index) => {
    setButtonClick(index);
  };

  const [iconclick, seticonclick] = useState(1)

  const handleClick = (item) =>{
    seticonclick(item)
  }
  return (
    <>
      <Navbar2 />
      <div className=" relative ">
        <img
          src={backgroundimg}
          className=" absolute -z-10 w-full bg-[#f4faff] h-[130%]"
          alt=""
        />
        <div className=" py-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-[82%] text-center lg:text-left">
              <h1 className="text-[32px] font-inter lg:text-[72px] font-bold text-gray-1 px-20 bg-gradient-to-r from-[#d1eaff] to-[#eef6fd] mt-20 rounded-br-2xl">
                Sell Your Car Easily and Profitably
              </h1>
              <p className=" px-20 text-sm md:text-base lg:text-lg my-10 font-normal font-Work-sans text-gray-2">
                Sell your car easily and profitably with Wheeldealhub. Whether
                you want to sell directly to buyers or to our trusted dealers,
                we guarantee a smooth process and the best prices. Start today
                and experience hassle-free transactions with verified dealers
                and secure payments.
              </p>
              <div className="flex items-center gap-5 px-20">
                <button className=" h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
                  Sell now
                </button>
                <button className=" h-[44px] rounded-lg border border-gray-1 text-gray-1 px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
                  Buy a car
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-10 mx-auto">
              <img
                src={carImage}
                alt="Car"
                className="w-full h-auto lg:pr-20"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-10  ">
        <div className="flex flex-wrap items-center border border-b-0 w-fit rounded-t-xl backdrop-blur-3xl shadow-2xl shadow-[#eef6fd]">
          <button onClick={() => {
                  handleClick(1);
                }} className={`${
                  iconclick === 1
                    ? " rounded-tl-xl bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r `}>
            <img src={car1} alt="car1" />
            Sell
          </button>
          <button onClick={() => {
                  handleClick(2);
                }} className={`${
                  iconclick === 2
                    ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r`}>
            <img src={car2} alt="car2" />
            Buy
          </button>
          <button onClick={() => {
                  handleClick(3);
                }} className={`${
                  iconclick === 3
                    ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r`}>
            <img src={car3} alt="car3" />
            Mechanic
          </button>
          <button onClick={() => {
                  handleClick(4);
                }} className={`${
                  iconclick === 4
                    ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r`}>
            <img src={car4} alt="car4" />
            Dealer
          </button>
          <button  onClick={() => {
                  handleClick(5);
                }} className={`${
                  iconclick === 5
                    ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r`}>
            <img src={car5} alt="car5" />
            Insurance
          </button>
          <button  onClick={() => {
                  handleClick(6);
                }} className={`${
                  iconclick === 6
                    ? " md:rounded-tr-xl bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px]`}>
            <img src={car6} alt="car6" />
            Finance
          </button>
        </div>
        <div className="border rounded-xl rounded-tl-none py-10 shadow-2xl shadow-[#eef6fd] backdrop-blur-3xl">
          <div>
            <h1 className="text-[24px] md:text-[36px] font-semibold font-inter text-gray-1 text-center">
              Sell Car instantly on Wheeldealhub from Home
            </h1>
          </div>
          <div className="flex items-center justify-center pt-5">
            <button className="h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Sell now
            </button>
          </div>
        </div>
      </div>

      <div className="howitsworks">
        <div className="flex items-center justify-center my-10">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-black mt-10">
            How it Works
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto">
          {cards.map((value, i) => (
            <div
              key={i}
              className="card border py-10 px-1 2xl:px-4 w-full flex items-center justify-center flex-col gap-5 rounded-xl"
            >
              <div>
                <img
                  src={value.icnos}
                  alt=""
                  className="p-4 rounded-xl bg-custom-blue"
                />
              </div>
              <div>
                <h1 className="text-center text-[20px] md:text-[24px] lg:text-[32px] font-bold font-inter text-black">
                  {value.heading}
                </h1>
              </div>
              <div className=" px-4">
                <h1 className="text-center text-sm md:text-base lg:text-lg font-normal text-gray-2 font-Work-sans">
                  Create an account on WDH to get started. Provide your personal
                  information.
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="keybenefits my-20">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="leftpart lg:col-span-6">
            <div className="flex items-center justify-center mt-10">
              <img src={menswithcar} className="" alt="" />
            </div>
          </div>
          <div className="rightpart lg:col-span-6">
            <div>
              <h1 className=" text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-gray-1">
                Key benefits
              </h1>
            </div>
            {[1, 2, 3, 4].map((item) => (
              <div className="flex gap-7 py-5" key={item}>
                <div className="iconss">
                  <img
                    src={icons1}
                    width={"200px"}
                    className="p-2 lg:p-5 bg-[#eef6fd] shadow-2xl shadow-[#eef6fd] border rounded-2xl"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
                      Higher Profits
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base lg:text-lg font-normal font-Work-sans text-gray-2">
                      Sell directly to buyers or through our platform. With
                      competitive pricing and various selling options, WDH
                      ensures you receive the highest possible profit from your
                      car sale.
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
          <div className="flex flex-wrap items-center justify-between gap-10 lg:gap-0">
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

      <div className="explore w-[90%] mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-black">
            Explore nearby location
          </h1>
        </div>
        <div className="my-10 backdrop-blur-3xl">
          <div className="flex flex-wrap items-center border border-b w-full md:w-fit rounded-t-xl">
            {[
              { carname: "Sell", src: car1 },
              { carname: "Buy", src: car2 },
              { carname: "Mechanic", src: car3 },
              { carname: "Dealer", src: car4 },
              { carname: "Insurance", src: car5 },
              { carname: "Finance", src: car6 },
            ].map((car, index) => (
              <button
                onClick={() => {
                  handleButtonClick(index);
                }}
                key={index}
                className={`${
                  buttonClick === index
                    ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue"
                    : ""
                } flex items-center gap-2 text-sm md:text-lg font-medium font-Work-sans px-4 py-3 md:px-[30px] md:py-[20px] border-r`}
              >
                <img src={car.src} alt="" className="w-6 md:w-auto" />
                {car.carname}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="cars w-[90%] mx-auto">
        <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-5">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="card border rounded-2xl flex flex-col gap-4"
                >
                  <div>
                    <img
                      src={audi2}
                      alt="Car"
                      className="w-full h-auto rounded-t-2xl"
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                  </div>
                  <div className="flex items-center px-3 justify-between">
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                      45000 KM
                    </h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                      2018 Model
                    </h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-sm font-normal font-Work-sans text-gray-2">
                      Automatic
                    </h1>
                  </div>
                  <div className="px-3">
                    <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
                      $22,500
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <div className="flex items-center gap-2">
                      <img src={bluetick} alt="" />
                      <p className="text-xs font-normal font-Work-sans text-gray-1">
                        Verified by Mechanic
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={bluetick} alt="" />
                      <p className="text-xs font-normal font-Work-sans  text-gray-1">
                        Verified by Dealer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-2xl">
                      View Details
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
                      <div className="flex flex-wrap items-center gap-5">
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
                          And equal blame belongs to those who fail in their
                          duty through weakness of will, which is the same as
                          saying through shrinking from toil and pain.
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
        <img src={waveicon} className="w-full" alt="" />
      </div>
      <div>
        <Banner />
      </div>
    </>
  );
}

export default Home;