import React, { useState } from "react";
import CompanyForm from "../Re-use/CompanyForm";
import ContactInfo from "../Re-use/ContactInfo";
import UploadSection from "../Re-use/UploadSection";

function CompanyDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Logic to move to the next step
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const handleBack = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1); // Move back to previous step
  };
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
    <div className="h-full w-full my-14">
      <div className="text-center py-3">
        <span className="text-2xl text-blue-900 font-bold font-serif ">
          Welcome to Prolio
        </span>
        <span className="text-lg text-gray-600 py-2 block">
          Let's set up your business account
        </span>
        <div className="flex justify-between items-center px-20 py-3 rounded-md ">
          {data.map((item, index) => (
            <div key={index} className="w-1/5 mx-10">
              <div
                className={`bg-gray-400 rounded-full h-2 mb-2 ${
                  index === currentIndex ? "bg-red-900 " : ""
                }`}
              ></div>
              <span className={`block text-start text-sm `}>
                STEP {index + 1}
              </span>
              <span className="block text-start text-sm ">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {currentIndex === 0 && <CompanyForm onSubmit={handleFormSubmit} />}
      {currentIndex === 1 && <ContactInfo onBack={handleBack} />}
      {currentIndex === 2 && <UploadSection />}

      {/* <div className="mt-auto flex justify-between px-32">
        {currentIndex !== 0 && (
          <button
            className="w-48 mt-5  h-10  border border-gray-600"
            onClick={() => {
              setCurrentIndex((prev) => prev - 1);
            }}
          >
            Back
          </button>
        )}

        <div className="flex-grow"></div>

        <button
          className="w-48 mt-5 text-white h-10 bg-blue-950"
          onClick={() => {
            setCurrentIndex((prev) => prev + 1);
          }}
        >
          Save and Continue
        </button>
      </div> */}
    </div>
  );
}

export default CompanyDetails;
