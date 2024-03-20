import React from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function SimpleNavbar() {
  const userType = useSelector((state) => state.token.role);
  const Menus = [
    {
      name: "Home",
      icon: "iconamoon:notification-light",
    },
    { name: "notification", icon: "jam:message-alt" },
    { name: "profile", icon: "bx:user" },
  ];

  return (
    <nav className="w-full h-14 fixed flex justify-between bg-blue-900   top-0 left-0">
      <div className="text-white px-10 bg-blue-900 cursor-pointer flex  py-4 font-serif">
        <Link to={userType === "admin" ? "/admin" : "/"}>
          <h1 className="text-white  bg-blue-900 cursor-pointer  font-semibold text-3xl  font-serif">
            Prolio
          </h1>
        </Link>
      </div>
      <div className="bg-blue-900 mx-14   flex justify-center items-center">
        {Menus.map((menu, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full items-center mt-2 ml-4 pr-2 flex justify-center cursor-pointer"
          >
            <Link to={menu.href}>
              <Icon
                className="text-blue-900 text-2xl  w-4 h-4  "
                icon={menu.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default SimpleNavbar;
