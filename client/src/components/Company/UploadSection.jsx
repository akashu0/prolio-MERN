import React from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { addDocuments, removeDocument } from "../../store/formSlice";

function UploadSection({ onBack, onSubmit }) {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.form.documents);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      const updatedDocuments = [...documents];
      updatedDocuments[index] = { base64: base64String };
      dispatch(addDocuments(updatedDocuments));
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (index) => {
    dispatch(removeDocument(index));
  };

  const addDocument = () => {
    // Check if the maximum limit of documents has been reached
    if (documents.length >= 4) {
      alert("Maximum limit of documents reached.");
      return;
    }

    // Add a new document with an empty base64 string
    const newDocument = { base64: "" };
    dispatch(addDocuments([...documents, newDocument]));
  };

  return (
    <div className="px-28 w-full flex flex-col ">
      <div className="px-5">
        <span className="text-blue-800 font-serif font-semibold">
          Upload Documents
        </span>
        <span className="text-sm text-gray-500 block">
          Upload the required documents.
        </span>
      </div>

      <div className="w-auto h-auto flex">
        {documents.map((item, index) => (
          <div
            className="flex flex-col justify-center border-black rounded border-2 border-dashed mt-5 w-52 h-44 items-center mx-5"
            key={index}
          >
            {item.base64 && (
              <button onClick={() => handleDelete(index)}>
                <Icon className="text-xl" icon="openmoji:multiplication-sign" />
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
                onChange={(e) => handleFileChange(e, index)}
              />
            </label>
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
      <div className="mt-auto flex justify-start">
        <button
          className="w-48 mt-5 h-10 border border-gray-600"
          onClick={onBack}
        >
          Back
        </button>
      </div>
      <div className="mt-auto flex justify-end">
        <button
          type="submit"
          className="w-48 mt-5 text-white h-10 bg-blue-950 hover:bg-green-500"
          onClick={onSubmit}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
}

export default UploadSection;
