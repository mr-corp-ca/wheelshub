import React from 'react'
import banner from "../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import wheelDealLogo from '../assets/images/wheeldeallogo.png'
import { useNavigate } from 'react-router-dom';
import Svgs from '../assets/svgs/index.js'


function Banner() {
  const navigate = useNavigate()
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


  const homeTab = () =>{
    navigate('/')
    handleScrollToTop()
  }

  const buyACarTab = () =>{
    navigate('/buyacar')
    handleScrollToTop()
  }

  const sellACarTab = () =>{
    navigate('/sellyourcar')
    handleScrollToTop()
  }

  const dealerTab = () =>{
    navigate('/dealerpage')
    handleScrollToTop()
  }
  const InsuranceTab = () =>{
    navigate('/insurance-landing-page')
    handleScrollToTop()
  }
  return (
   <>
    <div className="banner ">
        <img src={banner} className=" w-[100vw]" alt="" />
      </div>


      <div className="footer py-10 bg-[#e0e0e0]">
        <div className=" w-full lg:w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 px-5 lg:px-0">
            <div className="first w-full lg:w-[31%] ">
              <div>
                <img src={wheelDealLogo} alt="" />
              </div>
              <div className=' '>
                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-1 py-5 lg:py-10">
                  But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <Svgs.Facebook/>
                </div>
                <div>
                  <Svgs.Twitter/>
                </div>
                <div>
                  <Svgs.TikTok/>
                </div>
                <div>
                  <Svgs.Youtube/>
                </div>
              </div>
            </div>
            <div className="second   ">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 onClick={homeTab} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Home
                </h3>
                <h3
                 onClick={buyACarTab}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Buy a car
                </h3>
                <h3 onClick={sellACarTab} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                Sell your car
                </h3>
                <h3 onClick={dealerTab} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                Dealers
                </h3>
                <h3 onClick={InsuranceTab} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                Insurance
                </h3>
              </div>
            </div>
            <div className="third  ">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                Vehicle Model
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 className=" cursor-pointer text-base lg:text-lg font-normal font-Work-sans">
                Toyota Corolla
                </h3>
                <h3 className=" cursor-pointer text-base lg:text-lg font-normal font-Work-sans">
                Toyota Noah
                </h3>
                <h3 className=" cursor-pointer text-base lg:text-lg font-normal font-Work-sans">
                Toyota Allion
                </h3>
                <h3 className=" cursor-pointer text-base lg:text-lg font-normal font-Work-sans">
                Toyota Premio
                </h3>
                <h3 className=" cursor-pointer text-base lg:text-lg font-normal font-Work-sans">
                Mitsubishi Pajero
                </h3>
              </div>
            </div>
            <div className="fourth ">
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
  )
}

export default Banner