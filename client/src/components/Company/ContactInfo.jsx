import React, { useEffect, useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updateContactInfo } from "../../store/formSlice";
import { contactInfo } from "../../util/formvalidation";
import { useDispatch, useSelector } from "react-redux";

function ContactInfo({ onBack, onSubmit }) {
  const dispatch = useDispatch();
  // Select formData from the Redux store
  const formData = useSelector((state) => state.form.contactInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactInfo),
  });
  const apiURL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(formData.country); // Define selectedCountry state
  const [selectedState, setSelectedState] = useState(formData.state); // Define selectedState state
  const [selectedCity, setSelectedCity] = useState(formData.city); // Define selectedCity state
  const [selectedPostalCode, setSelectedPostalCode] = useState(
    formData.pincode
  );

  // Update state values when Redux store values change
  useEffect(() => {
    setSelectedCountry(formData.country);
    setSelectedState(formData.state);
    setSelectedCity(formData.city);
    setSelectedPostalCode(formData.pincode);
  }, [formData]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    dispatch(updateContactInfo({ country: e.target.value }));
  };
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    dispatch(updateContactInfo({ state: e.target.value }));
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    dispatch(updateContactInfo({ city: e.target.value }));
  };
  const handlePostalCodeChange = (e) => {
    setSelectedPostalCode(e.target.value);
    dispatch(updateContactInfo({ pincode: e.target.value }));
  };

  const getPincode = () => {
    axios
      .get(`${apiURL}/superAdmin/getAllPincode`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = async (formData) => {
    console.log(formData);
    dispatch(updateContactInfo(formData)); //  Dispatch the updateFormData action
    onSubmit();
  };

  useEffect(() => {
    getPincode();
  }, []);

  return (
    <div className="px-28 w-full flex flex-col ">
      <div className="px-5">
        <span className="text-blue-800 font-serif font-semibold">
          Contact Details
        </span>
        <span className=" text-sm text-gray-500 block">
          Enter your Email Address
        </span>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className=" mt-5">
        <div className="flex">
          <div className="w-1/2 flex flex-col mx-5">
            <div className="flex flex-col ">
              <label className="font-semibold text-sm">
                Company Email Address
              </label>
              <input
                type="text"
                value={formData.companyEmail}
                placeholder="Enter your company name"
                {...register("companyEmail")}
                onChange={(e) => {
                  dispatch(updateContactInfo({ companyEmail: e.target.value }));
                }}
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
              {!formData.companyEmail.length && errors.companyEmail && (
                <p className="text-red-500 text-sm">
                  {errors.companyEmail.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold text-sm">Address Line 1</label>
              <input
                type="text"
                placeholder="Enter your registration number"
                value={formData.address1}
                {...register("address1")}
                onChange={(e) => {
                  dispatch(updateContactInfo({ address1: e.target.value }));
                }}
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
              {!formData.address1.length && errors.address1 && (
                <p className="text-red-500 text-sm">
                  {errors.address1.message}
                </p>
              )}
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 flex flex-col mr-2">
                <label className="font-semibold text-sm">Country</label>
                <select
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                  value={selectedCountry}
                  {...register("country")}
                  // onChange={(e) => {
                  //   dispatch(updateContactInfo({ country: e.target.value }));
                  // }}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {data.map((item) => (
                    <option key={item.country} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                </select>
                {!formData.country.length && errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div className="w-1/2 flex flex-col ml-2">
                <label className="font-semibold text-sm">State</label>
                <select
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                  {...register("state")}
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {data
                    .filter((item) => item.country === selectedCountry)
                    .map((countryData) =>
                      countryData.stateName.map((state) => (
                        <option key={state.name} value={state.name}>
                          {state.name}
                        </option>
                      ))
                    )}
                </select>
                {!formData.state.length && errors.state && (
                  <p className="text-red-500 text-sm">{errors.state.message}</p>
                )}
              </div>
            </div>
            <div className="mt-auto flex justify-start">
              <button
                className=" w-48 mt-5  h-10  border border-gray-600"
                onClick={onBack}
              >
                Back
              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col mx-5">
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Contact Number</label>
              <input
                type="text"
                placeholder="Enter company owner name"
                {...register("contactNumber")}
                value={formData.contactNumber}
                onChange={(e) => {
                  dispatch(
                    updateContactInfo({ contactNumber: e.target.value })
                  );
                }}
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
              {!formData.contactNumber.length && errors.contactNumber && (
                <p className="text-red-500 text-sm">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold text-sm">Address Line 2</label>
              <input
                type="text"
                placeholder="Enter company owner name"
                {...register("address2")}
                value={formData.address2}
                onChange={(e) => {
                  dispatch(updateContactInfo({ address2: e.target.value }));
                }}
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
            </div>

            <div className="flex mt-3">
              <div className="w-1/2 flex flex-col mr-2">
                <label className="font-semibold text-sm">City</label>
                <select
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                  {...register("city")}
                  value={selectedCity}
                  onChange={handleCityChange}
                  // onChange={(e) => {
                  //   dispatch(updateContactInfo({ city: e.target.value }));
                  // }}
                >
                  <option value="">Select City</option>
                  {data
                    .filter((item) => item.country === selectedCountry)
                    .map((countryData) =>
                      countryData.stateName
                        .filter((state) => state.name === selectedState)
                        .map((state) =>
                          state.cityName.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))
                        )
                    )}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div className="w-1/2 flex flex-col ml-2">
                <label className="font-semibold text-sm">Postal Code</label>
                <select
                  value={selectedPostalCode}
                  {...register("pincode")}
                  onChange={handlePostalCodeChange}
                  // onChange={(e) => {
                  //   dispatch(updateContactInfo({ pincode: e.target.value }));
                  // }}
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                >
                  <option value="">Select Postal Code</option>
                  {data
                    .filter((item) => item.country === selectedCountry)
                    .map((countryData) =>
                      countryData.stateName
                        .filter((state) => state.name === selectedState)
                        .map((state) =>
                          state.cityName
                            .filter((city) => city.name === selectedCity)
                            .map((city) =>
                              city.pincodes.map((postalCode) => (
                                <option key={postalCode} value={postalCode}>
                                  {postalCode}
                                </option>
                              ))
                            )
                        )
                    )}
                </select>
                {errors.pincode && (
                  <p className="text-red-500 text-sm">
                    {errors.pincode.message}
                  </p>
                )}
              </div>
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
        </div>
      </form>
    </div>
  );
}

export default ContactInfo;
