import React from "react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import { InputLogin } from "../../components/InputLogin";
import CustomSelect from "../../components/CustomSelect";
import { companyvalidationSchema } from "../../schemas";
import { Formik, useFormik } from "formik";
import { insuranceForm1Schema } from "../../schemas/index";

const initialValues = {
  businessName: "",
  registrationYear: "",
  ownerName: "",
  employees: "",
  contactNumber: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  province: "",
};
function InsuranceFormCompany() {
  const navigate = useNavigate();

  const province = [
    { value: "Select", label: "Select" },
    { value: "Sindh", label: "Sindh" },
    { value: "Punjab", label: "Punjab" },
    { value: "Balochistan", label: "Balochistan" },
  ];

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: companyvalidationSchema,
      onSubmit: (values) => {
        navigate("/representative/upload-documents-company");
      },
    });

  return (
    <>
      <Layout active={"Dashboard"}>
        <div className=" my-5 ">
          <h1 className=" text-2xl font-semibold font-inter text-gray-1">
            Dashboard
          </h1>
        </div>
        <div className="flex flex-row items-center gap-x-2 my-5">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z"
              fill="black"
            />
          </svg>
          <div className="flex flex-row font-poppins font-normal  text-base">
            <p
              onClick={() => navigate(-1)}
              className="text-gray-1  text-xs md:text-lg font-medium font-poppins  hover:cursor-pointer hover:text-black"
            >
              Car verification/
            </p>
            <p className=" text-custom-blue text-xs md:text-lg font-semibold font-poppins">
              Mercedes-Benz E 220 D
            </p>
          </div>
        </div>
        <div className=" my-5">
          <div className=" w-full lg:w-[90%] px-3 border py-16 rounded-2xl bg-white shadow-css">
            <div className=" ">
              <div className=" flex items-center justify-center ">
                <h1 className="text-lg md:text-[28px] font-bold font-inter text-gray-1">
                  Enter Business details
                </h1>
              </div>
            </div>
            <div className="pt-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-5 lg:px-20">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                    <div className="w-full">
                      <InputLogin
                        error={errors.businessName && touched.businessName}
                        value={values.businessName}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="businessName"
                        id={"businessName"}
                        type={"text"}
                        label={"Business name"}
                        placeholder={"Enter business name"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.businessName && errors.businessName && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.businessName}
                        </small>
                      )}
                    </div>
                    <div className="w-full">
                      <InputLogin
                        error={
                          errors.registrationYear && touched.registrationYear
                        }
                        value={values.registrationYear}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="registrationYear"
                        id={"registrationYear"}
                        type={"text"}
                        label={"Business registration year "}
                        placeholder={"Enter registration year"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.registrationYear && errors.registrationYear && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.registrationYear}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <InputLogin
                        error={errors.ownerName && touched.ownerName}
                        value={values.ownerName}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="ownerName"
                        id={"ownerName"}
                        type={"text"}
                        label={"Business owner name"}
                        placeholder={"Enter owner’s name"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.ownerName && errors.ownerName && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.ownerName}
                        </small>
                      )}
                    </div>
                    <div className="w-full">
                      <InputLogin
                        error={errors.employees && touched.employees}
                        value={values.employees}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="employees"
                        id={"employees"}
                        type={"text"}
                        label={"Employees"}
                        placeholder={"Enter number of employees"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.employees && errors.employees && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.employees}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <InputLogin
                        error={errors.contactNumber && touched.contactNumber}
                        value={values.contactNumber}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="contactNumber"
                        id={"contactNumber"}
                        label={"Business contact number"}
                        placeholder={"Enter contact number"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.contactNumber && errors.contactNumber && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.contactNumber}
                        </small>
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
                        label={"Official email id"}
                        placeholder={"Enter official email"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.email && errors.email && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.email}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <InputLogin
                        error={errors.addressLine1 && touched.addressLine1}
                        value={values.addressLine1}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="addressLine1"
                        id={"addressLine1"}
                        label={"Business address line 1"}
                        placeholder={"Enter address line 1"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.addressLine1 && errors.addressLine1 && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.addressLine1}
                        </small>
                      )}
                    </div>
                    <div className="w-full lg:w-1/2">
                      <InputLogin
                        label={"Business address line 2"}
                        placeholder={"Enter address line 2 (optional)"}
                        className={"bg-[#fafafa]"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <InputLogin
                        error={errors.city && touched.city}
                        value={values.city}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="city"
                        id={"city"}
                        label={"City"}
                        placeholder={"Enter city"}
                        className={"bg-[#fafafa]"}
                      />
                      {touched.city && errors.city && (
                        <small className=" text-custom-red font-poppins font-medium">
                          {errors.city}
                        </small>
                      )}
                    </div>
                    <div className="w-full lg:w-1/2">
                      <CustomSelect
                        error={errors.province && touched.province}
                        value={values.province}
                        onChange={handleChange}
                        handleBlur={handleBlur}
                        name="province"
                        id={"province"}
                        label={"Province"}
                        options={province}
                      />
                       {touched.province && errors.province && (
                  <small className=" text-custom-red font-poppins font-medium">
                    {errors.province}
                  </small>
                )}
                    </div>
                  </div>
                </div>

                <div className="w-full text-center flex items-center justify-center">
                  <button
                    className={
                      "h-[52px] flex justify-center hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue hover:shadow-none shadow-2xl shadow-blue-300 text-lg rounded-xl px-[44px] py-[15.5px] font-Work-sans font-medium self-center items-center bg-custom-blue text-white"
                    }
                    title={""}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default InsuranceFormCompany;
