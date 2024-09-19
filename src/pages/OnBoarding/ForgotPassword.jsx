import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ForgotPasswordSchema, signInSchema } from "../../schemas/index";
import { InputLogin } from "../../components/InputLogin";
import Svgs from "../../assets/svgs/index.js";
import ForgotPasswordimage from "../../assets/images/forgotpassword.png";

const initialValues = {
  email: "",
  password: "",
};

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/create-new-password");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 h-screen">
        <div className="col-span-1 lg:col-span-6 bg-[#f9f9f9] relative pt-[100px] md:pt-0 px-4">
          <div>
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="z-10 absolute left-4 md:left-[54px] top-4 md:top-[67px] cursor-pointer w-[128px] h-[43px] text-base font-semibold font-inter text-gray-1 bg-white rounded-[12px] border flex items-center justify-center gap-4"
            >
              <Svgs.ArrowBack /> Go Back
            </button>
          </div>
          <div className="flex items-center justify-center h-screen -mt-20 md:mt-20 lg:mt-32 2xl:mt-0">
            <img src={ForgotPasswordimage} alt="Forgot Password" />
          </div>
        </div>

        <div className="col-span-1 lg:col-span-6 mx-auto w-full lg:w-[80%] xl:w-[70%] py-10 lg:py-[209px] px-4 lg:px-0">
          <div>
            <div className="text-center">
              <h1 className="text-[24px] lg:text-[28px] font-bold font-inter text-gray-1">
                Forgot password?
              </h1>
              <h1 className="text-lg font-normal font-inter text-gray-4 mt-4">
                Reset your password
              </h1>
            </div>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={ForgotPasswordSchema}
                validateOnChange={true} // Disable validation on change
                validateOnBlur={false} // Disable validation on blur
                onSubmit={handleSubmit}
              >
                {({
                  touched,
                  errors,
                  handleChange,
                  setFieldTouched,
                  values,
                }) => (
                  <Form>
                    <div className="flex flex-col mt-9">
                      {/* EMAIL FIELD */}
                      <div>
                        <InputLogin
                          as={Field}
                          name="email"
                          id="email"
                          type="email"
                          label="Email or mobile no"
                          placeholder="Type here"
                          className="w-full sm:w-[350px] bg-transparent"
                          value={values.email}
                          onChange={(e) => {
                            handleChange(e);
                            setFieldTouched("email", true, false); // Mark field as touched after typing
                          }}
                          error={touched.email && errors.email}
                        />
                        <ErrorMessage
                          name="email"
                          component="small"
                          className="text-custom-red font-poppins font-medium"
                        />
                      </div>

                      {/* PASSWORD FIELD */}
                      <div className="w-full mt-5">
                        <InputLogin
                          as={Field}
                          name="password"
                          id="password"
                          type="password"
                          label="Enter OTP"
                          placeholder="000000"
                          className="w-full sm:w-[350px]"
                          value={values.password}
                          onChange={(e) => {
                            handleChange(e);
                            setFieldTouched("password", true, false); // Mark field as touched after typing
                          }}
                          error={touched.password && errors.password}
                        />
                        <ErrorMessage
                          name="password"
                          component="small"
                          className="text-custom-red font-poppins font-medium"
                        />
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="w-full text-center flex items-center justify-center">
                      <button
                        type="submit"
                        className="w-full text-base rounded-lg px-2 py-3 my-9 font-inter font-medium self-center items-center bg-custom-blue text-white"
                      >
                        Reset password
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              {/* NEED HELP BUTTON */}
              <div className="flex items-center justify-center">
                <button className="text-base font-normal font-inter text-custom-blue">
                  Need help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
