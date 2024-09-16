import carimg from "../../assets/images/caropendoor.png";
import React from "react";
import Navbar2 from "../../components/Navbar2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigate, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index";

const Selcartopublic = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar2 active={'Sell-A-Car'}/>
      <div>
        {/* for first main div */}

        <div className=" py-20 md:py-44 bg-[#F3F3F3]  ">
          <div className="w-[100%] mx-auto flex  justify-center items-center ">
            <div className="">
              <div className=" flex flex-col  px-5 gap-[48px] lg:relative lg:bottom-[30px] lg:left-[90px] max-w-[1170px] ">
                <div className="">
                  <div className=" text-center md:text-start lg:text-[48px] font-inter  text-[25px] text-[#333333] lg:w-[750px] font-bold flex items-center justify-center">
                    <h6>Unlock Your Car's Value - Enter Your Details</h6>
                  </div>
                </div>
                <div className="flex flex-col md:items-start gap-[24px]">
                  <div className="flex items-center gap-[24px]">
                    <div>
                      <Svgs.GreenTickIcon />
                    </div>
                    <div className="lg:text-[18px] font-medium text-[#333333] font-Work-sans">
                      <h6>High value</h6>
                    </div>
                  </div>

                  <div className="flex items-center gap-[24px]">
                    <div>
                      <Svgs.GreenTickIcon />
                    </div>
                    <div className="lg:text-[18px] font-medium text-[#333333] font-Work-sans">
                      <h6>Your car, your price</h6>
                    </div>
                  </div>

                  <div className="flex items-center gap-[24px]">
                    <div>
                      <Svgs.GreenTickIcon />
                    </div>
                    <div className="lg:text-[18px] font-medium text-[#333333] font-Work-sans">
                      <h6>100% Trusted</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* for 2nd imgae div */}
            <div className="hidden lg:block ">
              <img
                className="lg:relative top-[30px] lg:right-[70px] w-full"
                src={carimg}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* for 2nd main div */}
        <div className=" mx-4 lg:mx-14">
          <div className=" px-4 border rounded-2xl bg-white max-w-[1170px]   mx-auto -mt-16 md:-mt-32 mb-16 md:mb-32 ">
            <div className="font-bold lg:text-[28px] font-inter text-[20px] flex justify-center py-[50px] px-5 lg:[px-0] text-gray-1">
              <h6>Enter car details</h6>
            </div>

            {/* for car details code div */}
            {/* start */}
            {/* 1st */}
            <div className="   lg:flex flex-wrap justify-center gap-[62px] w-full ">
              {/* 1st */}
              <div>
                <h6 className="text-[#333333] text-[16px] font-inter font-medium ">
                  Select car make
                </h6>

                <div
                  className="mt-2 cursor-pointer lg:w-[400px]  w-full flex  justify-between h-[44px] bg-[#FAFAFA]
                                           border rounded-lg py-[12.5px]  items-center px-[16px]"
                >
                  <select
                    id="cars"
                    class=" text-base font-medium font-inter text-gray-1 rounded-lg lg:w-[360px]  w-full  bg-[#FAFAFA] outline-none cursor-pointer"
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              {/* 2nd */}
              <div className="mt-5 lg:mt-0">
                <h6 className="text-[#333333] text-[16px] font-medium font-inter">
                  Model
                </h6>

                <div
                  className="mt-2 cursor-pointer lg:w-[400px]  w-full flex justify-between h-[44px] bg-[#FAFAFA]
                                     border rounded-lg py-[12.5px]  items-center px-[16px]"
                >
                 
                    <select
                      id="cars"
                      class=" cursor-pointer text-base font-medium font-inter text-gray-1 rounded-lg lg:w-[360px] w-full  bg-[#FAFAFA] outline-none"
                    >
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                  
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="   lg:flex flex-wrap justify-center gap-[62px] mt-[20px] w-full">
              {/* 1st */}
              <div>
                <h6 className="text-[#333333] text-[16px] font-medium font-inter">
                  Manufacturing year
                </h6>

                <div
                  className="mt-2 cursor-pointer lg:w-[400px] w-full flex  justify-between h-[44px] bg-[#FAFAFA]
                                           border rounded-lg py-[12.5px]  items-center px-[16px]"
                >
                 
                    <select
                      id="cars"
                      class=" cursor-pointer text-base font-medium font-inter text-gray-1 rounded-lg lg:w-[360px]  w-full bg-[#FAFAFA] outline-none"
                    >
                      <option value="2005">2005</option>
                      <option value="2010">2010</option>
                      <option value="2015">2015</option>
                    </select>
                  
                </div>
              </div>
              {/* 2nd */}
              <div className="mt-5 lg:mt-0">
                <h6 className="text-[#333333] text-[16px] font-medium font-inter">
                  Kms Driven
                </h6>

                <div
                  className="mt-2 cursor-pointer lg:w-[400px] w-full flex  justify-between h-[44px] bg-[#FAFAFA]
                                     border rounded-lg py-[12.5px]  items-center px-[16px]"
                >
                  
                    <select
                      id="cars"
                      class=" cursor-pointer text-base font-medium font-inter text-gray-1 rounded-lg lg:w-[360px]  w-full bg-[#FAFAFA] outline-none"
                    >
                      <option value="50000">50000</option>
                      <option value="18500">18500</option>
                      <option value="9000">9000</option>
                    </select>
                 
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className="  lg:flex flex-wrap justify-center gap-[62px] mt-[20px] w-full">
              {/* 1st */}
              <div>
                <h6 className="text-[#333333] lg:text-[16px] font-medium font-inter">
                  VID(vehicle identification number)
                </h6>

                <div
                  className="mt-2 cursor-pointer lg:w-[400px]  flex  justify-between h-[44px] bg-[#FAFAFA]
                                           border rounded-lg py-[12.5px]  items-center px-[16px]"
                >
                  
                    <select
                      id="cars"
                      class=" cursor-pointer text-base font-medium font-inter text-gray-1 rounded-lg lg:w-[360px]  w-full bg-[#FAFAFA] outline-none"
                    >
                      <option value="Honda">Honda</option>
                      <option value="Toyota">Toyota</option>
                      <option value="BMW">BWM</option>
                    </select>
               
                </div>
              </div>
              {/* 2nd */}
              <div className="mt-5 lg:mt-0">
                <h6 className="text-[#333333] text-[16px] font-medium font-inter">
                  Transmission
                </h6>

                <div
                  className="mt-2 cursor-pointer lg:w-[400px]  flex  justify-between  h-[44px] bg-[#FAFAFA]
                                     border rounded-lg py-[12.5px]  items-center px-[16px]"
                >
                 
                    <select
                      id="cars"
                      class=" cursor-pointer text-base font-medium font-inter text-gray-1 rounded-lg lg:w-[360px] w-full bg-[#FAFAFA] outline-none"
                    >
                      <option value="Cvt">Cvt</option>
                      <option value="Auto">Auto</option>
                      <option value="Manual">Manual</option>
                    </select>
                
                </div>
              </div>
            </div>

            <div className="   lg:flex flex-col mt-[36px] max-w-[864px] mx-auto">
              <label
                htmlFor=""
                className=" text-base font-medium font-inter text-gray-1"
              >
                Notes
              </label>
              <textarea
                name=""
                id=""
                className="border rounded-lg resize-none w-full h-[130px] outline-none p-4 bg-[#FAFAFA] mt-2"
              ></textarea>
            </div>

            {/* images div      */}
            <div className="  flex  mt-[36px] max-w-[864px] mx-auto">
              <div>
                <h6 className=" font-medium text-[16px] text-[#333333] font-inter">
                  Upload vehicle images
                </h6>
                <div className=" flex flex-wrap gap-[16px] mt-4">
                    {Array(11).fill().map(()=>(
                    <span className=" border border-dashed rounded-lg p-4">
                 <Svgs.GalleryIcon/>
                    </span>
                    ))}
                </div>
              </div>
            </div>
            {/* end */}

            {/* for button send request */}
            <div className=" flex justify-center  py-12">
              <button
                onClick={() => navigate("/sellyourcar/find-mechanic")}
                className=" w-[129px] h-[52px] py-[15.5px] px-[44px]
                 
                  text-[white] shadow-2xl shadow-blue-300 text-[18px] font-medium font-Work-sans bg-[#6F9CFF] border rounded-lg  items-center flex justify-center"
              >
                Next
              </button>
            </div>
          </div>
          </div>
      </div>
      <Banner />
    </>
  );
};

export default Selcartopublic;
