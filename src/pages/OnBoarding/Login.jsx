
import React, { useState } from "react";
import car from "../../assets/images/carSignup.png";
import { Input } from "../../components/Input";
import googleIcon from "../../assets/images/google.png"
import appleIcon from "../../assets/images/apple (1).png"
import arrow from "../../assets/images/Arrow 1.png"
import checkboxICon from "../../assets/images/Checbox container.png"
import carlogin from "../../assets/images/carlogin.png"
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginContext } from "../../Context/LoginContext";
import { useRoleContext } from "../../Context/RoleContext";

function Login() {
  const navigate = useNavigate()
  const [loginType, setLoginType] = useState("")
  const { isLoggedIn, setIsLoggedIn } = useLoginContext()
  const { setRole } = useRoleContext()

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6">
          <div className="relative">
            <img src={carlogin} className="w-full h-full object-cover" alt="Car" />
            <span
              onClick={() => navigate(-1)}
              className=" cursor-pointer text-base font-semibold font-inter text-white absolute flex items-center gap-3 top-10 left-10">
              <img src={arrow} alt="Arrow" /> Go back
            </span>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-6 mx-auto w-full lg:w-[60%] py-10 lg:py-20 px-4 lg:px-0">
          <div>
            <div className="text-center">
              <h1 className="text-[24px] lg:text-[28px] font-bold font-inter text-gray-1">
                Log in to continue
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 my-7 ">
              {['Individual', 'Dealer', 'Mechanic', 'Insurance', 'Company Representative', 'Finance'].map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    value={type}
                    checked={loginType === type}
                    onChange={(e) => {
                      setLoginType(e.target.value)
                    }}
                    name="accounttype"
                    className="h-5 w-5"
                    type="radio"
                  />{" "}
                  <span className="text-base font-medium font-inter text-gray-1">{type}</span>
                </div>
              ))}
            </div>
            <div>
              <form className="space-y-5">
                <div className="flex flex-col mt-5">
                  <div className="w-full">
                    <Input label={"Email or mobile no"} placeholder={"Type here"} />
                  </div>
                  <div className="w-full mt-5">
                    <Input label={"Password"} type={"password"} placeholder={"input your password in here"} />
                    <div className=" flex items-center justify-between my-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        {/* <img src={checkboxICon} alt="" /> */}
                        <input type="checkbox" className="w-4 h-4" />
                        <span className=" text-base font-normal font-inter text-gray-1">Remember Me</span>
                      </div>
                      <div>
                        <h1 className=" text-base font-normal font-inter text-gray-2">
                          Forgot passwod?
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-center flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      if (loginType === "") {
                        toast.error("Please select a login type ")
                      }
                      else {
                        setIsLoggedIn(true)
                        setRole(loginType)
                        navigate("/dashboard")
                      }
                    }}
                    className={
                      "w-full text-base rounded-xl px-2 py-3 my-5 font-inter font-medium self-center items-center bg-custom-blue text-white"
                    }
                    title={""}
                  >
                    Login
                  </button>
                </div>
                <div className="mt-10 mb-5 text-center">
                  <button className="text-base font-normal font-inter text-gray-1">Login using</button>
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
                    Apple id
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                  <h1 className="text-base font-normal font-inter text-gray-4">Do not have an account?</h1>
                  <span
                    onClick={() => navigate("/signup")}
                    className=" cursor-pointer text-base font-normal font-inter text-custom-blue">Sign up now</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
