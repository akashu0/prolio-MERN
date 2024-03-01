import { Icon } from "@iconify-icon/react";
import React, { useState } from "react";

function B2B({ onSubmit, onBack }) {
  const [variation, setVariation] = useState(false);
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
    <>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl mt-10 py-8 mx-auto">
        <div className="w-4/5 bg-white">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold bg-white text-blue-600">
              Product Business
            </h2>
            <p className="text-sm bg-white">
              Add your product information and get more Business
            </p>
          </div>

          <div className="p-4 bg-white">
            <p className="bg-white">Solicit Dealership Enquiries</p>
            <div className="space-x-4 bg-white">
              <label className="inline-flex items-center bg-white">
                <input
                  type="radio"
                  className="form-radio text-blue-500 bg-white"
                  name="radio-option"
                  value="option1"
                  //   onClick={() => setVariation(true)}
                />
                <span className="ml-2 bg-white">Yes</span>
              </label>
              <label className="inline-flex items-center bg-white">
                <input
                  type="radio"
                  className="form-radio text-blue-500 bg-white"
                  name="radio-option"
                  value="option1"
                  //   onClick={() => setVariation(false)}
                />
                <span className="ml-2 bg-white">No</span>
              </label>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white">Prospective Reseller</p>
            <div className="space-x-4 bg-white">
              <label className="inline-flex items-center bg-white">
                <input
                  type="radio"
                  className="form-radio text-blue-500 bg-white"
                  name="radio-option"
                  value="option1"
                  //   onClick={() => setVariation(true)}
                />
                <span className="ml-2 bg-white">Yes</span>
              </label>
              <label className="inline-flex items-center bg-white">
                <input
                  type="radio"
                  className="form-radio text-blue-500 bg-white"
                  name="radio-option"
                  value="option1"
                  //   onClick={() => setVariation(false)}
                />
                <span className="ml-2 bg-white">No</span>
              </label>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Description 2</p>
            <textarea
              placeholder="Add Description"
              className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
            ></textarea>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Description 2</p>
            <textarea
              placeholder="Add Description"
              className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
            ></textarea>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white ">Business Opportunities</p>
            {/* <p className="bg-white text-sm">
              Add Specification to your product
            </p> */}
            <div className="bg-white shadow-xl rounded-2xl p-4 ">
              <div className="p-4 bg-white flex space-x-4">
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white ">
                    Opportunities
                  </label>
                  <input
                    type="text"
                    placeholder="Opportunities"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Variation list
                  </label>
                  <input
                    type="text"
                    placeholder="value"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Variation list
                  </label>
                  <input
                    type="text"
                    placeholder="value"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
              </div>
              <div className="flex justify-end bg-white">
                <button className=" w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200 ">
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">
              Become An Authorized Service Specialist & Dealers of Spares
            </p>
            <textarea
              placeholder="Add Description"
              className="w-full h-16 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
            ></textarea>
          </div>

          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">
              Business Brochures(Sale Collaterals/Adds){" "}
            </p>
            <p className="bg-white text-sm text-gray-500">
              Add your product Business Brochures
            </p>

            <div className="w-auto h-auto flex flex-wrap bg-white">
              {documents.map((item, index) => (
                <div
                  className="flex flex-col justify-center border-black rounded-md border-2 border-dashed mt-5 w-32 h-32  items-center mx-2 bg-white"
                  key={index}
                >
                  {item.base64 && (
                    <button>
                      <Icon
                        className="text-xl"
                        icon="openmoji:multiplication-sign"
                      />
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
                      <p className="bg-white text-xs font-semibold">
                        Upload <br /> Image or video
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
          </div>

          <div className="flex justify-between px-10 mt-5 bg-white">
            <button
              className="w-48 h-10 border border-gray-600"
              onClick={onBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-48 h-10 bg-blue-950 text-white hover:bg-green-500"
              onClick={onSubmit}
            >
              Save and Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default B2B;
