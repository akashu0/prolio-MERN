import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ProductConfirmPage({ onBack }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productId.productId);
  const [cardsData, setCardsData] = useState();

  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/product/getProductById/${productId}`
        );
        const data = response.data;
        console.log(data);
        setCardsData(data);
        // setProductTypes(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlerSaveButton = async () => {
    try {
      const status = "Active";

      const response = await axios.put(
        `${apiURL}/product/changeStatus/${productId}`,
        {
          status,
        }
      );
      dispatch(clearProductId());
      toast.success("Successfully Added Product");
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
        <div className="card-container flex flex-wrap justify-center">
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            // key={index}
            // onClick={() => {
            //   navigate(`/admin/product/${card._id}`);
            // }}
          >
            <img
              className="w-50 h-40"
              src={cardsData?.sections1?.productImage[0]?.base64 || ""}
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {cardsData?.sections1?.productDetails?.productName || ""}
              </div>

              <p className="text-gray-700 text-base mb-2">
                Brand: {cardsData?.sections1?.productDetails?.brandName || ""}
              </p>

              <p className="text-gray-700 text-base">
                {cardsData?.sections1?.productDetails?.description1 || ""}
              </p>
            </div>

            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Price: ${cardsData?.sections2?.variantFields[0]?.mrpValue || ""}
              </span>
            </div>
          </div>
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
      <ToastContainer />
    </>
  );
}

export default ProductConfirmPage;
