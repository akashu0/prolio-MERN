import { Icon } from "@iconify-icon/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeDocument,
  resetFormState,
  updateContactInfo,
} from "../../store/formSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmPage({ onBack }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiURL = process.env.REACT_APP_API_URL;
  const formData = useSelector((state) => state.form.formData);
  const contactData = useSelector((state) => state.form.contactInfo);
  const documentData = useSelector((state) => state.form.documents);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(contactData);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditClick2 = () => {
    setIsEditing2(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    dispatch(updateFormData(formData));
  };
  const handleSaveClick2 = () => {
    setIsEditing2(false);
    dispatch(updateContactInfo(contactData));
  };

  const handleDelete = (index) => {
    dispatch(removeDocument(index));
  };

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const dataToSend = {
        formData,
        contactData,
        documentData,
      };
      axios
        .post(`${apiURL}/admin/createNewCompany`, dataToSend)
        .then((res) => {
          console.log(res);
          toast.success("Company Registered Successfully");
          setIsLoading(false);
          // Dispatch the reset action to clear Redux state
          dispatch(resetFormState());
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          toast.error("Invalid Credentials");
          console.log(err);
        });
    } catch (error) {
      console.error("Error while sending data to the server:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-4/5 h-screen rounded-xl bg-white mt-10">
        <div className="bg-white mt-5 px-5">
          <span className="text-blue-700 bg-white font-semibold">
            Confirm Details
          </span>
          <span className="block bg-white text-sm">Confirm your details</span>
        </div>

        <div className="flex justify-center bg-white">
          <div className="w-full mx-3 mt-5 px-5 rounded-3xl">
            <div className="pt-5 flex justify-between">
              <h1 className="text-blue-950 font-semibold">Company Detail</h1>
              {isEditing ? (
                <button
                  onClick={handleSaveClick}
                  className="w-20 rounded border bg-green-300 text-green-950 font-semibold"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEditClick}
                  className="w-20 rounded border bg-blue-300 text-blue-950 font-semibold"
                >
                  Edit
                </button>
              )}
            </div>
            <div>
              {isEditing ? (
                <div className="mt-5 space-y-3">
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Company Name</label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.companyName}
                      onChange={(e) =>
                        dispatch(
                          updateFormData({ companyName: e.target.value })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Owner Name</label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.OwnerName}
                      onChange={(e) =>
                        dispatch(updateFormData({ OwnerName: e.target.value }))
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Place</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.state}
                      onChange={(e) =>
                        dispatch(updateFormData({ state: e.target.value }))
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Registration Number</label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.registrationNumber}
                      onChange={(e) =>
                        dispatch(
                          updateFormData({
                            registrationNumber: e.target.value,
                          })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">
                      Year of Establishment
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.yearOfEstablishment}
                      onChange={(e) =>
                        dispatch(
                          updateFormData({
                            yearOfEstablishment: e.target.value,
                          })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Total Employees</label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.totalEmployees}
                      onChange={(e) =>
                        dispatch(
                          updateFormData({ totalEmployees: e.target.value })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-5 space-y-3 ">
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Company Name</label>
                    <div>{formData.companyName}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Owner Name</label>
                    <div>{formData.OwnerName}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Place</label>
                    <div>{contactData.state}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Registration Number</label>
                    <div>{formData.registrationNumber}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">
                      Year of Establishment
                    </label>
                    <div>{formData.yearOfEstablishment}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Total Employees</label>
                    <div>{formData.totalEmployees}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full mx-3 mt-5 px-5 rounded-3xl">
            <div className="pt-5 flex justify-between">
              <h1 className="text-blue-950 font-semibold">Contact Details</h1>
              {isEditing2 ? (
                <button
                  onClick={handleSaveClick2}
                  className="w-20 rounded border bg-green-300 text-green-950 font-semibold"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEditClick2}
                  className="w-20 rounded border bg-blue-300 text-blue-950 font-semibold"
                >
                  Edit
                </button>
              )}
            </div>
            <div>
              {isEditing2 ? (
                <div className="mt-5 space-y-3">
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Address</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.address1}
                      onChange={(e) =>
                        dispatch(
                          updateContactInfo({ address2: e.target.value })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Pin Code</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.pincode}
                      onChange={(e) =>
                        dispatch(updateContactInfo({ pincode: e.target.value }))
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">City</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.city}
                      onChange={(e) =>
                        dispatch(updateContactInfo({ city: e.target.value }))
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">State</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.state}
                      onChange={(e) =>
                        dispatch(updateContactInfo({ state: e.target.value }))
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Country</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.country}
                      onChange={(e) =>
                        dispatch(updateContactInfo({ country: e.target.value }))
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Contact Number</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.contactNumber}
                      onChange={(e) =>
                        dispatch(
                          updateContactInfo({ contactNumber: e.target.value })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Company Email</label>
                    <input
                      type="text"
                      placeholder=""
                      value={contactData.companyEmail}
                      onChange={(e) =>
                        dispatch(
                          updateContactInfo({ companyEmail: e.target.value })
                        )
                      }
                      className="w-60 px-4 bg-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-5 space-y-3">
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Address</label>
                    <div>{contactData.address1}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Pin Code</label>
                    <div>{contactData.pincode}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">City</label>
                    <div>{contactData.city}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">State</label>
                    <div>{contactData.state}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Country</label>
                    <div>{contactData.country}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Contact Number</label>
                    <div>{contactData.contactNumber}</div>
                  </div>
                  <div className="flex justify-start items-center">
                    <label className="text-sm w-36">Company Email</label>
                    <div>{contactData.companyEmail}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Document Uploaded section */}
        <div className="w-full mx-10 mt-5 rounded-3xl">
          <div className="pt-5 items-center">
            <h1 className="text-blue-950 font-semibold px-6">
              Document Uploaded
            </h1>
            {/* <div className="px-10 pt-5">
              <img src="" width="100px" height="100px" alt="Document" />
            </div> */}
            <div className="w-auto h-auto flex">
              {documentData.map((item, index) => (
                <div
                  className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-52 h-44 items-center mx-5"
                  key={index}
                >
                  {item.base64 && (
                    <button onClick={() => handleDelete(index)}>
                      <Icon
                        className="text-xl"
                        icon="openmoji:multiplication-sign"
                      />
                    </button>
                  )}
                  <label
                    htmlFor={`fileUpload-${index}`}
                    className="cursor-pointer text-center text-sm"
                  >
                    {item.base64 && (
                      <div>
                        <img
                          src={item.base64}
                          alt={`Document ${index}`}
                          width="100px"
                          height="100px"
                        />
                      </div>
                    )}
                    {!item.base64 && (
                      <p> Upload or Drag and drop the documents here</p>
                    )}

                    <input
                      id={`fileUpload-${index}`}
                      type="file"
                      style={{ display: "none" }}
                      //   onChange={(e) => handleFileChange(e, index)}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Save and Back buttons */}
        <div className="flex justify-between px-10 mt-5 bg-white">
          <button className="w-48 h-10 border border-gray-600" onClick={onBack}>
            Back
          </button>
          <button
            type="submit"
            className="w-48 h-10 bg-blue-950 text-white hover:bg-green-500"
            onClick={submitHandler}
          >
            Save and Next
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ConfirmPage;
