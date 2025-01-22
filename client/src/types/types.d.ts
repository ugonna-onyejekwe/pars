type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  picturePath: string;
  location: string;
  occupation: string;
  viewedprofile: number;
  impressions: number;
  friends: string[];
  posts: number;
  socialHandles: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
};

type Post = {
  userId: string;
  firstName: string;
  last: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: any;
  comments: Comments;
};

type Comments = {
  name: string;
  picturePath: string;
  comment: string;
}[];
