import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signuprequest } from "../service/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signuprequest } from "./store/action";
import { useAuthStore } from "./store/useAuthStore";

const Signup = () => {
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setAdminDetails({ ...adminDetails, [name]: value });
  };

  const goto = useNavigate();

  const { authtoken } = useAuthStore();

  useEffect(() => {
    if (authtoken) {
      goto("/home");
    }
  }, [goto, authtoken]);

  const signup = () => {
    const { email, password, username } = adminDetails;
    if (!email || !password || !username) {
      toast.error("Please fill the all details");
    } else {
      signuprequest({ data: adminDetails })
        .then((res) => {
          toast.success("Signup Successfully");
          goto("/signin");
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.data?.data || "Error Occured");
        });
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Sign Up
        </h1>
        <div className="mt-6">
          <div className="mb-2">
            <label
              // for="username"
              className="block text-sm font-semibold text-gray-800"
            >
              username
            </label>
            <input
              type="text"
              name="username"
              value={adminDetails.username}
              onChange={onChangeHandler}
              className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              // for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={adminDetails.email}
              onChange={onChangeHandler}
              className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              // for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={adminDetails.password}
              onChange={onChangeHandler}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={signup}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-purplbluee-500 focus:outline-none focus:bg-purple-600"
            >
              signup
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to={`/signin`}
            className="font-medium text-blue-500 hover:underline"
          >
            Signin
          </Link>
        </p>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Back to home{" "}
          <Link
            to={`/home`}
            className="font-medium text-blue-500 hover:underline"
          >
            Home
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
