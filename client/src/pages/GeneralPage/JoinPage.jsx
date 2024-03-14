import React from "react";
import bcimage from "../../assets/OBJECTS.png";
import { Link } from "react-router-dom";
function JoinPage() {
  return (
    <>
      <div className="w-[1000px] h-[200px] mx-40 text-center mt-40">
        <Link to="/">
        <h1 className="text-blue-800 text-5xl  font-bold font-serif font-lora">
          Prolio
        </h1>
        </Link>
        <div className="pt-5">
          <p className="font-semibold text-3xl font-serif">
            Discover a world of products at your fingertips, all in one place
          </p>
          <p className="pt-6 px-7 font-semibold text-gray-600">
            Welcome to our one-stop shop for all your product needs. Our website
            is your virtual bank of products, offering a vast and diverse range
            of items to explore and choose from. Whether you're searching for
            the latest gadgets, fashion trends, home essentials, or anything in
            between, you'll find it here
          </p>
          <div className="pt-10 flex justify-center gap-20">
            <Link to="/signup">
            <button className="w-44 h-10 rounded-md text-white  text-sm bg-blue-900">
              Join Prolio As Buyer
            </button>
            
            </Link>
            <Link to="/signup">
            <button className="w-44 h-10 rounded-lg  text-white ml-9 text-sm bg-blue-900">
              Join Prolio As Seller
            </button>
            </Link>
          </div>
        </div>
        <div
          className=" w-[550px] h-[300px] mx-20 mt-16 bg-transparent  "
          style={{
            backgroundImage: `url(${bcimage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
          }}
        ></div>
      </div>
    </>
  );
}

export default JoinPage;
