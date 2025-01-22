import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";

const UserCon = ({ user }: { user: User }) => {
  return (
    <div className="w-[330px] sticky top-[100px] h-fit bg-white rounded-md p-4 block max-md:hidden">
      <div className="flex items-center justify-between border-b pb-4">
        {/* profile image */}
        <div className="flex items-center gap-3">
          <img
            src={user.picturePath}
            alt="user image"
            className="size-[50px] rounded-full"
          />

          <div>
            <Link
              to={`user/${user.id}`}
              className="font-bold capitalize text-[15px] hover:text-primary-600"
            >
              {user.firstName} {user.lastName}
            </Link>
            <p className="txt !text-[13px]">
              {user.posts > 1 ? `${user.posts} posts` : `${user.posts} post`}
            </p>
          </div>
        </div>

        {/* settings icons */}
        <Link
          to={`user/${user.id}`}
          className="bg-gray-200 size-[35px] flex items-center justify-center rounded-full cursor-pointer group "
        >
          <MdOutlineManageAccounts className="text-[18px] text-gray-700  group-hover:text-gray-800" />
        </Link>
      </div>

      <div className="border-b py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-[20px]">
            <IoLocationOutline />
          </span>

          <p className="txt">{user.location}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-[20px]">
            <GoBriefcase />
          </span>

          <p className="txt">{user.occupation}</p>
        </div>
      </div>

      <div className="border-b py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 text-gray-600">
          <span className="txt !text-[14px]">Who viewed your profile</span>

          <p className="txt !text-[14px] font-semibold">{user.viewedprofile}</p>
        </div>

        <div className="flex items-center justify-between gap-2 text-gray-600">
          <span className="txt !text-[14px] ">Post impression</span>

          <p className="txt !text-[14px] font-semibold">{user.impressions}</p>
        </div>
      </div>

      <div className=" pt-3 flex flex-col gap-4">
        <h3 className="font-medium text-[15px]">Social profiles</h3>

        <div className="flex items-center gap-8">
          <Link
            to={"/"}
            className="text-gray-600 hover:text-primary-600 text-[20px]"
          >
            <FaLinkedin />
          </Link>

          <Link
            to={"/"}
            className="text-gray-600 hover:text-primary-600 text-[20px]"
          >
            <FaXTwitter />
          </Link>

          <Link
            to={"/"}
            className="text-gray-600 hover:text-primary-600 text-[20px]"
          >
            <AiFillTikTok />
          </Link>

          <Link
            to={"/"}
            className="text-gray-600 hover:text-primary-600 text-[20px]"
          >
            <FaFacebookSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCon;
