import React, { useEffect, useState } from "react";
import bagImg from "../../assets/BagImg.png";
import deleteIcon from "../../assets/deleteIcon.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Re-use/Loader";

function Wishlist() {
  const token = useSelector((state) => state.token.token);

  const [isLoading, setIsLoading] = useState(false);

  const [productData, setProductData] = useState([]);

  const apiURL = process.env.REACT_APP_API_URL;
  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`${apiURL}/user/get-wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data, "api.............");
      const wishlistData = response.data[0];
      setProductData(wishlistData);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteWishlist = async (productId) => {
    try {
      console.log(productId, ".............is");
      const response = await axios.delete(
        `${apiURL}/user/delete-wishlist/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Product removed from wishlist successfully");
        fetchData();
      }
      if (response.status === 201) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="ml-20 pt-8">
            <h1 className="text-4xl font-semibold">Wishlist</h1>
          </div>
          <div className="ml-16 w-[1000px] h-[500px] overflow-auto pb-5 mt-3 shadow-md rounded-lg bg-white">
            <div className="bg-transparent ml-10 mt-5 gap-5 pt-3 flex flex-wrap">
              {productData?.map((item, index) => (
                <div
                  key={index}
                  className="w-[450px] h-[200px] flex rounded-md"
                >
                  <div className="rounded-md bg-transparent mt-10 ml-10">
                    <img
                      src={item?.sections1?.productImage[0].base64}
                      alt=""
                      className="w-32 h-36 rounded-md cursor-pointer"
                    />
                  </div>
                  <div className="pt-6 px-3 w-1/2 flex-grow">
                    <h1 className="text-xl font-bold">
                      {item.sections1.productDetails.productName}
                    </h1>
                    <p className="text-sm pt-2 line-clamp-5"></p>
                    <h5 className="pt-3 text-sm">
                      Color: <span></span>
                    </h5>
                    <h5 className="text-sm">
                      Composition:{" "}
                      <span>{item.sections1.productDetails.material}</span>
                    </h5>
                    <div className="flex gap-4 pt-2">
                      <img
                        src={deleteIcon}
                        alt="deleteIcon"
                        onClick={() => handleDeleteWishlist(item._id)}
                      />
                      <button className="bg-blue-900 w-28 rounded-lg text-sm text-white">
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default Wishlist;
