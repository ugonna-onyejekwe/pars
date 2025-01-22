import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  likePost,
  getpost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getpost);
router.post("/", createPost);
router.patch("/:id", editPost);
router.patch("/like/:id", likePost);
router.delete("/:id", deletePost);

export default router;
