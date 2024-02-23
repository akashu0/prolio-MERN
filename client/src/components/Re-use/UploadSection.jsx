import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
function UploadSection() {
  const [Upload, setUpload] = useState([
    {
      base64: "",
    },
  ]);
  const addDocument = () => {
    if (Upload.length >= 4) {
      alert("Max limit 4");
      return;
    }
    setUpload([
      ...Upload,
      {
        base64: "",
      },
    ]);
  };
  return (
    <div className="px-28 w-full flex flex-col ">
      <div className="px-5">
        <span className="text-blue-800 font-serif font-semibold">
          Upload Documents
        </span>
        <span className=" text-sm text-gray-500 block">
          Upload the required documents.
        </span>
      </div>

      <div className="w-auto h-auto flex">
        {Upload.map((item) => (
          <div className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-52 h-44 items-center mx-5">
            <span className="text-center text-sm">
              Upload or Drag and drop the documents here
            </span>
          </div>
        ))}

        <div
          className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-52 h-44 items-center mx-5"
          onClick={addDocument}
        >
          <Icon className="text-4xl" icon="icon-park:plus" />
          <span className="text-center text-sm ">Add New</span>
        </div>
      </div>
    </div>
  );
}

export default UploadSection;
