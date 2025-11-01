import express from "express";
import userRouter from "./user.route.js";
import healthRouter from "./healthCheck.route.js";

const router = express.Router();

router.use("/auth", userRouter);
router.use("/check", healthRouter);

export default router;
