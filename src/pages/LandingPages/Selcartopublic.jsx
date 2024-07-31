import carimg from '../../assets/images/caropendoor.png'
import greentick from '../../assets/images/greenTick.png'
import React from "react";
import usedCarsImage from "../../assets/images/usedcarsimages.png";
import heartIcon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import bluetick from "../../assets/images/bluetick (2).png";
import contact from "../../assets/images/contact.png";
import maps from "../../assets/images/maps.png";
import gmail from "../../assets/images/gmail.png";
import Navbar2 from "../../components/Navbar2";
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
// import Navbar2 from '../../components/Navbar2';
import { Navbar } from '../../components/Navbar';
import { NavigateBeforeSharp } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';


const Selcartopublic = () => {
  const navigate = useNavigate();
    const [tabActive, setTabActive] = useState("home");
    const handleClick = (item) => {
  
      setTabActive(item);
    };
  
    const bidsClick = () => {
  
      handleClick("bids")
  
    }
    const investmentClick = () => {
  
      handleClick("investments");
  
    }
    return (
        <>
        <Navbar2/>
        <div>
            {/* for first main div */}

            <div className='lg:h-[85vh] 2xl:h-[85vh] h-[50vh] bg-[#F3F3F3] flex  ' >
              
                <div className='w-[100%] mx-auto flex  justify-center items-center '>
                    <div className=''>

                        <div className=' px-[24px] lg:p-0  flex flex-col gap-[48px] lg:relative lg:bottom-[30px] lg:left-[120px] lg:w-[708px] '>
                            <div>
                                <div className='lg:text-[48px] text-[25px] text-[#333333] lg:w-[729px] font-bold'><h6>Unlock Your Car's Value - Enter
                                    Your Details</h6></div>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex gap-[24px]'>
                                    <div><img src={greentick} alt="" /></div>
                                    <div className='lg:text-[18px] font-medium text-[#333333]'><h6>High value</h6></div>
                                </div>

                                <div className='flex gap-[24px]'>
                                    <div><img src={greentick} alt="" /></div>
                                    <div className='lg:text-[18px] font-medium text-[#333333]'><h6>Your car, your price</h6></div>
                                </div>

                                <div className='flex gap-[24px]'>
                                    <div><img src={greentick} alt="" /></div>
                                    <div className='lg:text-[18px] font-medium text-[#333333]'><h6>100% Trusted</h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for 2nd imgae div */}
                    <div className='hidden lg:block '>
                        <img className='lg:relative top-[30px] lg:right-[70px] w-full' src={carimg} alt="" />
                    </div>
                </div>
            </div>
            {/* for 2nd main div */}
            <div className=' '>
           
                <div className='  border rounded-2xl bg-white   md:w-[80%] w-[90%] xl:w-[80%] 2xl:w-[58%] mx-auto  relative xl:bottom-[70px]  2xl:bottom-[100px] 
             lg:bottom-[80px]  sm:bottom-[60px] lg:h-[864px] h-fit'>
                 
                    <div className='font-bold lg:text-[28px] text-[20px] flex justify-center py-[50px] px-5 lg:px-0]'><h6>Enter car details</h6></div>

                    {/* for car details code div */}
                    {/* start */}
                    {/* 1st */}
                    <div className='px-8 lg:px-0  lg:flex flex-wrap justify-center gap-[62px] w-full'>
                        {/* 1st */}
                        <div>
                            <h6 className='text-[#333333] text-[16px] font-medium '>Select car make</h6>

                            <div className='lg:w-[400px]  w-full  justify-between  bg-[#FAFAFA]
                                           border rounded-lg py-[12.5px]  items-center px-[16px]'>



                                <select id="cars" class=" rounded-lg lg:w-[360px] w-full px-3 lg:px-0 bg-[#FAFAFA]">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>


                        </div>
                        {/* 2nd */}
                        <div>
                            <h6 className='text-[#333333] text-[16px] font-medium'>Model</h6>

                            <div className='lg:w-[400px]  w-full  justify-between  bg-[#FAFAFA]
                                     border rounded-lg py-[12.5px]  items-center px-[16px]'>
                                
                                <div>
                                <select id="cars" class=" rounded-lg lg:w-[360px] w-full px-3 lg:px-0 bg-[#FAFAFA]">
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className=' px-8 lg:px-0  lg:flex flex-wrap justify-center gap-[62px] mt-[20px] w-full'>
                        {/* 1st */}
                        <div>
                            <h6 className='text-[#333333] text-[16px] font-medium '>Manufacturing year</h6>

                            <div className='lg:w-[400px] w-full   justify-between  bg-[#FAFAFA]
                                           border rounded-lg py-[12.5px]  items-center px-[16px]'>
                                
                                <div>
                                   
                                <select id="cars" class=" rounded-lg lg:w-[360px] w-full px-3 lg:px-0 bg-[#FAFAFA]">
                                        <option value="2005">2005</option>
                                        <option value="2010">2010</option>
                                        <option value="2015">2015</option>

                                    </select>
                                </div>
                            </div>


                        </div>
                        {/* 2nd */}
                        <div>
                            <h6 className='text-[#333333] text-[16px] font-medium'>Kms Driven</h6>

                            <div className='lg:w-[400px] w-full   justify-between  bg-[#FAFAFA]
                                     border rounded-lg py-[12.5px]  items-center px-[16px]'>
                                
                                <div>
                                <select id="cars" class=" rounded-lg lg:w-[360px] w-full px-3 lg:px-0 bg-[#FAFAFA]">
                                        <option value="50000">50000</option>
                                        <option value="18500">18500</option>
                                        <option value="9000">9000</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 3rd */}
                    <div className='px-8 lg:px-0    lg:flex flex-wrap justify-center gap-[62px] mt-[20px] w-full'>
                        {/* 1st */}
                        <div>
                            <h6 className='text-[#333333] lg:text-[16px] font-medium '>VID(vehicle identification number</h6>

                            <div className='lg:w-[400px]    justify-between  bg-[#FAFAFA]
                                           border rounded-lg py-[12.5px]  items-center px-[16px]'>
                               
                                <div>
                                <select id="cars" class=" rounded-lg lg:w-[360px] w-full px-3 lg:px-0 bg-[#FAFAFA]">
                                        <option value="Honda">Honda</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="BMW">BWM</option>

                                    </select>
                                </div>
                            </div>


                        </div>
                        {/* 2nd */}
                        <div>
                            <h6 className='text-[#333333] text-[16px] font-medium'>Transmission</h6>

                            <div className='lg:w-[400px]    justify-between  bg-[#FAFAFA]
                                     border rounded-lg py-[12.5px]  items-center px-[16px]'>
                                
                                <div>
                                <select id="cars" class=" rounded-lg lg:w-[360px] w-full px-3 lg:px-0 bg-[#FAFAFA]">
                                        <option value="Cvt">Cvt</option>
                                        <option value="Auto">Auto</option>
                                        <option value="Manual">Manual</option>

                                    </select>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className='px-8 lg:px-0    lg:flex flex-col  items-center mt-[36px]'>

                        <div> <h6 className='text-[16px] font-medium text-[#333333]  '>Notes</h6>
                            <div className='bg-[#FAFAFA] lg:w-[864px] w-full  border rounded-lg h-[130px]   '></div>

                        </div>

                    </div>

                    {/* images div      */}
                    <div className='px-8 lg:px-0   flex justify-center mt-[20px]'>
                        <div><h6 className=' font-medium text-[16px] text-[#333333] '>Upload vehicle images</h6>
                            <div className=' flex flex-wrap gap-[16px] '>
                                {/* <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" />
                                <img src={img3} alt="" /> */}

                            </div>
                        </div>
                    </div>
                    {/* end */}


                    {/* for button send request */}
                    <div className=' flex justify-center  py-12'><button     onClick={() => navigate("/sellyourcar/mechanic")} className=' w-[129px] h-[52px] py-[15.5px] px-[44px]
                 
                  text-[white] text-[18px] font-medium bg-[#6F9CFF] border rounded-lg  items-center flex justify-center'>Next</button></div>
                </div>

            </div>
        </div>
        {/* <div className="banner">
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
      </div> */}
      <Banner/>
        </>
        
    )
}

export default Selcartopublic
