import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignupPage from "../pages/AuthPage/SignupPage";
import LoginPage from "../pages/AuthPage/LoginPage";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}

export default HomeRoutes;
