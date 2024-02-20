import React from "react";
import bcimage from "../../assets/OBJECTS.png";

function AuthPage() {
  return (
    <div className="w-1/2 h-full  ">
      <div className="py-12 px-32 ">
        <h1 className="text-blue-800 text-5xl font-bold font-serif font-lora ">
          Prolio
        </h1>
        <div className="pt-5">
          <span className="font-bold text-2xl font-serif ">
            Discover a world of <br /> products at your fingertips, <br />
            all in one place
          </span>
          <p className="pt-4 text-gray-600">
            Welcome to our one-stop shop for all your product needs. Our website
            is your virtual bank of products, offering a vast and diverse range
            of items to explore and choose from. Whether you're searching for
            the latest gadgets, fashion trends, home essentials, or anything in
            between, you'll find it here
          </p>
        </div>
      </div>
      <div className=" ml-16 ">
        <img
          className="items-center h-full  "
          src={bcimage}
          alt="background image"
        />
      </div>
    </div>
  );
}

export default AuthPage;
