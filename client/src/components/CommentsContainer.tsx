import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import CommentBox from "./commentBox";

type CommentsContainerProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  comments: Comments;
};

const CommentsContainer = ({
  isOpen,
  setIsOpen,
  comments,
}: CommentsContainerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="min-h-[70vh] bg-gray-100 overflow-y-scroll  ">
        <div className="mx-auto w-full max-w-[600px]  ">
          <DrawerHeader>
            <DrawerTitle>Post comments</DrawerTitle>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-4">
            {comments.map((comment, key) => (
              <CommentBox key={key} {...comment} />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CommentsContainer;
