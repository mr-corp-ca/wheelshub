import carimg from "../../assets/images/caropendoor.png";
import React from "react";
import Navbar2 from "../../components/Navbar2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigate, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Svgs from "../../assets/svgs/index";
import { Formik, useFormik } from "formik";
import { SellCarToPublicSchema, signInSchema } from "../../schemas/index";
import { InputLogin } from "../../components/InputLogin";
import CustomSelect from "../../components/CustomSelect";
import { useState } from "react";

const initialValues = {
  carmake: "",
  model: "",
  manufacturing: "",
  kmsDriven: "",
  vid: "",
  trnasmission: "",
};

const carmake = [
  {value: 'volvo' , label: 'volvo'},
  {value: 'saab' , label: 'saab'},
  {value: 'mercedes' , label: 'mercedes'},
  {value: 'audi' , label: 'audi'},
]
const model = [
  {value: '2020' , label: '2020'},
  {value: '2021' , label: '2021'},
  {value: '2022' , label: '2022'},
  {value: '2023' , label: '2023'},
]
const manufacturing = [
  {value: '2016' , label: '2016'},
  {value: '2017' , label: '2017'},
  {value: '2018' , label: '2018'},
  {value: '2019' , label: '2019'},
]
const trnasmission = [
  {value: 'Manual' , label: 'Manual'},
  {value: 'Auto' , label: 'Auto'},
]



