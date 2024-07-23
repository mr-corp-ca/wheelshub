// import React from 'react'
// import idImage from '../../assets/images/id 1.png'
// import { Button } from '../../components/Button'
// function Verification() {
//   return (
//     <>
//     <div className='w-full h-[100vh] flex items-center justify-center'>
//     <div className='verification border rounded-xl px-20 py-4 w-fit flex items-center justify-center flex-col gap-10'>
//         <div>
//             <img src={idImage} alt="" />
//         </div>
//         <div>
//             <h6 className='text-2xl font-semibold font-inter'>
//             You are not verified yet, verify now get started.
//             </h6>
//         </div>
//         <div>
//             <Button title={"Verify now"} className={"font-Work-sans text-lg font-medium "}/>
//         </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Verification


import React from 'react'
import idImage from '../../assets/images/id 1.png'
import { Button } from '../../components/Button'

function Verification() {
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center px-4'>
        <div className='verification border rounded-xl px-10 py-4 w-full max-w-2xl flex items-center justify-center flex-col gap-6'>
          <div className='w-full flex justify-center'>
            <img src={idImage} alt="" className='max-w-full h-auto' />
          </div>
          <div className='text-center'>
            <h6 className='text-xl sm:text-2xl font-semibold font-inter'>
              You are not verified yet, verify now to get started.
            </h6>
          </div>
          <div>
            <Button title={"Verify now"} className={"font-Work-sans text-base sm:text-lg font-medium"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Verification
