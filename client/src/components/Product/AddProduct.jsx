import React, { useState } from "react";
import ProductVariation from "./ProductVariation";
import { Icon } from "@iconify-icon/react";
import { useEffect } from "react";
import axios from "axios";

function AddProduct({ onSubmit }) {
  const [variation, setVariation] = useState(false);
  const [documents, setDocuments] = useState([{ base64: null }]);

  const [productTypes, setProductTypes] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const [SubCategoryName, setSubCategoryName] = useState([]);

  const [fields, setFields] = useState([]);

  const addDocument = () => {
    // Check if the maximum limit of documents has been reached
    if (documents.length >= 4) {
      alert("Maximum limit of documents reached.");
      return;
    }
    // Add a new document to the state array
    setDocuments([...documents, { base64: null }]);
  };

  const apiURL = "http://localhost:5000/api";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/category/getAllCategory-types`
        );
        const data = response.data;
        setProductTypes(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // console.log(selectedProductType);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/category/getCategory-Names/${selectedProductType}`
        );
        const data = response.data;
        // console.log(data);
        setCategoryName(data[0].categoryNames);
        // setProductTypes(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    if (selectedProductType) {
      fetchData();
    }
  }, [selectedProductType]);

  useEffect(() => {
    // console.log(selectedCategoryName, "selectedCategoryName");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/category/getSubCategory-Names/${selectedProductType}/${selectedCategoryName}`
        );
        const data = response.data;
        // console.log(data);
        setSubCategoryName(data.subCategoryNames);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    if (selectedCategoryName) {
      fetchData();
    }
  }, [selectedProductType, selectedCategoryName]);

  useEffect(() => {
    // console.log(selectedCategoryName, "selectedCategoryName");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/category/getfields/${selectedProductType}/${selectedCategoryName}`
        );
        const data = response.data;
        // console.log(data.fields[0].fields);
        setFields(data.fields[0].fields);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    if (selectedCategoryName) {
      fetchData();
    }
  }, [selectedProductType, selectedCategoryName]);

  return (
    <>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl py-8 mx-auto">
        <div className="w-4/5 bg-white ">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold text-blue-600 bg-white">
              Add Product
            </h2>
            <p className="text-sm bg-white">
              Add your product and get more insights
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl">
            <h3 className="text-lg font-semibold mb-2 bg-white">
              Select Product Type
            </h3>
            <div className="space-x-24 bg-white">
              {productTypes.map((product) => (
                <label
                  key={product._id}
                  className="inline-flex items-center bg-white"
                >
                  <input
                    type="radio"
                    className="form-radio text-blue-500 bg-white "
                    name="radio-option"
                    value={product.product_type}
                    onClick={() => {
                      setSelectedProductType(product.product_type);
                      setSelectedCategoryName("");
                      setCategoryName([]);
                      setSubCategoryName([]);
                      setFields([]);
                    }}
                  />
                  <span className="ml-2 bg-white uppercase">
                    {product.product_type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-4 bg-white flex space-x-4">
            <div className="flex-1 bg-white">
              <label className="block font-semibold text-sm mb-1 bg-white">
                Product Category
              </label>
              <select
                className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                onChange={(e) => {
                  setSelectedCategoryName(e.target.value);
                }}
              >
                <option value="">Select Product Category</option>
                {categoryName.map((item) => (
                  <option value={categoryName.item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 bg-white">
              <label className="block font-semibold text-sm mb-1 bg-white">
                Product Subcategory
              </label>
              <select className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white">
                <option value="">Select Product Subcategory</option>
                {/* <option value=""> Subcategory1</option>
                <option value=""> Subcategory1</option>
                <option value=""> Subcategory1</option> */}

                {SubCategoryName.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl mt-10 py-8 mx-auto">
        <div className="w-4/5 bg-white">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold bg-white">Add Product</h2>
            <p className="text-sm bg-white">
              Add your product and get more insights
            </p>
          </div>
          <div className="p-4 bg-white">
            <div className="flex flex-wrap justify-between bg-white">
              {/* {fields.find(
                (item) =>
                  item.name === "productName" &&
                  item.status === true && (
                   
                  )
              )} */}

              {fields.find(
                (field) => field.name === "productName" && field.status === true
              ) && (
                <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your product category"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                  />
                </div>
              )}

              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Product ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your product id"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Brand Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Product Material
                </label>
                <input
                  type="text"
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Relation with the Product
                </label>
                <input
                  type="text"
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Manufacturer details
                </label>
                <input
                  type="text"
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white">Are there product variations?</p>
            <div className="space-x-4 bg-white">
              <label className="inline-flex items-center bg-white">
                <input
                  type="radio"
                  className="form-radio text-blue-500 bg-white"
                  name="radio-option"
                  value="option1"
                  onClick={() => setVariation(true)}
                />
                <span className="ml-2 bg-white">Yes</span>
              </label>
              <label className="inline-flex items-center bg-white">
                <input
                  type="radio"
                  className="form-radio text-blue-500 bg-white"
                  name="radio-option"
                  value="option1"
                  onClick={() => setVariation(false)}
                />
                <span className="ml-2 bg-white">No</span>
              </label>
            </div>
          </div>
          {variation && <ProductVariation />}
          <div className={`p-4 bg-white ${variation ? "mt-4" : ""}`}>
            <p className="bg-white font-semibold">Product Image and Videos </p>
            <p className="bg-white text-sm text-gray-500">
              Add your product images and videos{" "}
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
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Description 1</p>
            <input
              type="text"
              placeholder="Add Description"
              className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded bg-white"
            />
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Description 2</p>
            <textarea
              placeholder="Add Description"
              className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
            ></textarea>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-bold text-lg">Specificitions</p>
            <p className="bg-white text-sm">
              Add Specification to your product
            </p>
            <div className="bg-white shadow-xl rounded-2xl p-4 ">
              <div className="p-4 bg-white flex space-x-4">
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white ">
                    Attribute Name
                  </label>
                  <input
                    type="text"
                    placeholder="attribute name"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Value
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
                  Add Attribute
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="flex flex-wrap justify-between bg-white">
              {/* Left side */}
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Warranty/Guarantee
                </label>
                <input
                  type="text"
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Benefits to User
                </label>
                <textarea
                  type="text"
                  placeholder="Enter your product id"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                ></textarea>
              </div>

              {/* Right side */}
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Speciality/ Uniqueness
                </label>
                <textarea
                  placeholder="Add Description"
                  className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-auto flex justify-end bg-white">
            <button
              type="submit"
              className=" w-48 mt-5 text-white h-10 bg-blue-950 hover:bg-green-500 "
              onClick={onSubmit}
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
