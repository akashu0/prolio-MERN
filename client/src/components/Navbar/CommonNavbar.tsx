import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

function CommonNavbar() {
  return (
    <nav className="w-full h-19 fixed top-0 left-0 flex justify-between bg-blue-800">
      <div className="md:flex py-4 md:px-10 px-7 ">
        <div className="items-center  text-white text-2xl font-bold font-serif">
          Prolio
        </div>
        <div className="relative px-7 py-1 text-base text-white ">
          Categories
          <div className="absolute top-1 right-1.5 cursor-pointer ">
            <svg
              className="-mr-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[500px]  items-center py-4 mr-60 ">
        <input
          className="w-full h-9  bg-blue-800 placeholder-slate-50  border rounded-md outline-0 py-2 px-5 text-xs"
          type="text"
          placeholder="Search "
        ></input>
      </div>
      <div className="">
        <button className="bg-slate-100">Join </button>
      </div>
    </nav>
  );
}

export default CommonNavbar;
