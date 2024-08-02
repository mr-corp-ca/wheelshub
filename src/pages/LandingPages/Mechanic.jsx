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
import Banner from "../../components/Banner";
import graybg from '../../assets/images/graybg.png'
import ocean from '../../assets/images/ocean-park-logo-216w.png'
import offwhite from '../../assets/images/whitebg.png'
import redbg from '../../assets/images/redbg.png'
import purplebg from '../../assets/images/purplebg.png'
import blackbg from '../../assets/images/blackbg.png'
import orangebg from '../../assets/images/orangedbg.png'
import corapedlogo from '../../assets/images/cropped-GARLOGO2022-2-192x192 1.png'
import protechogo from '../../assets/images/Pro-Tech Auto Repairs.png'
import aramlogo from '../../assets/images/Aram’s AUTO Repairs.png'
import logoss from '../../assets/images/logo-1.png'
import daleslogo from '../../assets/images/DalesLogo@ 1.png'
import newtonlogo from '../../assets/images/image 53.png'
import snjautologo from '../../assets/images/SNJ Automotive Repair.png'
import njlogo from '../../assets/images/NJ Auto Repair Mechanic.png'
export default function Mechanic() {

  const cardsData = [
    {
      background: 'bg-gray-600',
      logo: ocean,
      name: 'Ocean Park Automotive Ltd'
    },
    {
      background: 'bg-red-500',
      logo: njlogo,
      name: 'NJ Auto Repair Mechanic'
    },
    {
      background: 'bg-black',
      logo: logoss,
      name: 'White Rock Automotive',
    },
    {
      background: 'bg-black',
      logo: aramlogo,
      name: 'Arams Auto Repairs'
    },
    {
      background: 'bg-orange-500',
      logo: protechogo,
      name: 'Pro-Tech Auto Repairs Ltd'
    },
    {
      background: 'bg-white',
      logo: corapedlogo,
      name: 'Genesis Auto Repair Ltd.'
    },
  ]

  const navigate = useNavigate()

  return (
    <>
      <Navbar2 />
      <div className="  flex flex-col lg:flex-row">
        {/* sidebar */}
        <div className="sidebar lg:w-[25%] lg:pl-10 p-4 lg:pt-10">
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
                Mechanics
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

            <div className="cardpart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cardsData
                .map((value, index) => {
                  return (
                    <div
                      onClick={() => navigate("/details")}

                      key={index}
                      className="card border rounded-2xl flex flex-col gap-4"
                    >
                      <div className={` h-[212px] rounded-t-2xl flex items-center justify-center ${value.background}`}>
                        <img src={value.logo} alt="" />
                      </div>
                      <div className="px-3 flex items-center justify-between">
                        <h1 className="text-base md:text-xl font-semibold font-inter text-gray-800">
                        {value.name}
                        </h1>
                        <img src={hearticon} alt="Heart icon" />
                      </div>
                      <div className="flex items-center px-3 justify-between">
                        <h1 className="text-base font-normal font-Work-sans text-custom-blue underline">
                          7711 128 St, Surrey, BC V3W 4E6, Canada
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
      <Banner/>
    </>
  );
}
