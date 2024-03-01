import * as yup from "yup";

// Define validation schema using Yup
export const formvalidationSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
  registrationNumber: yup.string().required("Registration number is required"),
  totalEmployees: yup.string().required("Total employees is required"),
  OwnerName: yup.string().required("Owner name is required"),
  yearOfEstablishment: yup
    .string()
    .required("Year of establishment is required"),
  businessType: yup.string().required("Business type is required"),
});

export const contactInfo = yup.object().shape({
  companyEmail: yup.string().required("Company email is required"),
  contactNumber: yup.string().required("Contact Number is required"),
  address1: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  pincode: yup.string().required("Postal Code is required"),
});
