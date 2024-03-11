import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";

function ProductVariation({ print }) {
  const [variantBlocks, setVariantBlocks] = useState([
    {
      variantName: "",
      attributes: [{ attributeName: "", value: "" }],
      images: [{ base64: "" }],
    },
  ]);

  console.log(variantBlocks);

  const handleVariantNameChange = (index, variantName) => {
    const updatedBlocks = [...variantBlocks];
    updatedBlocks[index].variantName = variantName;
    setVariantBlocks(updatedBlocks);
  };

  const handleAttributeChange = (index, attributeIndex, key, value) => {
    const updatedBlocks = [...variantBlocks];
    updatedBlocks[index].attributes[attributeIndex][key] = value;
    setVariantBlocks(updatedBlocks);
  };

  const handleImageChange = (index, imageIndex, event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result;
        const updatedBlocks = [...variantBlocks];
        updatedBlocks[index].images[imageIndex].base64 = base64Data;
        setVariantBlocks(updatedBlocks);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (blockIndex, imageIndex) => {
    const updatedBlocks = [...variantBlocks];
    updatedBlocks[blockIndex].images.splice(imageIndex, 1); // Remove the image at imageIndex
    setVariantBlocks(updatedBlocks);
  };

  const addVariantBlock = () => {
    setVariantBlocks((prevBlocks) => [
      ...prevBlocks,
      {
        variantName: "",
        attributes: [{ attributeName: "", value: "" }],
        images: [{ base64: "" }],
      },
    ]);
  };

  const addAttribute = (index) => {
    const updatedBlocks = [...variantBlocks];
    updatedBlocks[index].attributes.push({ attributeName: "", value: "" });
    setVariantBlocks(updatedBlocks);
  };

  const addImage = (index) => {
    const updatedBlocks = [...variantBlocks];
    if (updatedBlocks[index].images.length < 4) {
      updatedBlocks[index].images.push({ base64: "" });
      setVariantBlocks(updatedBlocks);
    } else {
      alert("Maximum number of images reached");
    }
  };

  return (
    <>
      <div className="bg-white shadow-3xl flex h-12 rounded-xl mt-4 p-2">
        <div className="flex-grow bg-white">
          <span className="font-semibold text-lg bg-white px-2">Variant</span>
        </div>
        <div className="bg-white">
          <button
            className="w-32  rounded-lg font-bold text-blue-950 h-8 bg-blue-200"
            onClick={addVariantBlock}
          >
            Add Variant
          </button>
        </div>
      </div>

      {variantBlocks.map((block, index) => (
        <div key={index} className="bg-white shadow-3xl rounded-2xl mt-4 p-4 ">
          <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
            <label className="block font-semibold text-sm mb-1 bg-white">
              Enter Variant Name
            </label>
            <input
              type="text"
              placeholder="Enter Variant Name"
              value={block.variantName}
              onChange={(event) =>
                handleVariantNameChange(index, event.target.value)
              }
              className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
            />
          </div>

          {/* Image upload section */}
          <div className="w-auto h-auto flex flex-wrap bg-white">
            {block.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-32 h-32 items-center mx-2 bg-white"
              >
                {image.base64 && (
                  <button onClick={() => handleDeleteImage(index, imageIndex)}>
                    <Icon
                      className="text-xl"
                      icon="openmoji:multiplication-sign"
                    />
                  </button>
                )}
                <label
                  htmlFor={`fileUpload-${index}-${imageIndex}`}
                  className="cursor-pointer text-center text-sm bg-white"
                >
                  {image.base64 && (
                    // <div className="w-32 h-32">
                    <img
                      src={image.base64}
                      alt={`Document ${index}`}
                      width="100px"
                      height="100px"
                    />
                    // </div>
                  )}
                  {!image.base64 && (
                    <p className="bg-white text-xs font-semibold">
                      Upload <br /> Image or video
                    </p>
                  )}

                  <input
                    id={`fileUpload-${index}-${imageIndex}`}
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) =>
                      handleImageChange(index, imageIndex, event)
                    }
                  />
                </label>
              </div>
            ))}

            <div
              className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-32 h-32 items-center mx-2 bg-white"
              onClick={() => addImage(index)}
            >
              <Icon className="text-4xl bg-white" icon="icon-park:plus" />
              <span className="text-center text-sm bg-white">Add New</span>
            </div>
          </div>

          {/* Attribute section */}
          <div>
            {block.attributes.map((attribute, attributeIndex) => (
              <div
                key={`${index}-${attributeIndex}`}
                className="p-4 bg-white flex space-x-4"
              >
                <div className="flex-1 bg-white">
                  <label className="block font-semibold text-sm mb-1 bg-white">
                    Attribute Name
                  </label>
                  <input
                    type="text"
                    placeholder="Attribute name"
                    value={attribute.attributeName}
                    onChange={(event) =>
                      handleAttributeChange(
                        index,
                        attributeIndex,
                        "attributeName",
                        event.target.value
                      )
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
                    placeholder="Value"
                    value={attribute.value}
                    onChange={(event) =>
                      handleAttributeChange(
                        index,
                        attributeIndex,
                        "value",
                        event.target.value
                      )
                    }
                    className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
                  />
                </div>
              </div>
            ))}
            <div>
            <div className="flex justify-end bg-white">
              <button
                className="w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200"
                onClick={() => addAttribute(index)}
              >
                Add Attribute
              </button>
            </div>
            <div className="flex justify-start bg-white">
              <button
                className="w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200"
                onClick={() => addAttribute(index)}
              >
                Add Attribute
              </button>
            </div>
            </div>
          </div>
         
        </div>
      ))}
    </>
  );
}

