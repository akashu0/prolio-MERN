import React from "react";
import SimpleNavbar from "../../../components/Navbar/SimpleNavbar";
import { useState } from "react";
import AddProduct from "../../../components/Product/AddProduct";
import ProductPricing from "../../../components/Product/ProductPricing";
import B2B from "../../../components/Product/B2B";
import Social from "../../../components/Product/Social";

function ProductForm() {
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
      description: "Product Details",
      data: "step 1",
    },
    {
      description: "Pricing",
    },
    {
      description: "B2B Details",
    },
    {
      description: "Social",
    },
    {
      description: "Confirm",
    },
  ]);
  return (
    <div>
      <SimpleNavbar />
      <div className="w-full flex justify-center mt-20">
        <div className="w-full flex justify-between items-center px-20 py-8 rounded-md ">
          {data.map((item, index) => (
            <div key={index} className="flex-1 mx-10 text-start">
              <div
                className={`bg-gray-400 rounded-full h-2 mb-2 ${
                  index === currentIndex ? "bg-blue-700 " : ""
                } ${index < currentIndex ? "bg-blue-700" : ""}`}
              ></div>
              <span
                className={` h-2 mb-2 block text-xs font-sans ${
                  index === currentIndex ? "text-blue-700 " : ""
                } ${index < currentIndex ? "text-blue-700" : ""}`}
              >
                STEP {index + 1}
              </span>
              <span
                className={`  block text-xs font-sans ${
                  index === currentIndex ? "text-blue-700 " : ""
                } ${index < currentIndex ? "text-blue-700" : ""}`}
              >
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center items-center"> */}

      {currentIndex === 0 && <AddProduct onSubmit={handleFormSubmit} />}
      {currentIndex === 1 && (
        <ProductPricing onSubmit={handleFormSubmit} onBack={handleBack} />
      )}
      {currentIndex === 2 && (
        <B2B onSubmit={handleFormSubmit} onBack={handleBack} />
      )}
      {currentIndex === 3 && (
        <Social onSubmit={handleFormSubmit} onBack={handleBack} />
      )}

      {/* </div> */}
    </div>
  );
}

export default ProductForm;
