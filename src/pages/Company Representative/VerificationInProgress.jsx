import React from 'react';
import tickImage from "../../assets/images/ticksign.png";
import manInCarImage from "../../assets/images/manincar.png";
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useNavigateContext } from '../../Context/NavigateContext';
import { useEffect } from 'react';
import Svgs from '../../assets/svgs/index'

function VerificationInProgress() {

  const navigate = useNavigate()

  const { setIsRedirect, isRedirect} = useNavigateContext()


 useEffect(()=>{
  if(isRedirect){
    const timerId = setTimeout(() => {
      navigate('/mechanic/mechanic-dashboard')
      setIsRedirect(false)
    }, 3000);

    return ()=> clearTimeout(timerId)
  }
}, [isRedirect, navigate, setIsRedirect])


  return (
    <>
    <Layout active={'Dashboard'}>
      <div className='w-full flex items-center justify-center px-4 my-5'>
        <div className='verificationProcess rounded-xl border p-6 sm:p-10 w-full max-w-4xl'>
          <div className='flex items-center justify-center flex-col gap-8'>
            <div>
              <Svgs.YellowTickBigIcon/>
            </div>
            <div>
              <h1 className='text-2xl sm:text-[36px] font-semibold font-inter text-gray-1 text-center'>
                Verification in progress.
              </h1>
            </div>
            <div className='w-full sm:w-[90%]'>
              <ul className='list-decimal pl-5 sm:pl-10'>
                <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                Your verification request has been submitted. Our team will review your details
                and documents. This process may ta  ke up to 48 hours.
                </li>
                <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                You will receive an email notification once the verification is complete.
                </li>
               
              </ul>
            </div>
          </div>
          <div className='flex items-center justify-center pt-8'>
            <button onClick={()=>{ setTimeout(()=>{navigate('/representative/representative-dashboard')},3000)}} className='text-sm rounded-xl border text-gray-1 font-inter font-semibold w-[123px] h-[48px] px-[20px] py-[12px] border-gray-1 flex items-center justify-center'>
              Need help?
            </button>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default VerificationInProgress;
