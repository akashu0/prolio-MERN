import React from "react";

function ContactInfo() {
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
                <select className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none">
                  <option value="">Select City</option>
                  {/* Add your city options here */}
                </select>
              </div>

              <div className="w-1/2 flex flex-col ml-2">
                <label className="font-semibold text-sm">State</label>
                <select className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none">
                  <option value="">Select City</option>
                  {/* Add your city options here */}
                </select>
              </div>
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
                <select className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none">
                  <option value="">Select City</option>
                  {/* Add your city options here */}
                </select>
              </div>

              <div className="w-1/2 flex flex-col ml-2">
                <label className="font-semibold text-sm">Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter postal code"
                  className="w-full h-9 bg-white text-sm px-3 mt-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactInfo;
