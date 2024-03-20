import React, { useEffect, useState } from "react";
import crossButton from "../../assets/x-square.png";
import arrow from "../../assets/arrow-left.png";
import axios from "axios";
import { useSelector } from "react-redux";

function EnquiryModal({ visible, onClose, data }) {
  if (!visible) return null;

  const [value, setValue] = useState("");
  const [enquiryValue, setEnquiryValue] = useState();
  const token = useSelector((state) => state.token.token);

  const apiURL = process.env.REACT_APP_API_URL;
  const id = data;
  const productId = enquiryValue?.productId?._id || "";
  const companyId = enquiryValue?.companyId || "";
  console.log(companyId, ".................");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productId && value.trim()) {
      try {
        // Use the "repliedEnquiry" endpoint for updating the enquiry
        const response = await axios.put(
          `${apiURL}/enquiry/repliedEnquiry`,
          {
            productId: productId,
            text: value,
            companyId: companyId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setValue(""); // Clear the textarea after successful submission
      } catch (error) {
        console.error("Error updating enquiry:", error.message);
      }
    }
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}/enquiry/getEnquiryById/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setEnquiryValue(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-none flex justify-center "
      >
        <div className="w-[900px] h-[580px] bg-blue-100/100 rounded-2xl relative pb-28 z-10">
          <div className="bg-transparent">
            <img
              src={arrow}
              alt=""
              className="absolute left-8 bg-transparent top-11 cursor-pointer"
              onClick={onClose}
            />

            <div className="px-10 pt-10 flex justify-between bg-transparent items-center rounded-t-2xl ">
              <h1 className="text-blue-900 text-2xl px-7 bg-transparent font-semibold">
                Enquiry
              </h1>
              <img
                src={crossButton}
                alt=""
                className="w-6 h-6 cursor-pointer  bg-transparent"
                onClick={onClose}
              />
            </div>
          </div>
          <div className="overflow-y-auto  ml-14 mt-5 z-0 w-[800px] h-full bg-transparent relative">
            <div className="bg-white w-full h-[130px] flex rounded-md">
              <div className="rounded-md bg-transparent pt-5  ml-5 relative">
                <img
                  src={
                    enquiryValue?.productId?.sections1?.productImage[0].base64
                  }
                  alt=""
                  className="w-28 h-24  object-cover  rounded-md cursor-pointer"
                />
              </div>
              <div className="pt-2 px-3 w-1/2 flex-grow bg-transparent">
                <h1 className="text-xl font-bold bg-transparent">
                  {enquiryValue?.productId?.sections1?.productDetails
                    ?.productName || ""}
                </h1>
                <p className="bg-transparent text-blue-800 font-semibold">
                  By{" "}
                  {enquiryValue?.productId?.sections1?.productDetails
                    ?.brandName || ""}
                </p>
                <p className="text-sm text-gray-400 pt-1 line-clamp-3 bg-transparent">
                  {enquiryValue?.productId?.sections1?.productDetails
                    ?.description1 || ""}{" "}
                </p>
              </div>
            </div>
            <div className="mt-5 w-full border-t-2 h-1 bg-black"> </div>

            <div className="w-full bg-transparent flex flex-col gap-4 rounded-lg mt-4">
              {enquiryValue?.message.map((message) => {
                const createdAtDate = new Date(message.createdAt);
                const currentDate = new Date();

                const difference = currentDate - createdAtDate;

                const daysDifference = Math.floor(
                  difference / (1000 * 60 * 60 * 24)
                );

                return (
                  <div
                    key={message._id}
                    className={`w-4/5 bg-white rounded-lg pb-5 ${
                      message.from === "user" ? "self-end" : "self-start"
                    }`}
                  >
                    <div className="rounded-md bg-transparent pt-4  ml-6  gap-9 flex flex-row">
                      <img
                        src={
                          enquiryValue?.productId?.sections1?.productImage[0]
                            .base64
                        }
                        alt=""
                        className="w-12 h-12  object-cover  rounded-full cursor-pointer"
                      />
                      <span className="bg-transparent font-semibold">
                        {/* {`${enquiryValue?.userId?.firstName} ${enquiryValue?.userId?.lastName}`} */}
                        User Name
                      </span>
                      <span className="text-gray-400 bg-transparent">
                        {daysDifference} Days
                      </span>
                    </div>
                    <p className="rounded-lg bg-transparent pl-10 pt-2">
                      {message.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white w-full mt-5  h-[130px] flex rounded-md ">
              <div className="rounded-md bg-transparent pt-4  ml-6 relative">
                <img
                  src={
                    enquiryValue?.productId?.sections1?.productImage[0].base64
                  }
                  alt=""
                  className="w-12 h-12  object-cover  rounded-full cursor-pointer"
                />
              </div>
              <div className="pt-6 px-3 w-1/2   flex-grow bg-transparent">
                <form onSubmit={handleSubmit} className="flex bg-transparent">
                  <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    className="focus:outline-none h-20 bg-white border pt-3 px-3 rounded-md w-full "
                  />
                  <button
                    type="submit"
                    className="w-auto bg-blue-800/100 mx-3 rounded-md text-white px-5 h-10"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // document.getElementById("portal")
  );
}

export default EnquiryModal;
