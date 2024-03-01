import React, { useEffect, useState } from "react";
import bcimage from "../../assets/OBJECTS.png";
import image1 from "../../assets/4.png";
import image2 from "../../assets/7.png";
import image3 from "../../assets/5.png";
import image4 from "../../assets/8.png";
import image5 from "../../assets/9.png";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import ProductPage1 from "./ProductPage1";

function ProductDetails() {
  const [data, setData] = useState([]);

  const apiURL = "http://localhost:5000/api";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/superAdmin/getAllCategory`);
        console.log(response.data[0]);
        setData(response.data[0]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-20">
      {/* <p className="px-4 text-gray-600">
      Home/All Categories/Fashion Accessories And Footwear/ Mens-Shirt
    </p> */}
      <div className="flex items-start">
        <div className="w-full bg-slate-400 flex ">
          <div className="w-3/5 px-10">
            <img
              src={image1}
              className="w-5/5 mb-3  border bg-white rounded-xl bg-cover"
              alt="Main Image"
            />
            {/* Main image */}
            <div className="flex">
              <img
                src={image5}
                className="w-1/4 mr-1 border bg-white rounded-xl h-50 "
                alt="Small Image"
              />
              {/* Small image */}
              <img
                src={image2}
                className="w-1/4 mr-1 mx-2 border bg-white rounded-xl h-50"
                alt="Small Image"
              />
              {/* Small image */}
              <img
                src={image5}
                className="w-1/4 mr-1 mx-2 border bg-white rounded-xl h-50"
                alt="Small Image"
              />
              {/* Small image */}
              <img
                src={image2}
                className="w-1/4 border mx-2  bg-white rounded-xl h-50"
                alt="Small Image"
              />
              {/* Small image */}
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex items-center">
              <p className="mr-2 font-bold text-2xl">{data.productName}</p>
              <div className="flex px-36 mt-5">
                {/* <Icon
                  icon="mdi-light:bluetooth"
                  className="mr-1 bg-blue-200  rounded-full w-5 h-5 font-bold"
                /> */}
                <Icon
                  icon="mdi:heart-outline"
                  className="mr-1 bg-blue-200 text-blue-700 rounded-full w-5 h-5 font-bold"
                />

                <Icon
                  icon="material-symbols:share-outline"
                  className=" bg-blue-200 text-blue-700 rounded-full w-5 h-5 font-bold"
                />
              </div>
            </div>
            <p className="text-blue-500 pt-2 font-semibold">By {data.brand}</p>
            <p className="pt-3">
              The lore (adj. loreal) is the region between the eyes and nostrils
              of birds, reptiles, and amphibians. In ornithology, the lore is
              the region between the eye and bill on the side of a bird's head.
              This region is sometimes featherless, and the skin may be tinted,
              as in many species of the{" "}
            </p>

            <div className="pt-3 items-center">
              <span className="text-blue-500 text-xl font-semibold">Price</span>
              <span className="px-3 font-semibold text-lg text-blue-500">
                : ₹ {data.price} / piece
              </span>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-lg">Variations :</p>
              <div className="flex pt-2">
                <div className="w-1/2">
                  <span>Colours</span>
                  <div></div>
                </div>
                <div className="w-1/2">
                  <span>Sizes</span>
                  <div className="w-5/5 h-16 pt-2 bg-white shadow-lg flex flex-wrap">
                    {data.size &&
                      data?.size.map((item) => (
                        <div className="mx-2 w-6 h-6 rounded-full text-center text-white bg-blue-800">
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button className="bg-blue-900  h-9 text-white w-full">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-screen flex justify-center">
          <div className="w-4/5  ">
            <div
              className="h-60 mt-5 rounded"
              // style={{ border: "1px solid black", borderRadius: "50px" }}
            >
              <h1 className="font-semibold py-4 px-3 bg-white">
                Company Details
              </h1>
              <div className="px-3 bg-white">
                <div className="flex items-center  py-1 bg-white">
                  <label className="font-semibold bg-white">Company Name</label>
                  <span className="px-10 bg-white">: Aroow</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Owner Name
                  </label>
                  <span className="px-10 bg-white">: Sharath Kumar</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Place
                  </label>
                  <span className="px-10 bg-white">: Delhi</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Year Established
                  </label>
                  <span className="px-10 bg-white">: 1998</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Business Type
                  </label>
                  <span className="px-10 bg-white">: Exports</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Total Employees
                  </label>
                  <span className="px-10 bg-white">: 250-300</span>
                </div>
              </div>
            </div>
            <div className="h-48 mt-10 bg-white rounded-md">
              <h1 className="font-semibold py-4 px-3 bg-white">
                Contact Details
              </h1>
              <div className="px-3 bg-white">
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold bg-white">
                    Email 
                  </label>
                  <span className="px-10 bg-white">: Arrow@gmail.com</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Contact 
                  </label>
                  <span className="px-10 bg-white">: 9864678667</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Address
                  </label>
                  <span className="px-10 bg-white text-xs">
                    : Huaxin Road, Chendong industria, Huda street
                  </span>
                </div>
                {/* <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Year Established
                  </label>
                  <span className="px-10 bg-white">: 1998</span>
                </div>
                <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Business Type
                  </label>
                  <span className="px-10 bg-white">: Exports</span>
                </div> */}
                {/* <div className="flex items-center py-1 bg-white">
                  <label className="font-semibold text-sm bg-white">
                    Total Employees
                  </label>
                  <span className="px-10 bg-white">: 250-300</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
   
      {/* <div
        class=" px-14 max-h-full bg-white"
        style={{ width: "70%", paddingBottom: "50px" }}
      >
        <div class="bg-white w-full pt-10 flex items-center justify-between">
          <span class="inline-flex justify-center items-center bg-blue-900 text-white border w-40 h-10 ">
            Product details
          </span>
          <span
            class="inline-flex justify-center items-center bg-white text-gray-400 w-40 border h-10 px-4 hover:bg-blue-900 hover:text-white "
            style={{ transition: "0.3s all ease-in-out" }}
          >
            Social Media
          </span>
          <span
            class="inline-flex justify-center items-center bg-white text-gray-400 w-40 border h-10 px-4  hover:bg-blue-900 hover:text-white"
            style={{ transition: "0.3s all ease-in-out" }}
          >
            Business Booster
          </span>
          <span
            class="inline-flex justify-center items-center bg-white text-gray-400 w-40 border h-10  hover:bg-blue-900 hover:text-white"
            style={{ transition: "0.3s all ease-in-out" }}
          >
            Pricing
          </span>
          <span
            class="inline-flex justify-center items-center bg-white text-gray-400 w-40 border h-10 px-4  hover:bg-blue-900 hover:text-white"
            style={{ transition: "0.3s all ease-in-out" }}
          >
            Reviews
          </span>
        </div>

        <div className="bg-white mt-5">
          <p className="bg-white font-semibold">
            Product Name{" "}
            <span className="px-5 bg-white text-sm ">: {data.productName}</span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Brand Name{" "}
            <span className="px-5 bg-white text-sm ">: {data.brand}</span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Product ID
            <span className="px-5 bg-white text-sm ">: {data.productID}</span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Description 1
            <span className="px-5 bg-white text-sm ">
              : {data.description1}
            </span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Description
            <span className="px-5 bg-white text-sm ">
              : {data.description2}
            </span>
          </p>
          <p className="bg-white font-semibold pt-4">
            key features
            <span className="px-5 bg-white text-sm ">
              : {data.description2}
            </span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Product Specifications
            <span className="px-5 bg-white text-sm ">: Mens Shirts</span>
          </p>

          <p className="bg-white font-semibold pt-4">
            Importer
            <span className="px-5 bg-white text-sm ">
              : {data.manufacturer}
            </span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Warranty
            <span className="px-5 bg-white text-sm ">: {data.warranty}</span>
          </p>
          <p className="bg-white font-semibold pt-4">
            Benefits to User
            <span className="px-5 bg-white text-sm ">: {data.benefits}</span>
          </p>
          <p className="bg-white font-semibold pt-4">
            What kind of finishes it can make ?
            <span className="px-5 bg-white text-sm ">
              : {data.productFinish}
            </span>
          </p>
        </div>
      </div> */}
      {/* <div
        class="w-4/5 px-14 mt-5 max-h-full bg-white"
        style={{ width: "70%" }}
      >
        <div className="w-full h-52  bg-white">
          <div class="bg-white w-4/5 pt-10 flex items-center justify-between">
            <p class="font-semibold bg-white text-lg">Products Buying Guide</p>
          </div>

          <div className="bg-white mt-5">
            <p className="bg-white font-bold text-sm">
              Tips
              <span className="px-5 bg-white font-semibold text-sm text-gray-400 ">
                : Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs?
              </span>
            </p>
            <p className="bg-white font-bold text-sm">
              Tips
              <span className="px-5 bg-white font-semibold text-sm text-gray-400 ">
                : Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs?
              </span>
            </p>
            <div className="w-full mx-10 flex bg-white mt-3">
              <input
                type="text"
                placeholder="Enter your product category"
                className="w-3/4 h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
              />
              <button
                type="submit"
                className=" w-20 rounded h-9 mx-20 bg-blue-950 text-white hover:bg-green-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        class="w-4/5 px-14 mt-5 bg-white flex"
        style={{ height: "290px", marginBottom: "100px", width: "70%" }}
      > */}
        {/* <div className="w-1/2   bg-white mt-3 border-r-2 border-r-black">
          <div class="bg-white w-4/5  flex items-center justify-between">
            <p class="font-semibold bg-white text-lg">Opportunities</p>
          </div> */}

          {/* <div className="bg-white mt-5 w- flex ">
            <div className="flex bg-white border border-blue-800 h-14 rounded-md">
              <p className="bg-white inline-block font-semibold  text-xs text-center py-4 px-3">
                Become an authorized Specialist
              </p>
              <button
                type="submit"
                className=" w-12 mt-3 rounded h-9 mx-20 bg-blue-950 text-white hover:bg-green-500"
                style={{ transition: "0.3s all ease-in-out" }}
              >
                Apply
              </button>
            </div>
          </div> */}
          {/* <div className="bg-white mt-5 w- flex ">
            <div className="flex bg-white border border-blue-800 h-14 rounded-md">
              <p className="bg-white inline-block font-semibold  text-xs text-center py-4 px-3">
                Become an Supplier
              </p>
              <button
                type="submit"
                className=" w-12 mt-3 rounded h-9 mx-20 bg-blue-950 text-white hover:bg-green-500"
                style={{ transition: "0.3s all ease-in-out" }}
              >
                Apply
              </button>
            </div>
          </div> */}
          {/* <div className="bg-white mt-5 w- flex ">
            <div className="flex bg-white border border-blue-800 h-14 rounded-md">
              <p className="bg-white inline-block font-semibold  text-xs text-center py-4 px-3">
                Become an Supplier
              </p>
              <button
                type="submit"
                className=" w-12 mt-3 rounded h-9 mx-20 bg-blue-950 text-white hover:bg-green-500"
                style={{ transition: "0.3s all ease-in-out" }}
              >
                Apply
              </button>
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className="w-1/2 pt-2  bg-white px-5">
          <div class="bg-white w-4/5 flex items-center justify-between">
            <p class="font-semibold bg-white text-lg">
              Products Question And Answers
            </p>
          </div>

          <div className="bg-white mt-5">
            <p className="bg-white font-bold text-sm">
              Q
              <span className="px-5 bg-white font-semibold text-sm text-gray-400 ">
                : Lorem ipsum, or lipsum as it is sometimes known?
              </span>
            </p>
            <p className="bg-white font-bold text-sm">
              Q
              <span className="px-5 bg-white font-semibold text-sm text-gray-400 ">
                : Lorem ipsum, or lipsum as it is sometimes known?
              </span>
            </p>
          </div>
        </div> */}

<ProductPage1 />
      {/* </div> */}

      {/* </div> */}
    </div>
  );
}

export default ProductDetails;
