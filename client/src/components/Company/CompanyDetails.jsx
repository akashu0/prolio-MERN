import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import ContactInfo from "./ContactInfo";
import UploadSection from "./UploadSection";
import ConfirmPage from "./ConfirmPage";

function CompanyDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle form submission
  const handleFormSubmit = () => {
    // console.log("Form submitted:", formData);
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
                className={` rounded-full h-2 mb-2 ${
                  index === currentIndex
                    ? "bg-blue-700"
                    : index < currentIndex
                    ? "bg-blue-700"
                    : "bg-gray-400"
                }`}
              ></div>
              <span className={`block text-start text-xs ${index === currentIndex || index < currentIndex ? "text-blue-700" : ""}`}>
                STEP {index + 1}
              </span>
              <span className={`block text-start text-sm ${index === currentIndex || index < currentIndex ? "text-blue-700" : ""}`}>
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {currentIndex === 0 && <CompanyForm onSubmit={handleFormSubmit} />}
      {currentIndex === 1 && (
        <ContactInfo onSubmit={handleFormSubmit} onBack={handleBack} />
      )}
      {currentIndex === 2 && (
        <UploadSection onSubmit={handleFormSubmit} onBack={handleBack} />
      )}
      {currentIndex === 3 && <ConfirmPage onBack={handleBack} />}
    </div>
  );
}

export default CompanyDetails;
