import React from 'react';
import tickImage from "../../assets/images/ticksign.png";
import manInCarImage from "../../assets/images/manincar.png";
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useNavigateContext } from '../../Context/NavigateContext';
import { useEffect } from 'react';


function VerificationInProgress() {

  const navigate = useNavigate()

  const { setIsRedirect, isRedirect } = useNavigateContext()


  useEffect(() => {
    if (isRedirect) {
      const timerId = setTimeout(() => {
        navigate('/mechanic/mechanic-dashboard')
        setIsRedirect(false)
      }, 3000);

      return () => clearTimeout(timerId)
    }
  }, [isRedirect, navigate, setIsRedirect])


  return (
    <>
      <Layout active={'Dashboard'}>
        <div className='w-full flex items-center justify-center px-4 my-5'>
          <div className='verificationProcess rounded-xl border p-6 sm:p-10 w-full max-w-4xl'>
            <div className='flex items-center justify-center flex-col gap-5'>
              <div>
                <img src={tickImage} alt="" className='max-w-full h-auto' />
              </div>
              <div>
                <h1 className='text-2xl sm:text-[36px] font-semibold font-inter text-gray-1 text-center'>
                  Verification in progress.
                </h1>
              </div>
              <div className='w-full sm:w-[90%]'>
                <ul className='list-decimal pl-5 sm:pl-10'>
                  <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                    Our team will review your submitted Finance license and business details.<br />
                    This process may take up to 48 hours.
                  </li>
                  <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                    A WheelDealHub company representative will visit your business address to verify your Business.
                    This step ensures the authenticity and reliability of our Finance network.
                  </li>
                  <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                    Once verified, you will receive an approval notification via email, allowing you<br />
                    to access all Finance functionalities.
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex items-center justify-center py-3'>
              <button className='text-sm rounded-xl border text-gray-1 font-inter font-semibold w-[123px] h-[48px] px-[24px] py-[12px] border-gray-1 flex items-center justify-center'>
                Need help
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default VerificationInProgress;
