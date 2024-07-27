import React from 'react'
import manincar from '../../assets/images/manincar.png'
import greentick from "../../assets/images/greenTick.png"
import corolacar from "../../assets/images/corolacar.png"
function Info() {
  return (
    <div>
      {/* for first main div */}
            
      <div className='lg:h-[85vh] 2xl:h-[85vh] h-[50vh] bg-[#F3F3F3] flex  ' >
                <div className='w-[100%] mx-auto flex  justify-center items-center '>
                    <div className=''>
                        <div className=' px-[24px] lg:p-0  flex flex-col gap-[48px] lg:relative lg:bottom-[30px] lg:left-[120px] lg:w-[708px] '>
                        <div>
                        <div className='lg:text-[48px] text-[25px] text-[#333333] lg:w-[699px] font-bold'><h6>Send request to the dealer for
                        Your Car Handover</h6></div>
                        </div>
                        <div className='flex flex-col gap-[24px]'>
                        <div className='flex gap-[24px]'>
                            <div><img src={greentick} alt="" /></div>
                            <div className='lg:text-[18px] font-medium text-[#333333]'><h6>Better communication</h6></div>
                        </div>
                        
                        <div className='flex gap-[24px]'>
                            <div><img src={greentick} alt="" /></div>
                            <div className='lg:text-[18px] font-medium text-[#333333]'><h6>Timely updates</h6></div>
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
                    <img className='lg:relative top-[30px] lg:right-[70px] w-full' src={corolacar} alt="" />
                    </div>
                </div>
            </div>
            {/* for 2nd main div */}
            <div className=' '>
            <div className='border rounded-2xl bg-white   md:w-[80%] w-[90%] xl:w-[80%] 2xl:w-[58%] mx-auto  relative xl:bottom-[70px]  2xl:bottom-[100px]  lg:bottom-[80px]  sm:bottom-[60px] lg:h-[414px]'>
                <div className='font-bold lg:text-[28px] text-[20px] flex justify-center py-[50px] px-5 lg:px-0]'><h6>Send handover request</h6></div>
                <div className=  ' px-4 flex  flex-wrap justify-center gap-[50px] 2xl:gap-[94px] '>
              
                    <div className='flex flex-wrap gap-[20px] items-center justify-center'>
                      <div className=''> <img src={manincar} alt="" /></div>
                      <div className='flex flex-col gap-[12px] text-center sm:text-start'>
                      <div><h6 className='font-semibold lg:text-[24px] text-[18px] text-[#333333]'>SE Car dealers</h6></div>
                      <div><h6 className='font-medium lg:text-[18px] text-[#6F9CFF]'>7711 128 St, Surrey, BC V3W 4E6, Canada</h6></div>
                      </div>
                    </div>
                   
                  
                {/* for sec border */}
             
               
                <div className='py-[20px] '><button className='font-medium text-[18px] border rounded-lg py-[15.5px] px-[23px] bg-[#FFFFFF] '>Change dealer</button></div>

                </div>
               
                {/* for button send request */}
                <div className=' flex justify-center lg:py-[] py-12'><button className=' w-[206px] h-[52px] 
                 
                  text-[white] text-[18px] font-medium bg-[#6F9CFF] border rounded-lg  items-center'>Send request</button></div>
            </div>
            
            </div>
    </div>
  )
}

export default Info
