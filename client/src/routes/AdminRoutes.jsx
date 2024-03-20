import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "../pages/ProductAdmin/CompanydetailsPage/CompanyPage";
import ProductForm from "../pages/ProductAdmin/AddproductPage/ProductForm";
import AdminHomePage from "../pages/HomePage/AdminHomePage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<AdminHomePage />} />
      <Route path="/addcompany" element={<CompanyPage />} />
      <Route path="/addproduct" element={<ProductForm />} />
      {/* <Route path="/product/:id" element={<ProductPage />} /> */}
    </Routes>
  );
}

export default AdminRoutes;
