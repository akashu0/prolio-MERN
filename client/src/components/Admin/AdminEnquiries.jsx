import React, { useState } from "react";
import MyEnquiries from "./MyEnquiries";
import ProductEnquiry from "./ProductEnquiry";

function AdminEnquiries() {
  const [selectedOption, setSelectedOption] = useState("MyEnquiries");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="mt-5 flex justify-between">
        <h1 className="text-3xl px-5 font-semibold">Enquiries</h1>
        <select
          className="px-5 items-start focus:outline-none pt-1 rounded-lg font-semibold mx-14 border bg-white"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="MyEnquiries">My Enquiries</option>
          <option value="ProductEnquiries">Product Enquiries</option>
        </select>
      </div>
      {selectedOption === "MyEnquiries" && <MyEnquiries />}

      {selectedOption === "ProductEnquiries" && <ProductEnquiry />}
    </>
  );
}

export default AdminEnquiries;
