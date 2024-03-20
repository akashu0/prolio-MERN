import React, { useEffect, useState } from "react";
import CommonNavbar from "../../components/Navbar/CommonNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import { useSelector } from "react-redux";
import ProfilePage from "../../components/User/ProfilePage";
import LoginPage from "../AuthPage/LoginPage";
import Opportunities from "../../components/User/Opportunities";
import Wishlist from "../../components/User/Wishlist";
import Enquiries from "../../components/User/Enquiries";

function HomePage() {

  return (
    <>
      <CommonNavbar />
      <div className="mt-16 flex ">
        <div className="w-[230px] ">
          <Sidebar />
        </div>
        <div className="w-full h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/opportunities" element={<Opportunities /> }></Route>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/enquiries" element={<Enquiries />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomePage;
