import React, { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import "./index.css";
import axios from "axios";
import image1 from "../../assets/F.png";
const DropDownList = [
  "Product Details",
  "Social Media Handles",
  "Business Booster",
  "Pricing",
  "Reviews",
];
const MoreProducts = [
  { name: "Stainless Steel", company: "Anish Industries", Price: "72" },
  { name: "Stainless Steel", company: "Anish Industries", Price: "72" },
  { name: "Stainless Steel", company: "Anish Industries", Price: "72" },
  { name: "Stainless Steel", company: "Anish Industries", Price: "72" },
  { name: "Stainless Steel", company: "Anish Industries", Price: "72" },
];

const ProductPage1 = () => {
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
    <div className="w-full h-max flex bg-slate-200"   style={{  paddingBottom: "50px" }}>
      <div className="w-4/5 flex flex-col gap-y-4">
        {/*############ Section 1 ############## */}
        <div className="w-full flex bg-white flex-col px-6 py-3 justify-center items-center gap-4">
          <div className="w-full h-auto   ">
            <div className="w-full grid grid-flow-col  border-[1px] rounded-md ">
              {DropDownList.map((value, key) => {
                return (
                  <button
                    key={key}
                    type="button"
                    className="border-x-[1px] bg-white py-2 text-gray-600 font-semibold"
                  >
                    {" "}
                    {value}
                  </button>
                );
              })}
            </div>

            <div className="w-full flex py-3 bg-white">
              <span className="font-semibold text-left bg-white">
                Product Name :{" "}
                <span className="font-normal bg-white">
                  {data.productName}{" "}
                </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Brand Name :{" "}
                <span className="font-normal bg-white">Arrow </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                product ID :{" "}
                <span className="font-normal bg-white">{data.productID} </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Description 1 :{" "}
                <span className="font-normal bg-white">
                  {data.description1}{" "}
                </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Description :{" "}
                <span className="font-normal bg-white">
                  {data.description2}
                </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Key features :{" "}
                <span className="font-normal bg-white">
                  {" "}
                  {data.description2}
                </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Product Specifications :{" "}
                <span className="font-normal bg-white">Mens Shirts</span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Importer :{" "}
                <span className="font-normal bg-white">
                  {data.manufacturer}
                </span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Warranty :{" "}
                <span className="font-normal bg-white">{data.warranty}</span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Speciality/Uniqueness :{" "}
                <span className="font-normal bg-white">Car air Freshner</span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Benefits to user :{" "}
                <span className="font-normal bg-white"> {data.benefits}</span>
              </span>
            </div>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                What kind of finishes it can make?:{" "}
                <span className="font-normal bg-white">
                  {data.productFinish}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/*############ Section 2 ############## */}

        <div className="w-full h-auto bg-white px-6 py-3 ">
          <h1 className="text-left font-bold bg-white">
            {" "}
            Products Buying Guide
          </h1>

          <div className="w-full flex py-1 bg-white">
            <span className="font-semibold text-left bg-white">
              Tip:{" "}
              <span className="font-normal text-sm bg-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has. Lorem Ipsum has
              </span>
            </span>
          </div>
          <div className="w-full flex py-1 bg-white">
            <span className="font-semibold text-left bg-white">
              Tip:{" "}
              <span className="font-normal text-sm bg-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has. Lorem Ipsum has
              </span>
            </span>
          </div>

          <div className="w-full h-7 flex gap-4 bg-white">
            <input
              className="w-[90%]  bg-white"
              type="search"
              name=""
              id=""
              placeholder="Add tips about the product Offers users more information"
            />
            <button className="px-4 bg-lightBlue-800 text-white rounded-md">
              Send
            </button>
          </div>
        </div>

        {/*############ Section 3 ############## */}

        <div className="w-full  h-[250px] bg-white pl-6 py-3 flex">
          <div className="w-2/5 border-r-[1px] pr-2 flex flex-col gap-y-2 bg-white">
            <h1 className="text-left font-bold bg-white">Opportunities</h1>

            <div className="w-full flex items-center gap-2 bg-white">
              <div className="w-[95%] border-2 py-3 px-2  bg-white border-blue-800 rounded-xl flex justify-between items-center">
                <h1 className="text-sm font-bold px-1 bg-white">
                  Become an authorized Specialist
                </h1>
                <button className="px-3 py-1 text-sm bg-white bg-lightBlue-800 text-white rounded-md">
                  Apply
                </button>
              </div>
              <div className="w-[20px] h-[20px] border-[1px] border-black flex justify-center bg-white items-center rounded-full">
                i{" "}
              </div>
            </div>

            <div className="w-full flex items-center bg-white gap-2">
              <div className="w-[95%] border-2 py-3 px-2  border-blue-800 rounded-xl bg-white flex justify-between items-center">
                <h1 className="text-sm font-bold px-1 bg-white">
                  Become a supplier
                </h1>
                <button className="px-3 py-1 text-sm bg-white bg-lightBlue-800 text-white rounded-md">
                  Apply
                </button>
              </div>
              <div className="w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center rounded-full">
                i{" "}
              </div>
            </div>

            <div className="w-full flex items-center gap-2 bg-white">
              <div className="w-[95%] border-2 py-3 px-2 bg-white  border-blue-800 rounded-xl flex justify-between items-center">
                <h1 className="text-sm font-bold px-1 bg-white">
                  Become an Dealer/Reseller
                </h1>
                <button className="px-3 py-1 text-sm bg-white  bg-lightBlue-800 text-white rounded-md">
                  Apply
                </button>
              </div>
              <div className="w-[20px] h-[20px] border-[1px] border-black flex justify-center items-center rounded-full">
                i{" "}
              </div>
            </div>
          </div>

          <div className="contain w-3/5 px-2 h-full overflow-y-scroll bg-white ">
            <div className="w-full flex just items-center gap-2 bg-white">
              <h1 className="text-left text-black font-semibold text-sm bg-white">
                Product Question & Answer
              </h1>
              <input
                className="h-4 py-3 rounded-md bg-white"
                type="search"
                name=""
                id=""
                placeholder="Search"
              />
              <button className="px-3 py-1 text-sm  bg-lightBlue-800 bg-white text-white rounded-md">
                Search
              </button>
            </div>

            <div className="flex justify-between items-center mt-2 bg-white ">
              <span className="text-xs bg-white">
                {" "}
                Didn't get the right answer you were{" "}
              </span>
              <button className="px-3 py-1 bg-white text-sm  bg-lightBlue-800 text-white rounded-md">
                Post Question
              </button>
            </div>

            <div className="w-full text-left bg-white flex flex-col border-b-[1px] border-b-slate-900 py-2">
              <span className="font-semibold text-left bg-white">
                Q:{" "}
                <span className="font-normal text-xs bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has text ever{" "}
                </span>{" "}
                <span className="font-normal text-xs bg-white">?</span>
              </span>

              <span className="font-semibold text-left bg-white">
                A:{" "}
                <span className="font-medium text-xs bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>{" "}
                <span className="font-normal text-xs bg-white">?</span>
              </span>

              <span className="text-xs text-gray-600 bg-white flex items-center gap-2">
                {" "}
                <Icon icon="ci:octagon-check" /> certified Seller
              </span>
            </div>
            <div className="w-full text-left flex flex-col bg-white border-b-[1px] border-b-slate-900 py-2">
              <span className="font-semibold text-left bg-white">
                Q:{" "}
                <span className="font-normal text-xs bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has text ever{" "}
                </span>{" "}
                <span className="font-normal text-xs">?</span>
              </span>

              <span className="font-semibold text-left">
                A:{" "}
                <span className="font-medium text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>{" "}
                <span className="font-normal text-xs">?</span>
              </span>

              <span className="text-xs text-gray-600 flex items-center gap-2">
                {" "}
                <Icon icon="ci:octagon-check" /> certified Seller
              </span>
            </div>
          </div>
        </div>

        {/*############ Section 4 ############## */}

        <div className="w-full px-2 h-auto bg-white">
          <div className="w-full  bg-white rounded-lg ">
            <h1 className="text-left text-black font-semibold text-xl bg-white py-4 px-3">
              More Products From the seller
            </h1>

            <div className="scrollcontainer w-[870px] overflow-x-scroll grid bg-white grid-flow-col gap-4 px-3 ">
              {MoreProducts.map((value, key) => {
                return (
                  <div
                    key={key}
                    className="w-[300px] h-[350px] bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  >
                    <div className="w-full h-1/2  bg-green-500 rounded-t-xl">
                      <img
                        src={image1}
                        className="w-5/5 mb-3  border bg-white rounded-xl bg-cover"
                        alt="Main Image"
                      />
                    </div>

                    <div className="w-full h-1/2 px-6 bg-white">
                      <h1 className="text-left text-xl font-bold bg-white pt-4 pb-9">
                        {value.name}
                      </h1>
                      <h1 className="text-left text-base font- text-midnight bg-white ">
                        By {value.company}
                      </h1>
                      <h1 className="text-left text-base font-bold text-midnight bg-white">
                        Price ₹{value.Price} / Piece
                      </h1>
                      <button className="w-full bg-midnight text-white py-2 bg-white rounded-md text-sm font-semibold">
                        {" "}
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 "></div>
    </div>
  );
};

export default ProductPage1;
