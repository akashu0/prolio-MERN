import React, { useEffect, useState } from "react";
import bannerImage from "../../assets/bannerImg.png";
import image2 from "../../assets/image2.png";
import axios from "axios";
import Template from "./Template";

function LandingPage() {
  const [banner, setBanner] = useState({
    bannerImage: bannerImage,
  });
  const [Loading, setLoading] = useState(false);

  const [productData, setCardsData] = useState([]);

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const apiUrl = `${apiURL}/product/getall-product`;
    setLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        setCardsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className=" w-full h-full z-0 ">
        {/*Banner Section */}
        {Loading ? (
          <Template />
        ) : (
          <div className="bg-transparent">
            <div
              className="bg-blue-400 w-[1000px] ml-20 mt-4 rounded-xl h-[300px] realtive"
              style={{
                backgroundImage: `url(${banner.bannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative">
                <p className="absolute  pt-20 px-20   text-2xl font-medium font-serif bg-transparent text-white ">
                  Discover the world of <br /> product at your <br />
                  fingertips.
                </p>
              </div>
              <div className="absolute pt-52 px-20 bg-transparent text-white ">
                <button className="w-44 h-10 rounded-lg  text-sm bg-blue-950">
                  Join Prolio As Buyer
                </button>
                <button className="w-44 h-10 rounded-lg ml-9 text-sm bg-blue-950">
                  Join Prolio As Seller
                </button>
              </div>
            </div>
            {/* Section 2 */}
            <div className="w-[1000px] bg-transparent h-[200px] ml-20 mt-6 gap-8 flex">
              <div className="w-1/2 bg-white rounded-xl flex">
                <div className="w-[280px] bg-white h-full pt-7">
                  <span className="px-7 text-xl font-bold text-blue-800 bg-transparent">
                    Join in Forums
                  </span>
                  <p className="pt-3 px-7 font-semibold text-sm text-blue-800 bg-transparent">
                    Join as a member in forums you will get more information and
                    offers about the Products, Services, Software's.
                  </p>
                </div>
                <div
                  className="h-full w-[180px] bg-transparent"
                  style={{
                    backgroundImage: `url(${image2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="w-1/2 bg-white  rounded-xl flex">
                <div className="w-[280px] bg-white h-full pt-7">
                  <span className="px-7 text-xl font-bold text-blue-800 bg-transparent">
                    Interested In Business
                  </span>
                  <p className="pt-3 px-7 font-semibold text-sm text-blue-800 bg-transparent">
                    Join as a member in forums you will get more information and
                    offers about the Products, Services, Software's.
                  </p>
                </div>
                <div
                  className="h-full w-[180px] bg-transparent"
                  style={{
                    backgroundImage: `url(${image2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>

            {/* Section 3 */}

            <div
              className="w-[1000px] bg-white ml-20 mt-4 h-auto rounded-xl  "
              // style={{ paddingBottom: "400px" }}
            >
              <div className="w-full bg-transparent pt-7 px-6 ">
                <div className="flex items-center justify-between bg-transparent">
                  <h1 className="bg-transparent text-3xl font-semibold font-serif">
                    Trending Products
                  </h1>
                  <span className="bg-transparent text-blue-800 font-semibold underline text-sm cursor-pointer">
                    View all
                  </span>
                </div>

                <div className="grid grid-cols-1 bg-transparent md:grid-cols-3 gap-6 ">
                  {productData.map((product, index) => (
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
                        <div className="pt-3 text-blue-950 font-semibold">
                          <span className="text-lg block">
                            By {product.sections1.productDetails.brandName}
                          </span>
                          <p className="mt-2 font-bold">
                            Price : ₹{" "}
                            {product.sections2?.variantFields[0]?.mrpValue ||
                              ""}{" "}
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
                  {productData.map((product, index) => (
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
                        <div className="pt-3 text-blue-950 font-semibold">
                          <span className="text-lg block">
                            By {product.sections1.productDetails.brandName}
                          </span>
                          <p className="mt-2 font-bold">
                            Price : ₹{" "}
                            {product.sections2?.variantFields[0]?.mrpValue ||
                              ""}{" "}
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingPage;
