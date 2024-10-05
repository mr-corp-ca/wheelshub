// import * as yup from 'yup'

// const signUpSchema = yup.object({
//     name:yup.string().min(2).max(25).required('please enter your name'),
//     email: yup.string().email().required('Please enter your email'),
//     password: yup.string().min(6).required('please enter your password'),
//     confirm_password:yup.string().required('confirm password').oneOf([yup.ref('password'), null], 'Password must match')
// })
// const signInSchema = yup.object({
//     email: yup.string().email().required('Please enter your email'),
//     password: yup.string().min(6).required('please enter your password'),
// })

// export {signInSchema, signUpSchema}

import * as yup from "yup";

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name cannot exceed 25 characters")
    .required("Please enter your name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const signInSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});
const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Required"),
  password: yup.string().required("Required"),
});

const CreateNewPasswordSchema = yup.object().shape({
  password: yup.string().required("Required"),
  confirm_password: yup.string().required("Required"),
});

const sellCarForm = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name cannot exceed 25 characters")
    .required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  number: yup.string().required("Please enter your number"),
  city: yup.string().required("Please enter your city"),
  street_address: yup.string().required("Please enter your address"),
});

const SellCarToPublicSchema = yup.object().shape({
  carmake: yup.string().required("Required"),
  model: yup.string().required("Required"),
  manufacturing: yup.string().required("Required"),
  kmsDriven: yup.string().required("Required"),
  vid: yup.string().required("Required"),
  trnasmission: yup.string().required("Required"),
});

const insuranceForm1Schema = yup.object().shape({
  insuranceAgent: yup.string().required("Required"),
  insurancePrice: yup.string().required("Required"),
  insuranceStartDate: yup.string().required("Required"),
  insuranceEndDate: yup.string().required("Required"),
  customerName: yup.string().required("Required"),
  represnetativeName: yup.string().required("Required"),
  couponCode: yup.string().required("Required"),
});

const insuranceForm2Schema = yup.object().shape({
  insuranceRegistrationForm: yup.string().required("Required"),
  billReciept: yup.string().required("Required"),
  // businessInsurance: yup.string().required('Required'),
  // anotherDoc: yup.string().required('Required'),
});

const mechanicCarDetailsSchema = yup.object().shape({
  registrationYear: yup
    .number()
    .required("Registration year is required")
    .min(1900, "Year must be after 1900")
    .max(
      new Date().getFullYear(),
      `Year must be at most ${new Date().getFullYear()}`
    ),
  fuelType: yup.string().required("Fuel type is required"),
  insurance: yup.string().required("Insurance is required"),
  rto: yup.string().required("RTO is required"),
  seats: yup
    .number()
    .required("Seats number is required")
    .min(2, "Seats must be at least 2")
    .max(8, "Seats must be less than or equal to 8"),
  engineDisplacement: yup
    .number()
    .required("Engine displacement is required")
    .min(500, "Engine displacement must be at least 500cc"),
  ownership: yup.string().required("Ownership status is required"),
  transmission: yup.string().required("Transmission type is required"),
  kmsDriven: yup
    .number()
    .required("Kilometers driven is required")
    .min(0, "KMs driven cannot be negative"),
  yearOfManufacturing: yup
    .number()
    .required("Year of manufacturing is required")
    .min(1900, "Year must be after 1900")
    .max(
      new Date().getFullYear(),
      `Year must be at most ${new Date().getFullYear()}`
    ),
});

const companyvalidationSchema = yup.object().shape({
  businessName: yup.string().required("Business name is required"),
  registrationYear: yup
    .number()
    .required("Registration year is required")
    .min(1900, "Year must be after 1900"),
  ownerName: yup.string().required("Owner name is required"),
  employees: yup
    .number()
    .required("Number of employees is required")
    .min(1, "Must have at least 1 employee"),
  contactNumber: yup.string().required("Contact number is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Official email is required"),
  addressLine1: yup.string().required("Address line 1 is required"),
  addressLine2: yup.string(), // Optional field
  city: yup.string().required("City is required"),
  province: yup.string().required("Province is required"),
});

export {
  companyvalidationSchema,
  mechanicCarDetailsSchema,
  insuranceForm2Schema,
  insuranceForm1Schema,
  SellCarToPublicSchema,
  CreateNewPasswordSchema,
  sellCarForm,
  signInSchema,
  signUpSchema,
  ForgotPasswordSchema,
};
