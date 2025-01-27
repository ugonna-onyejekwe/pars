import express from "express";
import { login, registerUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signUp", registerUser);

export default router;
