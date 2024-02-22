import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignupPage from "../pages/AuthPage/SignupPage";
import LoginPage from "../pages/AuthPage/LoginPage";
import CompanyPage from "../pages/CompanydetailsPage/CompanyPage";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/addcompany" element={<CompanyPage />} />
    </Routes>
  );
}

export default HomeRoutes;