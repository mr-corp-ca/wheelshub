import React from 'react'
import greentick from '../../assets/images/green(2).png'
import modeldesgin from '../../assets/images/manwithfinger.png'
import roundbox from '../../assets/images/roundedGreentick.png'
import yellowtick from '../../assets/images/Shape (4).png'
import bluecircle from '../../assets/images/Shape (3).png'
import teamwork from '../../assets/images/teamwork 1.png'
import wheeldeallogo from '../../assets/images/3 3 (4).png'




const Sellcar = () => {
  return (
    <div className=''>
        {/* first main div inside of  2 */}
        <div className='h-fit py-44  bg-[#F3F3F3]   flex justify-center'>
            <div className=' items-center  grid lg:grid-cols-12'>
                <div className='w-full px-[24px] lg:px-0   flex flex-col  lg:gap-[48px] gap-[25px] lg:col-span-8 bottom-[20px] relative lg:left-[30px] xl:left-[120px] '>
                <div className='lg:text-[48px] text-[25px] text-[#333333] lg:w-[821px] font-bold w-full'><h6>Sell Car instantly on Wheeldeal hub from Home</h6></div>
                    <div className='flex flex-col gap-[24px] '>
                    <div className='flex gap-[24px]'>
                        <div><img src={greentick} alt="" /></div>
                        <div><h6 className='lg:text-[18px] font-medium'>Higher profits</h6></div>
                    </div>

                    <div className='flex gap-[24px]'>
                        <div><img src={greentick} alt="" /></div>
                        <div><h6 className='lg:text-[18px] font-medium'>Higher profits</h6></div>
                    </div>

                    <div className='flex gap-[24px]'>
                        <div><img src={greentick} alt="" /></div>
                        <div><h6 className='lg:text-[18px] font-medium'>Higher profits</h6></div>
                    </div>
                    </div>

                </div>

                {/* 2nd div from images */}
                <div className='hidden lg:block col-span-4   relative xl:right-[50px] lg:right-[20px]'>
                      <img src={modeldesgin} alt="" />
                </div>
            </div>

        </div>


        {/* 2nd border main div */}
        <div className=' '>
            <div  className='border rounded-2xl bg-white 2xl:w-[70%] xl:w-[90%]  lg:w-[95%]   md:w-[80%] w-[90%]  mx-auto  relative lg:bottom-[80px]  2xl:bottom-[180px] xl:bottom-[150px] bottom-[70px]'>
                <div className='font-bold lg:text-[28px] text-[20px] flex justify-center py-[50px] px-5 lg:px-0]'><h6>Where do you want to sell your car?</h6></div>
                <div className='flex  flex-wrap justify-center gap-[64px]'>
                  <div className='border rounded-2xl py-[18px] px-[36px] bg-[#FFFFFF] '>
                    <div className='flex gap-[20px] items-center'>
                      <div> <img src={roundbox} alt="" /></div>
                      <div><h6 className='font-medium text-[18px] '>WheelDealHub</h6></div>
                    </div>
                    <div className='py-[16px]'><img src={wheeldeallogo} alt="" /></div>
                    <div className='flex gap-[16px]'>
                            <div><img src={greentick} alt="" /></div>
                            <div className='lg:text-[16px] font-medium text-[#333333]'>High Returns<h6></h6></div>
                        </div>
                        <div className='flex gap-[16px] py-[8px]'>
                            <div><img src={greentick} alt="" /></div>
                            <div className='lg:text-[16px] font-medium text-[#333333]'><h6>Fast process</h6></div>
                        </div>
                        
                   
              
                  </div>
                  {/* for sec border */}
                  <div className='border rounded-2xl py-[18px] px-[36px] bg-[#FFFFFF] '>
                  <div className='flex gap-[20px] items-center'>
                      <div> <img src={bluecircle} alt="" /></div>
                      <div><h6 className='font-medium text-[18px] '>Public Sale</h6></div>
                    </div>
                    
                    <div className='py-[16px]'><img src={teamwork} alt="" /></div>
                    
                    <div className='flex gap-[16px]'>
                            <div><img src={yellowtick} alt="" /></div>
                            <div className='lg:text-[16px] font-medium text-[#333333]'>Low returns<h6></h6></div>
                        </div>
                        <div className='flex gap-[16px] py-[8px]'>
                            <div><img src={yellowtick} alt="" /></div>
                            <div className='lg:text-[16px] font-medium text-[#333333]'><h6>Slow process</h6></div>
                        </div>

                  </div>
                </div>
               
                {/* for button send request */}
                <div className=' flex justify-center lg:py-[] py-12'><button className=' w-[129px] h-[52px] 
                 
                  text-[white] text-[18px] font-medium bg-[#6F9CFF] border rounded-lg  items-center'>Next</button></div>
            </div>
            
            </div>
      
    </div>
  )
}

export default Sellcar
