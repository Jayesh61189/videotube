import express from "express";
import {
  signinController,
  signupController,
} from "../controllers/user.controller.js";
const router = express.Router();

router.route("/signup").post(signupController);
router.route("/signin").post(signinController);

export default router;
