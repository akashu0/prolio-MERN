import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../store/tokenSlice";

function CommonNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.token.user);
  // const token = useSelector((state) => state.token.token);
  const userType = useSelector((state) => state.token.role);

  const submitLogout = () => {
    dispatch(clearToken());
    navigate("/");
  };

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const response = await axios.get('YOUR_BACKEND_API_URL/user-details', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       // Assuming your backend returns user details in response.data
  //       dispatch(setUserDetails(response.data));
  //     } catch (error) {
  //       console.error('Error fetching user details:', error);
  //     }
  //   };

  //   if (token) {
  //     fetchUserDetails();
  //   }
  // }, [token]);

  const Menus = [
    {
      name: "Home",
      icon: "iconamoon:notification-light",
      path: "/forum",
    },
    // { name: "notification", icon: "jam:message-alt", path: "/forum" },
    { name: "profile", icon: "bx:user", path: user ? "/profile" : "/login" },
  ];
  const profileMenu = {
    name: userType === "user" ? "User" : "Admin",
    icon: "ep:arrow-down",
    path: user ? "/profile" : "/login",
  };
  return (
    <>
      <nav className="w-full h-16  fixed flex gap-6 bg-blue-900   top-0 left-0">
        <div className="text-white px-10 bg-blue-900 cursor-pointer flex  py-4 font-serif">
          <Link to={userType === "admin" ? "/admin" : "/"}>
            <h1 className="text-white  bg-blue-900 cursor-pointer  font-semibold text-3xl  font-serif">
              Prolio
            </h1>
          </Link>
          <span className="text-white text-lg bg-blue-900 px-6 py-1">
            {" "}
            Categories
          </span>
        </div>

        <div className="flex  w-1/2  bg-blue-900 items-center relative">
          <input
            type="text"
            className="bg-blue-900 px-9 rounded-lg text-lg text-white  border-gray-500 border w-4/5  h-10 focus:outline-none"
            placeholder="Search"
          />
          <svg
            className="h-4 w-6 bg-blue-900 absolute mx-3 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M20 20l-4.579-4.579M8 15a7 7 0 100-14 7 7 0 000 14z"></path>
          </svg>
          {user && userType === "admin" ? null : (
            <div className="ml-12 w-32 h-10 rounded-lg pt-2">
              <Link to={user ? "/admin/addcompany" : "/joinprolio"}>
                <button className="w-full text-blue-900 font-semibold">
                  Join Prolio
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="bg-blue-900 flex-grow items-start pt-2 gap-4 flex justify-center ">
          {Menus.map((menu, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full items-center mt-2  pr-2 flex justify-center cursor-pointer"
            >
              <Link to={menu.path}>
                <Icon
                  className="text-blue-900 text-2xl  w-4 h-4  "
                  icon={menu.icon}
                />
              </Link>
            </div>
          ))}

          {user && (
            <ProfileDropdown
              profileMenu={profileMenu}
              submitLogout={submitLogout}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default CommonNavbar;

const ProfileDropdown = ({ profileMenu, submitLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative ml-3 bg-transparent pt-2">
      <button
        onClick={handleDropdownToggle}
        className="w-9 h-9 rounded-full bg-transparent flex justify-center items-center"
      >
        <span className="text-sm text-white bg-transparent">
          {" "}
          {profileMenu.name}
        </span>
        <Icon
          className="text-white bg-transparent mx-1 text-xl"
          icon={profileMenu.icon}
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-3 w-36 h-32 text-center bg-white  rounded-lg shadow-lg overflow-hidden">
          <ul className="bg-transparent">
            <li className="px-4 border-b border-blue-900 bg-transparent hover:bg-blue-50 py-5">
              Profile
            </li>

            <li
              className="px-4 py-2 hover:bg-blue-50 bg-transparent"
              onClick={submitLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
