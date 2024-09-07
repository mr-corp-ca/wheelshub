// import React from "react";
// import car from "../../assets/images/carSignup.png";
// import { Input } from "../../components/Input";
// import googleIcon from "../../assets/images/google.png"
// import appleIcon from "../../assets/images/apple (1).png"
// import arrow from "../../assets/images/Arrow 1.png"
// function Signup() {
//   return (
//     <>
//       <div className=" grid grid-cols-12">
//         <div className=" col-span-6">
//           <div className=" relative">
//             <img src={car} className="" alt="" />
//             <span className=" text-base font-semibold font-inter text-white absolute flex items-center gap-3 top-10 left-10"><img src={arrow} alt="" />Go back</span>
//           </div>
//         </div>
//         <div className="col-span-6 mx-auto w-[60%] py-20">
//           <div>
//             <div className=" text-center">
//               <h1 className=" text-[28px] font-bold font-inter text-gray-1">
//                 Sing up to continue
//               </h1>
//             </div>

//             <div className="flex items-center gap-4 my-7 ">
//                 <div className=" flex items-center gap-2">
//               <input
//                 name="accounttype"
//                 className=" h-5 w-5"
//                 type="radio"
//               />{" "}
//               <span className="text-base font-medium font-inter text-gray-1">Individual</span>
//                 </div>
//                 <div className=" flex items-center gap-2">
//               <input
//                 name="accounttype"
//                 className="text-base font-medium font-inter text-gray-1 h-5 w-5"
//                 type="radio"
//               />{" "}
//              <span className="text-base font-medium font-inter text-gray-1">Dealer</span>
//                 </div>
//                 <div className=" flex items-center gap-2">
//               <input
//                 name="accounttype"
//                 className="text-base font-medium font-inter text-gray-1 h-5 w-5"
//                 type="radio"
//               />{" "}
//              <span className="text-base font-medium font-inter text-gray-1">Mechanic</span>
//                 </div>
//                 <div className=" flex items-center gap-2">
//               <input
//                 name="accounttype"
//                 className="text-base font-medium font-inter text-gray-1 h-5 w-5"
//                 type="radio"
//               />{" "}
//              <span className="text-base font-medium font-inter text-gray-1">Insurance</span>
//                 </div>
//                 <div className=" flex items-center gap-2">
//               <input
//                 name="accounttype"
//                 className="text-base font-medium font-inter text-gray-1 h-5 w-5"
//                 type="radio"
//               />{" "}
//               <span className="text-base font-medium font-inter text-gray-1">Finance</span>
//                 </div>
//             </div>
//             <div>
//               <div className="">
//                 <form className="space-y-8">
//                   <div className="">
//                     <div className="flex flex-col mt-5">
//                       <div className="w-full">
//                         <Input label={"Full name"}  placeholder={"Type here"} />
//                       </div>
//                       <div className="w-full mt-5">
//                         <Input label={"Email ID"} placeholder={"Type here"} />
//                       </div>
//                     </div>
//                     <div className="flex flex-col">
//                       <div className="w-full mt-5">
//                         <Input
//                           type={"password"}
//                           label={"Password"}
//                           placeholder={"Type here"}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-full text-center flex items-center justify-center">
//                     <button
//                       className={
//                         "w-full text-base rounded-xl px-2 py-3 font-inter font-medium self-center items-center bg-custom-blue text-white"
//                       }
//                       title={""}
//                     >
//                       Sign up
//                     </button>
//                   </div>

//                   <div className="mt-10 mb-5 text-center">
//                     <button className=" text-base font-normal font-inter text-gray-1">Sign up using</button>
//                   </div>
//                   <div className="flex items-center justify-center gap-4">
//                     <button className=" text-base font-semibold font-inter text-gray-1 border rounded-xl w-[128px] h-[44px] flex items-center justify-center gap-3"><span><img src={googleIcon} alt="" /></span> Google</button>
//                     <button className=" text-base font-semibold font-inter text-gray-1 border rounded-xl w-[128px] h-[44px] flex items-center justify-center gap-3"><span><img src={appleIcon} alt="" /></span> Apple id</button>
//                   </div>
//                   <div className=" flex items-center justify-center gap-5">
//                     <h1 className=" text-base font-normal font-inter text-gray-4">Already have an account?</h1> <span className=" text-base font-normal font-inter text-custom-blue">Log in now</span>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;


import React from "react";
import car from "../../assets/images/carSignup.png";
import { Input } from "../../components/Input";
import googleIcon from "../../assets/images/google.png"
import appleIcon from "../../assets/images/apple (1).png"
import arrow from "../../assets/images/Arrow 1.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signupimage from '../../assets/images/signupimage.png'
import Svgs from '../../assets/svgs/index.js'

function Signup() {
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6 bg-[#f9f9f9] relative pt-[100px] md:pt-0 px-4">
        <div>
            <button onClick={()=>{navigate(-1)}} className=" z-10 absolute left-4 md:left-[54px] top-4 md:top-[67px] cursor-pointer w-[128px] h-[43px] text-base font-semibold font-inter text-gray-1 bg-white rounded-[12px]  border flex items-center justify-center gap-4"><Svgs.ArrowBack/> Go Back</button>
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src={signupimage}
              className=""
              alt="Car"
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-6 mx-auto w-full lg:w-[60%] py-10 lg:py-20 px-4 lg:px-0">
          <div>
            <div className="text-center">
              <h1 className="text-[24px] lg:text-[28px] font-bold font-inter text-gray-1">
                Sign Up
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 my-7 ">
              {['Individual', 'Dealer', 'Mechanic', 'Insurance', 'Finance'].map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    name="accounttype"
                    className="h-5 w-5"
                    type="radio"
                  />{" "}
                  <span className="text-base font-medium font-inter text-gray-1">{type}</span>
                </div>
              ))}
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col mt-5">
                  <div className="w-full">
                    <Input label={"Full Name"} placeholder={"Enter your full name"} />
                  </div>
                  <div className="w-full mt-5">
                    <Input label={"Email ID"} placeholder={"Enter your email address"} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="w-full">
                    <Input
                      type={"password"}
                      label={"Password"}
                      placeholder={"Enter your password"}
                    />
                  </div>
                </div>
                <div className="w-full text-center flex items-center justify-center">
                  <button
                    onClick={() => {
                      toast.success("Signed up")
                      navigate("/login")
                    }}

                    className={
                      "w-full text-base rounded-xl px-2 py-3 my-5 font-inter font-medium self-center items-center bg-custom-blue text-white"
                    }
                    title={""}
                  >
                    Sign up
                  </button>
                </div>
                <div className="mt-10 mb-5 text-center">
                  <button className="text-base font-normal font-inter text-gray-1">Sign up using</button>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                  <button className="text-base font-semibold font-inter text-gray-1 border rounded-xl w-full lg:w-[128px] h-[44px] flex items-center justify-center gap-3">
                    <span>
                      <img src={googleIcon} alt="Google Icon" />
                    </span>
                    Google
                  </button>
                  <button className="text-base font-semibold font-inter text-gray-1 border rounded-xl w-full lg:w-[128px] h-[44px] flex items-center justify-center gap-3">
                    <span>
                      <img src={appleIcon} alt="Apple Icon" />
                    </span>
                    Apple ID
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                  <h1 className="text-base font-normal font-inter text-gray-4">Already have an account?</h1>
                  <span onClick={()=>{navigate('/login')}} className="text-base font-normal font-inter text-custom-blue cursor-pointer">Log in now</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
