import React, { useEffect, useState } from "react";
import CommonNavbar from "../../components/Navbar/CommonNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import { useSelector } from "react-redux";
import ProfilePage from "../../components/User/ProfilePage";
import LoginPage from "../AuthPage/LoginPage";

function HomePage() {
  const user = useSelector((state) => state.token.user);

  return (
    <>
      <CommonNavbar />
      <div className="mt-16 flex ">
        <div className="w-[230px] bg-blue-800">
          <Sidebar />
        </div>
        <div className="  w-full h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomePage;
