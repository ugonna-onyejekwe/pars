import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { Button } from "./ui/button";
import { LuPaperclip } from "react-icons/lu";
import { AiFillAudio } from "react-icons/ai";
import { IoIosVideocam } from "react-icons/io";
import PostModal from "./PostModal";

const CreatePostCon = ({ user }: { user: User }) => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-md p-4">
        <div className="flex items-center gap-3 pb-3 ">
          <img
            src={user.picturePath}
            alt="image"
            className="size-[40px] rounded-full"
          />

          <div
            className="bg-gray-100 rounded-full flex-1 px-5 py-3"
            onClick={() => setShowPostModal(true)}
          >
            <span className="text-gray-500 text-[13px]">
              What's on your mind?{" "}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-2 text-gray-500 text-[12px]">
            <span className="text-[15px]">
              <FaRegImage />
            </span>
            Image
          </div>

          <div className="flex  items-center gap-2 text-gray-500 text-[12px]">
            <span className="text-[15px]">
              <IoIosVideocam />
            </span>
            Clip
          </div>

          <div className="flex max-sm:hidden items-center gap-2 text-gray-500 text-[12px]">
            <span className="text-[15px]">
              <LuPaperclip />
            </span>
            Attachment
          </div>

          <div className="flex max-sm:hidden items-center gap-2 text-gray-500 text-[12px]">
            <span className="text-[15px]">
              <AiFillAudio />
            </span>
            Audio
          </div>

          <Button onClick={() => setShowPostModal(true)} className="h-9 px-6">
            Create
          </Button>
        </div>
      </div>

      {showPostModal && (
        <PostModal isOpen={showPostModal} setIsOpen={setShowPostModal} />
      )}
    </>
  );
};

export default CreatePostCon;
