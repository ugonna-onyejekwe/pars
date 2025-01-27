import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  likePost,
  getpost,
  comment,
} from "../controllers/posts.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

router.get("/", authMiddleware, getAllPosts);
router.get("/:id", authMiddleware, getpost);
router.post("/", authMiddleware, upload.single("thumbnail"), createPost);
router.patch("/:id", authMiddleware, upload.single("thumbnail"), editPost);
router.patch("/comment/:id", authMiddleware, comment);
router.patch("/like/:id", authMiddleware, likePost);
router.delete("/:id", authMiddleware, deletePost);

export default router;
