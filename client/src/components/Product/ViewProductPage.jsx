import React, { useEffect, useState } from "react";
import Breadcrumb from "../Re-use/Breadcrumb";
import "./ViewProductPage.css";
import shareIcone from "../../assets/shareIcon.png";
import wishlistIcon from "../../assets/wishlisticon.png";
import ProductDetails1 from "../Re-use/ProductDetails1";
import SocialComponent from "../Re-use/SocialComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify-icon/react";
import cross from "../../assets/cross.png";
import { FiChevronRight } from "react-icons/fi";

function ViewProductPage() {
  const DropDownList = [
    "Product Details",
    "Social Media Handles",
    "Business Booster",
    "Pricing",
    "Reviews",
  ];

  const { id } = useParams();
  // console.log(id)
  const [data, setData] = useState();

  const [moreProducts, setMoreProducts] = useState([]);

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

  useEffect(() => {
    const apiUrl = `${apiURL}/product/getall-product`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setMoreProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);
  
  const renderComponent = () => {
    switch (selectedButton) {
      case "Product Details":
        return <ProductDetails1 data={data?.sections1 || ""} />;
        case "Social Media Handles":
          return <SocialComponent data={data?.sections4 || ""} />;
          // Add cases for other buttons if needed
          default:
            return null;
          }
        };
        
        const [images, setImages] = useState({
          img1: "https://imgs.search.brave.com/9RrO5zGL9IMRQklxSLZoTUbPC_2fCYDkSi36wt-Cfs8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/NjQwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
          img2: "https://imgs.search.brave.com/9RrO5zGL9IMRQklxSLZoTUbPC_2fCYDkSi36wt-Cfs8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/NjQwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw",
          img3: "https://imgs.search.brave.com/0UY2qPSV8pWV8YcArj2ir5aPct6MzZDEWbM-FlsvHlM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNzc5/MzE2NDUvcGhvdG8v/d29tYW4tYW5kLXlv/dW5nLWdpcmwtb3V0/ZG9vcnMtd2l0aC1w/ZW9wbGUtaW4tYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bG5V/UWZnTHlVZ21HUHR6/NkZzYXRIWVNub3dZ/Xzl3YmRQUXVYZmI4/WDNxQT0",
          img4: "https://imgs.search.brave.com/G7PMeUgzG1zh75C7cIXIVWlrcnUczSU8lKlLqkCC16w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTMyODgyMy9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1z/bWlsaW5nLW1hbGUt/ZW1wbG95ZWUtaW4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rUHZv/Qm02cUNZelFYTUFu/OUpVdHFMUkVYZTkt/UGxaeU1sOWktaWJh/VnVZPQ",
        });
        
        
        const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);
  const breadcrumbLinks = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "All Categories" },
    {
      path: "/categories/fashion-accessories",
      label: "Fashion Accessories and Footwear",
    },
    {
      path: "/categories/fashion-accessories/men-shirts",
      label: "Men- Shirts",
    },
    {
      path: "/categories/fashion-accessories/men-shirts/casual-shirt",
      label: "Casual Shirt",
    },
  ];

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <>
      <div className="main-container mt-16">
        <div className="container-1 border-r border-black">
          <div className="container-1-sub py-4 px-7">
            <Breadcrumb links={breadcrumbLinks} />
          </div>
          <div className="flex flex-col  justify-between lg:flex-row gap-3  px-3 lg:items-center my-3 z-0">
            <div className=" w-[500px] h-[450px] px-5 flex flex-col   lg:w-2/4 z-0">
              <img
                src={activeImg}
                alt=""
                className=" w-full h-full  bg-white  object-cover  rounded-xl"
              />
              <div className="flex pt-4 flex-row justify-between h-24">
                <img
                  src={images.img1}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImage(images.img1)}
                />
                <img
                  src={images.img2}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImage(images.img2)}
                />
                <img
                  src={images.img3}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImage(images.img3)}
                />
                <img
                  src={images.img4}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImage(images.img4)}
                />
              </div>
            </div>
            {/* ABOUT */}
            <div className="flex flex-col w-[500px] h-[450px]  lg:w-2/4  gap-4">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold ">Nike Invincible 3</h1>
                <div className="flex px-7 gap-4">
                  <img
                    className="w-7 h-7"
                    src={wishlistIcon}
                    alt="wishlistIcon"
                  />
                  <img className="w-7 h-7" src={shareIcone} alt="shareIcon" />
                </div>
              </div>
              <span className="font-semibold text-blue-900">By</span>
              <p className="text-gray-700">
                Con un'ammortizzazione incredibile per sostenerti in tutti i
                tuoi chilometri, Invincible 3 offre un livello di comfort
                elevatissimo sotto il piede per aiutarti a dare il massimo oggi,
              </p>
              <h6 className="text-xl text-blue-900 font-semibold">
                Price: ₹ / piece
              </h6>
              <h6 className="text-xl  font-semibold">Variation :</h6>
              <div className="flex  items-center gap-6 pt-2">
                <div className="items-center ">
                  <span className="font-semibold ">Colours</span>
                  <div className="w-52 h-24 bg-white shadow-md mt-1 rounded-md"></div>
                </div>
                <div className="items-center ">
                  <span className="font-semibold ">Sizes</span>
                  <div className="w-52 h-24 bg-white shadow-md mt-1 rounded-md"></div>
                </div>
              </div>
              <div className="pt-4 w-full ">
                <button className="bg-blue-900 text-white font-semibold w-full py-3 px-16 rounded-md h-full">
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-max bg-white mt-10">
            <div className="w-auto flex flex-col pt-5 mx-10 bg-white gap-y-4 rounded-lg pb-7">
              <div className="w-full grid grid-flow-col  border-[1px]  rounded-lg">
                {DropDownList.map((value, key) => {
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`border-x-[1px]  py-2  font-semibold ${
                        selectedButton === value
                          ? "bg-blue-900 text-white"
                          : "bg-white text-gray-500"
                      }`}
                      onClick={() => setSelectedButton(value)}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              {renderComponent()}
            </div>
          </div>
          {/* product Guide tips */}
          <div className="w-full h-auto mt-5 bg-white px-10 py-3 pb-10">
            <h1 className="text-left font-bold bg-white">
              {" "}
              Products Buying Guide
            </h1>

            <div className="w-full flex py-1 bg-white">
              <span className="font-bold text-left bg-white">
                Tip:{" "}
                <span className="font-normal text-sm bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has. Lorem Ipsum has
                </span>
              </span>
            </div>
            <div className="w-full flex py-1 bg-white">
              <span className="font-bold text-left bg-white">
                Tip:{" "}
                <span className="font-normal text-sm bg-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has. Lorem Ipsum has
                </span>
              </span>
            </div>

            <div className="w-full h-7 flex gap-4 bg-white ">
              <input
                className="w-[90%] border h-7 px-3 text-sm rounded-md bg-white"
                type="search"
                name=""
                id=""
                placeholder="Add tips about the product Offers users more information"
              />
              <button className="px-6 bg-blue-900 text-xs  text-white rounded">
                Send
              </button>
            </div>
          </div>

          {/* Opportunities */}
          <div className="w-full mt-4 h-[250px] bg-white pl-6 py-3 flex pb-10">
            <div className="w-2/5 border-r-[2px] border-r-black pr-2 flex flex-col gap-y-2 bg-white">
              <h1 className="text-left font-bold bg-white">Opportunities</h1>

              <div className="w-full flex items-center gap-2 bg-white">
                <div className="w-[95%] border py-3 px-2  bg-white border-blue-800 rounded-xl flex justify-between items-center">
                  <h1 className="text-sm font-bold px-1 bg-white">
                    Become an authorized Specialist
                  </h1>
                  <button className="px-3 py-1 text-sm bg-blue-900 bg-lightBlue-800 text-white rounded-md">
                    Apply
                  </button>
                </div>
                <div className="w-[20px] h-[20px] border-[1px] border-black flex justify-center bg-white items-center rounded-full">
                  i{" "}
                </div>
              </div>

              <div className="w-full flex items-center bg-white gap-2">
                <div className="w-[95%] border py-3 px-2  border-blue-800 rounded-xl bg-white flex justify-between items-center">
                  <h1 className="text-sm font-bold px-1 bg-white">
                    Become a supplier
                  </h1>
                  <button className="px-3 py-1 text-sm bg-blue-900 bg-lightBlue-800 text-white rounded-md">
                    Apply
                  </button>
                </div>
                <div className="w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center rounded-full">
                  i{" "}
                </div>
              </div>

              <div className="w-full flex items-center gap-2 bg-white">
                <div className="w-[95%] border py-3 px-2 bg-white  border-blue-800 rounded-xl flex justify-between items-center">
                  <h1 className="text-sm font-bold px-1 bg-white">
                    Become an Dealer/Reseller
                  </h1>
                  <button className="px-3 py-1 text-sm bg-blue-900  bg-lightBlue-800 text-white rounded-md">
                    Apply
                  </button>
                </div>
                <div className="w-[20px] h-[20px] border-[1px] border-black flex justify-center items-center rounded-full">
                  i{" "}
                </div>
              </div>
            </div>

            <div className="contain w-3/5 px-2 h-full overflow-y-scroll bg-white ">
              <div className="w-full flex justify-between just items-center gap-5 bg-white">
                <h1 className="text-left text-black font-bold text-lg  bg-white">
                  Product Question & Answer
                </h1>
                <Icon
                  icon="mingcute:search-line"
                  className={`px-4  items-center  ${
                    isSearchVisible ? "hidden" : ""
                  }`}
                  onClick={toggleSearch}
                />

                <div
                  className={`px-4 bg-transparent flex flex-row gap-4 ${
                    isSearchVisible ? "" : "hidden"
                  }`}
                >
                  <input
                    className="h-4 py-3 px-4 text-xs rounded-md focus:outline-none bg-white border border-gray-500"
                    type="search"
                    name=""
                    id=""
                    placeholder="what"
                  />
                  <img
                    src={cross}
                    alt=""
                    className="bg-transparent"
                    onClick={toggleSearch}
                  />
                </div>
              </div>

              <div
                className={`flex justify-between items-center mt-2 bg-white ${
                  isSearchVisible ? "" : "hidden"
                }`}
              >
                <span className="text-xs bg-white">
                  Didn't get the right answer you were{" "}
                </span>
                <button className="px-3 py-1 bg-blue-900 text-sm  bg-lightBlue-800 text-white rounded-md">
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
                  <Icon icon="ci:octagon-check" /> certified Seller
                </span>
              </div>
            </div>
          </div>
          {/* More ProductSection */}
          <div className="w-[920px]  px-2 mx-7 mt-4 h-auto rounded-xl bg-white relative">
            <div className="w-full  bg-white rounded-lg ">
              <h1 className="text-left text-black font-semibold text-xl bg-white py-4 px-3">
                More Products From the seller
              </h1>

              <div className="scrollcontainer w-[870px] overflow-x-scroll grid bg-white grid-flow-col gap-4 px-3 ">
                {moreProducts.map((product, index) => (
                  <div
                    key={index}
                    className="mt-5 bg-transparent w-72 min-h-[10rem] rounded-lg shadow-xl   overflow-hidden"
                  >
                    <img
                      className="w-full h-[200px]  object-center object-cover"
                      src={product.sections1.productImage[0]?.base64 || ""}
                    />
                    <div className="p-5 flex-col gap-3">
                      <h1 className="font-bold text-lg text-black overflow-hidden overflow-ellipsis">
                        {product.sections1.productDetails.productName}
                      </h1>
                      <div className="pt-3 text-blue-900 font-semibold">
                        <span className="text-lg block">
                          By {product.sections1.productDetails.brandName}
                        </span>
                        <p className="mt-2 font-bold">
                          Price : ₹{" "}
                          {product.sections2?.variantFields[0]?.mrpValue || ""}{" "}
                          / piece
                        </p>
                      </div>
                      <div className="w-full pt-3">
                        <button className="bg-blue-900 h-10 rounded-xl text-white font-semibold w-full">
                          Send Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="absolute top-0 right-0 bottom-0 px-2 bg-transparent flex items-center justify-center cursor-pointer">
                  <FiChevronRight className="bg-white  h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="w-[350px] h-[350px] bg-white mt-5 rounded-2xl mx-5"></div>
          <div className="w-[350px] h-[350px] bg-white mt-5 rounded-2xl mx-5"></div>
          <div className="w-[350px] h-[350px] bg-white mt-5 rounded-2xl mx-5"></div>
        </div>
      </div>
    </>
  );
}

export default ViewProductPage;
