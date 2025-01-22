import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications, IoMdHelpCircle } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-10 max-md:gap-5 flex-1">
          <Link
            to={"/home"}
            className="font-extrabold text-primary-600 uppercase text-[15px]"
          >
            Pars
          </Link>

          <div className="bg-gray-100  px-5 py-3 rounded-md w-[300px] max-md:w-full max-md:flex-1 flex items-center gap-2">
            <FiSearch className="text-[20px] text-gray-400" />
            <span className="text-[13px] text-gray-400">Search...</span>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-10 max-md:hidden">
            <span className="text-[23px] cursor-pointer text-gray-700 hover:text-gray-900">
              <MdOutlineMessage />
            </span>
            <span className="text-[23px] cursor-pointer text-gray-700 hover:text-gray-900">
              <IoIosNotifications />
            </span>
            <span className="text-[23px] cursor-pointer text-gray-700 hover:text-gray-900">
              <IoMdHelpCircle />
            </span>
          </div>

          <div className="border-2 border-primary-600 rounded-full size-fit ">
            <img src="/profile.jpg" className="size-[40px] rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
