import React from "react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import CustomSelect from "../../components/CustomSelect";
import { mechanicCarDetailsSchema } from "../../schemas";
import { Formik, useFormik } from "formik";
import { insuranceForm1Schema } from "../../schemas/index";
import { InputLogin } from "../../components/InputLogin";

const initialValues = {
  registrationYear: "",
  fuelType: "",
  insurance: "",
  rto: "",
  seats: '',
  engineDisplacement: "",
  ownership: "",
  transmission: "",
  kmsDriven: "",
  yearOfManufacturing: "",
};
function MechanicVerifyNow() {
  const navigate = useNavigate();

  const registrationYear = [
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
  ];

  const insurance = [
    { value: "Comprehensive", label: "Comprehensive" },
    { value: "Third-Party", label: "Third-Party" },
  ];
  const transmission = [
    { value: "Manual", label: "Manual" },
    { value: "Auto", label: "Auto" },
  ];

  const fuelType = [
    { value: "Diesel", label: "Diesel" },
    { value: "Petrol", label: "Petrol" },
  ];

  const seats = [
    {
      value: 2,
      label: 2,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
  ];
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: mechanicCarDetailsSchema,
      onSubmit: (values) => {
        navigate("/mechanic/mechanic-verify-now2");
      },
    });
  return (
    <>
      <Layout active={"Dashboard"}>
        <div className=" my-5">
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
          <div className="flex flex-row font-poppins text-xs lg:text-lg">
            <p
              onClick={() => navigate(-1)}
              className="text-gray-1  hover:cursor-pointer hover:text-black font-medium "
            >
              Car verification/
            </p>
            <p className=" text-custom-blue font-semibold">
              Mercedes-Benz E 220 D
            </p>
          </div>
        </div>
        <div className=" my-5">
          <div className=" w-full lg:w-[90%] border shadow-css py-[64px] rounded-xl px-3 lg:px-0">
            <div className=" ">
              <div className=" flex items-center justify-center flex-col gap-6">
                <h1 className="text-[28px] font-bold font-inter text-gray-1">
                  Enter car details
                </h1>
              </div>
            </div>
            <div className="pt-3 w-full lg:w-[80%] mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-5">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                    <div className="w-full">
                      <CustomSelect
                        error={
                          touched.registrationYear && errors.registrationYear
                        }
                        id={"registrationYear"}
                        name={"registrationYear"}
                        label={"Registration year"}
                        onChange={handleChange}
                        value={values.registrationYear}
                        options={registrationYear}
                      />
                      {touched.registrationYear && errors.registrationYear ? (
                        <div className="text-red-500 text-sm">
                          {errors.registrationYear}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <CustomSelect
                        error={
                          touched.registrationYear && errors.registrationYear
                        }
                        id={"insurance"}
                        name={"insurance"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.insurance}
                        label={"Insurance"}
                        options={insurance}
                      />
                      {touched.insurance && errors.insurance ? (
                        <div className="text-red-500 text-sm">
                          {errors.insurance}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <CustomSelect
                        error={touched.fuelType && errors.fuelType}
                        id={"fuelType"}
                        name="fuelType"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={"Fuel type"}
                        options={fuelType}
                        value={values.fuelType}
                      />
                      {touched.fuelType && errors.fuelType ? (
                        <div className="text-red-500 text-sm">
                          {errors.fuelType}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <InputLogin
                        error={touched.rto && errors.rto}
                        id="rto"
                        name="rto"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rto}
                        placeholder="Type here"
                        label={" RTO"}
                      />
                      {touched.rto && errors.rto ? (
                        <div className="text-red-500 text-sm">{errors.rto}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <InputLogin
                        error={touched.kmsDriven && errors.kmsDriven}
                        id="kmsDriven"
                        name="kmsDriven"
                        type="number"
                        label={"KMs driven"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.kmsDriven}
                        placeholder="Type here"
                      />
                      {touched.kmsDriven && errors.kmsDriven ? (
                        <div className="text-red-500 text-sm">
                          {errors.kmsDriven}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <CustomSelect
                        error={touched.seats && errors.seats}
                        value={values.seats}
                        id="seats"
                        name="seats"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        options={seats}
                        label={"Seats"}
                      />
                      {touched.seats && errors.seats ? (
                        <div className="text-red-500 text-sm">
                          {errors.seats}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <InputLogin
                        error={touched.ownership && errors.ownership}
                        value={values.ownership}
                        id="ownership"
                        name="ownership"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Type here"
                        label={"Owner ship"}
                      />
                      {touched.ownership && errors.ownership ? (
                        <div className="text-red-500 text-sm">
                          {errors.ownership}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <InputLogin
                        error={
                          touched.engineDisplacement &&
                          errors.engineDisplacement
                        }
                        value={values.engineDisplacement}
                        id="engineDisplacement"
                        name="engineDisplacement"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Type here"
                        label={"Engine Displacement"}
                      />
                      {touched.engineDisplacement &&
                      errors.engineDisplacement ? (
                        <div className="text-red-500 text-sm">
                          {errors.engineDisplacement}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <CustomSelect
                        error={touched.transmission && errors.transmission}
                        value={values.transmission}
                        id="transmission"
                        name="transmission"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Type here"
                        label={"Transmission"}
                        options={transmission}
                      />
                      {touched.transmission && errors.transmission ? (
                        <div className="text-red-500 text-sm">
                          {errors.transmission}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <InputLogin
                        error={
                          touched.yearOfManufacturing &&
                          errors.yearOfManufacturing
                        }
                        value={values.yearOfManufacturing}
                        id="yearOfManufacturing"
                        name="yearOfManufacturing"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Type here"
                        label={"Year of manufacturing"}
                        type="text"
                      />
                      {touched.yearOfManufacturing &&
                      errors.yearOfManufacturing ? (
                        <div className="text-red-500 text-sm">
                          {errors.yearOfManufacturing}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="  w-full text-center flex items-center justify-center">
                  <button
                    type={"submit"}
                    className={
                      "w-[129px] hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue hover:shadow-none shadow-2xl shadow-blue-300 text-sm rounded-xl px-2 py-3 font-inter font-semibold self-center items-center bg-custom-blue text-white"
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

export default MechanicVerifyNow;

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// Validation Schema

// function CarDetailsForm() {

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-center text-2xl font-semibold mb-6">Enter Car Details</h1>
//       <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
//         {/* Registration Year */}
//         <div className="form-group">
//           <label htmlFor="registrationYear">Registration year</label>
//           <select
//             id="registrationYear"
//             name="registrationYear"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.registrationYear}
//             className="w-full border p-2 mt-1"
//           >
//             <option value="">Select</option>
//             {/* Add your options for year */}
//             <option value="2021">2021</option>
//             <option value="2020">2020</option>
//           </select>
//           {formik.touched.registrationYear && formik.errors.registrationYear ? (
//             <div className="text-red-500 text-sm">{formik.errors.registrationYear}</div>
//           ) : null}
//         </div>

//         {/* Insurance */}
//         <div className="form-group">
//           <label htmlFor="insurance">Insurance</label>
//           <select
//             id="insurance"
//             name="insurance"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.insurance}
//             className="w-full border p-2 mt-1"
//           >
//             <option value="">Select</option>
//             <option value="Comprehensive">Comprehensive</option>
//             <option value="Third-Party">Third-Party</option>
//           </select>
//           {formik.touched.insurance && formik.errors.insurance ? (
//             <div className="text-red-500 text-sm">{formik.errors.insurance}</div>
//           ) : null}
//         </div>

//         {/* Fuel Type */}
//         <div className="form-group">
//           <label htmlFor="fuelType">Fuel type</label>
//           <select
//             id="fuelType"
//             name="fuelType"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.fuelType}
//             className="w-full border p-2 mt-1"
//           >
//             <option value="">Select</option>
//             <option value="Petrol">Petrol</option>
//             <option value="Diesel">Diesel</option>
//           </select>
//           {formik.touched.fuelType && formik.errors.fuelType ? (
//             <div className="text-red-500 text-sm">{formik.errors.fuelType}</div>
//           ) : null}
//         </div>

//         {/* RTO */}
//         <div className="form-group">
//           <label htmlFor="rto">RTO</label>
//           <input
//             id="rto"
//             name="rto"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.rto}
//             className="w-full border p-2 mt-1"
//           />
//           {formik.touched.rto && formik.errors.rto ? (
//             <div className="text-red-500 text-sm">{formik.errors.rto}</div>
//           ) : null}
//         </div>

//         {/* Seats */}
//         <div className="form-group">
//           <label htmlFor="seats">Seats</label>
//           <input
//             id="seats"
//             name="seats"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.seats}
//             className="w-full border p-2 mt-1"
//           />
//           {formik.touched.seats && formik.errors.seats ? (
//             <div className="text-red-500 text-sm">{formik.errors.seats}</div>
//           ) : null}
//         </div>

//         {/* Engine Displacement */}
//         <div className="form-group">
//           <label htmlFor="engineDisplacement">Engine displacement (cc)</label>
//           <input
//             id="engineDisplacement"
//             name="engineDisplacement"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.engineDisplacement}
//             className="w-full border p-2 mt-1"
//           />
//           {formik.touched.engineDisplacement && formik.errors.engineDisplacement ? (
//             <div className="text-red-500 text-sm">{formik.errors.engineDisplacement}</div>
//           ) : null}
//         </div>

//         {/* Ownership */}
//         <div className="form-group">
//           <label htmlFor="ownership">Ownership</label>
//           <input
//             id="ownership"
//             name="ownership"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.ownership}
//             className="w-full border p-2 mt-1"
//           />
//           {formik.touched.ownership && formik.errors.ownership ? (
//             <div className="text-red-500 text-sm">{formik.errors.ownership}</div>
//           ) : null}
//         </div>

//         {/* Transmission */}
//         <div className="form-group">
//           <label htmlFor="transmission">Transmission</label>
//           <select
//             id="transmission"
//             name="transmission"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.transmission}
//             className="w-full border p-2 mt-1"
//           >
//             <option value="">Select</option>
//             <option value="Automatic">Automatic</option>
//             <option value="Manual">Manual</option>
//           </select>
//           {formik.touched.transmission && formik.errors.transmission ? (
//             <div className="text-red-500 text-sm">{formik.errors.transmission}</div>
//           ) : null}
//         </div>

//         {/* KMs Driven */}
//         <div className="form-group">
//           <label htmlFor="kmsDriven">KMs driven</label>
//           <input
//             id="kmsDriven"
//             name="kmsDriven"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.kmsDriven}
//             className="w-full border p-2 mt-1"
//           />
//           {formik.touched.kmsDriven && formik.errors.kmsDriven ? (
//             <div className="text-red-500 text-sm">{formik.errors.kmsDriven}</div>
//           ) : null}
//         </div>

//         {/* Year of Manufacturing */}
//         <div className="form-group">
//           <label htmlFor="yearOfManufacturing">Year of manufacturing</label>
//           <input
//             id="yearOfManufacturing"
//             name="yearOfManufacturing"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.yearOfManufacturing}
//             className="w-full border p-2 mt-1"
//           />
//           {formik.touched.yearOfManufacturing && formik.errors.yearOfManufacturing ? (
//             <div className="text-red-500 text-sm">{formik.errors.yearOfManufacturing}</div>
//           ) : null}
//         </div>

//         {/* Submit Button */}
//         <div className="col-span-2 text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-700"
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CarDetailsForm;
