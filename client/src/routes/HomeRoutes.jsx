import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignupPage from "../pages/AuthPage/SignupPage";
import LoginPage from "../pages/AuthPage/LoginPage";
import ProductPage from "../pages/LandingPage/ProductPage";
import JoinPage from "../pages/GeneralPage/JoinPage";
import Template from "../pages/LandingPage/Template";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/viewproduct/:id" element={<ProductPage />} />
      <Route path="/joinprolio" element={<JoinPage />} />
      <Route path="/tem" element={<Template />} />
    </Routes>
  );
}

export default HomeRoutes;
