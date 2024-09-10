import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import carImage from "../../assets/images/wheeldealhub (1) 1.png"; // Replace with the correct path to your image
import backgroundimg from "../../assets/images/Mask_group-ai-brush-removebg-q6y0hhm (1).png";
import menswithcar from "../../assets/images/manswithcar.png";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import StarImage from "../../assets/images/starGroup.png";
import { useState } from "react";
import waveicon from "../../assets/images/Wave.png";
import Navbar2 from "../../components/Navbar2";
import bluetick from "../../assets/images/bluetickzigzag.png";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const cards = [
    {
      icnos: <Svgs.RegisterIcon />,
      heading: "Register",
      paragraph:
        "Create an account on WDH to get started. Provide your personal information.",
    },
    {
      icnos: <Svgs.SelectMechanicIcon />,
      heading: "Select Mechanic",
      paragraph:
        "Find nearby mechanic to check the condition to verify the car and pay Mechanic fee.",
    },
    {
      icnos: <Svgs.SelectDealerIcon />,
      heading: "Select dealer",
      paragraph:
        "For direct sellers, contact a designated dealer to verify your car.",
    },
    {
      icnos: <Svgs.SellYourCarIcon />,
      heading: "Sell your car",
      paragraph: "you can sell your car efficiently and profitably on WDH. ",
    },
  ];

  const keyBenefits = [
    {
      icons: <Svgs.HigherProfit />,
      name: "Higher Profits",
      paragaph:
        "Sell directly to buyers or through our platform. With competitive pricing and various selling options, WDH ensures you receive the highest possible profit from your car sale.",
    },
    {
      icons: <Svgs.VerifiedMechanicIcon />,
      name: "Verified Mechanics",
      paragaph:
        "Selling your car has never been easier. Our user-friendly platform guides you through every step, from registration to final sale. With clear instructions and support at every stage, you can complete the process quickly and efficiently.",
    },
    {
      icons: <Svgs.VerifiedDealer />,
      name: "Verified Dealers",
      paragaph:
        "All cars on our platform are verified by trusted dealers to ensure quality and transparency. This verification not only builds trust with potential buyers but also guarantees that you are selling a car that meets the highest standards.",
    },
    {
      icons: <Svgs.LifeAndInsuranceIcon />,
      name: "Insurance & Finance",
      paragaph:
        "All cars on our platform are verified by trusted dealers to ensure quality and transparency. This verification not only builds trust with potential buyers but also guarantees that you are selling a car that meets the highest standards.",
    },
  ];

  const blueRectangleData = [
    {
      icon: <Svgs.CarSold />,
      values: "50k+",
      name: "Car Sod",
    },
    {
      icon: <Svgs.MechanicCarIcon />,
      values: "24k+",
      name: "Mechanics",
    },
    {
      icon: <Svgs.CarSold />,
      values: "2k+",
      name: "Dealers",
    },
    {
      icon: <Svgs.InsuranceDoneIcon />,
      values: "7k+",
      name: "Insurance Done",
    },
    {
      icon: <Svgs.CarLoanIcon />,
      values: "2k+",
      name: "Finances",
    },
  ];
  const [buttonClick, setButtonClick] = useState(0);

  const handleButtonClick = (index) => {
    setButtonClick(index);
  };

  const [iconclick, seticonclick] = useState(1);

  const handleClick = (item) => {
    seticonclick(item);
  };

  const navigate = useNavigate();
  return (
    <>
      <Navbar2 active={"Home-Page"} />
      <div className=" relative ">
        <img
          src={backgroundimg}
          className=" absolute -z-10 w-full bg-[#f4faff] h-[130%]"
          alt=""
        />
        <div className=" py-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="md:w-[90%] text-center lg:text-left">
              <h1 className="text-[32px] font-inter lg:text-[72px] font-bold text-gray-1 px-2 md:px-20  mt-20  background-rgb">
                Sell Your Car Easily and Profitably
              </h1>
              <p className=" px-2 md:px-20 text-sm md:text-base lg:text-lg my-10 font-normal font-Work-sans text-gray-2  md:w-[68%]">
                Sell your car easily and profitably with Wheeldealhub. Whether
                you want to sell directly to buyers or to our trusted dealers,
                we guarantee a smooth process and the best prices. Start today
                and experience hassle-free transactions with verified dealers
                and secure payments.
              </p>
              <div className="flex flex-wrap items-center gap-5 px-20">
                <button
                  onClick={() => {
                    navigate("/sellyourcar");
                  }}
                  className=" w-[164px] h-[52px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue"
                >
                  Sell now
                </button>
                <button
                  onClick={() => {
                    navigate("/buy-a-car");
                  }}
                  className=" w-[164px] h-[52px] rounded-lg border border-gray-1 text-gray-1 px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center"
                >
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
      <div className="w-[90%] mx-auto my-10 ">
        <div className="">
        <div className="flex flex-wrap items-center border border-b-0 w-fit rounded-t-xl backdrop-blur-3xl shadow-2xl shadow-[#eef6fd] ">
          <button
            onClick={() => {
              handleClick(1);
            }}
            className={`${
              iconclick === 1
                ? " rounded-tl-xl bg-gradient-to-tr from-[#dbeeff] to-[#f3f9ff] text-custom-blue h-[84px]"
                : ""
            } w-[200px] flex items-center gap-x-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r h-[84px]`}
          >
            <span>
              <Svgs.SellCarIcon
                color={iconclick === 1 ? "#6f9cff" : "#333333"}
              />
            </span>
            Sell
          </button>
          <button
            onClick={() => {
              handleClick(2);
            }}
            className={`${
              iconclick === 2
                ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue h-[84px]"
                : ""
            } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r h-[84px]`}
          >
            <Svgs.BuyACarIcon color={iconclick === 2 ? "#6f9cff" : "#333333"} />
            Buy
          </button>
          <button
            onClick={() => {
              handleClick(3);
            }}
            className={`${
              iconclick === 3
                ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue h-[84px]"
                : ""
            } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r h-[84px]`}
          >
            <Svgs.MechanicIcon
              color={iconclick === 3 ? "#6f9cff" : "#333333"}
            />
            Mechanic
          </button>
          <button
            onClick={() => {
              handleClick(4);
            }}
            className={`${
              iconclick === 4
                ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue h-[84px]"
                : ""
            } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r h-[84px]`}
          >
            <Svgs.DealerIcon color={iconclick === 4 ? "#6f9cff" : "#333333"} />
            Dealer
          </button>
          <button
            onClick={() => {
              handleClick(5);
            }}
            className={`${
              iconclick === 5
                ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue h-[84px]"
                : ""
            } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] border-r h-[84px]`}
          >
            <Svgs.InsuranceIcon
              color={iconclick === 5 ? "#6f9cff" : "#333333"}
            />
            Insurance
          </button>
          <button
            onClick={() => {
              handleClick(6);
            }}
            className={`${
              iconclick === 6
                ? " md:rounded-tr-xl bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue h-[84px]"
                : ""
            } w-[200px] flex items-center gap-2 text-lg font-medium font-Work-sans px-[15px] md:px-[30px] py-[10px] md:py-[20px] h-[84px]`}
          >
            <Svgs.FinanceIcon color={iconclick === 6 ? "#6f9cff" : "#333333"} />
            Finance
          </button>
        </div>
        </div>
        <div className="border rounded-xl rounded-tl-none py-10 shadow-2xl shadow-[#eef6fd] backdrop-blur-3xl">
          <div>
            <h1 className="text-[24px] md:text-[36px] font-semibold font-inter text-gray-1 text-center">
              Sell Car instantly on Wheeldealhub from Home
            </h1>
          </div>
          <div className="flex items-center justify-center pt-5">
            <button
              onClick={() => {
                navigate("/sellyourcar");
              }}
              className="h-[44px] rounded-lg bg-custom-blue text-white px-4 md:px-[24px] py-2 md:py-[11.5px] text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue"
            >
              Sell now
            </button>
          </div>
        </div>
      </div>

      <div className="howitsworks w-[95%] md:w-[90%] mx-auto">
        <div className="flex items-center justify-center my-10">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-black mt-10">
            How it Works
          </h1>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2">
          {cards.map((value, i) => (
            <div
              key={i}
              className="card border py-[70px]  flex items-center justify-center flex-col gap-5 rounded-xl min-w-[300px] h-[432px] shadow-lg"
            >
              <div className=" bg-custom-blue flex items-center justify-center p-4 rounded-2xl">
                <span className="">{value.icnos}</span>
              </div>
              <div>
                <h1 className="text-center text-[20px] md:text-[24px] lg:text-[32px] font-bold font-inter text-black">
                  {value.heading}
                </h1>
              </div>
              <div className=" px-4">
                <h1 className="text-center text-sm md:text-base lg:text-lg font-normal text-gray-2 font-Work-sans">
                  {value.paragraph}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="keybenefits my-20">
        <div className="w-[90%] mx-auto flex flex-col xl:flex-row items-center justify-center gap-20">
          <div className="">
            <div className="">
              <img src={menswithcar} className="" alt="" />
            </div>
          </div>
          <div className="rightpart xl:w-[50%]">
            <div className="">
              <h1 className=" text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-gray-1">
                Key benefits
              </h1>
            </div>
            {keyBenefits.map((value, index) => (
              <div className="flex flex-col lg:flex-row items-start my-[40px] gap-7" key={index}>
                <div className="bg-[#f4faff] shadow-2xl shadow-[#dee9f4]  p-[30px]  rounded-[24px] border border-gray-5 flex items-center justify-center">
                  <span className=" ">{value.icons}</span>
                </div>
                <div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
                      {value.name}
                    </h1>
                  </div>
                  <div className=" pt-[20px]">
                    <h1 className="text-sm md:text-base lg:text-lg font-normal font-Work-sans text-gray-2">
                      {value.paragaph}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="blueRectangle w-[90%] mx-auto py-10 lg:py-16">
        <div className="bg-custom-blue rounded-xl px-[80px] py-[48px]">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-10">
            {blueRectangleData.map((value, index) => (
              <div key={index} className="flex flex-col items-center ">
                <span>{value.icon}</span>
                <h1 className="text-[72px] font-bold font-inter text-white">
                  {value.values}
                </h1>
                <h1 className="text-lg font-medium font-inter text-white">
                  {value.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="explore w-[90%] mx-auto">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold font-inter text-black">
            Explore nearby location
          </h1>
        </div>
        <div className="my-16 backdrop-blur-3xl">
          <div className="flex flex-wrap items-center justify-center md:justify-start w-full md:w-fit rounded-t-[24px]">
            {[
              {
                carname: "Sell",
                svgs: (
                  <Svgs.SellCarIcon
                    color={buttonClick === 0 ? "#6f9cff" : "#333333"}
                  />
                ),
                border_radius: 'rounded-tl-[24px]',
                border_r: 'border-r',
                border_color: 'border-[#5db2fc]',
              },
              {
                carname: "Buy",
                svgs: (
                  <Svgs.BuyACarIcon
                    color={buttonClick === 1 ? "#6f9cff" : "#333333"}
                  />
                ),
                border_r: 'border-r',
              },
              {
                carname: "Mechanic",
                svgs: (
                  <Svgs.MechanicIcon
                    color={buttonClick === 2 ? "#6f9cff" : "#333333"}
                  />
                ),
                border_r: 'border-r',
              },
              {
                carname: "Dealer",
                svgs: (
                  <Svgs.DealerIcon
                    color={buttonClick === 3 ? "#6f9cff" : "#333333"}
                  />
                ),
                border_r: 'border-r',
              },
              {
                carname: "Insurance",
                svgs: (
                  <Svgs.SellCarIcon
                    color={buttonClick === 4 ? "#6f9cff" : "#333333"}
                  />
                ),
                border_r: 'border-r',
              },
              {
                carname: "Finance",
                svgs: (
                  <Svgs.SellCarIcon
                    color={buttonClick === 5 ? "#6f9cff" : "#333333"}
                  />
                ),
                border_radius: 'rounded-tr-[24px]',
                border_color: 'border-[#5db2fc]',
              },
            ].map((car, index) => (
              <button
                onClick={() => {
                  handleButtonClick(index);
                }}
                key={index}
                className={`${
                  buttonClick === index
                    ? " bg-gradient-to-tr from-[#e5f2fe] to-white text-custom-blue "
                    : ""
                } flex items-center justify-center gap-[10px] text-sm md:text-lg font-medium font-Work-sans px-4 py-3 md:px-[20px] md:py-[30px] w-[200px] h-[84px] ${car.border_r} ${car.border_radius} border`}
              >
                <span>{car.svgs}</span>
                {car.carname}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="cars w-[90%] mx-auto">
        <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-5">
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
                  <div className="px-3 flex items-center justify-between">
                    <h1 className="text-base md:text-xl font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                    <span><Svgs.HeartIconBlue/></span>
                  </div>
                  <div className="flex items-center px-3 justify-between">
                    <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
                      45000 KM
                    </h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
                      2018 Model
                    </h1>
                    <img src={grayDot} alt="" />
                    <h1 className="text-xs md:text-base font-normal font-Work-sans text-gray-2">
                      Automatic
                    </h1>
                  </div>
                  <div className="px-3">
                    <h1 className="text-lg md:text-[32px] font-bold font-inter text-gray-1">
                      $22,500
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <div className="flex items-center gap-2">
                      <span><Svgs.BlueTickIcon/></span>
                      <p className="text-sm font-normal font-Work-sans text-gray-1">
                        Verified by Mechanic
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                    <span><Svgs.BlueTickIcon/></span>
                      <p className="text-sm font-normal font-Work-sans  text-gray-1">
                        Verified by Dealer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button onClick={()=>{navigate('/customer/mycar-listing-details')}} className=" h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-custom-blue shadow-3xl ">
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
      <div className="testimonials bg-gradient-to-r from-[#F2F8FD] to-[#D1EAFF] py-[80px] ">
        <div className="text-center ">
          <h1 className="text-2xl lg:text-[54px] font-bold font-inter text-gray-1 ">
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
              <div className="cards w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-[60px]">
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
