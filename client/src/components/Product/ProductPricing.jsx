import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function ProductPricing({ onBack, onSubmit }) {
  const productId = useSelector((state) => state.productId.productId);

  // const [productDetails, setProductDetails] = useState({});

  // console.log(productDetails);

  const apiURL = process.env.REACT_APP_API_URL;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${apiURL}/product/getProductById/${productId}`
  //       );
  //       const data = response.data;
  //       setProductDetails(data);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handlerSaveButton = async () => {
    try {
      const section2 = {
        variantFields,
      };

      const response = await axios.put(
        `${apiURL}/product/update-sections/${productId}`,
        {
          section2,
        }
      );
      onSubmit();
    } catch (error) {
      console.log(error.message);
    }
  };

  const [variantFields, setVariantFields] = useState([
    {
      variationList: "",
      fromValue: "",
      toValue: "",
      mrpValue: "",
      spRatesValue: "",
      l1RatesValue: "",
      l2RatesValue: "",
      l3RatesValue: "",
    },
  ]);

  const [numVariantFields, setNumVariantFields] = useState(1);

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...variantFields];
    updatedFields[index][fieldName] = value;
    setVariantFields(updatedFields);
  };

  const addVariantField = () => {
    setVariantFields([
      ...variantFields,
      {
        variationList: "",
        fromValue: "",
        toValue: "",
        mrpValue: "",
        spRatesValue: "",
        l1RatesValue: "",
        l2RatesValue: "",
        l3RatesValue: "",
      },
    ]);

    setNumVariantFields(numVariantFields + 1);
  };
  // console.log(variantFields);

  return (
    <div className="flex justify-center items-center bg-white rounded-2xl py-8 mx-auto w-full">
      <div className="w-4/5 bg-white">
        <div className="p-4 bg-white">
          <h2 className="text-lg font-semibold bg-white text-blue-600">
            Pricing
          </h2>
          <p className="text-sm bg-white">Enter Prices for your Products</p>
        </div>
        <div className="flex justify-between items-center bg-white h-14 shadow-3xl rounded-lg px-4 mt-4">
          <span className="font-semibold bg-white">Slab</span>
          <button className="w-36 rounded-sm   font-bold text-blue-950 h-8 bg-blue-200">
            Add Slab
          </button>
        </div>
        <div className="p-4 mt-5 bg-white">
          <div className="bg-white shadow-3xl rounded-2xl p-4">
            {/* Variant Section */}
            {variantFields.map((field, index) => (
              <div
                className="flex space-x-4 items-center bg-white "
                style={{ paddingBottom: numVariantFields > 1 ? "30px" : "0" }}
              >
                <div className="flex justify-center border-black rounded-xl border-2 border-dashed w-16 h-16 items-center bg-white">
                  <span className="text-center bg-white text-sm">Image</span>
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-xs mb-1 bg-white">
                    Variation List
                  </label>
                  <select
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none bg-white border border-gray-300 rounded-md"
                    value={field.variationList}
                    onChange={(e) =>
                      handleFieldChange(index, "variationList", e.target.value)
                    }
                  >
                    <option value="" disabled selected hidden>
                      Select Product Category
                    </option>
                    <option value="">Agent</option>
                    <option value="">Reseller</option>
                    <option value="">Supplier</option>
                  </select>
                </div>
                <div className="flex-1 flex space-x-2 bg-white">
                  <div className="flex flex-col bg-white">
                    <label className="block bg-white font-semibold text-xs mb-1">
                      From
                    </label>
                    <input
                      type="text"
                      placeholder="From"
                      className="w-full h-9 text-sm px-3 mt-1 focus:outline-none bg-white border border-gray-300 rounded-md"
                      value={field.fromValue}
                      onChange={(e) =>
                        handleFieldChange(index, "fromValue", e.target.value)
                      }
                    />
                  </div>
                  <span className="pt-8 bg-white">To</span>
                  <div className="flex flex-col bg-white">
                    {/* <label className="block font-semibold text-xs mb-1 bg-white"></label> */}
                    <input
                      type="text"
                      placeholder="To"
                      className="w-full h-9 text-sm px-3 mt-6 focus:outline-none bg-white border border-gray-300 rounded-md"
                      value={field.toValue}
                      onChange={(e) =>
                        handleFieldChange(index, "toValue", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 bg-white">
                  <label className="block font-semibold text-xs bg-white mb-1">
                    MRP
                  </label>
                  <input
                    type="text"
                    placeholder="MRP"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none bg-white border border-gray-300 rounded-md"
                    value={field.mrpValue}
                    onChange={(e) =>
                      handleFieldChange(index, "mrpValue", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col flex-1 bg-white">
                  <label className="block font-semibold text-xs mb-1 bg-white">
                    Sp Rates
                  </label>
                  <input
                    type="text"
                    placeholder="Sp Rates"
                    value={field.spRatesValue}
                    onChange={(e) =>
                      handleFieldChange(index, "spRatesValue", e.target.value)
                    }
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col bg-white flex-1">
                  <label className="block font-semibold text-xs bg-white mb-1">
                    L1 Rates
                  </label>
                  <input
                    type="text"
                    placeholder="L1 Rates"
                    value={field.l1RatesValue}
                    onChange={(e) =>
                      handleFieldChange(index, "l1RatesValue", e.target.value)
                    }
                    className="w-full h-9 text-sm px-3 mt-1 bg-white focus:outline-none border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col flex-1 bg-white">
                  <label className="block font-semibold text-xs mb-1 bg-white">
                    L2 Rates
                  </label>
                  <input
                    type="text"
                    placeholder="L2 Rates"
                    value={field.l2RatesValue}
                    onChange={(e) =>
                      handleFieldChange(index, "l2RatesValue", e.target.value)
                    }
                    className="w-full h-9 text-sm px-3 bg-white mt-1 focus:outline-none border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col bg-white flex-1">
                  <label className="block bg-white font-semibold text-xs mb-1">
                    L3 Rates
                  </label>
                  <input
                    type="text"
                    placeholder="L3 Rates"
                    value={field.l3RatesValue}
                    onChange={(e) =>
                      handleFieldChange(index, "l3RatesValue", e.target.value)
                    }
                    className="w-full h-9 text-sm bg-white px-3 mt-1 focus:outline-none border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-end bg-white">
              <button
                className="w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200"
                onClick={addVariantField}
              >
                Add More
              </button>
            </div>
            {/* End of Variant Section */}
          </div>
        </div>
        <div className="flex justify-between px-10 mt-5 bg-white">
          <button className="w-48 h-10 border border-gray-600" onClick={onBack}>
            Back
          </button>
          <button
            type="submit"
            className="w-48 h-10 bg-blue-950 text-white hover:bg-green-500"
            onClick={handlerSaveButton}
          >
            Save and Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPricing;
