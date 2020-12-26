import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/User.controllers.js";
import { protect } from "../middlewares/Auth.milddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/").post(registerUser);
export default router;
