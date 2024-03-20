import React, { useEffect, useState } from "react";
import ProductVariation from "./ProductVariation";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify-icon/react";
import {
  addProductImage,
  removeProductImage,
  updateProductDetails,
  updateSpecification,
} from "../../store/productSlice";

function ProductTypeProduct({ fields, print }) {
  const dispatch = useDispatch();

  const documents = useSelector((state) => state.product.productImage);

  const [variation, setVariation] = useState(false);
  // const [documents, setDocuments] = useState([{ base64: null }]);

  const [attributes, setAttributes] = useState([
    { attributeName: "", value: "" },
  ]);

  const [formData, setFormData] = useState({
    productName: "",
    productId: "",
    brandName: "",
    material: "",
    relationwithProduct: "",
    manufacturer: "",
    material: "",
    description1: "",
    description2: "",
    warranty: "",
    benefits: "",
    greenAspect: "",
    productFinish: "",
    material: "",
  });

  // State for form field validation
  const [validationErrors, setValidationErrors] = useState({});

  const handleProductImage = async (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    const formatBytes = (bytes, decimals = 2) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    reader.onload = async () => {
      const base64String = reader.result;
      console.log(`Uploaded image size: ${formatBytes(base64String.length)}`);

      const compressedBase64 = await compressImage(base64String); // Compress the image
      console.log(
        `Compressed image size: ${formatBytes(compressedBase64.length)}`
      );

      const updatedDocuments = [...documents];
      updatedDocuments[index] = { base64: compressedBase64 };
      dispatch(addProductImage(updatedDocuments));
    };

    reader.readAsDataURL(file);
  };
  const compressImage = async (base64String) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = base64String;

      img.onload = () => {
        const maxWidth = 800; // Set maximum width of the compressed image
        const maxHeight = 600; // Set maximum height of the compressed image

        let width = img.naturalWidth;
        let height = img.naturalHeight;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              resolve(reader.result); // Resolve with the compressed base64 string
            };
          },
          "image/jpeg",
          0.7
        ); // Set quality (0-1)
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleDeleteProductImage = (index) => {
    dispatch(removeProductImage(index));
  };

  const addDocument = () => {
    if (documents.length >= 4) {
      alert("Maximum limit of documents reached.");
      return;
    }
    // Add a new document with an empty base64 string
    const newDocument = { base64: "" };
    dispatch(addProductImage([...documents, newDocument]));
  };

  // Function to handle changes in form field values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    dispatch(updateProductDetails(formData));
  };

  const handleAttributeChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAttributes = [...attributes];
    updatedAttributes[index][name] = value;
    setAttributes(updatedAttributes);
    dispatch(
      updateSpecification({
        index,
        attributeName: updatedAttributes[index].attributeName,
        value: updatedAttributes[index].value,
      })
    );
  };

  //   const apiURL = "https://prolio-server-gynp.onrender.com/api";

  const renderFormFields = () => {
    return fields.map((field, index) => {
      if (field.status) {
        switch (field.name) {
          case "productName":
            return (
              <div
                key={index}
                className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white"
              >
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Product Name
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product name"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                />
              </div>
            );
          case "productId":
            return (
              <div
                key={index}
                className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white"
              >
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Product ID
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product id"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                />
              </div>
            );
          case "brandName":
            return (
              <div
                key={index}
                className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white"
              >
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Brand Name
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your brand"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                />
              </div>
            );
          case "material":
            return (
              <div
                key={index}
                className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white"
              >
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Product Material
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
            );
          case "relationwithProduct":
            return (
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Relation with the Product
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
            );
          case "manufacturer":
            return (
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Manufacturer details
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                />
              </div>
            );

          default:
            return null;
        }
      } else {
        return null;
      }
    });
  };

  const checkStatus = () => {
    return fields.map((field, index) => {
      if (field.status) {
        switch (field.name) {
          case "description1":
            return (
              <div key={index} className="p-4 bg-white">
                <p className="bg-white font-semibold">Description 1</p>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Add Description"
                  className="w-full h-12 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded bg-white"
                />
              </div>
            );
          case "description2":
            return (
              <div key={index} className="p-4 bg-white">
                <p className="bg-white font-semibold">Description 2</p>
                <textarea
                  placeholder="Add Description"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
                ></textarea>
              </div>
            );

          case "specification":
            return (
              <div className="p-4 bg-white">
                <p className="bg-white font-bold text-lg">Specifications</p>
                <p className="bg-white text-sm">
                  Add Specification to your product
                </p>
                <div className="bg-white  shadow-3xl rounded-2xl mt-4 p-4">
                  {attributes.map((attribute, index) => (
                    <div key={index} className="p-4 bg-white flex space-x-4">
                      <div className="flex-1 bg-white">
                        <label className="block font-semibold text-sm mb-1 bg-white">
                          Attribute Name
                        </label>
                        <input
                          type="text"
                          name="attributeName"
                          placeholder="attribute name"
                          value={attribute.attributeName}
                          onChange={(event) =>
                            handleAttributeChange(index, event)
                          }
                          className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                        />
                      </div>
                      <div className="flex-1 bg-white">
                        <label className="block font-semibold text-sm mb-1 bg-white">
                          Value
                        </label>
                        <input
                          type="text"
                          name="value"
                          placeholder="value"
                          value={attribute.value}
                          onChange={(event) =>
                            handleAttributeChange(index, event)
                          }
                          className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end bg-white">
                    <button
                      className="w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200"
                      onClick={addAttribute}
                    >
                      Add Attribute
                    </button>
                  </div>
                </div>
              </div>
            );

          default:
            return null;
        }
      } else {
        return null;
      }
    });
  };

  const checkVariation = () => {
    return fields.map((field, index) => {
      if (field.status) {
        switch (field.name) {
          case "variation":
            return (
              <div className="p-4  bg-white">
                <p className="bg-white">Are there product variations?</p>
                <div className="space-x-4 bg-white">
                  <label className="inline-flex items-center bg-white">
                    <input
                      type="radio"
                      className="form-radio text-blue-500 bg-white"
                      name="radio-option"
                      value="option1"
                      onClick={() => setVariation(true)}
                    />
                    <span className="ml-2 bg-white">Yes</span>
                  </label>
                  <label className="inline-flex items-center bg-white">
                    <input
                      type="radio"
                      className="form-radio text-blue-500 bg-white"
                      name="radio-option"
                      value="option1"
                      onClick={() => setVariation(false)}
                    />
                    <span className="ml-2 bg-white">No</span>
                  </label>
                </div>
                {variation && <ProductVariation print={print} />}
              </div>
            );
          case "productImage":
            return (
              <div
                key={index}
                className={`p-4 bg-white ${variation ? "mt-4" : ""}`}
              >
                <p className="bg-white font-semibold">
                  Product Image and Videos{" "}
                </p>
                <p className="bg-white text-sm text-gray-500">
                  Add your product images and videos{" "}
                </p>

                <div className="w-auto h-auto flex flex-wrap bg-white">
                  {documents.map((item, index) => (
                    <div
                      className="flex flex-col justify-center border-gray-500 rounded-2xl border-2 border-dashed mt-5 w-32 h-32  items-center mx-2 bg-white"
                      key={index}
                    >
                      {item.base64 && (
                        <button onClick={() => handleDeleteProductImage(index)}>
                          <Icon
                            className="text-xl"
                            icon="openmoji:multiplication-sign"
                          />
                        </button>
                      )}
                      <label
                        htmlFor={`fileUpload-${index}`}
                        className="cursor-pointer text-center text-sm bg-white"
                      >
                        {item.base64 && (
                          // <div className="w-32 h-32">
                          <img
                            src={item.base64}
                            alt={`Document ${index}`}
                            width="100px"
                            height="100px"
                          />
                          // </div>
                        )}
                        {!item.base64 && (
                          <p className="bg-white text-xs font-semibold">
                            Upload <br /> Image or video
                          </p>
                        )}

                        <input
                          id={`fileUpload-${index}`}
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => handleProductImage(e, index)}
                        />
                      </label>
                    </div>
                  ))}

                  <div
                    className="flex flex-col justify-center border-gray-500 rounded-2xl border-2 border-dashed mt-5 w-32 h-32 items-center mx-2 bg-white"
                    onClick={addDocument}
                  >
                    <Icon className="text-4xl bg-white" icon="icon-park:plus" />
                    <span className="text-center text-sm bg-white">
                      Add New
                    </span>
                  </div>
                </div>
              </div>
            );

          default:
            return null;
        }
      } else {
        return null;
      }
    });
  };

  const checkFields = () => {
    return fields.map((field, index) => {
      if (field.status) {
        switch (field.name) {
          case "benefits":
            return (
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Benefits to User
                </label>
                <textarea
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product id"
                  className="w-full h-32 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                ></textarea>
              </div>
            );

          case "speciality":
            return (
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Speciality/ Uniqueness
                </label>
                <textarea
                  placeholder="Add Description"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
                ></textarea>
              </div>
            );
          case "warranty":
            return (
              <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Warranty/Guarantee
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder="Enter your product category"
                  className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border bg-white border-gray-300 rounded-md"
                />
              </div>
            );

          default:
            return null;
        }
      } else {
        return null;
      }
    });
  };
  const checkTrue = () => {
    return fields.map((field, index) => {
      if (field.status) {
        switch (field.name) {
          case "greenAspect":
            return (
              <div className=" bg-white">
                <p className="bg-white font-semibold">Green Aspect</p>
                <textarea
                  placeholder="Add Description"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full h-32 text-sm px-3 mt-1 py-2 focus:outline-none border border-gray-300 rounded bg-white"
                ></textarea>
              </div>
            );
          case "associatedproductid":
            return (
              <div className="pt-5 bg-white">
                <label className="block font-semibold text-sm mb-1 bg-white">
                  Associated Products
                </label>
                <input
                  type="text"
                  placeholder="Add Description"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full h-12 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded bg-white"
                />
              </div>
            );
          case "productfinish":
            return (
              <div className=" pt-5 bg-white">
                <p className="bg-white font-semibold">
                  What kind of finishes it can make ?
                </p>
                <input
                  type="text"
                  placeholder="Add Description"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full h-12 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded bg-white"
                />
              </div>
            );
          case "finishimage":
            return (
              <div className="pt-4 bg-white ">
                <p className="bg-white text-sm text-gray-500">
                  Provide finished product images and videos
                </p>

                <div className="w-auto h-auto flex flex-wrap bg-white">
                  {documents.map((item, index) => (
                    <div
                      className="flex flex-col justify-center border-gray-500 rounded-2xl border-2 border-dashed mt-5 w-32 h-32  items-center mx-2 bg-white"
                      key={index}
                    >
                      {/* {item.base64 && (
                        <button>
                          <Icon
                            className="text-xl"
                            icon="openmoji:multiplication-sign"
                          />
                        </button>
                      )} */}
                      <label
                        htmlFor={`fileUpload-${index}`}
                        className="cursor-pointer text-center text-sm bg-white"
                      >
                        {/* {item.base64 && (
                          <div>
                            <img
                              src={item.base64}
                              alt={`Document ${index}`}
                              width="100px"
                              height="100px"
                            />
                          </div>
                        )} */}
                        {!item.base64 && (
                          <p className="bg-white text-xs font-semibold">
                            Add <br /> Image or video
                          </p>
                        )}

                        <input
                          id={`fileUpload-${index}`}
                          type="file"
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  ))}

                  <div
                    className="flex flex-col justify-center  rounded  mt-5 w-32 h-32 items-center mx-2 bg-white"
                    onClick={addDocument}
                  >
                    <Icon className="text-4xl bg-white" icon="icon-park:plus" />
                    <span className="text-center text-sm bg-white">
                      Add New
                    </span>
                  </div>
                </div>
              </div>
            );

          default:
            return null;
        }
      } else {
        return null;
      }
    });
  };

  const addAttribute = () => {
    setAttributes([...attributes, { attributeName: "", value: "" }]);
  };

  return (
    <>
      <div className="flex w-4/5 justify-center items-center bg-white rounded-2xl mt-10 py-8 mx-auto">
        <div className="w-4/5 items-center  bg-white">
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold bg-white">Add Product</h2>
            <p className="text-sm bg-white">
              Add your product and get more insights
            </p>
          </div>
          <div className="p-4 bg-white">
            <div className="flex flex-wrap justify-between bg-white">
              {renderFormFields()}
            </div>
          </div>

          {checkStatus()}

          {checkVariation()}

          <div className="p-4 bg-white">
            <div className="flex flex-wrap justify-between bg-white">
              {checkFields()}
            </div>

            {checkTrue()}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductTypeProduct;
