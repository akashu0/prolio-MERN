import React from "react";

function ProductPricing({ onBack, onSubmit }) {
  return (
    <>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl py-8 mx-auto">
        <div className="w-4/5 bg-white ">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold text-blue-600 bg-white">
              Pricing
            </h2>
            <p className="text-sm bg-white">Enter Prices for your Products</p>
          </div>
          <div className="bg-white h-14 shadow-xl flex justify-between rounded">
            <span className="px-5 pt-3 bg-white font-semibold">Slab</span>

            <button className=" w-36 mt-4 mx-3 rounded-sm font-bold text-blue-950 h-8  bg-blue-200 ">
              Add slab
            </button>
          </div>
          <div className="p-4 mt-5 bg-white">
            <div className="bg-white shadow-xl rounded-2xl p-4">
              <div className="p-4 bg-white flex space-x-4 items-center">
                <div className="flex justify-center border-black rounded-xl border-2 border-dashed mt-5 w-16 h-16 items-center bg-white">
                  <span className="text-center text-sm bg-white">Image</span>
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-xs mb-1 bg-white">
                    Variation List
                  </label>
                  <select className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white">
                    <option value="" disabled selected hidden>
                      Select Product Category
                    </option>
                    <option value="">Agent</option>
                    <option value="">Category2</option>
                    <option value="">Category3</option>
                  </select>
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Quantity/Range
                  </label>
                  <div className="flex bg-white">
                    <input
                      type="text"
                      placeholder="From"
                      className="w-1/2 h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white mr-1"
                    />
                    <span className="bg-white pt-3">To</span>
                    <input
                      type="text"
                      placeholder="To"
                      className="w-1/2 h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white ml-1"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    MRP
                  </label>
                  <input
                    type="text"
                    placeholder="MRP"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Sp Rates
                  </label>
                  <input
                    type="text"
                    placeholder="Sp Rates"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    L1 Rates
                  </label>
                  <input
                    type="text"
                    placeholder="L1 Rates"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    L2 Rates
                  </label>
                  <input
                    type="text"
                    placeholder="L2 Rates"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    L3 Rates
                  </label>
                  <input
                    type="text"
                    placeholder="L3 Rates"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
              </div>
              <div className="flex justify-end bg-white">
                <button className="w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200">
                  Add More
                </button>
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

export default ProductPricing;