export default ProductVariation;

// import React, { useState } from "react";
// import { Icon } from "@iconify-icon/react";

// function ProductVariation() {
//   const [variantBlocks, setVariantBlocks] = useState([
//     {
//       variantName: "",
//       attributes: [{ attributeName: "", value: "" }],
//       images: [{ base64: "" }],
//     },
//   ]);

//   console.log(variantBlocks);

//   const handleVariantNameChange = (index, variantName) => {
//     const updatedBlocks = [...variantBlocks];
//     updatedBlocks[index].variantName = variantName;
//     setVariantBlocks(updatedBlocks);
//   };

//   const handleAttributeChange = (index, attributeIndex, key, value) => {
//     const updatedBlocks = [...variantBlocks];
//     updatedBlocks[index].attributes[attributeIndex][key] = value;
//     setVariantBlocks(updatedBlocks);
//   };

//   const handleImageChange = (index, imageIndex, event) => {
//     const file = event.target.files[0];
//     console.log(file);
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const base64Data = reader.result;
//         const updatedBlocks = [...variantBlocks];
//         updatedBlocks[index].images[imageIndex].base64 = base64Data;
//         setVariantBlocks(updatedBlocks);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = (blockIndex, imageIndex) => {
//     const updatedBlocks = [...variantBlocks];
//     updatedBlocks[blockIndex].images.splice(imageIndex, 1); // Remove the image at imageIndex
//     setVariantBlocks(updatedBlocks);
//   };

//   const addVariantBlock = () => {
//     setVariantBlocks((prevBlocks) => [
//       ...prevBlocks,
//       {
//         variantName: "",
//         attributes: [{ attributeName: "", value: "" }],
//         images: [{ base64: "" }],
//       },
//     ]);
//   };

//   const addAttribute = (index) => {
//     const updatedBlocks = [...variantBlocks];
//     updatedBlocks[index].attributes.push({ attributeName: "", value: "" });
//     setVariantBlocks(updatedBlocks);
//   };

//   const addImage = (index) => {
//     const updatedBlocks = [...variantBlocks];
//     if (updatedBlocks[index].images.length < 4) {
//       updatedBlocks[index].images.push({ base64: "" });
//       setVariantBlocks(updatedBlocks);
//     } else {
//       alert("Maximum number of images reached");
//     }
//   };

