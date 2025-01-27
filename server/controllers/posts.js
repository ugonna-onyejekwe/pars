import { HttpError } from "../models/error-modal.js";
import Post from "../models/post.js";
import User from "../models/user.js";
import cloudinary from "../utils/cloudinary.js";

export const createPost = async (req, res, next) => {
  try {
    const { userId, description } = req.body;

    if (!userId || !description)
      return next(new HttpError("Fill in all fields", 422));

    const user = await User.findById(userId);

    if (req.file) {
      const image = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
        upload_preset: "pars",
      });

      if (!image) {
        return next(new HttpError("unable to upload image", 500));
      }

      const { public_id, url } = image;

      const newPost = await Post.create({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        description,
        picturePath: {
          public_id,
          url,
        },
        userPicturePath: user.picturePath.url,
        likes: {
          type: Map,
          of: Boolean,
        },
        comments: {
          type: Array,
          default: [],
        },
      });

      if (!newPost) {
        return next(new HttpError("Unknown error occured", 500));
      }

      res.status(201).json(newPost);
    } else {
      const newPost = await Post.create({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        description,
        userPicturePath: user.picturePath.url,
        likes: {
          type: Map,
          of: Boolean,
        },
        comments: {
          type: Array,
          default: [],
        },
      });

      if (!newPost) {
        return next(new HttpError("Unknown error occured", 500));
      }

      res.status(201).json(newPost);
    }
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = Post.find();

    res.status(200).json(posts);
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const getpost = async (req, res) => {
  try {
    const { userId } = req.params;

    const posts = Post.findById(userId);

    res.status(200).json(posts);
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const post = await Post.findById(id);

    if (!post) return next(new HttpError("Post does not exist", 422));

    if (req.file) {
      const image = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
        upload_preset: "pars",
      });

      if (!image)
        return next(new HttpError("An error occured, unable to delete image"));

      await cloudinary.uploader.destroy(post.picturePath.public_id);

      const { public_id, url } = image;

      const editedPost = await Post.findByIdAndUpdate(
        postId,
        {
          description,
          picturePath: { public_id, url },
        },
        { new: true }
      );

      if (!editPost) return next(new HttpError("unknown error occured"));
      res.send(200).send(editedPost);
    } else {
      const editedPost = await Post.findByIdAndUpdate(
        postId,
        {
          description,
        },
        { new: true }
      );

      if (!editPost) return next(new HttpError("unknown error occured"));
      res.send(200).send(editedPost);
    }
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const comment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;

    const user = await User.findById(userId);
    const post = await Post.findById(id);

    if (!post) return next(new HttpError("Post does not exist"));
    if (!user) return next(new HttpError("User does not exist"));

    const postComments = post.comments;

    const newComment = {
      username: `${user.firstName} ${user.lastName}`,
      comment,
      userId,
    };

    postComments.push(newComment);

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { comments: postComments },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = Post.findById(id);
    const creatorId = post.userId;

    if (userId !== creatorId)
      return new HttpError("Unauthorized, U can't delete this post");

    const deletedPost = Post.findByIdAndDelete(id);

    if (!deletedPost) return new HttpError("Unable to delete post", 422);

    res.send(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    new HttpError(error.message, 500);
  }
};
