import React, { useEffect, useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dotIcon from "../../assets/doticon.png";
import { useSelector } from "react-redux";
import axios from "axios";

import UserEnquiriesMoal from "./UserEnquiriesMoal";

function Enquiries() {
  const token = useSelector((state) => state.token.token);
  const [enquiries, setEnquiries] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const DropDownList = ["All Enquiries", "Pending", "Received"];
  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);

  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/enquiry/getByUserEnquiry`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEnquiries(response.data);
        const newData = response.data.map((item) => ({
          vendorName: `${item.userId.firstName} ${item.userId.lastName}`,
          productId: item.productId.sections1.productDetails.productId,
          appliedDate: new Date(item.message[0].createdAt).toLocaleDateString(),
          _id: item._id,
          status: item.status,
        }));
        setList(newData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiURL, token]);
  const data = useMemo(() => {
    if (selectedButton === "All Enquiries") {
      return list;
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 400);
      return list.filter(
        (list) =>
          (selectedButton === "Pending" && list.status === "pending") ||
          (selectedButton === "Received" && list.status === "received")
      );
    }
  }, [list, selectedButton]);

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderComponent = () => {
    if (loading) {
      return smallSpiner();
    } else if (data?.length === 0) {
      return (
        <div className="flex justify-center pt-20 items-center bg-transparent text-red-400">
          No data available.
        </div>
      ); // Render message when list is empty
    } else {
      return tablelist();
    }
  };

  const smallSpiner = () => {
    return (
      <>
        <div className="w-full h-[250px] flex justify-center items-center mt-2 overflow-auto">
          <div className="border-t-4 border-blue-900 rounded-full animate-spin w-12 h-12"></div>
        </div>
      </>
    );
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "text-gray-700/85 font-bold";
      case "received":
        return "text-green-500/100 font-bold";
      default:
        return "inherit"; // Default color
    }
  };
  // const [showProductView, setShowProductView] = useState(false);
  // const [selectedRowData, setSelectedRowData] = useState(null);
  const [clickedRowId, setClickedRowId] = useState();

  const [showEnquirieModal, setShowEnquirieModal] = useState(false);
  const handleRowClick = (event) => {
    const clickedId = event.currentTarget.getAttribute("data-id");
    console.log("Clicked row id:", clickedId);
    setClickedRowId(clickedId);
    setShowEnquirieModal(true);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleOnClose = () => setShowEnquirieModal(false);

  const tablelist = () => {
    return (
      <>
        <div className="w-full h-[250px] mt-2 overflow-auto">
          <table className="w-full mx-4 mt-3">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-4 py-2 text-left ">
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
                <tr
                  key={row.id}
                  className="border-b hover:bg-white"
                  onClick={handleRowClick}
                  data-id={row.original._id}
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
                      src={dotIcon}
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
      <div className="ml-12 mt-5">
        <h1 className="text-3xl  px-5 font-semibold">Enquiries</h1>
      </div>
      {/* <Table data={data} columns={columns} />; */}
      <div className="w-[1070px] h-[380px] ml-12 rounded-md bg-white mt-5">
        <div className="w-auto flex flex-col  bg-transparent  pt-5">
          <div className="w-full relative mx-10 bg-transparent">
            {DropDownList.map((value, key) => {
              return (
                <div
                  key={key}
                  className="relative inline-block  bg-gray-100/85"
                >
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

      <UserEnquiriesMoal
        onClose={handleOnClose}
        visible={showEnquirieModal}
        data={clickedRowId}
      />
    </>
  );
}

export default Enquiries;
