import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductTypeProduct from "./ProductTypeProduct";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../../store/productSlice";
import { saveproductId } from "../../store/productId";

function AddProduct({ onSubmit }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedSubCategoryName, setSelectedSubCategoryName] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const [SubCategoryName, setSubCategoryName] = useState([]);

  const [fields, setFields] = useState([]);

  const productDetails = useSelector((state) => state.product.productDetails);
  const productImage = useSelector((state) => state.product.productImage);
  const specification = useSelector((state) => state.product.specification);

  const apiURL = process.env.REACT_APP_API_URL;
  // const apiURL = "http://localhost:5000/api";
  const print = (data) => {
    alert(data);
  };

  const handlerSaveButton = async () => {
    try {
      const sections1 = {
        productDetails,
        productImage,
        specification,
        selectedProductType,
        selectedSubCategoryName,
        selectedCategoryName,
        selectedProductType, // Duplicate entry removed
      };

      const response = await axios.post(
        `${apiURL}/product/create-product`,
        {
          sections1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const id = response.data;
      dispatch(saveproductId(id));
      dispatch(clearState());
      onSubmit();
    } catch (error) {
      // toast.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/category/getAllCategory-types`
        );
        const data = response.data;
        // console.log(data);
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
    if (selectedCategoryName && selectedProductType) {
      fetchData();
    }
  }, [selectedProductType, selectedCategoryName]);

  return (
    <>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl py-8 mx-auto">
        <div className="w-4/5 bg-white ">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold text-blue-600 bg-white uppercase">
              ADD {selectedProductType}
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
              <label className="block font-semibold text-sm mb-1 bg-white uppercase">
                {selectedProductType} Category
              </label>
              <select
                className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                onChange={(e) => {
                  setSelectedCategoryName(e.target.value);
                }}
              >
                <option value="">Select Category</option>
                {categoryName.map((item) => (
                  <option value={categoryName.item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 bg-white">
              <label className="block font-semibold text-sm mb-1 bg-white uppercase">
                {selectedProductType} Subcategory
              </label>
              <select
                className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                onChange={(e) => {
                  setSelectedSubCategoryName(e.target.value);
                }}
              >
                <option value="">Select Subcategory</option>

                {SubCategoryName.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <ProductTypeProduct fields={fields} print={print} />
      <div className="mt-auto flex justify-end pr-48 ">
        <button
          type="submit"
          className=" w-48 mt-5  text-white h-10 bg-blue-950 hover:bg-green-500 "
          onClick={handlerSaveButton}
        >
          Save and Continue
        </button>
      </div>
    </>
  );
}

export default AddProduct;
