import React from "react";

function Social({ onBack, onSubmit }) {
  return (
    <>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl mt-10 py-8 mx-auto">
        <div className="w-4/5 bg-white">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold bg-white text-blue-600">
              Social
            </h2>
            <p className="text-sm bg-white">
              Add your information and get more Business
            </p>
          </div>

          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Meta Description</p>
            <textarea
              placeholder="Add Meta Description of your Product"
              className="w-full h-16 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
            ></textarea>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Tag</p>
            <textarea
              placeholder="Add Products Tag"
              className="w-full h-16 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
            ></textarea>
          </div>
          <div className="p-4 bg-white">
            <p className="bg-white font-semibold">Social Media Handles</p>
            <p className="bg-white text-sm">Add Social Media Handles product</p>
            <div className="bg-white shadow-xl rounded-2xl p-4">
              <div className="p-4 bg-white flex space-x-4">
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Handle
                  </label>
                  <input
                    type="text"
                    placeholder="Opportunities"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    URL
                  </label>
                  <input
                    type="text"
                    placeholder="value"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
              </div>
              <div className="p-4 bg-white flex space-x-4">
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Handle
                  </label>
                  <input
                    type="text"
                    placeholder="value"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    URL
                  </label>
                  <input
                    type="text"
                    placeholder="value"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
              </div>
              <div className="p-4 bg-white flex space-x-4">
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Handle
                  </label>
                  <input
                    type="text"
                    placeholder="Opportunities"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    URL
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

          {/* <div className="p-4 bg-white mt-4">
            <p className="bg-white font-semibold">Media post Bank</p>
            <p className="bg-white text-sm">Add Social Media Handles product</p>
            <div className="bg-white shadow-xl rounded-2xl p-4">
              <div className="p-4 bg-white flex space-x-4">
               
              </div>
              
              <div className="p-4 bg-white flex space-x-4">
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Handle
                  </label>
                  <input
                    type="text"
                    placeholder="Opportunities"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                  URL
                  </label>
                  <input
                    type="text"
                    placeholder="value"
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
              </div>
              
            
            </div>
          </div> */}

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

export default Social;