const Selcartopublic = () => {
  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SellCarToPublicSchema,
      onSubmit: (values) => {
        navigate("/sellyourcar/find-mechanic");
      },
    });


    const [imagePreviews, setImagePreviews] = useState(Array(11).fill(null));
 
   // Function to handle image change for a specific input field
   const handleImageChange = (e, index) => {
     const file = e.target.files[0];
     if (file) {
       const imageUrl = URL.createObjectURL(file);
       const updatedPreviews = [...imagePreviews];
       updatedPreviews[index] = imageUrl; // Update the specific image preview
       setImagePreviews(updatedPreviews); // Update the state
     }
   };

  return (
    <>
    <div className=" max-w-[1920px] mx-auto">
      <Navbar2 active={"Sell-A-Car"} />
      <div>
        {/* for first main div */}

        <div className=" py-20 md:py-44 bg-[#F3F3F3]  ">
          <div className="w-[100%] mx-auto flex  justify-center items-center ">
            <div className="">
              <div className=" flex flex-col  px-5 gap-[48px] lg:relative lg:bottom-[30px] lg:left-[90px] max-w-[1170px] ">
                <div className="">
                  <div className=" text-center md:text-start lg:text-[48px] font-inter  text-[25px] text-[#333333] lg:w-[750px] font-bold flex items-center justify-center">
                    <h6>Unlock Your Car's Value - Enter Your Details</h6>
                  </div>
                </div>
                <div className="flex flex-col md:items-start gap-[24px]">
                  <div className="flex items-center gap-[24px]">
                    <div>
                      <Svgs.GreenTickIcon />
                    </div>
                    <div className="lg:text-[18px] font-medium text-[#333333] font-Work-sans">
                      <h6>High value</h6>
                    </div>
                  </div>

                  <div className="flex items-center gap-[24px]">
                    <div>
                      <Svgs.GreenTickIcon />
                    </div>
                    <div className="lg:text-[18px] font-medium text-[#333333] font-Work-sans">
                      <h6>Your car, your price</h6>
                    </div>
                  </div>

                  <div className="flex items-center gap-[24px]">
                    <div>
                      <Svgs.GreenTickIcon />
                    </div>
                    <div className="lg:text-[18px] font-medium text-[#333333] font-Work-sans">
                      <h6>100% Trusted</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* for 2nd imgae div */}
            <div className="hidden lg:block ">
              <img
                className="lg:relative top-[30px] lg:right-[70px] w-full"
                src={carimg}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* for 2nd main div */}
        <div className=" mx-4 lg:mx-14">
          <div className=" px-4 md:px-[40px] lg:px-[80px] xl:px-[154px] border rounded-2xl bg-white max-w-[1170px] shadow-css mx-auto -mt-16 md:-mt-32 mb-16 md:mb-32 ">
            <div className="font-bold lg:text-[28px] font-inter text-[20px] flex justify-center py-[50px] px-5 lg:[px-0] text-gray-1">
              <h6>Enter car details</h6>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap sm:flex-nowrap justify-center gap-x-5 lg:gap-x-[62px] w-full ">
                {/* 1st */}
                <div className=" w-full">
                  <CustomSelect
                    error={errors.carmake && touched.carmake}
                    value={values.carmake}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="carmake"
                    id={"carmake"}
                    label={"Select car make"}
                    options={carmake}
                  />

                  {touched.carmake && errors.carmake && (
                    <small className="text-custom-red font-poppins font-medium">
                      {errors.carmake}
                    </small>
                  )}
                </div>
                {/* 2nd */}
                <div className=" w-full">
                  <CustomSelect
                    error={errors.model && touched.model}
                    value={values.model}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="model"
                    id={"model"}
                    label={"Model"}
                    options={model}
                  />
                  {touched.model && errors.model && (
                    <small className="text-custom-red font-poppins font-medium">
                      {errors.model}
                    </small>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap justify-center gap-x-5 lg:gap-x-[62px] w-full mt-5">
                <div className=" w-full">
                  <CustomSelect
                    error={errors.manufacturing && touched.manufacturing}
                    value={values.manufacturing}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="manufacturing"
                    id={"manufacturing"}
                    label={"Manufacturing year"}
                    options={manufacturing}
                  />
                  {touched.manufacturing && errors.manufacturing && (
                    <small className="text-custom-red font-poppins font-medium">
                      {errors.manufacturing}
                    </small>
                  )}
                </div>

                <div className=" w-full">
                  <InputLogin
                    error={errors.kmsDriven && touched.kmsDriven}
                    value={values.kmsDriven}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="kmsDriven"
                    id={"kmsDriven"}
                    label={"Kms Driven"}
                    placeholder={'Type here'}
                  />
                  {touched.kmsDriven && errors.kmsDriven && (
                    <small className="text-custom-red font-poppins font-medium">
                      {errors.kmsDriven}
                    </small>
                  )}
                </div>
              </div>
              <div className=" flex flex-wrap sm:flex-nowrap justify-center gap-x-5 lg:gap-x-[62px] w-full mt-5">
                <div className=" w-full">
                  <InputLogin
                    error={errors.vid && touched.vid}
                    value={values.vid}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="vid"
                    id={"vid"}
                    label={"VID(vehicle identification number)"}
                    placeholder={'Type here'}
                  />
                  {touched.vid && errors.vid && (
                    <small className="text-custom-red font-poppins font-medium">
                      {errors.vid}
                    </small>
                  )}
                </div>

                <div className=" w-full">
                  <CustomSelect
                    error={errors.trnasmission && touched.trnasmission}
                    value={values.trnasmission}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="trnasmission"
                    id={"trnasmission"}
                    label={"Transmission"}
                    options={trnasmission}
                  />
                  {touched.trnasmission && errors.trnasmission && (
                    <small className="text-custom-red font-poppins font-medium">
                      {errors.trnasmission}
                    </small>
                  )}
                </div>
              </div>

              <div className="   lg:flex flex-col mt-[36px] max-w-[864px] mx-auto">
                <label
                  htmlFor=""
                  className=" text-base font-medium font-inter text-gray-1"
                >
                  Notes
                </label>
                <textarea
                  name=""
                  id=""
                  className="border rounded-lg resize-none w-full h-[130px] outline-none p-4 bg-[#FAFAFA] mt-2"
                ></textarea>
              </div>

              {/* images div      */}
              <div className="  flex  mt-[36px] max-w-[864px] mx-auto">
                <div>
                  <h6 className=" font-medium text-[16px] text-[#333333] font-inter">
                    Upload vehicle images
                  </h6>
                  <div className=" flex flex-wrap gap-[15px] mt-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index}>
                      {/* Clickable field to open file selector */}
                      <div
                        className="w-16 h-16 border rounded-[8px] border-dashed border-gray-300 flex items-center justify-center cursor-pointer"
                        onClick={() =>
                          document.getElementById(`fileInput-${index}`).click()
                        }
                      >
                        {/* Display the image preview if available; otherwise, show the placeholder */}
                        {preview ? (
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-[8px]"
                          />
                        ) : (
                         <Svgs.GalleryIcon/>
                        )}
                      </div>

                      {/* Hidden input for file upload */}
                      <input
                        id={`fileInput-${index}`}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, index)}
                      />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
              {/* end */}

              {/* for button send request */}
              <div className=" flex justify-center  py-12">
                <button
                  type={"submit"}
                  onClick={() => {}}
                  className=" w-[129px] h-[52px] py-[15.5px] px-[44px]
                 
                  text-[white] shadow-2xl shadow-blue-300 text-[18px] font-medium font-Work-sans bg-[#6F9CFF] border rounded-lg  items-center flex justify-center"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Banner />
    </div>
    </>
  );
};

export default Selcartopublic;
