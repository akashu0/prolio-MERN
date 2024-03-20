import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import CommonNavbar from "../../components/Navbar/CommonNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "../../components/User/ProfilePage";
import Opportunities from "../../components/User/Opportunities";
import Wishlist from "../../components/User/Wishlist";
import ProductListPage from "../../components/Admin/ProductListPage"
import AccessPage from "../../components/Admin/AccessPage";
import Analytics from "../../components/Admin/Analytics";
import FaqsPage from "../../components/Admin/FaqsPage";
import SettingPage from "../../components/Admin/SettingPage";
import AdminEnquiries from "../../components/Admin/AdminEnquiries";

function AdminHomePage() {
  return (
    <>
      <CommonNavbar />
      <div className="mt-16 flex ">
        <div className="w-[230px] ">
          <AdminSidebar />
        </div>
        <div className="w-full h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/opportunities" element={<Opportunities />}></Route>
            <Route path="/enquiries" element={<AdminEnquiries />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/dashboard" element={<Analytics />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
