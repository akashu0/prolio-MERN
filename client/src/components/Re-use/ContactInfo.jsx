import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactInfo({ onBack }) {
  const apiURL = "http://localhost:5000/api"; // process.env.Base_URL;

  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(""); // Define selectedCountry state
  const [selectedState, setSelectedState] = useState(""); // Define selectedState state
  const [selectedCity, setSelectedCity] = useState(""); // Define selectedCity state
  const [selectedPostalCode, setSelectedPostalCode] = useState("");

  const getPincode = () => {
    axios
      .get(`${apiURL}/superAdmin/getAllPincode`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPincode();
  }, []);

  // Event handler for country dropdown change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Event handler for state dropdown change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Event handler for city dropdown change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handlePostalCodeChange = (e) => {
    setSelectedPostalCode(e.target.value);
  };

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

      <form className=" mt-5">
        <div className="flex">
          <div className="w-1/2 flex flex-col mx-5">
            <div className="flex flex-col ">
              <label className="font-semibold text-sm">
                Company Email Address
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold text-sm">Address Line 1</label>
              <input
                type="text"
                placeholder="Enter your registration number"
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 flex flex-col mr-2">
                <label className="font-semibold text-sm">Country</label>
                <select
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {data.map((item) => (
                    <option key={item.country} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-1/2 flex flex-col ml-2">
                <label className="font-semibold text-sm">State</label>
                <select
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
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
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold text-sm">Address Line 2</label>
              <input
                type="text"
                placeholder="Enter company owner name"
                className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
              />
            </div>

            <div className="flex mt-3">
              <div className="w-1/2 flex flex-col mr-2">
                <label className="font-semibold text-sm">City</label>
                <select
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                  onChange={handleCityChange}
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
              </div>

              <div className="w-1/2 flex flex-col ml-2">
                <label className="font-semibold text-sm">Postal Code</label>
                <select
                  value={selectedPostalCode}
                  onChange={handlePostalCodeChange}
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
