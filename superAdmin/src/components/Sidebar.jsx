import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Data = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Category",
    path: "/category", // Update the path to the Employer category page
    icon: <FaHome />,
  },
  {
    title: "User",
    path: "/admin/userlist",
    icon: <FaHome />,
  },
];

function Sidebar() {
  const activeLink =
    " mt-7 pl-7 w-full h-14 flex justify-start items-center text-brown-500 text-sm space-x-1 bg-red-500";
  const normalLink =
    " pl-7 mt-7 w-full h-14 flex justify-start items-center text-brown-500 text-sm space-x-1 ";
  return (
    <>
      <section>
        <div className="text-blue-600">
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Sidebar;
