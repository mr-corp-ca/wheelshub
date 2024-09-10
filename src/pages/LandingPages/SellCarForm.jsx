import React, { useState } from "react";
import mansmiling from "../../assets/images/mansmiling.png";
import greentick from "../../assets/images/tickofgreen.png";
import { Input } from "../../components/Input";
import Navbar2 from "../../components/Navbar2";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index.js";
import { Formik, useFormik } from "formik";
import { sellCarForm } from "../../schemas/index.jsx";
import { InputLogin } from "../../components/InputLogin.jsx";

const initialValues = {
  name: "",
  email: "",
  number: '',
  city: "",
  street_address: "",
};

function SellCarForm() {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("+1 ");

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: sellCarForm,
      onSubmit: (values) => {
        navigate("/sellyourcar/find-mechanic")
        window.scrollTo({
          top: 0,
        });
      },
    });

  return (
    <>
      <Navbar2 />
      <div className="firstpart bg-[#f3f3f3] h-fit py-32 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  w-full md:w-[80%] mx-auto ">
          <div className="md:col-span-6 mx-5 lg:mx-0">
            <h1 className="text-[30px] lg:text-[48px] font-bold font-inter text-gray-800 ">
              Enter Your Personal Information
            </h1>
            <div className="flex flex-col gap-4 my-10">
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Better communication
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  Timely updates
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <Svgs.GreenTickIcon />
                <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-800">
                  100% Trusted
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-6 lg:flex items-center justify-center -mr-10">
            <img src={mansmiling} alt="Man smiling" />
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center mx-5 lg:mx-0">
        <div className="details border bg-white rounded-[16px] w-full md:w-[80%] mx-auto py-10 px-5 lg:px-32 -mt-32 mb-20">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl md:text-3xl font-inter font-bold text-gray-800">
              Enter personal details
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                <div className="w-full">
                  <InputLogin
                  error={errors.name && touched.name}
                  value={values.name}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                  name="name"
                  id={"name"}
                  label="Full name" placeholder="Type here" />
                   {touched.name && errors.name && (
                      <small className=" text-custom-red">{errors.name}</small>
                    )}
                </div>
                <div className="w-full">
                  <InputLogin
                    error={errors.email && touched.email}
                    value={values.email}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    name="email"
                    id={"email"}
                    type={"email"}
                  label="Email" placeholder="Type here" />
                   {touched.email && errors.email && (
                      <small className=" text-custom-red">{errors.email}</small>
                    )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-5">
                <div className="w-full">
                  <InputLogin
                  error={errors.number && touched.email}
                    type="tel"
                    value={values.number}
                    onChange={handleChange}
                    name='number'
                    id='number'
                    label="Phone number"
                    placeholder=" 000 000 0000"
                  />
                   {touched.number && errors.number && (
                      <small className=" text-custom-red">{errors.number}</small>
                    )}
                </div>
                <div className="w-full">
                  <InputLogin
                   error={errors.city && touched.city}
                   type="tel"
                   value={values.city}
                   onChange={handleChange}
                   name='city'
                   id='city'
                  label="City" placeholder="Type here" />
                   {touched.city && errors.city && (
                      <small className=" text-custom-red">{errors.city}</small>
                    )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className=" w-full md:w-1/2">
                  <InputLogin
                    error={errors.street_address && touched.street_address}
                    type="tel"
                    value={values.street_address}
                    onChange={handleChange}
                    name='street_address'
                    id='street_address'
                  label="Street address" placeholder="Type here" />
                   {touched.street_address && errors.street_address && (
                      <small className=" text-custom-red">{errors.street_address}</small>
                    )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-10 pb-5">
              <button
                type={'submit'}
                className="h-11 w-32 rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <Banner />
    </>
  );
}

export default SellCarForm;