//   return (
//     <>
//       <div className="bg-white shadow-3xl flex h-12 rounded-xl mt-4 p-2">
//         <div className="flex-grow bg-white">
//           <span className="font-semibold text-lg bg-white px-2">Variant</span>
//         </div>
//         <div className="bg-white">
//           <button
//             className="w-32  rounded-lg font-bold text-blue-950 h-8 bg-blue-200"
//             onClick={addVariantBlock}
//           >
//             Add Variant
//           </button>
//         </div>
//       </div>

//       {variantBlocks.map((block, index) => (
//         <div key={index} className="bg-white shadow-3xl rounded-2xl mt-4 p-4 ">
//           <div className="w-full md:w-5/12 lg:w-5/12 mb-4 px-2 bg-white">
//             <label className="block font-semibold text-sm mb-1 bg-white">
//               Enter Variant Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Variant Name"
//               value={block.variantName}
//               onChange={(event) =>
//                 handleVariantNameChange(index, event.target.value)
//               }
//               className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
//             />
//           </div>

//           {/* Image upload section */}
//           <div className="w-auto h-auto flex flex-wrap bg-white">
//             {block.images.map((image, imageIndex) => (
//               <div
//                 key={imageIndex}
//                 className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-32 h-32 items-center mx-2 bg-white"
//               >
//                 {image.base64 && (
//                   <button onClick={() => handleDeleteImage(index, imageIndex)}>
//                     <Icon
//                       className="text-xl"
//                       icon="openmoji:multiplication-sign"
//                     />
//                   </button>
//                 )}
//                 <label
//                   htmlFor={`fileUpload-${index}-${imageIndex}`}
//                   className="cursor-pointer text-center text-sm bg-white"
//                 >
//                   {image.base64 && (
//                     // <div className="w-32 h-32">
//                     <img
//                       src={image.base64}
//                       alt={`Document ${index}`}
//                       width="100px"
//                       height="100px"
//                     />
//                     // </div>
//                   )}
//                   {!image.base64 && (
//                     <p className="bg-white text-xs font-semibold">
//                       Upload <br /> Image or video
//                     </p>
//                   )}

//                   <input
//                     id={`fileUpload-${index}-${imageIndex}`}
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(event) =>
//                       handleImageChange(index, imageIndex, event)
//                     }
//                   />
//                 </label>
//               </div>
//             ))}

//             <div
//               className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-32 h-32 items-center mx-2 bg-white"
//               onClick={() => addImage(index)}
//             >
//               <Icon className="text-4xl bg-white" icon="icon-park:plus" />
//               <span className="text-center text-sm bg-white">Add New</span>
//             </div>
//           </div>

//           {/* Attribute section */}
//           <div>
//             {block.attributes.map((attribute, attributeIndex) => (
//               <div
//                 key={`${index}-${attributeIndex}`}
//                 className="p-4 bg-white flex space-x-4"
//               >
//                 <div className="flex-1 bg-white">
//                   <label className="block font-semibold text-sm mb-1 bg-white">
//                     Attribute Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Attribute name"
//                     value={attribute.attributeName}
//                     onChange={(event) =>
//                       handleAttributeChange(
//                         index,
//                         attributeIndex,
//                         "attributeName",
//                         event.target.value
//                       )
//                     }
//                     className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
//                   />
//                 </div>
//                 <div className="flex-1 bg-white">
//                   <label className="block font-semibold text-sm mb-1 bg-white">
//                     Value
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Value"
//                     value={attribute.value}
//                     onChange={(event) =>
//                       handleAttributeChange(
//                         index,
//                         attributeIndex,
//                         "value",
//                         event.target.value
//                       )
//                     }
//                     className="w-full h-9 text-sm px-3 mt-1 focus:outline-none border border-gray-300 rounded-md bg-white"
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="flex justify-end bg-white">
//               <button
//                 className="w-36 mt-5 rounded-sm font-bold text-blue-950 h-10 bg-blue-200"
//                 onClick={() => addAttribute(index)}
//               >
//                 Add Attribute
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ProductVariation;
