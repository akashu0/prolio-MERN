import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "../pages/ProductAdmin/CompanydetailsPage/CompanyPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import ProductForm from "../pages/ProductAdmin/AddproductPage/ProductForm";
import ProductPage from "../pages/LandingPage/ProductPage";
import SignupPage from "../pages/AuthPage/SignupPage";
import LoginPage from "../pages/AuthPage/LoginPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/addcompany" element={<CompanyPage />} />
      {/* <Route path="/" element={<CompanyPage />} /> */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/addproduct" element={<ProductForm />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default AdminRoutes;
