import React from "react";
import ProductDetails from "../../components/Re-use/ProductDetails";
import CommonNavbar from "../../components/Navbar/CommonNavbar";
import ViewProductPage from "../../components/Product/ViewProductPage";


function ProductPage() {
  return (
    <>
      <CommonNavbar />

      {/* <ProductDetails /> */}
      <ViewProductPage />
     
    </>
  );
}

export default ProductPage;
