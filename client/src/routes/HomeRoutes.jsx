import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignupPage from "../pages/AuthPage/SignupPage";
import LoginPage from "../pages/AuthPage/LoginPage";
import ProfilePage from "../components/User/ProfilePage";
import ProductPage from "../pages/LandingPage/ProductPage";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/viewproduct/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default HomeRoutes;