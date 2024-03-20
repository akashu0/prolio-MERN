import React, { useState } from "react";
// import Soon from "../../assets/Soon.png";
import Loader from "../Re-use/Loader";
import "./AccessPage.css";
import image from "../../assets/product-image.png";

function AccessPage() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="access-page-main-container">
          <div className="access-page-nav-container">
            <div className="access-page-nav-items-active">Control Access</div>
            <div className="access-page-nav-items">Admin</div>
            <div className="access-page-nav-items">Requests</div>
          </div>
          <div className="line-access"></div>
          <div className="control-access-component">
            <div className="control-access-input-container">
              <p className="control-access-label">Created By</p>
              <p className="transparent">:</p>
              <input className="control-access-input"></input>
            </div>
            <div className="control-access-input-container">
              <p className="control-access-label">Department</p>
              <p className="transparent">:</p>
              <select className="control-access-input">
                <option value="electrical">Electrical</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div className="control-access-input-container">
              <p className="control-access-label">Role</p>
              <p className="transparent">:</p>
              <select className="control-access-input">
                <option value="Admin">Admin</option>
                <option value="Owner">Owner</option>
              </select>
            </div>
            <div className="line-access"></div>
            <p className="access-select-product-heading transparent">
              Select Products -
            </p>
            <p className="access-select-product-heading transparent">
              Category
            </p>
            <select className="control-access-category-input">
              <option value="Fashion Accessories & Footwear">
                Fashion Accessories & Footwear
              </option>
              <option value="Shirts">Shirts</option>
            </select>
            <div className="control-access-products-container">
              <div className="control-access-products">
                <div
                  className="control-access-product-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <p className="control-access-product-name">
                  Stainless Steel Box
                </p>
                <p className="control-access-product-company">
                  By Anish Industries
                </p>
                <p className="control-access-product-price">
                  Price : Rs 72 / Piece
                </p>
              </div>
              <div className="control-access-products">
                <div
                  className="control-access-product-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <p className="control-access-product-name">
                  Stainless Steel Box
                </p>
                <p className="control-access-product-company">
                  By Anish Industries
                </p>
                <p className="control-access-product-price">
                  Price : Rs 72 / Piece
                </p>
              </div>
              <div className="control-access-products">
                <div
                  className="control-access-product-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <p className="control-access-product-name">
                  Stainless Steel Box
                </p>
                <p className="control-access-product-company">
                  By Anish Industries
                </p>
                <p className="control-access-product-price">
                  Price : Rs 72 / Piece
                </p>
              </div>
              <div className="control-access-products">
                <div
                  className="control-access-product-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <p className="control-access-product-name">
                  Stainless Steel Box
                </p>
                <p className="control-access-product-company">
                  By Anish Industries
                </p>
                <p className="control-access-product-price">
                  Price : Rs 72 / Piece
                </p>
              </div>
            </div>
            <p
              className="access-select-product-heading transparent"
              style={{ marginTop: "30px" }}
            >
              Features -
            </p>
            <div className="control-access-feature-container">
              <div
                className="control-access-select-all-container"
                style={{ marginBottom: "10px" }}
              >
                <div className="control-access-select-all-container-name">
                  Name
                </div>
                <div>
                  <div className="control-access-select-all-container-name">
                    Select All
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="control-access-select-all-container">
                <div className="control-access-select-all-container-name">
                  Enquiries
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <hr style={{ marginBottom: "10px" }} />
              <div className="control-access-select-all-container">
                <div className="control-access-select-all-container-name">
                  -----
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <hr style={{ marginBottom: "10px" }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AccessPage;