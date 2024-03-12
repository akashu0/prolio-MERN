import React from "react";

function productDetails1({ data }) {
  console.log(data);
  return (
    <>
      <div className="w-full flex py-3 bg-white">
        <span className="font-semibold text-left bg-white">
          Product Name :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.productName || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Brand Name :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.brandName || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          product ID :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.productId || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Description 1 :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.description1 || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Description :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.description2 || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Key features :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.speciality || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Product Specifications :{" "}
          {data?.specification?.map((spec, index) => (
            <span className="bg-transparent font-normal" key={index}>
              {spec.attributeName} : {spec.value}
              {index !== data?.specification.length - 1 && ", "}
            </span>
          ))}
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Importer :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.manufacturer || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Warranty :{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.warranty || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Speciality/Uniqueness :{" "}
          <span className="font-normal bg-white">
            {" "}
            {data?.productDetails?.speciality || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          Benefits to user :{" "}
          <span className="font-normal bg-white">
            {" "}
            {data?.productDetails?.benefits || ""}
          </span>
        </span>
      </div>

      <div className="w-full flex py-1 bg-white">
        <span className="font-semibold text-left bg-white">
          What kind of finishes it can make?:{" "}
          <span className="font-normal bg-white">
            {data?.productDetails?.productfinish || ""}
          </span>
        </span>
      </div>
    </>
  );
}

export default productDetails1;
