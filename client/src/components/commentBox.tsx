import { useState } from "react";

const CommentBox = ({
  name,
  picturePath,
  comment,
}: {
  name: string;
  picturePath: string;
  comment: string;
}) => {
  const [showFullComment, setShowFullComment] = useState(false);

  return (
    <div className="bg-white p-3 rounded-md w-full ">
      <div className="flex items-center gap-2">
        <img
          src={picturePath}
          alt="user image"
          className="size-[45px] rounded-full "
        />

        <div>
          <h4 className="font-semibold text-[15px] capitalize">{name}</h4>
          <p className="text-[12px] text-gray-500">1 day ago</p>
        </div>
      </div>

      <p className="txt" onClick={() => setShowFullComment(!showFullComment)}>
        {showFullComment
          ? comment
          : comment.length > 100
          ? comment.slice(0, 100) + "...see more"
          : comment}
      </p>
    </div>
  );
};

export default CommentBox;
