import express from "express";
import { healthCheck } from "../controllers/healthCheckController.js";

const router = express.Router();

router.route("/healthCheck").get(healthCheck);

export default router;
