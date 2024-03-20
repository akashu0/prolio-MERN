import React from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  return (
    <div className="ml-20 mt-10">
      <Link to="/admin/addproduct">
        <button className="items-center  w-40 h-16 pt-2 text-lg  border  bg-blue-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-xl text-white ">
          Add Product
        </button>
      </Link>
    </div>
  );
}

export default ProductListPage;
