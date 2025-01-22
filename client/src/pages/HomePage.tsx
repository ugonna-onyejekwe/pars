import CreatePostCon from "@/components/CreatePostCon";
import PostCon from "@/components/PostCon";
import UserCon from "@/components/userCon";

const HomePage = () => {
  const user = {
    id: "123344",
    firstName: "williams ",
    lastName: "john",
    email: "williamsJohn@gmail.com",
    picturePath: "/profile.jpg",
    location: "Lagos, Nigeria",
    occupation: "Tailor",
    viewedprofile: 2000,
    impressions: 1000,
    friends: ["uue", "e", "e", "e"],
    posts: 10,
    socialHandles: {
      twitter: "@jejek",
      instagram: "@jejek",
      linkedin: "@jejek",
    },
  };

  const posts = [
    {
      userId: "1273",
      firstName: "ugonna",
      last: "innocent",
      location: "Lagos, Nigeria",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
      picturePath: "/post1.jpg",
      userPicturePath: "/profile.jpg",
      likes: {
        user123: true,
        user456: false,
        user789: true,
      },
      comments: [
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
      ],
    },
    {
      userId: "1273",
      firstName: "ugonna",
      last: "innocent",
      location: "Lagos, Nigeria",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
      picturePath: "/post1.jpg",
      userPicturePath: "/profile.jpg",
      likes: {
        user123: true,
        user456: false,
        user789: true,
      },
      comments: [
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
      ],
    },
    {
      userId: "1273",
      firstName: "ugonna",
      last: "innocent",
      location: "Lagos, Nigeria",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
      picturePath: "/post1.jpg",
      userPicturePath: "/profile.jpg",
      likes: {
        user123: true,
        user456: false,
        user789: true,
      },
      comments: [
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
      ],
    },
    {
      userId: "1273",
      firstName: "ugonna",
      last: "innocent",
      location: "Lagos, Nigeria",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
      picturePath: "/post1.jpg",
      userPicturePath: "/profile.jpg",
      likes: {
        user123: true,
        user456: false,
        user789: true,
      },
      comments: [
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
        {
          name: "ugonna",
          picturePath: "/profile.jpg",
          comment:
            "adipisicing elit. Iure quam qui perspiciatis laborum voluptas, odit quibusdam aperiam excepturi aut totam mollitia rem hic eius soluta vitae aliquid ratione ex. Earum!",
        },
      ],
    },
  ];

  return (
    <div className="container flex gap-5 pb-5">
      {/* col1 */}
      <UserCon user={user} />

      {/* col2 */}
      <div className="flex-1 flex flex-col gap-4">
        <CreatePostCon user={user} />

        {/* post */}

        {posts.map((post, key) => (
          <PostCon key={key} post={post} />
        ))}
      </div>

      {/* col3 */}
      <div className="flex flex-col gap-4 w-[330px] max-[1400px]:hidden sticky top-[100px] ">
        <div className="bg-white p-4 rounded-md h-fit  ">
          <h3 className="flex justify-between font-semibold text-[15px] ">
            Sponsored{" "}
            <span className="text-[14px] font-normal text-gray-600 cursor-pointer hover:text-primary-600">
              Create Ad
            </span>
          </h3>

          <img
            src="/public/adImage.jpg"
            alt="ad image"
            className="w-full h-[250px] rounded-md my-2"
          />

          <div>
            <h4 className="font-semibold text-gray-700 flex items-center justify-between">
              Nike shoe
              <span className="text-[14px] font-light underline text-gray-500">
                nikeshoes.com
              </span>
            </h4>

            <p className="text-gray-500 text-[14px] pt-[2px] leading-[20px] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti numquam soluta,
            </p>
          </div>
        </div>

        <div className="bg-white rounded-md p-4">
          <h1 className="font-bold">friends</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
