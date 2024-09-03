// import React from 'react'
// import wheeldeallogo from "../assets/images/wheeldeal (2).png"
// import bellIcon from "../assets/images/bellIcon.png"
// import profilePic from "../assets/images/profile pic.png"
// function Navbar2() {
//   return (
//     <>
//     <nav className=' border-b-2'>
//         <div className='py-3 w-[90%] mx-auto flex items-center justify-between'>
//             <div>
//                 <img src={wheeldeallogo} alt="" />
//             </div>
//             <div className='flex items-center gap-5'>
//                 <ul className='flex items-center gap-5'>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Sell Your Car</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Buy a Car</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Mechanic</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Dealer</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Insurance</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Finances</li>
//                     <li className=' text-lg font-normal font-Work-sans text-gray-1'>Contact us</li>
//                 </ul>
//                 <div>
//                     <img src={bellIcon} alt="" />
//                 </div>
//                 <div>
//                     <img src={profilePic} alt="" />
//                 </div>
//             </div>
//         </div>
//     </nav>
//     </>
//   )
// }

// export default Navbar2


import React, { useState } from 'react';
import wheeldeallogo from '../assets/images/wheeldeal (2).png';
import bellIcon from '../assets/images/bellIcon.png';
import profilePic from '../assets/images/profile pic.png';
import { useLoginContext } from '../Context/LoginContext';
import { OutlineButton } from './OutlineButton';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import menuIcon from '../assets/images/Frame.png'
import { useUserContext } from '../Context/UserProvider';
// import menuIcon from '../assets/images/menuIcon.png'; // Add a menu icon

