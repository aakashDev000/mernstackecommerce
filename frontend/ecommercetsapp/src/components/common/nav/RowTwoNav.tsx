import { Suspense, useState } from "react";
import LoadingDialog from "../LoadingDialog";
import logo from "../../imgutils/logo.jpg";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Cart from "../../home/cart/Cart";
import { useEcommerceStore } from "../../store/useEcommerceStore";
import { useAuthStore } from "../../authentication/store/useAuthStore";
import { signoutrequest } from "../../authentication/store/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RowTwoNav = () => {
  const goto = useNavigate();

  const { authtoken } = useAuthStore();

  const { cartItemList } = useEcommerceStore();

  const [cartState, setCartState] = useState(false);

  const cartOpen = () => {
    setCartState(true);
  };

  const cartClose = () => {
    setCartState(false);
  };

  const signOut = () => {
    signoutrequest()
      .then(() => {
        goto("/signin");
      })
      .catch((err) =>
        console.log((err: any) => {
          console.log("err", err);
        })
      );
  };

  const accountDetails = () => {
    if (authtoken) {
      goto("/account");
    } else {
      toast.error("Please Signin first");
    }
  };
  return (
    <Suspense fallback={<LoadingDialog />}>
      {/* Cart */}
      {cartState && <Cart cartClose={cartClose} />}
      <div className="mt-5 pt-3 pl-20 flex">
        <div
          className="pl-12 mt-1 cursor-pointer"
          onClick={() => goto("/home")}
        >
          <img src={logo} alt="Logo" className="w-9" />
        </div>
        <div
          className="items-center cursor-pointer flex text-slate-600 pl-1 font-bold"
          onClick={() => goto("/home")}
        >
          LILACCART
        </div>
        <div className="pl-20 flex items-center cursor-pointer">
          {/* <Catageory /> */}
          <select
            id="countries"
            className="bg-gray-100 text-gray-900 h-12 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Classifields</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="pl-6 flex items-center ">
          <SearchBar />
        </div>

        {/* Heart */}
        <div className="pl-36 items-center flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-6 hover:text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>

        {/* Cart */}
        <div
          className="pl-9 items-center flex cursor-pointer"
          onClick={cartOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="text-sm bg-blue-600 text-white rounded-full mb-3 mr-3 pr-2 pl-2 flex relative">
            <div>{cartItemList && cartItemList.length}</div>
          </div>
        </div>

        {/* User */}
        <div
          className="pl-8 items-center flex cursor-pointer "
          onClick={accountDetails}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="pl-20 items-center flex">
          {!authtoken ? (
            <button
              type="button"
              onClick={() => goto("/signin")}
              className="text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
            >
              Sign In
            </button>
          ) : (
            <button
              type="button"
              onClick={() => signOut()}
              className="text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </Suspense>
  );
};

export default RowTwoNav;
