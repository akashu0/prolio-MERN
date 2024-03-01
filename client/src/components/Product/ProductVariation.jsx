import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";

function ProductVariation() {
  const [documents, setDocuments] = useState([{ base64: null }]);

  const addDocument = () => {
    // Check if the maximum limit of documents has been reached
    if (documents.length >= 4) {
      alert("Maximum limit of documents reached.");
      return;
    }
    // Add a new document to the state array
    setDocuments([...documents, { base64: null }]);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 ">
      <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
        <label className="block font-semibold text-sm mb-1 bg-white">
          Enter Variant Name
        </label>
        <input
          type="text"
          placeholder="Enter Variant Name"
          className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
        />
      </div>

      <div className="w-auto h-auto flex flex-wrap bg-white">
        {documents.map((item, index) => (
          <div
            className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-32 h-32  items-center mx-2 bg-white"
            key={index}
          >
            {item.base64 && (
              <button>
                <Icon className="text-xl" icon="openmoji:multiplication-sign" />
              </button>
            )}
            <label
              htmlFor={`fileUpload-${index}`}
              className="cursor-pointer text-center text-sm bg-white"
            >
              {item.base64 && (
                <div>
                  <img
                    src={item.base64}
                    alt={`Document ${index}`}
                    width="100px"
                    height="100px"
                  />
                </div>
              )}
              {!item.base64 && (
                <p className="bg-white text-xs">
                  Upload or Drag and drop the documents here
                </p>
              )}

              <input
                id={`fileUpload-${index}`}
                type="file"
                style={{ display: "none" }}
              />
            </label>
          </div>
        ))}

        <div
          className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-32 h-32 items-center mx-2 bg-white"
          onClick={addDocument}
        >
          <Icon className="text-4xl bg-white" icon="icon-park:plus" />
          <span className="text-center text-sm bg-white">Add New</span>
        </div>
      </div>
      <div className="p-4 bg-white flex space-x-4">
        <div className="flex-1 bg-white">
          <label className="block font-semibold text-sm mb-1 bg-white ">
            Attribute Name
          </label>
          <input
            type="text"
            placeholder="Enter your product category"
            className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
          />
        </div>
        <div className="flex-1 bg-white">
          <label className="block font-semibold text-sm mb-1 bg-white">
            Value
          </label>
          <input
            type="text"
            placeholder="Enter your product category"
            className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
          />
        </div>
      </div>
      <div className="flex justify-end bg-white">
        <button className=" w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200 ">
          Add Attribute
        </button>
      </div>
    </div>
  );
}

export default ProductVariation;
