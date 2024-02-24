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
