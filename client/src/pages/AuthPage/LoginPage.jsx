import React, { useState } from "react";
import AuthPage from "../../components/Re-use/AuthPage";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { userLoginValidationSchema } from "../../util/validation";
import { setToken } from "../../store/tokenSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginValidationSchema),
  });

  const apiURL = process.env.REACT_APP_API_URL;

  const submitHandler = async (formData) => {
    if (formData) {
      axios
        .post(`${apiURL}/auth/login`, formData)
        .then((res) => {
          // console.log(res.data);

         dispatch(setToken(res.data));

          if (res.data.role === "user") {
            navigate("/");
          } else {
            navigate("/admin");
          }
        })
        .catch((err) => {
          toast.error("Invalid Credentials");
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full h-full  flex  bg-transparent">
      <AuthPage />
      <div className="w-1/2  h-full flex flex-col p-14 ml-12">
        <h1 className="pt-10 text-xl font-bold">
          Sign in to Access your account
        </h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="w-96  items-center">
            <div className=" pt-3">
              <label className="text-sm font-semibold  ">Email Address</label>
              <input
                type="text"
                placeholder="Enter your email address"
                {...register("email")}
                className=" w-full h-10 bg-white text-sm rounded shadow-lg px-3 mt-2 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className=" pt-3">
              <label className="text-sm font-semibold ">Password</label>
              <input
                type="text"
                placeholder="Enter  password"
                {...register("password")}
                className=" w-full h-10 bg-white text-sm rounded shadow-lg px-3 mt-2 focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="pt-4">
              <button className=" w-full h-10 rounded text-sm transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-xl text-white ">
                Sign In Now
              </button>
            </div>
            <div className="mt-3 flex items-center">
              <hr className="border-gray-400 flex-grow" />
              <span className="text-center text-gray-400 mx-2">Or</span>
              <hr className="border-gray-400 flex-grow" />
            </div>
            <div className="pt-4">
              <button className="flex items-center justify-center text-sm w-full h-10 rounded bg-white hover:bg-slate-400 shadow-xl text-indigo-600 hover:text-black">
                Sign In Using Google
                <span className="ml-2">
                  <FcGoogle />
                </span>
              </button>
            </div>
            <p className="pt-4 text-gray-500">
              Already have an account ?
              <Link
                className="underline text-blue-600 hover:text-blue-800 font-semibold px-2"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
