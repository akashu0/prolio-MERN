import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import editIcon from "../../assets/edit-3.png";

export default function Table({ data, columns }) {
  const DropDownList = [
    "All Opportunities",
    "Pending",
    "Approved",
    "Cancelled",
    "Rejected",
  ];

  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);

  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  const renderComponent = () => {
    switch (selectedButton) {
      case "All Opportunities":
        return tablelist();
      case "Pending":
        return <div>hello</div>;
      case "Approved":
        return <div>hello</div>;
      case "Cancelled":
        return <div>hello</div>;
      case "Rejected":
        return <div>hello</div>;
      // Add cases for other buttons if needed
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "rejected":
        return "text-red-600/100 font-bold";
      case "approved":
        return "text-green-500/100  font-bold";
      case "pending":
        return "text-gray-700/85 font-bold";
      case "cancelled":
        return "text-yellow-400 font-bold";
      default:
        return "inherit"; // Default color
    }
  };
  const [showProductView, setShowProductView] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowProductView(true);
  };
  const tablelist = () => {
    return (
      <>
        <div className="w-full h-[250px] mt-2 overflow-auto">
          <table className="w-full mx-4 mt-3">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left "
                      //   onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                  <th className="px-4 py-2 text-left ">Action</th>
                </tr>
              ))}
            </thead>

            <tbody className="bg-transparent">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b hover:bg-white"
                onClick={() => handleRowClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`px-4 py-2 bg-transparent   ${getStatusColor(
                        cell.getValue()
                      )}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td className="px-8 py-2 bg-transparent">
                    <img
                      src={editIcon}
                      className="text-blue-500 bg-transparent hover:text-blue-700"
                      onClick={() => handleEdit(row.original)}
                    ></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-[1070px] h-[380px] ml-12 rounded-md bg-white mt-5">
        <div className="w-auto flex flex-col  bg-transparent  pt-5">
          <div className="w-full relative mx-10 bg-transparent">
            {DropDownList.map((value, key) => {
              return (
                <div key={key} className="relative inline-block bg-gray-100/85">
                  <button
                    type="button"
                    className={`py-2 font-bold px-6 ${
                      selectedButton === value
                        ? "text-white  bg-blue-900"
                        : "bg-transparent border-blue-900 border-r-2  text-blue-900"
                    }`}
                    onClick={() => setSelectedButton(value)}
                  >
                    {value}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pt-4 w-[1050px] px-8 bg-transparent">
            <hr className=" border-black bg-transparent" />

            {renderComponent()}
          </div>
        </div>
      </div>
      {showProductView && (
        <div className="fixed right-0 top-0 bottom-0 bg-white mt-20  w-[800px] transition-all duration-700">
          <ProductViewModel data={selectedRowData} />
        </div>
      )}
    </>
  );
}

const ProductViewModel = ({data}) => {
  return (
    <>
      
    </>
  );
};
