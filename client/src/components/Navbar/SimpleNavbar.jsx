import React from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SimpleNavbar() {
  const navigate = useNavigate();
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
      <div
        className="text-white px-8 bg-blue-900 cursor-pointer  font-semibold text-2xl py-4 font-serif"
        onClick={() => {
          navigate("/");
        }}
      >
        Prolio
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
