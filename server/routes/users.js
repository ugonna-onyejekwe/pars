import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { editUser, getUser, getAllUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
app.patch("/:id", authMiddleware, editUser);

export default router;
