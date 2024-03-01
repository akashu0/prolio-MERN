import React from "react";
import AuthPage from "../../components/Re-use/AuthPage";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { userRegisterValidationSchema } from "../../util/validation";

function SignupPage() {
  const navigate = useNavigate();

  const apiURL = "http://localhost:5000/api";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterValidationSchema),
  });

  const submitHandler = async (formData) => {
    if (formData) {
      axios
        .post(`${apiURL}/auth/register`, formData)
        .then((res) => {
          console.log(res);
          toast.success("Sign Up Success");
          setTimeout(() => {
            navigate("/admin/login");
          }, 2000);
        })
        .catch((err) => {
          toast.error("Invalid Credentials");
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full h-full  flex  bg-blue-50">
      <AuthPage />
      <div className="w-1/2  h-full flex flex-col p-14 ml-12">
        <h1 className="pt-10 font-bold">
          Sign up and Discover a Great amount of new <br /> Opportunities
        </h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="w-96  items-center">
            <div className="mt-6 flex">
              <div className="flex flex-col mb-2  mr-5 w-1/2">
                <label className="text-sm font-semibold ">first Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstname")}
                  className=" w-full h-10 bg-white text-sm rounded bg-transparent shadow-xl px-3 mt-2 focus:outline-none"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="flex  flex-col w-1/2 ">
                <label className="text-sm font-semibold ">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  {...register("lastname")}
                  className="w-full h-10 bg-white text-sm rounded shadow-lg px-3 mt-2 focus:outline-none"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>
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
              <label className="text-sm font-semibold   ">
                Create Password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                {...register("password")}
                className=" w-full h-10 bg-white text-sm rounded shadow-lg px-3 mt-2 focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className=" pt-4">
              <label className="text-sm font-semibold">Confirm Password</label>
              <input
                type="text"
                placeholder="Re-enter your password"
                {...register("confirmPassword")}
                className=" w-full h-10 bg-white text-sm rounded shadow-lg px-3 mt-2 focus:outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="pt-4">
              <button className=" w-full h-10 rounded text-sm bg-blue-900 hover:bg-white shadow-xl text-white hover:text-black">
                Sign Up Now
              </button>
            </div>
            <div className="mt-3 flex items-center">
              <hr className="border-gray-400 flex-grow" />
              <span className="text-center text-gray-400 mx-2">Or</span>
              <hr className="border-gray-400 flex-grow" />
            </div>
            <div className="pt-4">
              <button className="flex items-center justify-center text-sm w-full h-10 rounded bg-white hover:bg-slate-400 shadow-xl text-indigo-600 hover:text-black">
                Sign Up Using Google
                <span className="ml-2">
                  <FcGoogle />
                </span>
              </button>
            </div>
            <p className="pt-4 text-gray-500">
              Already have an account ?
              <Link
                className="underline text-blue-600 hover:text-blue-800 font-semibold px-2"
                to="/admin/login"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;
