import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";

function Navpage() {
  return (
    <>
      <section>
        <Routes>
          <Route path="/category" element={<Category />} />
        </Routes>
      </section>
    </>
  );
}

export default Navpage;
