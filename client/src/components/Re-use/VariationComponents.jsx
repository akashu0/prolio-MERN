import React from "react";

function VariationComponents({ data }) {
  return (
    <>
      <div className="w-full py-3 bg-white">
        <h3 className="font-bold text-left bg-white">Product Prices</h3>

        {data.variantFields.map((variantField, index) => (
          <div key={index} className="px-10 pt-4 flex bg-transparent gap-6">
            <span className="font-bold bg-transparent">
              Quantity: {variantField.fromValue} to {variantField.mrpValue}
            </span>
            <span className="bg-transparent text-semibold">
              Price : {variantField.mrpValue} /- per unit
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default VariationComponents;
