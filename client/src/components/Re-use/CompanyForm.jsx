import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formvalidationSchema } from "../../util/formvalidation";

function CompanyForm() {
  const {
    register,
    handlesubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formvalidationSchema),
  });

  const submitHandler = async (formData) => {
    console.log(formData);
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

      <form className="flex mt-3" onSubmit={handlesubmit(submitHandler)}>
        <div className="w-1/2 flex flex-col mx-5">
          <div className="flex flex-col ">
            <label className="font-semibold text-sm">Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              {...register("companyName")}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm">
              Business Registration Number
            </label>
            <input
              type="text"
              placeholder="Enter your registration number"
              {...register("registrationNumber")}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm">Total Employees </label>
            <select className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none">
              <option value="">Select total employees</option>
              <option value="0-100">0-100</option>
              <option value="100-200">100-200</option>
              {...register("totalEmployees")}
              <option value="200-300">200-300</option>
              <option value="300+">300 and above</option>
            </select>
          </div>
        </div>

        <div className="w-1/2 flex flex-col mx-5">
          <div className="flex flex-col">
            <label className="font-semibold text-sm"> Owner Name</label>
            <input
              type="text"
              placeholder="Enter company owner name"
              {...register("OwnerName")}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm">
              Year of Establishment
            </label>

            <select className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none">
              <option value="">Select Year of Establishment</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {...register("yearOfRegister")}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-sm"> Business Type</label>
            <input
              type="text"
              placeholder="Enter company owner name"
              {...register("businessType")}
              className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
            />
          </div>
          {/* <div className="mt-auto flex justify-end">
            <button className=" w-48 mt-5 text-white h-10 bg-blue-950">
              Save and Continue
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;
