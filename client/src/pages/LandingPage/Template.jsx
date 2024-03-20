import React from "react";

const Template = () => {
  return (
    <>
      <div className=" w-full h-full z-0 ">
        <div className="bg-transparent animate-pulse ">
          <div className="bg-gray-300 w-[1000px] ml-20 mt-4 rounded-xl h-[300px">
            <div className="bg-gray-300 ">
              <p className="  pt-20 px-20   text-2xl font-medium font-serif bg-transparent text-white "></p>
            </div>
            <div className=" pt-52 px-20 bg-transparent text-white ">
              <button className="w-44 h-10 rounded-lg  text-sm border bg-gray-300"></button>
              <button className="w-44 h-10 rounded-lg ml-9 text-sm border bg-gray-300"></button>
            </div>
          </div>
          {/* Section 2 */}
          <div className="w-[1000px] bg-transparent h-[200px] ml-20 mt-6 gap-8 flex">
            <div className="w-1/2 bg-gray-300 rounded-xl flex">
              <div className="w-[280px] bg-gray-300 h-full pt-7"></div>
              <div className="h-full w-[180px] bg-transparent"></div>
            </div>
            <div className="w-1/2  bg-gray-300  rounded-xl flex">
              <div className="w-[280px] bg-gray-300 h-full pt-7"></div>
              <div className="h-full w-[180px] bg-gray-300 "></div>
            </div>
          </div>

          {/* Section 3 */}

          <div className="w-[1000px] bg-gray-300 ml-20 mt-4 h-auto rounded-xl  ">
            <div className="w-full bg-transparent pt-7 px-6 ">
              <div className="flex items-center justify-between bg-transparent"></div>

              <div className="grid grid-cols-1 bg-gray-300 md:grid-cols-3 gap-6 ">
                <div className="mt-5 bg-gray-300 w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden">
                  <img className="w-full h-[200px] bg-gray-200 object-center object-cover" />
                  <div className="p-5 flex-col bg-gray-200 gap-3">
                    <div className="pt-3  rounded-md font-semibold">
                      <span className="text-lg block"></span>
                      <p className="mt-2 font-bold"></p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 bg-gray-300 w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden">
                  <img className="w-full h-[200px] bg-gray-200 object-center object-cover" />
                  <div className="p-5 flex-col bg-gray-200 gap-3">
                    <div className="pt-3  rounded-md font-semibold">
                      <span className="text-lg block"></span>
                      <p className="mt-2 font-bold"></p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 bg-gray-300 w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden">
                  <img className="w-full h-[200px] bg-gray-200 object-center object-cover" />
                  <div className="p-5 flex-col bg-gray-200 gap-3">
                    <div className="pt-3  rounded-md font-semibold">
                      <span className="text-lg block"></span>
                      <p className="mt-2 font-bold"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-transparent pt-7 px-6 ">
              <div className="flex items-center justify-between bg-transparent">
                <h1 className="bg-transparent text-3xl font-semibold font-serif">
                  Most viewed Products
                </h1>
                <span className="bg-transparent text-blue-800 font-semibold underline text-sm cursor-pointer">
                  View all
                </span>
              </div>

              <div className="grid grid-cols-1 bg-transparent md:grid-cols-3 gap-6 ">
                <div className="mt-5 bg-gray-300 w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden">
                  <img className="w-full h-[200px] bg-gray-200 object-center object-cover" />
                  <div className="p-5 flex-col bg-gray-200 gap-3">
                    <div className="pt-3  rounded-md font-semibold">
                      <span className="text-lg block"></span>
                      <p className="mt-2 font-bold"></p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 bg-gray-300 w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden">
                  <img className="w-full h-[200px] bg-gray-200 object-center object-cover" />
                  <div className="p-5 flex-col bg-gray-200 gap-3">
                    <div className="pt-3  rounded-md font-semibold">
                      <span className="text-lg block"></span>
                      <p className="mt-2 font-bold"></p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 bg-gray-300 w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden">
                  <img className="w-full h-[200px] bg-gray-200 object-center object-cover" />
                  <div className="p-5 flex-col bg-gray-200 gap-3">
                    <div className="pt-3  rounded-md font-semibold">
                      <span className="text-lg block"></span>
                      <p className="mt-2 font-bold"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
