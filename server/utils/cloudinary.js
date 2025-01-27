import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueId = uuidv4();
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueId}${ext}`);
  },
});

export const upload = multer({
  storage: storage,
});
