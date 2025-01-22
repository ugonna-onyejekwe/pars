import { HttpError } from "../models/error-modal";
import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) return new HttpError("User does not exist", 422);

    res.status(200).json(user);
  } catch (error) {
    new HttpError(error.message, 500);
  }
};

export const editUser = async (req, res) => {
  try {
    const { occupation, location, firstName, lastName, picturePath } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) return new HttpError("User does not exist", 422);

    if (occupation) {
      user.occupation = occupation;
    }
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }

    if (location) {
      user.location = location;
    }
    if (picturePath) {
      user.picturePath = picturePath;
    }

    await user.save();

    res.status(200).json({ message: "Changes saved successfully" });
  } catch (error) {
    new HttpError(error.message, 500);
  }
};
