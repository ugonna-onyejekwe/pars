import { HttpError } from "../models/error-modal.js";
import Post from "../models/post.js";

export const createPost = async (req, res) => {
  try {
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

export const editPost = async (req, res) => {
  try {
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
