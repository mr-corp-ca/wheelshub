import React, { useState } from "react";
import car from "../../assets/images/carSignup.png";
import googleIcon from "../../assets/images/google.png";
import appleIcon from "../../assets/images/apple (1).png";
import arrow from "../../assets/images/Arrow 1.png";
import checkboxICon from "../../assets/images/Checbox container.png";
// import carlogin from "../../assets/images/carlogin.png";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginContext } from "../../Context/LoginContext";
import { useRoleContext } from "../../Context/RoleContext";
import { Formik, useFormik } from "formik";
import { signInSchema } from "../../schemas/index";
import { useUserContext } from "../../Context/UserProvider";
import { InputLogin } from "../../components/InputLogin";
import loginimage from '../../assets/images/loginimage.png'
import Svgs from '../../assets/svgs/index.js'


const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  const { setRole } = useRoleContext();
  const { setUser, user } = useUserContext();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (values) => {
        // navigate('/dashboard');
        if (loginType === "FINANCE") {
          setUser({ isLoggedIn: true, role: "FINANCE" });
          setTimeout(() => {
            navigate("/finance/verification");
          }, 1000);
        } else if (loginType === "INSURANCE") {
          setUser({ isLoggedIn: true, role: "INSURANCE" });
          setTimeout(() => {
            navigate("/insurance/verification");
            
          }, 1000);
        } else if (loginType === "MECHANIC") {
          setUser({ isLoggedIn: true, role: "MECHANIC" });
          setTimeout(() => {
            navigate('/mechanic/verification')
            
          }, 1000);
        } else if (loginType === "COMPANY REPRESENTATIVE") {
          setUser({ isLoggedIn: true, role: "REPRESENTATIVE" });
          setTimeout(() => {
            navigate('/representative/verification')
            
          }, 1000);
        } else if (loginType === "DEALER") {
          setUser({ isLoggedIn: true, role: "DEALER" });
          setTimeout(() => {
            navigate('/dealer/verification')
            
          }, 1000);
        } else if (loginType === "INDIVIDUAL") {
          setUser({ isLoggedIn: true, role: "INDIVIDUAL" });
          setTimeout(() => {
            navigate('/customer/customer-dashboard')
            
          }, 1000);
        } else {
          toast.error('Enter login type')
        }
      },
    });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6 bg-[#f9f9f9] relative pt-[100px] md:pt-0 px-4">
          <div>
            <button onClick={()=>{navigate(-1)}} className=" z-10 absolute left-4 md:left-[54px] top-4 md:top-[67px] cursor-pointer w-[128px] h-[43px] text-base font-semibold font-inter text-gray-1 bg-white rounded-[12px]  border flex items-center justify-center gap-4"><Svgs.ArrowBack/> Go Back</button>
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src={loginimage}
              className=""
              alt="Car"
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-6 mx-auto w-full lg:w-[60%] py-10 lg:py-[116px] px-4 lg:px-0">
          <div>
            <div className="text-center">
              <h1 className="text-[24px] lg:text-[28px] font-bold font-inter text-gray-1">
                Log In
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 my-7 ">
              {[
                "Individual",
                "Dealer",
                "Mechanic",
                "Insurance",
                "Company Representative",
                "Finance",
              ].map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    value={type}
                    checked={loginType === type.toUpperCase()}
                    onChange={(e) => {
                      setLoginType(e.target.value.toUpperCase());
                    }}
                    name="accounttype"
                    className="h-5 w-5"
                    type="radio"
                  />{" "}
                  {}
                  <span className="text-base font-medium font-inter text-gray-1">
                    {type}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col mt-5">
                  <div className="">
                    {/* EMAILLLLLLLLLLLLLLLLL */}
                    <InputLogin
                      error={errors.email && touched.email}
                      value={values.email}
                      onChange={handleChange}
                      handleBlur={handleBlur}
                      name="email"
                      id={"email"}
                      type={"email"}
                      label={"Email or Mobile Number"}
                      placeholder={"Input your Email here"}
                      className={"w-full sm:w-[350px] bg-transparent"}
                    />
                    {touched.email && errors.email && (
                      <small className=" text-custom-red">{errors.email}</small>
                    )}
                  </div>
                  <div className="w-full mt-5">
                    <div>
                      {/* PASSWORDDDDDDDDDDDDDDDDDDDDD */}
                      <InputLogin
                        error={errors.password && touched.password}
                        value={values.password}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="password"
                        id={"password"}
                        type={"password"}
                        label={"Password"}
                        placeholder={"Enter your password"}
                        className={" w-full sm:w-[350px]"}
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          {touched.password && errors.password && (
                            <small className=" text-custom-red">
                              {errors.password}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>{" "}
                    <div className=" flex items-center justify-between my-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className=" text-base font-normal font-inter text-gray-1">
                          Remember Me
                        </span>
                      </div>
                      <div>
                        <h1 className=" text-base font-normal font-inter text-gray-2">
                          Forgot password?
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-center flex items-center justify-center">
                  <button
                  type={'submit'}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   if (loginType === "") {
                    //     toast.error("Please select a login type ");
                    //   } else {
                    //     setIsLoggedIn(true);
                    //     setRole(loginType);
                    //     navigate("/dashboard");
                    //   }
                    // }}
                    className={
                      "w-full text-base rounded-xl px-2 py-3 my-5 font-inter font-medium self-center items-center bg-custom-blue text-white"
                    }
                    title={""}
                  >
                    Login
                  </button>
                </div>
               
               
              </form>
              <div className=" mb-5 text-center">
                  <button className="text-base font-normal font-inter text-gray-1">
                    Login using
                  </button>
                </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 pt-4 pb-9">
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
                  <h1 className="text-base font-normal font-inter text-gray-4">
                    Do not have an account?
                  </h1>
                  <span
                    onClick={() => navigate("/signup")}
                    className=" cursor-pointer text-base font-normal font-inter text-custom-blue"
                  >
                    Sign up now
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
