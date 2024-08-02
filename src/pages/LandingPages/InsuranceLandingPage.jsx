import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import filterIcon from "../../assets/images/filter 1.png";
import searchIcon from "../../assets/images/Vector (1).png";
import { useState } from "react";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import waveicon from "../../assets/images/Wave.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import carmechanic from "../../assets/images/carmechanic.png";
import hearticon from "../../assets/images/hearticon.png";
import yellowstar from "../../assets/images/staryellow.png";
import bluetick from "../../assets/images/bluetick (2).png"
import Navbar2 from "../../components/Navbar2";
import { useNavigate } from "react-router-dom";
import redbg from '../../assets/images/redbg.png'
import offwhite from '../../assets/images/offwhitebg.png'
import skylinelogo from '../../assets/images/skyllinelogo.png'
import basantlogo from '../../assets/images/basantlogo.png'
import Banner from "../../components/Banner";


export default function InsuranceLandingPage() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = (item) => {
    setTabActive(item);
  };

  const bidsClick = () => {
    handleClick("bids");
  };

  const investmentClick = () => {
    handleClick("investments");
  };

  return (
    <>
      <Navbar2 />
      <div className="  flex flex-col lg:flex-row">
        {/* sidebar */}
        <div className="sidebar lg:w-[30%] p-4 lg:pl-16 lg:pt-10">
          {/* Filter Heading */}
          <div className="flex items-center gap-4">
            <img src={filterIcon} alt="Filter Icon" />
            <h1 className="text-2xl lg:text-[32px] font-inter font-bold text-gray-1">
              Filter
            </h1>
          </div>
          {/* Search bar */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-5">
            <input
              type="text"
              placeholder="Search here"
              className="ml-2 w-full border-none focus:outline-none"
            />
          </div>
          <div className="mt-5">
            {/* Accordion */}
            <div className="border-2 rounded-xl">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6a-content"
                  id="panel6a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold text-gray-1 font-inter">
                    Location
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="  flex items-center border border-gray-300 rounded-md px-3 py-2 mt-5">
                    <input
                      type="text"
                      placeholder="Type location"
                      className="ml-2 w-full border-none focus:outline-none"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <h1 className="text-xl lg:text-2xl font-semibold text-gray-1 font-inter">
                    Popularity
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="">
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">All</h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">Most popular</h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <input type="checkbox" />
                      <h1 className=" text-lg font-normal font-Work-sans text-gray-1">Verified</h1>
                    </div>

                  </div>
                </AccordionDetails>
              </Accordion>


            </div>
          </div>
        </div>
        {/* content of cards */}
        <div className="p-4 mt-2 lg:w-3/4">
          <div className="">
            <div className="newRequests py-4">
              <h1 className="text-xl lg:text-[32px] font-bold text-gray-1 font-inter">
                Insurance
              </h1>
            </div>

            <div className="flex items-center flex-wrap gap-5 pt-10 pb-5">
              <button className="rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
                Verified
              </button>
              <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
                Nearby
              </button>
              <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
                Most viewed
              </button>
            </div>

            <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill()
                .map((_, index) => {
                  return (
                    <div
                      onClick={() => navigate("/details")}
                      key={index}
                      className="card border rounded-2xl flex flex-col gap-4"
                    >
                      <div className=" flex items-center justify-center h-[212px] bg-[#efefef] rounded-t-2xl">
                        <img src={basantlogo} alt="" />
                      </div>
                      <div className="px-3 flex items-center justify-between">
                        <h1 className="text-base md:text-xl font-semibold font-inter text-gray-800">
                          Westland Insurance
                        </h1>
                        <img src={hearticon} alt="Heart icon" />
                      </div>
                      <div className="flex items-center px-3 justify-between">
                        <h1 className="text-base font-normal font-Work-sans text-custom-blue underline">
                          3041 152 St #800, Surrey, BC V4P 3K1, Canada
                        </h1>
                      </div>
                      <div className="px-3 flex items-center gap-3">
                        <img src={yellowstar} alt="Yellow star" />
                        <h1 className="text-sm font-normal font-Work-sans text-gray-800">
                          430 Reviews
                        </h1>
                      </div>
                      <div className="flex items-center gap-2 px-3">
                        <img src={bluetick} alt="Yellow tick" />
                        <p className="text-sm font-normal font-Work-sans text-gray-800">
                          Verified by Wheeldealhub
                        </p>
                      </div>
                      <div className="flex items-center justify-center pb-4 md:pb-5 mx-5">
                        <button className="h-[44px] md:h-[48px] px-[10px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                          Call now - +650 334 4545
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex items-center justify-center my-10 pb-4 md:pb-5">
            <button className="h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center border border-gray-300 text-gray-800">
              Load more
            </button>
          </div>
        </div>
      </div>
      {/* <div className="banner">
        <img src={banner} className="w-full" alt="Banner" />
      </div>

      <div className="footer py-10 bg-[#e0e0e0]">
        <div className="w-[90vw] lg:w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
            <div className="first w-full lg:w-[35%]">
              <div>
                <img src={quickBidLogo} alt="Quick Bid Logo" />
              </div>
              <div>
                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-800 py-5 lg:py-10">
                  But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={facebook} alt="Facebook" />
                </div>
                <div>
                  <img src={twitter} alt="Twitter" />
                </div>
                <div>
                  <img src={tiktok} alt="TikTok" />
                </div>
                <div>
                  <img src={youtube} alt="YouTube" />
                </div>
              </div>
            </div>
            <div className="second w-full lg:w-[15%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 onClick={() => handleClick("home")} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Home
                </h3>
                <h3 onClick={() => bidsClick()} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                  Bids
                </h3>
                <h3 onClick={() => investmentClick()} className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
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
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
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
        <h1 className="text-white font-medium text-sm font-Work-sans">
          © 2022 wheeldealhub. All Rights Reserved
        </h1>
      </div> */}
      <Banner />
    </>
  );
}
