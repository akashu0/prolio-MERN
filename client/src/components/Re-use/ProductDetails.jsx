import React, { useEffect, useState } from "react";
import bcimage from "../../assets/OBJECTS.png";
// import image1 from "../../assets/4.png";
import image1 from "../../assets/F.png";
import image2 from "../../assets/7.png";
import image3 from "../../assets/5.png";
import image4 from "../../assets/8.png";
import image5 from "../../assets/9.png";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import "./index.css";
import ProductPage1 from "./ProductPage1";
import { useParams } from "react-router-dom";

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
function ProductDetails() {
  const { id } = useParams();
  // console.log(id)
  const [data, setData] = useState();

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/product/getProductById/${id}`
        );
        setData(response.data);
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
              src={data?.sections1?.productImage[0]?.base64 || ""}
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
            <div className="flex items-center ">
              <p className=" mr-2 font-bold text-2xl">
                {data?.sections1?.productDetails?.productName || ""}
              </p>
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
            <p className="text-blue-500 pt-2 font-semibold">
              By {data?.sections1?.productDetails?.brandName || ""}
            </p>
            <p className="pt-3">
              {/* The lore (adj. loreal) is the region between the eyes and nostrils
              of birds, reptiles, and amphibians. In ornithology, the lore is
              the region between the eye and bill on the side of a bird's head.
              This region is sometimes featherless, and the skin may be tinted,
              as in many species of the{" "} */}
              {data?.sections1?.productDetails?.description1 || ""}
            </p>

            <div className="pt-3 items-center">
              <span className="text-blue-500 text-xl font-semibold">Price</span>
              <span className="px-3 font-semibold text-lg text-blue-500">
                : ₹ {data?.sections2?.variantFields[0]?.mrpValue || ""} / piece
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
                    {/* {data.size &&
                      data?.size.map((item) => (
                        <div className="mx-2 w-6 h-6 rounded-full text-center text-white bg-blue-800">
                          {item}
                        </div>
                      ))} */}
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
                  <label className="font-semibold bg-white">Email</label>
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

      {/* <ProductPage1 /> */}
      {/* </div> */}

      {/* </div> */}
      <div
        className="w-full h-max  bg-white"
        style={{ paddingBottom: "50px" }}
      >
        <div className="w-4/5 flex flex-col gap-y-4">
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
                    {data?.sections1?.productDetails?.productName || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Brand Name :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.brandName || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  product ID :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.productId || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Description 1 :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.description1 || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Description :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.description2 || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Key features :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.speciality || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Product Specifications :{" "}
                  <span className="font-normal bg-white">
                    {" "}
                    {data?.sections1?.specification[0]?.attributeName || ""}
                    &nbsp;:&nbsp;
                    {data?.sections1?.specification[0]?.value || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Importer :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.manufacturer || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Warranty :{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.warranty || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Speciality/Uniqueness :{" "}
                  <span className="font-normal bg-white">
                    {" "}
                    {data?.sections1?.productDetails?.speciality || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  Benefits to user :{" "}
                  <span className="font-normal bg-white">
                    {" "}
                    {data?.sections1?.productDetails?.benefits || ""}
                  </span>
                </span>
              </div>

              <div className="w-full flex py-1 bg-white">
                <span className="font-semibold text-left bg-white">
                  What kind of finishes it can make?:{" "}
                  <span className="font-normal bg-white">
                    {data?.sections1?.productDetails?.productfinish || ""}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-auto bg-white px-6 py-3 ">
            <h1 className="text-left font-bold bg-white">
              {" "}
              Products Buying Guide
            </h1>

            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Tip:{" "}
                <span className="font-normal text-sm bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has. Lorem Ipsum has
                </span>
              </span>
            </div>
            <div className="w-full flex py-1 bg-white">
              <span className="font-semibold text-left bg-white">
                Tip:{" "}
                <span className="font-normal text-sm bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has. Lorem Ipsum has
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
    </div>
  );
}

export default ProductDetails;
