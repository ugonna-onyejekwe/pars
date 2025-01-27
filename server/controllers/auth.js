import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { HttpError } from "../models/error-modal.js";

// REGISTER USER
export const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      friends,
      location,
      occupation,
    } = req.body;

    if (!firstName || !lastName || !email || !password)
      return next(new HttpError("Pls fill in all fields", 422));

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    if (email.includes("@") === false)
      return next(new HttpError("Invalid email", 422));

    const validEmail = email.toLowerCase();

    const emailInUse = await User.findOne({ email: validEmail });

    console.log(emailInUse);

    if (emailInUse) return next(new HttpError("Email already used", 422));

    const newUser = new User({
      firstName,
      lastName,
      email: validEmail,
      password: passwordHash,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 1000),
    });

    if (!newUser)
      return next(new HttpError("Error occured while creating account", 422));

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    res.status(201).json({ token, ...savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(new HttpError("Pls, fill in all fields", 422));

    if (email.includes("@") === false)
      return next(new HttpError("Invalid email", 422));

    const validEmail = email.toLowerCase();

    const user = await User.findOne({ email: validEmail });

    if (!user) return next(new HttpError("User does not exist", 400));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
