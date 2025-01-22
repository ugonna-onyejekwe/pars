import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt, MdOutlinePersonAdd } from "react-icons/md";
import CommentsContainer from "./CommentsContainer";
import { Link } from "react-router-dom";

const PostCon = ({ post }: { post: Post }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.userPicturePath}
              alt="user image"
              className="size-[40px] rounded-full "
            />

            <div>
              <Link
                to={`/user/${post.userId}`}
                className="font-semibold text-[14px] capitalize hover:text-primary-600"
              >
                {post.firstName} {post.last}
              </Link>
              <p className="font-normal text-gray-500 text-[13px]">1 day ago</p>
            </div>
          </div>

          <span className=" size-[30px] bg-gray-200 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center cursor-pointer  ">
            <MdOutlinePersonAdd className="text-[16px]" />
          </span>
        </div>

        <p className="txt py-2" onClick={() => setShowFullDesc(!showFullDesc)}>
          {showFullDesc
            ? post.description
            : post.description.length > 100
            ? post.description.slice(0, 100) + " ...see more"
            : post.description}
        </p>

        <img
          src={post.userPicturePath}
          alt="post image"
          className="w-full h-fit rounded-md mt-1"
        />

        <div className="flex items-center gap-5  rounded-md mt-4 px-4">
          <p
            onClick={() => setIsLiked(true)}
            className="cursor-pointer w-fit flex items-center gap-1 text-gray-500"
          >
            <span className="text-[20px]">
              {!isLiked ? (
                <FaRegHeart className="text-gray-900" />
              ) : (
                <FaHeart className="text-primary-600" />
              )}
            </span>

            <span className="text-[14px]">{12}</span>
          </p>

          <p
            onClick={() => setShowComments(true)}
            className="cursor-pointer w-fit flex items-center gap-1 text-gray-500 hover:text-gray-900"
          >
            <span className="text-[20px]">
              <MdOutlineMarkUnreadChatAlt />
            </span>

            <span className="text-[14px]">{12}</span>
          </p>
        </div>
      </div>

      {showComments && (
        <CommentsContainer
          isOpen={showComments}
          setIsOpen={setShowComments}
          comments={post.comments}
        />
      )}
    </>
  );
};

export default PostCon;
