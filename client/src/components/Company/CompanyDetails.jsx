import React, { useState } from "react";

function CompanyDetails() {
  const [data, setData] = useState([
    {
      description: "Company Details",
      data: "step 1",
    },
    {
      description: "Contact Info",
    },
    {
      description: "Upload Documents",
    },
    {
      description: "Confirm",
    },
  ]);
  return (
    <div className="h-full w-full mt-8 ">
      <div className="text-center py-10">
        <span className="text-2xl text-blue-900 font-bold font-serif">
          Welcome to Prolio
        </span>
        <span className="text-lg text-gray-600 py-2 block">
          Let's set up your business account
        </span>
        <div className="flex justify-between items-center px-20 py-4  rounded-md ">
          {data.map((item, index) => (
            <div className="w-1/5 mx-10">
              <div className="bg-gray-400 rounded-full h-2 mb-2 "></div>
              <span className="block text-start text-sm ">
                STEP {index + 1}
              </span>
              <span className="block text-start text-sm ">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* <div> */}
      <div className="px-28 w-full bg-red-500">
        <span>Company Details</span>
        <span className="block">
          setup your business account by following information
        </span>

        <form> </form>
      </div>
    </div>
  );
}

export default CompanyDetails;