function Navbar2({active}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(pathname)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const { isLoggedIn } = useLoginContext()

  const navbarData = [
    {
      name: 'Home',
      navigate: '/',
      active: active === 'Home-Page' ? true : false ,
    },
    {
      name: 'Sell Your Car',
      navigate: '/sellyourcar',
      active: active === 'Sell-A-Car' ? true : false ,
    },
    {
      name: 'Buy a Car',
      navigate: '/buyacar',
      active: active === 'Buy-A-Car' ? true : false ,
    },
    {
      name: 'Mechanic',
      navigate: '/mechanicpage',
      active: active === 'Mechanic-Page' ? true : false ,
    },
    {
      name: 'Dealer',
      navigate: '/dealerpage',
      active: active === 'Dealer-Page' ? true : false ,
    },
    {
      name: 'Insurance',
      navigate: '/insurance-landing-page',
      active: active === 'Insurance-Page' ? true : false ,
    },
    {
      name: 'Finances',
      navigate: '/finances',
      active: active === 'Finance-Page' ? true : false ,
    },
    {
      name: 'Contact us',
      navigate: '/contact-us',
      active: active === 'Contact-Us' ? true : false ,
    },
  ]

  const hnadlePath =(path)=>{
    navigate(path)
  }

  const handleNavigate=(path)=>{
    navigate(path)
  }


  const {user} = useUserContext()
  return (
    <>
      <nav className='border-b-2'>
        <div className='py-3 w-[90%] mx-auto flex items-center justify-between'>
          <Link to="/" className=' w-[70px] lg:w-[108px] h-[78px] flex items-center'>
            <img src={wheeldeallogo} alt='WheelDeal Logo' className='object-cover' />
          </Link>
          <div className='hidden lg:flex items-center gap-5'>
            <ul className='flex items-center gap-4 xl:gap-5'>
              {navbarData.map((value,index)=>(
                <li key={index} onClick={()=>{hnadlePath(value.navigate)}} className={`xl:text-lg font-normal font-Work-sans cursor-pointer ${value.active === true ? 'text-custom-blue': ' text-gray-1'}`}>{value.name}</li>
              ))}
              </ul>
              {/* <li onClick={() => navigate("/sellyourcar")} className={`xl:text-lg font-normal font-Work-sans cursor-pointer ${pathname.includes("sellyourcar") ? "text-custom-blue" : " text-gray-1"}`}>Sell Your Car</li>
              <li onClick={() => navigate("/buyacar")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("buyacar") ? "text-custom-blue" : " text-gray-1"}`}>Buy a Car</li>
              <li onClick={() => navigate("/mechanicpage")} className={`cursor-pointer  xl:text-lg font-normal font-Work-sans ${pathname.includes("mechanicpage") ? "text-custom-blue" : " text-gray-1"}`}>Mechanic</li>
              <li onClick={() => navigate("/dealerpage")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("dealerpage") ? "text-custom-blue" : " text-gray-1"}`}>Dealer</li>
              <li onClick={() => navigate("/insurance-landing-page")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("insurance-landing-page") ? "text-custom-blue" : " text-gray-1"}`}>Insurance</li>
              <li onClick={() => navigate("/finances")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("finances") ? "text-custom-blue" : " text-gray-1"}`}>Finances</li>
              <li onClick={() => navigate("/")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("contact") ? "text-custom-blue" : " text-gray-1"}`}>Contact us</li> */}


            {user.isLoggedIn ?
              (
                <>
                <div className=' flex items-center'>
                  <img src={bellIcon} alt='Bell Icon' />
                </div>
                <div>
                  <img  className=' cursor-pointer' onClick={() => navigate("/login")} src={profilePic} alt='Profile Pic' />
                </div>
                </>
               
              )
              :
              (
                <>
                <div className='flex flex-row gap-5 items-center justify-center'>
                  <OutlineButton
                    onClick={() => navigate("/login")}
                    className={"!text-base"}
                    customPadding={" px-6 py-3 "}
                    title={"Log in"} />
                  <Button
                    onClick={() => navigate("/signup")}
                    title={"Create a account"}
                    className={"!min-w-max !px-6 !py-4"} />
                </div>
                </>
              )
            }

          </div>


          <div className='lg:hidden flex items-center '>
            <button onClick={toggleMenu}>
              <img src={menuIcon} alt='Menu Icon' />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className='lg:hidden'>
            <ul className='flex flex-col items-center gap-5 py-2'>
            {navbarData.map((value,index)=>(
              <li key={index} onClick={() => handleNavigate(value.navigate)} className={`xl:text-lg font-normal font-Work-sans cursor-pointer ${value.active === true ? ' text-custom-blue' : ' text-gray-1'}`}>{value.name}</li>
            ))}
            </ul>

 {user.isLoggedIn?
              (
                <div className='flex items-center gap-5'>
                <div>
                  <img src={bellIcon} alt='Bell Icon' />
                </div>
                <div>
                  <img onClick={() => navigate("/login")} src={profilePic} alt='Profile Pic' />
                </div>
              </div>
              )  : (
                <div className='flex flex-row gap-5 items-center justify-center'>
                <OutlineButton
                  onClick={() => navigate("/login")}
                  className={"!text-base"}
                  customPadding={" px-6 py-3 "}
                  title={"Log in"} />
                <Button
                  onClick={() => navigate("/signup")}
                  title={"Create a account"}
                  className={"!min-w-max !px-6 !py-4"} />
              </div>
              )
            }
              {/* <li onClick={() => navigate("/sellyourcar")} className={`xl:text-lg font-normal font-Work-sans cursor-pointer ${pathname.includes("sellyourcar") ? "text-custom-blue" : " text-gray-1"}`}>Sell Your Car</li>
              <li onClick={() => navigate("/buyacar")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("buyacar") ? "text-custom-blue" : " text-gray-1"}`}>Buy a Car</li>
              <li onClick={() => navigate("/mechanicpage")} className={`cursor-pointer  xl:text-lg font-normal font-Work-sans ${pathname.includes("mechanicpage") ? "text-custom-blue" : " text-gray-1"}`}>Mechanic</li>
              <li onClick={() => navigate("/dealerpage")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("dealerpage") ? "text-custom-blue" : " text-gray-1"}`}>Dealer</li>
              <li onClick={() => navigate("/insurance-landing-page")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("insurance-landing-page") ? "text-custom-blue" : " text-gray-1"}`}>Insurance</li>
              <li onClick={() => navigate("/finances")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("finances") ? "text-custom-blue" : " text-gray-1"}`}>Finances</li>
              <li onClick={() => navigate("/")} className={`cursor-pointer xl:text-lg font-normal font-Work-sans ${pathname.includes("contact") ? "text-custom-blue" : " text-gray-1"}`}>Contact us</li> */}
              
              </div>
        )}
      </nav >
    </>
  );
}

export default Navbar2;
