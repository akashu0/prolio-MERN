import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formvalidationSchema } from "../../util/formvalidation";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/formSlice";

function CompanyForm({ onSubmit }) {
  const dispatch = useDispatch();

  // Select formData from the Redux store
  const formData = useSelector((state) => state.form.formData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formvalidationSchema),
  });

  const submitHandler = async (formData) => {
    console.log(formData);
    dispatch(updateFormData(formData)); //  Dispatch the updateFormData action
    onSubmit(formData);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1899 },
    (_, index) => currentYear - index
  );
  return (
    <div className="px-28 w-full flex flex-col ">
      <div className="px-5">
        <span className="text-blue-800 font-serif font-semibold">
          Company Details
        </span>
        <span className=" text-sm text-gray-500 block">
          Setup your business account by following information
        </span>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="flex mt-3">
        <div className="w-1/2 flex flex-col mx-5">
          <div className="flex flex-col ">
            <label className="font-semibold text-sm">Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              {...register("companyName")}
              value={formData.companyName} // Set the value attribute
              onChange={(e) => {
                dispatch(updateFormData({ companyName: e.target.value }));
              }}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm">
              Business Registration Number
            </label>
            <input
              type="text"
              placeholder="Enter your registration number"
              {...register("registrationNumber")}
              value={formData.registrationNumber}
              onChange={(e) => {
                dispatch(
                  updateFormData({ registrationNumber: e.target.value })
                );
              }}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
            {errors.registrationNumber && (
              <p className="text-red-500 text-sm">
                {errors.registrationNumber.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm">Total Employees </label>
            <select
              {...register("totalEmployees")}
              value={formData.totalEmployees}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              onChange={(e) => {
                dispatch(updateFormData({ totalEmployees: e.target.value }));
              }}
            >
              <option value="">Select total employees</option>
              <option value="0-100">0-100</option>
              <option value="100-200">100-200</option>
              <option value="200-300">200-300</option>
              <option value="300+">300 and above</option>
            </select>
            {errors.totalEmployees && (
              <p className="text-red-500 text-sm">
                {errors.totalEmployees.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-1/2 flex flex-col mx-5">
          <div className="flex flex-col">
            <label className="font-semibold text-sm"> Owner Name</label>
            <input
              type="text"
              placeholder="Enter company owner name"
              {...register("OwnerName")}
              value={formData.OwnerName}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              onChange={(e) => {
                dispatch(updateFormData({ OwnerName: e.target.value }));
              }}
            />
            {errors.OwnerName && (
              <p className="text-red-500 text-sm">{errors.OwnerName.message}</p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm">
              Year of Establishment
            </label>

            <select
              {...register("yearOfEstablishment")}
              value={formData.yearOfEstablishment}
              onChange={(e) => {
                dispatch(
                  updateFormData({ yearOfEstablishment: e.target.value })
                );
              }}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            >
              <option value="">Select Year of Establishment</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.yearOfEstablishment && (
              <p className="text-red-500 text-sm">
                {errors.yearOfEstablishment.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm"> Business Type</label>
            <input
              type="text"
              placeholder="Enter company owner name"
              {...register("businessType")}
              value={formData.businessType}
              onChange={(e) => {
                dispatch(updateFormData({ businessType: e.target.value }));
              }}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
            {errors.businessType && (
              <p className="text-red-500 text-sm">
                {errors.businessType.message}
              </p>
            )}
          </div>
          <div className="mt-auto flex justify-end">
            <button
              type="submit"
              className=" w-48 mt-5 text-white h-10 bg-blue-950 hover:bg-green-500"
            >
              Save and Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;
