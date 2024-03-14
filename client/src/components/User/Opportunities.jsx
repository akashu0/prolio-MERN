import React, { useMemo, useState } from "react";
import Table from "../Re-use/Table";

function Opportunities() {
  const DropDownList = ["Authorized Service center", "Supplier", "Dealer"];
  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);

  const list = [
    {
      vendorName: "FEBIN BABY",
      productId: "123455",
      appliedDate: "19/12/23",
      status: "pending",
    },
    {
      vendorName: "F BABY",
      productId: "123455",
      appliedDate: "19/12/23",
      status: "rejected",
    },
    {
      vendorName: "BIN BABY",
      productId: "123455",
      appliedDate: "19/12/23",
      status: "cancelled",
    },
    {
      vendorName: "BIN BABY",
      productId: "123455",
      appliedDate: "19/12/23",
      status: "approved",
    },
  ];

  const data = useMemo(() => list, []);

  const columns = [
    {
      header: "Vendor Name",
      accessorKey: "vendorName",
    },
    {
      header: "Product ID ",
      accessorKey: "productId",
    },
    {
      header: "Appled Date",
      accessorKey: "appliedDate",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
  ];

  const renderComponent = () => {
    switch (selectedButton) {
      case "Authorized Service center":
        return <Table data={data} columns={columns} />;
      case "Supplier":
        return <Table data={data} columns={columns} />;
      case "Dealer":
        return <Table data={data} columns={columns} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="ml-14 mt-5">
        <h1 className="text-2xl  px-5 text-blue-800 font-semibold">
          Opportunities
        </h1>

        <div className="w-auto flex flex-col    pt-5">
          <div className="w-full relative">
            {DropDownList.map((value, key) => {
              return (
                <div key={key} className="relative inline-block">
                  <button
                    type="button"
                    className={`py-2 font-semibold px-6 ${
                      selectedButton === value
                        ? "text-blue-800 border-blue-900"
                        : "bg-transparent text-gray-500"
                    }`}
                    onClick={() => setSelectedButton(value)}
                  >
                    {value}
                  </button>
                  {selectedButton === value && (
                    <hr
                      className="absolute mx-6 border-t-2 border-blue-900"
                      style={{ width: `${value.length}ch`, bottom: "-2px" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 w-[1050px] px-5">
            <hr className="border border-gray-400" />
          </div>
        </div>
      </div>
      {renderComponent()}
    </>
  );
}

export default Opportunities;
